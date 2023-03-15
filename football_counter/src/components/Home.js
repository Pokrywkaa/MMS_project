import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Counter from './Counter';
import Slider_percentege from './Slider_percentege';
import Card from './Card';

const Home = (props) => {
  const [ballCount1, setBallCount1] = useState(0);
  const [ballCount2, setBallCount2] = useState(0);

  let winner_color = 'black'

  if (ballCount1>ballCount2) {
    winner_color='red'
  }
  else if (ballCount1<ballCount2) {
    winner_color='blue'
  }

  return(
    <View style={styles.container}>
        <Icon name='soccer-ball-o' size={130} color={winner_color}/>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: 30, color: 'red'}}>Team 1</Text>
          <Text style={{paddingLeft: 110, fontSize: 30, color: 'blue'}}>Team 2</Text>
        </View>
        <Slider_percentege/>
        <Counter icon_counter='soccer-ball-o'
          customCount1={ballCount1}
          customCount2={ballCount2}
          setCustomCount1={setBallCount1}
          setCustomCount2={setBallCount2}
        />
        <Card props={props} icon_counter='clone' color_icon='#CCCC00' color='#CCCC00'/>
        <Card props={props} icon_counter='clone' color_icon='red' color='red'/>
        <Counter icon_counter='fa' color_icon='green'/>
        <Counter icon_counter='ambulance' color_icon='red'/>
        <Counter icon_counter='random'/>
        <StatusBar style="auto" />
      </View>
    ) 
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: 30,
      paddingBottom: 130,
      alignItems: 'center',
      justifyContent: 'center',
    }
  });

export default Home


