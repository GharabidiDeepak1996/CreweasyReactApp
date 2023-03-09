import react from "react";
import {View,Text,StyleSheet} from 'react-native'

export default function DateHeaderComponet(props){
   // console.log(props)
    return(
        <View style={styles.dateLable}>
        <Text  style={styles.textStyle}>{props.text}</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    dateLable: {
        width: '100%',
        height: 40,
        backgroundColor: '#808080',
        justifyContent: 'center',
    },
    textStyle: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 14,
        marginLeft: 12

    },
})