import React, { useState } from 'react';
import Slider from '@react-native-community/slider';
import { Text, View} from 'react-native';

const Slider_percentege = () => {
    const [possession, setPossession] = useState(50);

    if (possession>50){
        color_text = 'red'
    }
    else if (possession<50){
        color_text = 'blue'
    }
    else {
        color_text = 'black'
    }

    return(
        <View>
            <Text style={{paddingLeft: 115, fontSize: 15, color: color_text}}>Possession</Text>
            <Slider
            style={{width: 300, height: 40}}
            minimumValue={0}
            maximumValue={100}
            minimumTrackTintColor="red"
            maximumTrackTintColor="blue"
            value={50}
            onValueChange={val=>{setPossession(Math.round(val))}}
            />
        <View style={{flexDirection: 'row'}}>
            <Text style={{paddingLeft: 30, fontSize: 20, color: 'red'}}>{possession}%</Text>
            <Text style={{paddingLeft: 160, fontSize: 20, color: 'blue'}}>{100-possession}%</Text>
        </View>
        </View>
    )
}

export default Slider_percentege