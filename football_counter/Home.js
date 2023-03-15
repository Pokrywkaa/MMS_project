import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Counter from './Counter';
import Slider_percentege from './Slider_percentege';

const Home = (props) => {
    return(
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
    )
}

export default Home

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