import react from "react";
import {View, Text, StyleSheet} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';

function AirLineComponet(){
    return(
        <View style={styles.rowStyle}>
        <Ionicons name="airplane-outline" size={30} color="black" />
        
        <View style={styles.colomStyle}>
            <Text style={styles.titleTextStyle}>AMD - BOM</Text>
            <Text style={styles.subTitleStyle}>AKJ 1102</Text>
        </View>
    
        <Text style={styles.timeTextStyle}>06:55 - 08:25</Text>
    
    </View>
    )
}

const styles = StyleSheet.create({
    rowStyle: {
        flexDirection: 'row',
       
          justifyContent:'space-around'
    },
    colomStyle: {
        flexDirection: 'column',
        //marginRight:140
    },
    titleTextStyle:{
        fontWeight:'bold',
        color:'#808080'
    },
    subTitleStyle:{
        fontWeight:'bold',
        color:'#000000',
        fontSize:12
    },
    timeTextStyle:{
        fontWeight:'bold',
        color:'#808080',
        
        alignSelf:'center'
    }
})

export default AirLineComponet