import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import reactDom from 'react-dom';

export default function App() {

  const [text, setText] = useState('');
  const [data, setData] = useState([]);

  const listAdd = () => {
    setData([...data, { title: text }]);
    setText('');
  }

  const clearList = () => {
    setData([]);
  }

  return (
    <View style={styles.container}>
        <Text>OSTOSLISTASOVELLUS</Text>
        <TextInput style={styles.input} onChangeText={input => setText(input)} value={text}></TextInput>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button onPress={listAdd} title='Lisää listaan'/>
        </View>
        <View style={styles.button}>
          <Button onPress={clearList} title='Tyhjennä'/>
        </View>
      </View>
      <Text style={styles.listheader}>Ostoslistasi:</Text>
      <FlatList syle={styles.list}
        data={data}
        renderItem={({ item }) => <Text>{item.title}</Text>}   
        keyExtractor={(item, index) => index.toString()}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 150,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input : {
    marginTop: 20,
    width: 200,
    height: 40,
    borderColor: 'gray', 
    borderWidth: 1
  },
  buttons: {
    flexDirection: 'row',
  },
  button: {
    margin: 10
  },
  listheader: {
    color: 'red',
    fontSize: 20
  }
});
