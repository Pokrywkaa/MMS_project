import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Counter from './Counter';
import Slider_percentege from './Slider_percentege';

const Card = (props) => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    return(
      <View
        style={[
          styles.container,
          {
            flexDirection: 'row',
          },
        ]}>
          <Icon.Button name='minus-circle' backgroundColor='transparent' color='black' size={30}
            marginLeft={10} position='relative'
            onPress={() => {setCount1(count1 - 1)}} title="-"
          />
          <Text style={{fontSize: 30, padding: 10, color: 'red'}}>{count1}</Text>

          <Icon.Button name='plus-circle' backgroundColor='transparent' color='black' 
            size={30}
            position='relative' marginLeft={10}
            onPress={() => {setCount1(count1 + 1)}} title="+"
          />

          <Icon.Button name={props.icon_counter}  size={40} color={props.color_icon}
          backgroundColor='transparent'
          position='relative' paddingLeft={11} allignItems='center'
          onPress={()=>props.props.navigation.navigate('BlankPage',
          initialParams={'color': props.color})} />

          <Icon.Button name='minus-circle' backgroundColor='transparent' color='black' size={30}
            marginLeft={10} position='relative'
            onPress={() => {setCount2(count2 - 1)}} title="-"
          />

          <Text style={{fontSize: 30, padding: 10, color: 'blue'}}>{count2}</Text>

          <Icon.Button name='plus-circle' backgroundColor='transparent' color='black' 
            size={30}
            position='relative' marginLeft={10}
            onPress={() => {setCount2(count2 + 1)}} title="+"
          />
       </View>
    ) 
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: 'red',
    },
  });

export default Card


