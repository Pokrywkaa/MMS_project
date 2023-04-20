import { View, TextInput, StyleSheet, Button, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';
import React, { useState } from 'react';
import { addDoc, collection } from "firebase/firestore";
import { db } from './config';
import DateTimePicker from '@react-native-community/datetimepicker';

const AddTask = (props) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [selectedType, setSelectedType] = useState('To Do');
    const [isChecked, setIsChecked] = useState(false);
    const [date, setDate] = useState(new Date());

    const handleDateChange = (event, selectedDate) => {
          setDate(selectedDate);
      };
      
    const handleSave = async () => {
        try {
          await addDoc(collection(db, 'tasks'),{
            title: title,
            description: description,
            status: isChecked,
            type: selectedType,
            due_date: date
          });
          console.log('Document successfully written!');
          setTitle('')
          setDescription('')
          props.navigation.navigate('Home', {refresh: 'true'})
        } catch (error) {
          console.error('Error writing document: ', error);
        }
      }

    return(
        <View style={styles.container}>
                <RadioButton.Group
                    onValueChange={value => setSelectedType(value)}
                    value={selectedType}
                >
        <View style={{ flexDirection: 'row' }}>
          <View style={{ marginRight: 16 }}>
            <Text>To Do</Text>
            <RadioButton 
              value="To Do" 
              uncheckedColor="#BDBDBD" 
              color="#F44336" 
              ios={{ 
                tintColors: { 
                  true: "#F44336", 
                  false: "#BDBDBD" 
                } 
              }}
            />
          </View>
          <View style={{ marginRight: 16 }}>
            <Text>E-mail</Text>
            <RadioButton 
              value="E-mail" 
              uncheckedColor="#BDBDBD" 
              color="#9C27B0" 
              ios={{ 
                tintColors: { 
                  true: "#9C27B0", 
                  false: "#BDBDBD" 
                } 
              }}
            />
          </View>
          <View style={{ marginRight: 16 }}>
            <Text>Phone</Text>
            <RadioButton 
              value="Phone" 
              uncheckedColor="#BDBDBD" 
              color="#2196F3" 
              ios={{ 
                tintColors: { 
                  true: "#2196F3", 
                  false: "#BDBDBD" 
                } 
              }}
            />
          </View>
          <View>
            <Text>Meeting</Text>
            <RadioButton 
              value="Meeting" 
              uncheckedColor="#BDBDBD" 
              color="#4CAF50" 
              ios={{ 
                tintColors: { 
                  true: "#4CAF50", 
                  false: "#BDBDBD" 
                } 
              }}
            />
          </View>
        </View>
                </RadioButton.Group>
            <TextInput
                style={styles.input}
                placeholder="Title"
                value={title}
                onChangeText={setTitle}
            />
            <TextInput
                style={styles.input}
                height = {120}
                multiline={true}
                numberOfLines={4}
                placeholder="Description"
                value={description}
                onChangeText={setDescription}
            />
            <View>
            <Text style={styles.label}>Set Due Date</Text>
              <DateTimePicker
                value={date}
                mode="date"
                display="default"
                onChange={handleDateChange}
                />
            </View>
            <Button title="Save" onPress={handleSave} />
        </View>
    )
}

export default AddTask

const styles = StyleSheet.create({
    container: {
        margin: 30,
        flex: 1,
        // backgroundColor: '#fff',
        // backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center'
      },
      input: {
        height: 40,
        width: 250,
        textAlignVertical: 'top',
        borderColor: '#BDBDBD',
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        marginBottom: 16,
      },
      checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
      },
      label: {
        paddingLeft: 20,
        fontSize: 16,
      },
      dateContainer: {
        // flex: 1,
        // alignItems: 'center',
        justifyContent: 'center',
      },
      datePicker: {
        width: 200,
      },
  });