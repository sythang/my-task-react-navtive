import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class TaskDetail extends Component {
  render(){
    return(
      <View>
        <Text>{this.props.album.title}</Text>
        <Image
          style={{width: 200, height: 200}}
          source={{uri: this.props.album.image}}
        />
      </View>
    )
  }
}

var styles = StyleSheet.create({
  canvasContainer:{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
})