import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Appearance } from 'react-native';
// Import vector icons
import Ionicons from '@expo/vector-icons/Ionicons';
import TransportComponent from "./components/TransportComponent";
import HotelComponent from "./components/HotelComponent";
import DateHeaderComponet from "./components/DateHeaderComponet";
import TransportShuttleComponent from "./components/TransportShuttleComponent";


export default function ScheduleScreen({ arr }) {
    
    //call api
    return (
        <View style={styles.mainContainer}>
            {
                arr.map(title => {
                    return (
                        <View>
                            <DateHeaderComponet text={title.ScheduledDate} />
                          
                            {title.Legs.map((legs) => {
                                return (
                                    legs.Reservation.map((reservation) => {
                                       
                                        if (reservation.ShowTransport == 1 && reservation.TransporterId != 0) { //transport
                                           return (<TransportComponent arr={[reservation]}/>)
                                         } else if(reservation.ShowTransport == 1 && reservation.TransporterId == 0){ //transport(shuttlr)
                                            return (<TransportShuttleComponent/>)
                                         } else if(reservation.ShowHotel == 1){ //hotel
                                           return <HotelComponent />
                                         }
                                    })
                                )
                            })}

                        </View>
                    )
                })
            }

        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    dateLable: {
        width: '100%',
        height: 40,
        backgroundColor: '#808080',
        justifyContent: 'center',
    },
    textStyle: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 14,
        marginLeft: 12
    },
    rect: {
        width: '85%',
        height: 1.5,
        backgroundColor: "#808080",
        marginTop: 4,
        marginLeft: 60,
    }

});