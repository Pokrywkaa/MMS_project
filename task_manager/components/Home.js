import { View, TextInput, StyleSheet, Button, Text, FlatList, TouchableOpacity } from 'react-native';
import { doc, addDoc, getDocs, query, collection, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from './config';
import { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {SwipeListView} from 'react-native-swipe-list-view';



const Home = (props) => {
    const [items, setItems] = useState([])
    const [isChecked, setIsChecked] = useState(false);

      const renderItem = ({ item }) => {
        return (
          <View style={styles.row}>
            <Text style={styles.text}>{item.text}</Text>
          </View>
        );
      };

    const q = query(collection(db, "tasks"));

    useEffect(()=>{
        getData();
    }, [])
    const getData = async () => {
        try {
            const newItems = []
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
            newItems.push({
                id: doc.id,
                ...doc.data()
            })
        });
        setItems(newItems) 
        }
        catch (error) {
            console.log(error)
        }
    }
    
      const renderHiddenItem = ({ item }) => (
        <View style={styles.rowBack}>
            <Icon.Button paddingLeft={10}
                name='trash-o'
                size={40} color='red'
                backgroundColor='transparent'
                onPress={() => deleteItem(item.id)}
            />
            <Icon.Button paddingLeft={180}
                name='check' size={40}
                color='green'
                backgroundColor='transparent'
                onPress={() => updateItem(item.id)}
                />
        </View>
      );
    
    
    const deleteItem = async (id) => {
        try {
        await deleteDoc(doc(db, 'tasks', id))
        console.log('Item deleted successfully!');
        setItems(items.filter((item) => item.id !== id));
        }
        catch (error) {
            console.log('Error deleting item: ', error);
        }
    };
    
    const updateItem = async (id) => {
        try {
        setIsChecked(!isChecked)
        await updateDoc(doc(db, 'tasks', id),{
            status: isChecked
        })
        console.log('Item updated successfully!');
        }
        catch (error) {
            console.log('Error updating item: ', error);
        }
    };
    const renderListItem = ({ item }) => {
        let icon_name
        if (item.type==='To Do') {
            icon_name = 'tag'
        } 
        else if (item.type==='E-mail'){
            icon_name = 'envelope-o'
        }
        else if (item.type==='Phone'){
            icon_name = 'phone'
        }
        else if (item.type==='Meeting'){
            icon_name = 'group'
        } 

        const date = item.due_date.toDate().toDateString()

        return(
            <TouchableOpacity onPress={() => props.navigation.navigate('TaskDetail', { item: item, date: date })}>
            <View style={styles.listContainer}>
            <View style={styles.itemContainer}>
                <Icon name={icon_name} size={30} color="#6D28D9" />
                <View style={styles.itemTextContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.date}>{date}</Text>
            </View>
                <Icon
                    name={item.status ? 'check-circle' : 'check-circle-o'}
                    size={30}
                    color="#6D28D9"
                />
            </View>
            </View>
            </TouchableOpacity>
        )
    }
    return(
        <View style={styles.container}>
                <SwipeListView
                    data={items}
                    renderItem={renderListItem}
                    renderHiddenItem={renderHiddenItem}
                    leftOpenValue={75}
                    rightOpenValue={-75}
                    keyExtractor={(item) => item.id.toString()}
                />
            <View style={styles.icon}>
                <Icon.Button name='plus-circle' size={60} color='green' backgroundColor='transparent'
                    onPress={()=>props.navigation.navigate('AddTask')}
                />
            </View>
      </View>
    )
}
export default Home

const styles = StyleSheet.create({
    container: {
        margin: 30,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      },
    icon: {
        position: 'absolute',
        bottom: 0,
        right: 0
    },
    listContainer: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 5,
        marginVertical: 5,
        elevation: 2,
        width: 300,
      },
      itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 80
      },
      itemTextContainer: {
        flex: 1,
        marginHorizontal: 10,
      },
      title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#6D28D9',
        marginBottom: 5,
      },
      description: {
        fontSize: 14,
        color: '#666',
        marginBottom: 5,
      },
      date: {
        fontSize: 14,
        color: '#999',
      },
      checkboxContainer: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#6D28D9',
        borderRadius: 5,
        padding: 5,
      },
      rowBack: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: 35,
      }
    
    
  });