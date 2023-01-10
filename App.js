import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Pressable, Button, StatusBar } from 'react-native';
import MovieInput from './components/MovieInput';

export default function App() {

  const [movieList, setMovieList] = useState([])
  const [isVisible, setIsVisible] = useState(false)

  const buttonHandler = (movieText) => {
    setMovieList((currentMovies) => {
      if(movieList.includes(movieText.toUpperCase())) {
       return [...currentMovies]
        
      } else {
       return  [...currentMovies, movieText.toUpperCase()]
      }
    })
  }


  const handleDelete = (movie) => {
      setMovieList(movieList => {
        return movieList.filter(m => m !== movie)
      })
  }


  return (
    <>

      <StatusBar style="light" />
      <View style={styles.appContainer}>

        <Button title='Add a movie' color={"#338c07"} onPress={() => setIsVisible(true)} />
        <Text style={{color:"#f55b67", marginTop: 5}}>Duplicates are not allowed</Text>

          <MovieInput visible={isVisible} disable={() => setIsVisible(!isVisible)} addMovieHandler={buttonHandler} />
        

        <View style={styles.moviesContainer}>
          <FlatList data={movieList} renderItem={(movie) => {
            return (
              <View style={styles.movieCon}>
              <Pressable onPress={() => handleDelete(movie.item)} android_ripple={{color:"#ffffff"}}>
                  <Text key={Math.random() * 1000} style={styles.movie}> {movie.item} </Text>
              </Pressable>
              </View>
            )
          }} />
        </View>
        
      </View>

    </>
  )
}




const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    backgroundColor:  "#dddddd",
    paddingHorizontal: 16,
    height: "100%",
    flex: 1,
    backgroundColor: "#8ef55b",
    justifyContent: "flex-start",
  },

  moviesContainer: {
    marginTop: 15,
    display: "flex",
    flexDirection: "column",
  },

  movieCon: {
    backgroundColor: "green",
    marginTop: 7,
    borderRadius: 7,
    textAlign: "center",
  },  

  movie: {
    padding: 9,
    color: "white",
  }

})
