import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from 'react-native';

function DemoData() {
    const url = "https://jsonplaceholder.typicode.com/posts"
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetch(url)
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false))
    })
    return (
        <View style={styles.mainContainer}>
            <FlatList
                data={data}
                renderItem={(itemData) => {
                    return (
                        <View style={styles.goalItem}>
                            <Text style={styles.goalText}>{itemData.item.body}</Text>
                        </View>
                    )
                }}
                keyExtractor={(item, index) => {
                    return item.id
                }} />
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        paddingTop: 50,
        paddingHorizontal: 16
    },
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    goalText: {
        color: 'white'
    }
})

export default DemoData