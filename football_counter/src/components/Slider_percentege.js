import React, { useState } from 'react';
import Slider from '@react-native-community/slider';
import { StyleSheet, Text, View} from 'react-native';

const Slider_percentege = () => {
    const [possession1, setPossession1] = useState(50);
    return(
        <View>
            <Slider
            style={{width: 300, height: 40}}
            minimumValue={0}
            maximumValue={100}
            minimumTrackTintColor="red"
            maximumTrackTintColor="blue"
            value={50}
            onValueChange={val=>{setPossession1(Math.round(val))}}
            />
        <View style={{flexDirection: 'row'}}>
            <Text style={{paddingLeft: 30, fontSize: 20, color: 'red'}}>{possession1}%</Text>
            <Text style={{paddingLeft: 160, fontSize: 20, color: 'blue'}}>{100-possession1}%</Text>
        </View>
        </View>
    )
}

export default Slider_percentege