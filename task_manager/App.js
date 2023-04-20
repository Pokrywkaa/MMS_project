import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './components/Home';
import AddTask from './components/AddTask';
import TaskDetail from './components/TaskDetail';

const Stack = createNativeStackNavigator(); 

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="AddTask"
          component={AddTask}
        />
        <Stack.Screen
          name="TaskDetail"
          component={TaskDetail}
        />
      </Stack.Navigator>
     </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 260,
    paddingBottom: 260,
    margin: 40,
    flex: 1,
    // backgroundColor: '#fff',
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
