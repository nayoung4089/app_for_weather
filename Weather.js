import React from "react";
import { View, Text, StyleSheet, StatusBar, TouchableWithoutFeedback }from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const weatherOptions = {
    Thunderstorm:{
        iconName:"weather-lightning",
        gradient: ["#283E51", "#4B79A1"],
        title: "우르르 쾅쾅!",
        subtitle:"아이코 무서워 오늘은 집에서 넷플릭스나 볼래요 \n #오늘같은 #날씨에는 #보이스4 #존잼",

    },
    Drizzle:{
        iconName:"weather-partly-rainy",
        gradient: ["#9796f0", "#fbc7d4"],
        title: "보슬비가 보슬보슬",
        subtitle:"이정도는 맞아도 탈모 안 생겨요 \n #사실 #탈모는 #안씻으면 #생겨요 ",

    },
    Rain:{
        iconName:"weather-rainy",
        gradient: ["#000C40","#ECE9E6"],
        title: "창문은 닫았나요?",
        subtitle:"파전에 막걸리 군침 싹 도네 \n #오늘은 #파전 #딸기막걸리 #먹고싶다",

    },
    Snow:{
        iconName:"snowflake",
        gradient: ["#eef2f3","#8e9eab"],
        title: "나랑 눈사람 만들~래?",
        subtitle:"Okay, bye... 혼자 만들어도 재밌어요 \n #철없다고요? #우린 #어려요 #반박은 #무지개반사",

    },
    // 밑에부터 같은 색
    Atmosphere:{
        iconName: "weather-fog",
        gradient: ["#274046","#E6DADA"],
        title: "뿌예서 앞이 안보여요!",
        subtitle:"그 정도는 아니라고요? 그럼 다행이고요^^ \n #운전조심 #차없는뚜벅이는 #운전자조심" ,

    },
    Mist:{
        iconName: "weather-fog",
        gradient: ["#274046","#E6DADA"],
        title: "뿌예서 앞이 안보여요!",
        subtitle:"그 정도는 아니라고요? 그럼 다행이고요^^ \n #운전조심 #차없는뚜벅이는 #운전자조심" ,

    },
    Smoke:{
        iconName: "weather-fog",
        gradient: ["#274046","#E6DADA"],
        title: "뿌예서 앞이 안보여요!",
        subtitle:"그 정도는 아니라고요? 그럼 다행이고요^^ \n #운전조심 #차없는뚜벅이는 #운전자조심" ,

    },
    Haze:{
        iconName: "weather-fog",
        gradient: ["#274046","#E6DADA"],
        title: "뿌예서 앞이 안보여요!",
        subtitle:"그 정도는 아니라고요? 그럼 다행이고요^^ \n #운전조심 #차없는뚜벅이는 #운전자조심" ,

    },
    Fog:{
        iconName: "weather-fog",
        gradient: ["#274046","#E6DADA"],
        title: "뿌예서 앞이 안보여요!",
        subtitle:"그 정도는 아니라고요? 그럼 다행이고요^^ \n #운전조심 #차없는뚜벅이는 #운전자조심" ,

    },
    // 여기까지 같은 색
    Dust:{
        iconName: "weather-cloudy-alert",
        gradient: ["#3E5151","#DECBA4"],
        title: "쿨럭쿨럭 이게 뭐야!",
        subtitle:"마스크 챙기셨죠? 어린이 노약자는 특히 조심~ \n #코로나도 #코로나지만 #미세먼지 #황사 #멈춰!",

    },
    Sand :{
        iconName: "weather-cloudy-alert",
        gradient: ["#3E5151","#DECBA4"],
        title: "쿨럭쿨럭 이게 뭐야!",
        subtitle:"마스크 챙기셨죠? 어린이 노약자는 특히 조심~ \n #코로나도 #코로나지만 #미세먼지 #황사 #멈춰!",

    },
    Ash :{
        iconName: "weather-cloudy-alert",
        gradient: ["#3E5151","#DECBA4"],
        title: "쿨럭쿨럭 이게 뭐야!",
        subtitle:"마스크 챙기셨죠? 어린이 노약자는 특히 조심~ \n #코로나도 #코로나지만 #미세먼지 #황사 #멈춰!",

    },
    // 밑의 두개 같은 색
    Squall:{
        iconName: "weather-tornado",
        gradient: ["#182848","#4b6cb7"],
        title: "나 날아갈지도 몰라!",
        subtitle:"거짓말~ 여러분이 그정도로 가볍진 않답니다 \n #우리가 #날아가면 #그건진짜 #재난경보",

    },
    Tornado:{
        iconName: "weather-tornado",
        gradient: ["#182848","#4b6cb7"],
        title: "나 날아갈지도 몰라!",
        subtitle:"거짓말~ 여러분이 그정도로 가볍진 않답니다 \n #우리가 #날아가면 #그건진짜 #재난경보",

    },
    // 
    Clear:{
        iconName:"emoticon-happy-outline",
        gradient: ["#FDC830","#F37335"],
        title: "햇살 쨍쨍! 날씨 좋~다",
        subtitle:"프사 바꾸기 딱이야! 사람 좀 만나봐요 우리 \n #2D그만보고 #3D봐줘요 #눈만 #높아지잖아",

    },
    Clouds:{
        iconName: "weather-partly-cloudy",
        gradient: ["#00416A","#E4E5E6"],
        title: "심상치 않은 꾸리꾸리",
        subtitle:"비 올것만 같은 눅눅한 날씨, 우산 꼭 챙기세요! \n #여름날의 #구름은 #햇살가려서 #좋긴해요",

    },

}

