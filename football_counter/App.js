import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Counter from './Counter';
import Slider_percentege from './Slider_percentege';


const Stack = createNativeStackNavigator(); 

export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
      <View style={styles.container}>
        <View style={styles.text}>
          <Text style={{fontSize: 30, color: 'red'}}>Team 1</Text>
          <Text style={{paddingLeft: 100, fontSize: 30, color: 'blue'}}>Team 2</Text>
        </View>
        <Slider_percentege/>
        <Counter icon_counter='soccer-ball-o'/>
        <Counter icon_counter='clone' color_icon='#CCCC00'/>
        <Counter icon_counter='clone' color_icon='red'/>
        <Counter icon_counter='fa' color_icon='green'/>
        <Counter icon_counter='ambulance' color_icon='red'/>
        <Counter icon_counter='random'/>
        <StatusBar style="auto" />
      </View>
    //   </Stack.Navigator>
    //  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 230,
    paddingBottom: 230,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    flexDirection: 'row',
  },
});
