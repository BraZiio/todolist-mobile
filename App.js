import React, {useState} from 'react';
import { Button, StyleSheet, FlatList, Text, TouchableOpacity, TextInput, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { v4 as uuid } from 'uuid';
import { ListItem } from 'react-native-elements';

export default function App() {
  const [task, setTask] = useState("")

  const [tasks,setTasks]= useState([
    {id: uuid(), title: "Faire les courses"},
    {id: uuid(), title: "Payer"},
  ])

  function changeTask(text) {
    setTask(text);
  }

  function addTask() {
    const newTasks = [...tasks];
    newTasks.unshift({
      id:uuid(),
      title: task,
    })
    setTasks(newTasks);
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

/* 
    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <TextInput style={styles.input} value={task.title} onChangeText={(text) => changeTask(text)}/>
          <Button style={styles.button} title=">" onPress={addTask}/>
        </View>

        <View style={styles.list}>
          <FlatList
            data={tasks}
            renderItem={({item}) => 
            <View style={styles.tasks}>

              <Text style={styles.title}>{item.title}</Text>  

              <TouchableOpacity>
                <AntDesign name="delete" size={24} color="black" onPress={() => {deleteTask(item.id)}}/>
              </TouchableOpacity>

            </View>}
            keyExtractor={item => item.id.toString()}
          />
        </View>
      </View>
    );
  } */
  renderItem = ({ item }) => (

    <ListItem title={
        <View style={styles.tasks}>
        
          <Text style={styles.title}>{item.title}</Text>  

          <TouchableOpacity>
            <AntDesign name="delete" size={24} color="black" onPress={() => {deleteTask(item.id)}}/>
          </TouchableOpacity>
        </View>}
      bottomDivider
      chevron
    />
  );

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TextInput style={styles.input} value={task.title} onChangeText={(text) => changeTask(text)}/>
        <Button style={styles.button} title=">" onPress={addTask}/>
      </View>
      <View>
        <FlatList
        data={tasks}
        renderItem={renderItem}
        />
      </View>
    </View>
  ) 
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    height: 30,
    width: 250,
    marginRight: "auto",
    marginLeft: "auto",
  },
  header: {
    flexDirection: "row",
    margin: 30,
  },
  title: {
    fontSize: 25,
    margin: 10,
    color: "#333333",
  },
  tasks: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  list: {
    borderColor: "#333333",
    borderWidth: 1,
    padding: 25,
  }
});
