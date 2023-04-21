import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './components/Home';
import GalleryView from './components/GalleryView';
import SingleImage from './components/SingleImage';

const Stack = createNativeStackNavigator(); 

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={Home}
        />
        <Stack.Screen
          name='GalleryView'
          component={GalleryView}
        />
        <Stack.Screen
          name='SingleImage'
          component={SingleImage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
