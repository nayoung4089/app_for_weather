import React from "react";
import { StyleSheet, Text, View, StatusBar} from 'react-native';

export default function Loading() {
    return (
    <View style={styles.container}>
        <StatusBar barStyle="dark-content"/>
      <Text style={styles.text}>오늘의 날씨는?</Text>
      <Text style={styles.subtext}>#본1여름방학 #코딩 #ReactNative #첫번째앱</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "flex-end",
        paddingHorizontal: 30,
        paddingVertical: 100,
        backgroundColor: "#A8D8EA",
    },
    text:{
        color: "#FFE2E2",
        fontSize: 30,
        fontWeight: 'bold',
    },
    subtext:{
        color: "#F9F9F9",
        fontSize: 15,
    },

});
