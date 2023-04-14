import React, { useState, useEffect } from "react";
import { View, FlatList, ToastAndroid, StyleSheet, ActivityIndicator, Text } from 'react-native';
import DateHeaderComponet from "./components/DateHeaderComponet";
import JobScheduleModel from "./models/JobScheduleModel";
import ScheduleScreen from "./ScheduleScreen";

export default function ListScheduleScreen() {
    //const url = 'http://172.16.0.2:8014/Schedule/getMonthnlySchedule'
    //const url = 'http://103.209.36.67:8014/Schedule/getMonthnlySchedule'
    const url = 'https://api.utwiz.com/CrewEasy/V1.8/Schedule/getMonthnlySchedule'
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getScheduleList = async () => {
        try {
            const response = await
                fetch(url, {
                    method: 'POST', 
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        "token": 'juZv0uqHWIkvDqEuWFW3M3iAf7EnzkGDc9PaYJ3pfddtUKqTbt',
                    },
                    body: JSON.stringify({
                        "EmployeeNumber": "1996",
                        "AirlineCode": "CR",
                        "DeviceNo": "ae283a95ef4168d0",
                        "AppType": "2",
                        "AppVersion": "4.1.8",
                        "OsVersion": "Android-+Red+Velvet+Cake+SDK+30%3Aunknown%3Asdk_phone_x86"
                    })
                })

            const statusCode = response.status

            if (statusCode == 200) {
                const json = await response.json()
                setData(json.Pairings)
                // setLoading(true);
            } else {
                setLoading(false);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getScheduleList()
    }, [])
  
    return (
        <View style={styles.mainContainer}>
            {/* {isLoading ? "" : ""}  */}
            {isLoading ? (<ActivityIndicator
                color="#FFFFFF"
                size="large"
                style={styles.activityIndicator} />)
                :
                (data.map((pairingData, index) => (
                    // pairingData.ScheduleList.map((scheduleData, index) => (
                    //     //console.log(scheduleData.ScheduledDate)
                    //     <Text key={scheduleData.ScheduledDate}>{scheduleData.ScheduledDate}</Text>
                    // ))

                    // <FlatList 
                    //     data={pairingData.ScheduleList}
                    //     keyExtractor={(scheduleDataKey, index) => scheduleDataKey }
                    //     renderItem={(scheduleData,index) => {
                    //         console.log(scheduleData.ScheduledDate)
                    //         // return (
                    //         //     <View>
                    //         //         <Text key={index}>{scheduleData.ScheduledDate}</Text>
                    //         //     </View>
                    //         // )
                    //     }} />

                    <FlatList 
                    key={index}
                    data={pairingData.ScheduleList}
                    keyExtractor={(item ,index) => item.ScheduledDate}
                    renderItem={({ item }) => {
                       return (
                       // console.log(item)
                        <ScheduleScreen arr={[item]}/>
                      //  <DateHeaderComponet text = {item.ScheduledDate}/>
                        
                       )
                    }}
                  />
                )))

            }


        </View>
    )
}

function customItemData() {
    return (
        <View>

        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#f3ff'
    },
    activityIndicator: {
        alignItems: 'center',
        height: 80
    }
})