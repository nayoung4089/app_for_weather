import React from 'react';
import {Alert} from "react-native";
// 사용자가 위치허용 하지 않으면 리액트 네이티브에서 이 함수를 불러오겠다 이말
import Loading from "./Loading";
// 로딩창 따로 만듦
import * as Location from 'expo-location';
// 사용자의 위치를 엑세스하기 위해 삽입한 함수 엑스포에서 다운받음
import axios from "axios";
import Weather from './Weather';

const API_KEY = "caf4c8e453002c407629c83df8fd1fe3";

// view는 div 같은거임
export default class extends React.Component {
  state = {
    isLoading: true
  };
  // state는 저 isLoading창 띄울지 말지 정하려고! 트루면 띄우고 아니면 없앰.
  getWeather = async(latitude, longitude) => {
    const { data: {
      main: {temp},
      weather
    } 
  } = await axios.get(
      // 단순히 {data} -> data: {main: {temp}}로 바꿔주니까 밑에 temp: data.main.temp 안 써도 됨.
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      // 얘는 API calling 하기 위한 링크임. 이 링크에 경도 위도 주면 날씨 알려주게 되는거! 여기서 $는 자바스크립트에서 변수같은?
      // 사용자 고유의 값을 넣을 때 사용하는 느낌같음.
      // &units=metric는 섭씨온도 알고 싶어서 넣은거.
    );
    this.setState({isLoading:false, condition: weather[0].main, temp})
    // temp: data.main.temp였는데 위에 const data 에쁘게 만들어줘서 ㄱㅊ
    // isLoading은 가장 맨 처음페이지 하늘색 그거. 그게 false니까 결과 페이지 나와라 이말이고, 거기에 temperature 넣어주고 싶어서 temp가 있는 위치를 지정해준거.
  };
  getLocation = async() => {
    try {
      // const는 자바스크립트 var 랑 비슷함. await는 일단 물어보고 대기해라 이말이고 콘솔로그를 써서 위 함수를 실행시킨다 이말
      await Location.requestForegroundPermissionsAsync();
      // 사용자에게 너 위치 알아도 되니? 물어보는 함수
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
      // 사용자의 위치 정보를 앱에 넣어주는 함수

      // {coords}인 이유는 우리의 위치값이 모두 coords 안에 들어있기 때문이야~ 
      // 원래는 const location = await~~
      // console.log(location) 했지만!! 로케이션 자리에 coords 넣어줘야 하는거!

      // 사실 원래 const 밑에다가 console.log 해줬는데 이제는 바로 로딩되니까 그건 굳이 필요없게 됨.
      this.getWeather(latitude, longitude)

    } catch (error) {
      Alert.alert("위치를 알 수 없습니다", "슬퍼용");
    }
  };
  componentDidMount(){
    this.getLocation();
  };
  render() {
    const {isLoading, temp, condition} = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />;
    // Math.round는 정수로 바꿔주는 친구! 
    // return이면 다시 처음페이지로 가게 isLoading 하는거고
    // 그게 아니면 Weather의 temperature가 정수로 뜨게 하려고  <Weather temp={Math.round(temp)} />;씀.
  }
};

