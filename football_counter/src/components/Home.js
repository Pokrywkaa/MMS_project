import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Counter from './Counter';
import Slider_percentege from './Slider_percentege';
import Card from './Card';

const Home = (props) => {
  const [ballCount1, setBallCount1] = useState(0);
  const [ballCount2, setBallCount2] = useState(0);
  const [cornerCount1, setCornerCount1] = useState(0);
  const [cornerCount2, setCornerCount2] = useState(0);
  const [injuryCount1, setInjuryCount1] = useState(0);
  const [injuryCount2, setInjuryCount2] = useState(0);

  if (ballCount1<0){
    setBallCount1(0)
  }
  if (ballCount2<0){
    setBallCount2(0)
  }
  if (cornerCount1<0){
    setCornerCount1(0)
  }
  if (cornerCount2<0){
    setCornerCount2(0)
  }
  if (injuryCount1<0){
    setInjuryCount1(0)
  }
  if (injuryCount2<0){
    setInjuryCount1(0)
  }

  let winner_color = 'black'
  let rot = 0

  if (ballCount1>ballCount2) {
    winner_color='red'
    rot=-1
  }
  else if (ballCount1<ballCount2) {
    winner_color='blue'
    rot=1
  }

const spinValue = new Animated.Value(0);

Animated.loop(
  Animated.timing(spinValue, {
    toValue: rot,
    duration: 9000,
    easing: Easing.linear,
    useNativeDriver: true,
  })).start();

const rotate = spinValue.interpolate({
  inputRange: [0,1],
  outputRange: ['0deg', '360deg']
})

  return(
    <View style={styles.container}>
      <Animated.View style={{transform: [{rotate}]}}>
        <Icon name='soccer-ball-o' size={130} color={winner_color}/>
      </Animated.View>
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
        <Counter icon_counter='fa' color_icon='green'
          customCount1={cornerCount1}
          customCount2={cornerCount2}
          setCustomCount1={setCornerCount1}
          setCustomCount2={setCornerCount2}
        />
        <Counter icon_counter='ambulance' color_icon='red'
          customCount1={injuryCount1}
          customCount2={injuryCount2}
          setCustomCount1={setInjuryCount1}
          setCustomCount2={setInjuryCount2}
          />
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