export default function Weather({temp, condition}){
    return (
        <LinearGradient 
        // Background Linear Gradient
        colors={weatherOptions[condition].gradient}
        style={styles.container}>
            {/* LinearGradient도 View의 역할과 비슷함. 마찬가지로 container는 반드시 필요하고 그 안에 view 넣어서 */}
            {/* 모양 만들어주시면 됨. */}
            <StatusBar barStyle="light-content"/>
            {/* 맨 위에 KT 5:36 뭐 배터리 양 등등 보여주는 거기를 하얗게 하겠다 요말. 사실 내 폰은 이미 하양이라 ㄱㅊ */}
        <View style={styles.halfContainer}>
           <MaterialCommunityIcons size={96} 
           name={weatherOptions[condition].iconName} 
        //    [condition]은 weatherOptions에 써진 내용들 의미함. Haze 등등...
           color="white"/>
           <Text style={styles.temp}>{temp}℃</Text>
        </View>
        <View style={{...styles.halfContainer, ...styles.textContainer}}>
            {/* ...쓰면 style 지정을 2개도 가능할 수 있게 만듦. 이때 괄호 한번 쳐주고 ... 붙이는 거 잊지말기~ */}
            <Text style={styles.title}>
            {weatherOptions[condition].title}
            </Text>
            <Text style={styles.subtitle}>
            {weatherOptions[condition].subtitle}
            </Text>
        </View>
        </LinearGradient>
    
);

}

Weather.PropTypes = {
    temp:PropTypes.number.isRequired,
    // 앞에서 얻은 temperature 숫자를 요구한다! isRequired는 요구한다라는 함수임
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Mist",
        "Smoke",
        "Haze",
        "Dust",
        "Fog",
        "Sand",
        "Ash",
        "Squall",
        "Tornado",
        "Clear",
        "Clouds",
    ]).isRequired
    // 날씨 정보들의 모든 경우의 수를 이름 복붙한 거. 이것들이 요구된다! 이들 중에 알맞는 친구가 결과창에 뜨게끔 하려고
    // 헐 그리고 괄호를 {} 하면 안되고 [] 써야 됨 왠지는 모르겠음 빡치네

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    temp: {
        fontSize: 22,
        color: "white",
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    textContainer:{
        alignItems: "flex-start",
        // 왼쪽정렬시키기
        marginTop: 100,
        paddingHorizontal: 10,
        // 왼쪽에 딱 붙지 않도록. 원래 안 붙으면 차이 없는 거 정상.
    },
    title:{
        color: "white",
        fontWeight: "bold",
        fontSize: 38,
        marginBottom: 5,
    },
    subtitle:{
        color: "white",
        fontWeight: "100",
        fontSize: 16,
    }
})