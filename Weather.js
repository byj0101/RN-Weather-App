import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {LinearGradient} from 'expo';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

// export default class Weather extends Component {
//   render(){
//     return(
//       <LinearGradient colors={["#00C6FB", "#005BEA"]} style={styles.container}>
//         <View style = {styles.upper}>
//           <Ionicons color="white" size={144} name="ios-rainy"/>
//           <Text style={styles.temp}> 35℃ </Text>
//         </View>
//         <View style = {styles.lower}>
//           <Text style = {styles.title}> Raining like a MF </Text>
//           <Text style = {styles.subtitle}> For more info look outside </Text>
//         </View>
//       </LinearGradient>
//     )
//   }
// }

const weatherCase = {
  Rain : {
    colors: ["#00C6FB", "#005BEA"],
    title: "Raining like a MF",
    subtitle: "For more info look outside",
    icon: "weather-rainy"
  },
  Clear : {
    colors: ["#FEF253", "#FF7300"],
    title: "Sunny as Fuck",
    subtitle: "Go get your ass burnt",
    icon: "weather-sunny"
  },
  Thunderstorm: {
    colors: ["#00ECBC", "#007ADF"],
    title: "Thunderstorm in the house",
    subtitle: "Actually, outside of the house",
    icon: "weather-lightning"
  },
  Clouds: {
    colors: ["#D7D2CC", "#304352"],
    title: "Clouds",
    subtitle: "I Know, fucking boring",
    icon: "weather-cloudy"
  },
  Snow: {
    colors: ["#7DE2FC", "#8986E5"],
    title: "Cold as balls",
    subtitle: "Do you want to build a snowman? Fuck no..",
    icon: "weather-snowy"
  },
  Haze: {
    colors: ["#89F7FE", "#66A6FF"],
    title: "Haze",
    subtitle: "Don`t know what is it",
    icon: "weather-hail"
  },
  Drizzle: {
    colors: ["#89F7FE", "#66A6FF"],
    title: "Drizzle",
    subtitle: "Is like rain, but gay~~",
    icon: "weather-hail"
  },
  Mist: {
    colors: ["#D7D2CC", "#304352"],
    title: "Mist!",
    subtitle: "It`s like you have no glasses on",
    icon: "weather-fog"
  },
  
}

const Weather = ({temp, name}) => {
  console.log(name)
  return (
    <LinearGradient colors={weatherCase[name].colors} style={styles.container}>
      <View style = {styles.upper}>
        <MaterialCommunityIcons color="white" size={144} name={weatherCase[name].icon}/>
        <Text style={styles.temp}> {temp}℃ </Text>
      </View>
      <View style = {styles.lower}>
        <Text style = {styles.title}> {weatherCase[name].title}</Text>
        <Text style = {styles.subtitle}> {weatherCase[name].subtitle} </Text>
      </View>
    </LinearGradient>
  )
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
  container : {
      flex:1
  },
  upper : {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'transparent',
    justifyContent: 'center'
  },
  lower: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25
  },
  temp: {
    fontSize: 24,
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 48
  },
  title: {
    fontSize: 38,
    backgroundColor: 'transparent',
    color: 'white',
    marginBottom: 10,
    fontWeight: '300'
  },
  subtitle: {
    fontSize: 24,
    backgroundColor: 'transparent',
    color: 'white',
    marginBottom: 24
  }
})

export default Weather;