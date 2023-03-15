import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Counter from './src/components/Counter';
// import Slider_percentege from './src/components/Slider_percentege';
import Home from './src/components/Home'
import BlankPage from './src/components/BlankPage'

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
          name="BlankPage"
          component={BlankPage}
        />
      </Stack.Navigator>
     </NavigationContainer>
  );
}