'use strict';
import CookieManager from "react-native-cookies";

import Expo from 'expo';
import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text, Dimensions } from 'react-native';
import { Input, SearchBar, Icon, FormInput, Button } from 'react-native-elements'

import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import axiosInstance from '../api/api'; 
import base64 from 'base-64';

const SCREEN_WIDTH = Dimensions.get('window').width;

const dummySearchBarProps = {
  showLoading: true,
  onFocus: () => console.log("focus"),
  onBlur: () => console.log("blur"),
  onCancel: () => console.log("cancel"),
  onClearText: () => console.log("cleared"),
  onChangeText: text => console.log("text:", text),
};

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      loadedCookie: false
    };
  }

  setCookie(value){
    if (value == 200) {
      this.setState({ loggedIn: true, loadedCookie: true });
    }
  }

  GetLogin() {
    var username = this.email2Input.input._lastNativeText;
    var password = this.password2Input.input._lastNativeText;
    encodeData = base64.encode(`${username}:${password}`);
    console.log("Basic " + encodeData);
    fetch("https://vinova.unfuddle.com/api/v1/people/current.json", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Basic " + encodeData
      }
    }).then(response => this.setCookie(response.status));
    
    
    // .then((response) => response.json())
    // .then((responseData) => {
    //     console.log("inside responsejson");
    //     console.log('response object:',responseData); })
    // .done();
    // axiosInstance.get('/people/current')
    // .then((responseData) => {
    //   console.log("inside responsejson");
    //   console.log('response object:',responseData); })
    // .done();
  }
  // GetList(){
  //   fetch('https://vinova.unfuddle.com/api/v1/projects.json', {
  //   method: 'GET',
  //   headers: {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json',
  //     Authorization: "Basic YXZhZGFrZWRhdnJhOjEyMzEyMzEyMw==",
  //   }
  //   })
  //   .then((response) => response.json())
  //   .then((responseData) => {
  //       console.log("inside responsejson");
  //       console.log('response object:',responseData); })
  //   .done();
  // }

  render() {
    if (this.state.loadedCookie) {
      if (this.state.loggedIn) {
        return (
          <LoggedIn/>
        );
      }
    else {
      return (
        <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
          <View
            style={{
              backgroundColor: "rgba(46, 50, 72, 1)",
              width: SCREEN_WIDTH,
              alignItems: "center"
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 30,
                marginVertical: 10,
                fontWeight: "300"
              }}
            >
              Sign up
            </Text>
            <FormInput
              containerStyle={{
                borderRadius: 40,
                borderWidth: 1,
                borderColor: "rgba(110, 120, 170, 1)",
                height: 50,
                width: SCREEN_WIDTH - 50,
                marginVertical: 10
              }}
              icon={
                <MaterialIcon
                  name="email-outline"
                  color="rgba(110, 120, 170, 1)"
                  size={25}
                />
              }
              iconContainerStyle={{ marginLeft: 20 }}
              placeholder="Email"
              placeholderTextColor="rgba(110, 120, 170, 1)"
              inputStyle={{
                marginLeft: 10,
                color: "white"
              }}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardAppearance="light"
              keyboardType="email-address"
              returnKeyType="next"
              ref={input => (this.email2Input = input)}
              onSubmitEditing={() => {
                this.password2Input.focus();
              }}
              blurOnSubmit={false}
            />
            {/* <Input containerStyle={{ borderRadius: 40, borderWidth: 1, borderColor: "rgba(110, 120, 170, 1)", height: 50, width: SCREEN_WIDTH - 50, marginVertical: 10 }} icon={<MaterialIcon name="email-outline" color="rgba(110, 120, 170, 1)" size={25} />} iconContainerStyle={{ marginLeft: 20 }} placeholder="Email" placeholderTextColor="rgba(110, 120, 170, 1)" inputStyle={{ marginLeft: 10, color: "white" }} autoCapitalize="none" autoCorrect={false} keyboardAppearance="light" keyboardType="email-address" returnKeyType="next" ref={input => (this.email2Input = input)} onSubmitEditing={() => { this.password2Input.focus(); }} blurOnSubmit={false} /> */}
            <FormInput
              containerStyle={{
                borderRadius: 40,
                borderWidth: 1,
                borderColor: "rgba(110, 120, 170, 1)",
                height: 50,
                width: SCREEN_WIDTH - 50,
                marginVertical: 10
              }}
              icon={
                <SimpleIcon
                  name="lock"
                  color="rgba(110, 120, 170, 1)"
                  size={25}
                />
              }
              iconContainerStyle={{ marginLeft: 20 }}
              placeholder="Password"
              placeholderTextColor="rgba(110, 120, 170, 1)"
              inputStyle={{ marginLeft: 10, color: "white" }}
              autoCapitalize="none"
              keyboardAppearance="light"
              secureTextEntry={true}
              autoCorrect={false}
              keyboardType="default"
              returnKeyType="next"
              ref={input => (this.password2Input = input)}
              blurOnSubmit={false}
            />
            <Button
              text="Log in"
              loading={false}
              loadingProps={{ size: "small", color: "white" }}
              buttonStyle={{
                height: 50,
                width: 230,
                backgroundColor: "rgba(111, 202, 186, 1)",
                borderRadius: 5
              }}
              textStyle={{ fontWeight: "bold", fontSize: 23 }}
              containerStyle={{ marginVertical: 10 }}
              onPress={this.GetLogin.bind(this)}
              underlayColor="transparent"
            />
          </View>
        </ScrollView>
      );
    }
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#B46486'
  },
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22,
    fontWeight: 'bold'
  },
  contentView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  triangleLeft: {
    position: 'absolute',
    left: -20,
    bottom: 0,
    width: 0,
    height: 0,
    borderRightWidth: 20,
    borderRightColor: 'white',
    borderBottomWidth: 25,
    borderBottomColor: 'transparent',
    borderTopWidth: 25,
    borderTopColor: 'transparent'
  },
  triangleRight: {
    position: 'absolute',
    right: -20,
    top: 0,
    width: 0,
    height: 0,
    borderLeftWidth: 20,
    borderLeftColor: 'white',
    borderBottomWidth: 25,
    borderBottomColor: 'transparent',
    borderTopWidth: 25,
    borderTopColor: 'transparent'
  },
});

export default LoginScreen ;
