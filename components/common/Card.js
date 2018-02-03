import React from 'react';
import { View, StyleSheet } from 'react-native';


const Card = () => {
  return(
    <View style={styles.containerStyle}></View>
  )
}

const styles = StyleSheet.create({
  containerStyle:{
    borderWidth: 1,
    borderRadis: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    marginVertical: 5
  }
})