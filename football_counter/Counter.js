import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const Counter = (props) => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
   return (
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
          
          <Text style={{fontSize: 30, padding: 10}}>{count1}</Text>

          <Icon.Button name='plus-circle' backgroundColor='transparent' color='black' 
            size={30}
            position='relative' marginLeft={10}
            onPress={() => {setCount1(count1 + 1)}} title="+"
          />

          <Icon name={props.icon_counter} size={40} color={props.color_icon} />

          <Icon.Button name='minus-circle' backgroundColor='transparent' color='black' size={30}
            marginLeft={10} position='relative'
            onPress={() => {setCount2(count2 - 1)}} title="-"
          />

          <Text style={{fontSize: 30, padding: 10}}>{count2}</Text>

          <Icon.Button name='plus-circle' backgroundColor='transparent' color='black' 
            size={30}
            position='relative' marginLeft={10}
            onPress={() => {setCount2(count2 + 1)}} title="+"
          />
       </View>
   );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
});
export default Counter;