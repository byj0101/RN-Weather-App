import React, {Component} from 'react';
import { StyleSheet, Text, View, StatusBar, ActivityIndicator } from 'react-native';
import Weather from './Weather';

const API_KEY = 'a94d08c07f06b6e4ab36512bd7ec8be3';

export default class App extends Component {
  state = {
    isLoaded : false,
    error : null,
    temperature: null,
    name: null
  }

  componentDidMount(){
    navigator.geolocation.getCurrentPosition(position => {
     this._getWeather(position.coords.latitude, position.coords.longitude)
    },
      err => {
        this.setState({
          error: err
        })
      }
    )
  }
  _getWeather = (lat, lon) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`)
    .then(res => res.json())
    .then(res => {
      console.log(res)
      this.setState({
        name: res.weather[0].main,
        temperature : res.main.temp,
        isLoaded: true
      })
    })
    .catch(err => console.log(err))
  }

  render() {
    const { isLoaded, error, temperature, name } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        {isLoaded ? <Weather temp = {Math.ceil(temperature-273.15)} name = {name} /> : 
        (<View style = {styles.loading}>
          <ActivityIndicator/>
          <Text style = {styles.loadingText}>Getting the fucking weather</Text>
          {error ? <Text style= {styles.errorText}>{error}</Text>:null}
        </View>)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  errorText: {
    color: 'red',
    backgroundColor: 'transparent'
  },
  loading: {
    flex: 1,
    backgroundColor: "#FDF6AA",
    justifyContent: "flex-end",
    paddingLeft: 25
  },
  loadingText: {
    fontSize: 38,
    marginBottom: 100

  }

});
