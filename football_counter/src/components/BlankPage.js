import { View, Text, StyleSheet } from 'react-native';

const BlankPage = (props) => {
    return(
        <View style={{backgroundColor: props.route.params.color, height: 1000}}>
        </View>
    )
}
export default BlankPage
