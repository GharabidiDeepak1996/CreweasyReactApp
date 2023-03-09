import React from "react";
import { View, StyleSheet, Image, ImageBackground, Dimensions, Text } from 'react-native';

const screenDimensions = Dimensions.get('screen');

export default function LoginScreem() {
    return (
        <View style={styles.mainContainer}>
            <ImageBackground
                style={styles.imgBackground}
                resizeMode='cover'
                source={require('../assets/bg.png')}>
                <View style={styles.credentialContainer}>

                    <View style={styles.logoContainer}>
                        <Image
                            source={require('../assets/app_logo.png')}
                            style={{ width: '80%', resizeMode: 'contain',alignSelf:'center'}} />

                    </View>

                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    imgBackground: {
        flex: 1,
        justifyContent: 'center',
    },
    // logoImage:{
    //     flex: 1,
    //     justifyContent: 'center',
    //     padding:10
    // },
    credentialContainer: {
        backgroundColor: "#E6E6E6",
        width: '80%',
        height: '35%',
        borderRadius: 12,
        alignSelf: "center",
        marginTop: 300
    },
    logoContainer: {
        backgroundColor: "#9999",
        width: '25%',
        height: '30%',
        borderRadius: 12,
        alignSelf: "center",

    }

})