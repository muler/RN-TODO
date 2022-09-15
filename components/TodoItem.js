import{StyleSheet, View, Text, Pressable, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';

function TodoItem(props) {
        return (
                <View style={styles.goalItemContainer}>
                  <Pressable onPress={props.onToggleItem.bind(this, props.id)}>
                    {props.checked ? 
                    <View>
                      <Icon name="checkbox-active" size={30} color="#3143e8" />
                    </View> :
                    <View>
                    <Icon name="checkbox-passive" size={30} color="#3143e8" />
                    </View>
                    }
                  </Pressable>
                  <View style={styles.todoItem}>
                    <Pressable 
                    onPress={props.onDeleteItem.bind(this, props.id)}
                    style={({pressed}) => pressed && styles.pressedItem}
                    >
                    <Text style={[styles.todoText, , props.checked ? styles.strikeText : styles.unstrikeText]}>{props.text}</Text>
                    </Pressable>
                  </View>
                  <View style={styles.button}>
                      <Button title='Delete' onPress={props.onDeleteItem.bind(this, props.id)} color="#f31282"/>
                  </View>
              </View>               
        )                  
    }
    const styles = StyleSheet.create({
        goalItemContainer:{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          flex:1,
    
        },
        todoItem:{
            margin: 8,
            borderRadius: 6,
            backgroundColor: '#e4deed',   
            flex: 5 
          },
          pressedItem:{
            opacity: 0.5
          },
          todoText:{
            padding: 8,
            color: '#120438',
            width:100,
          },
          button:{
            flex: 2,
          },
          strikeText:{
            color: '#120438',
            textDecorationLine: 'line-through',
          },
          unstrikeText:{
            color: '#29323c',
          }
    });

export default TodoItem;
