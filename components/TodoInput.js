import { useState } from 'react';
import {StyleSheet, View, TextInput, Button, Modal, Image} from 'react-native'

function TodoInput (props) {
    const [enteredTodoText, setEnteredTodoText] = useState('');
    function todoInputHandler(enteredText) {
        setEnteredTodoText(enteredText);
      }
    function todoHandler (){
        props.onAddTodoItem(enteredTodoText);
        setEnteredTodoText('')
        props.onEndAddTodoItem();
    }
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image source={require('../assets/images/todo.png')} style={styles.image} />
                <TextInput style={styles.textInput} placeholder='Your New TODO'
                onChangeText={todoInputHandler}
                value={enteredTodoText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Add TODO' onPress={todoHandler} color="#b180f0"/>
                    </View>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={props.onEndAddTodoItem} color="#f31282"/>
                    </View>
                </View>
            </View>
        </Modal>
    )
}



export default TodoInput;

const styles = StyleSheet.create({
    inputContainer:{
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b'
    
      },
      image: {
        width: 120,
        height: 110,
        margin: 10
      },
      textInput:{
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6,
        width: '100%',
        padding: 16
      },
      buttonContainer:{
        flexDirection: 'row',
        marginTop: 16
      },
      button:{
        width: 100,
        marginHorizontal: 8
      }
})