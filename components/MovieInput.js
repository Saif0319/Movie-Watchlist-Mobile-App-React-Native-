import { StyleSheet, View, TextInput, Button, Modal } from "react-native";
import { useState } from "react";


const MovieInput = ({addMovieHandler, visible, disable}) => {

    const [movieText, setMovieText] = useState("")

    const buttonHandler = () => {
        addMovieHandler(movieText)
        setMovieText("")
    }

    const movieInputHandler = (text) => {
        setMovieText(text)
    }

  return (
    
    <Modal animationType="slide" visible={visible}>
        <View style={styles.inputContainer}>
            <TextInput placeholder='Type the movie u wanna watch' style={styles.textInput} 
            onChangeText={movieInputHandler} value={movieText} />
        </View>

        <View style={styles.buttonCon}>
            <View style={styles.buttons}><Button title='Add Movie' onPress={buttonHandler} /></View>
            <View style={styles.buttons}><Button title="close" color={"red"} onPress={disable} /></View>
        </View>
    </Modal>
  )
}


const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: "space-between",
        flexDirection: "row",
        textAlign: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#282828",
        paddingBottom: 25,
        flex: 1,
        padding: 25,
        backgroundColor: "#55c91a"
    },

    textInput: {
        borderWidth: 1,
        borderColor: "#aafa82",
        width: "100%",
        marginRight: 7,
        padding: 7,
        height: 50,
        borderRadius: 7,
        backgroundColor: "#aafa82"
      },

      buttonCon: {
        flexDirection: "row"
      },

      buttons: {
        width: "50%"
      }
})




export default MovieInput