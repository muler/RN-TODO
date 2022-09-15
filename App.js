import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, 
FlatList
} from 'react-native';
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem'

export default function App() {
  const[modalIsVisible, setModalIsVisible] = useState(false);
  const [todoItems, setTodoItems] = useState([])

  function startAddingTodos () {
    setModalIsVisible(true);
  }
  function endAddTodoHandler () {
    setModalIsVisible(false);
  }
  //Building the list of TODO
  function addTodoHandler(enteredTodo) {
    setTodoItems(currrentTodos => [...currrentTodos, {text: enteredTodo, id: Math.random().toString(), checked: false}])
  }
  //Removing TODO
  function deletTodoHandler(id) {
    setTodoItems(currrentTodos => {
      return currrentTodos.filter(goal => goal.id !== id)
    })
  }
  //strike or unstrike todo item
  function toggleTodoHandler (id){
    setTodoItems(todoItems.map(todo => todo.id === id ? {...todo, checked: !todo.checked} : todo))
  }
  return (
    <>
    <StatusBar style='light'/>
    <View style={styles.appContainer}>
      <Button title='Add New TODO' color="#5e0acc" onPress={startAddingTodos}/>
      <TodoInput onAddTodoItem={addTodoHandler} onEndAddTodoItem={endAddTodoHandler} visible={modalIsVisible}/>
      <View style={styles.todoContainer}>
        <FlatList data={todoItems}
         renderItem={(itemData) => {
          return (
            <TodoItem text={itemData.item.text} id={itemData.item.id} checked={itemData.item.checked} onDeleteItem={deletTodoHandler} onToggleItem={toggleTodoHandler}/>
          )
         }}
         keyExtractor={(text, id) => id}
         alwaysBounceHorizontal={false}
        />
      </View>
      
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#311b6b'
  },
  todoContainer:{
    flex: 5
  },

});
