import { View, StyleSheet, Text, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const TaskDetail = (props) => {
    console.log(props.route.params.item)
    return (
        <SafeAreaView style={styles.container}>
          <View style={styles.content}>
            <Text style={[styles.label, styles.largeText]}>Title:</Text>
            <Text style={[styles.text, styles.largeText]}>{props.route.params.item.title}</Text>
    
            <Text style={[styles.label, styles.largeText]}>Description:</Text>
            <Text style={[styles.text, styles.largeText]}>{props.route.params.item.description}</Text>
    
            <Text style={[styles.label, styles.largeText]}>Date:</Text>
            <Text style={[styles.text, styles.largeText]}>{props.route.params.date}</Text>
    
            <Text style={[styles.label, styles.largeText]}>Type:</Text>
            <Text style={[styles.text, styles.largeText]}>{props.route.params.item.type}</Text>
    
          <View style={styles.statusContainer}>
            <Icon name={props.route.params.item.status ? 'check-circle' : 'check-circle-o'} size={30} color="#6D28D9" style={styles.statusIcon} />
            <Text style={[styles.statusText, styles.largeText]}>{props.route.params.item.status ? 'Completed' : 'Incomplete'}</Text>
          </View>
          </View>
        </SafeAreaView>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      content: {
        padding: 10,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        flex: 1,
      },
      label: {
        fontWeight: 'bold',
        marginBottom: 5,
      },
      text: {
        marginBottom: 10,
      },
      largeText: {
        fontSize: 20,
      },
      statusText: {
        fontWeight: 'bold',
        color: '#6D28D9',
      },
      statusContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
      },
      statusIcon: {
        marginRight: 10,
      },
    });

export default TaskDetail
