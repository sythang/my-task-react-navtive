import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import { Ionicons } from '@expo/vector-icons';

export default class ProjectItem extends Component {
  _onPress = () => {
    console.log("On Press");
  } 
  render(){
    return(
      <Touchable
        key={this.props.project.id}
        style={styles.option}
        background={Touchable.Ripple('#ccc', false)}
        onPress={this._onPress}>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.optionIconContainer}>
            <Ionicons name="ios-clipboard" size={22} color="#ccc" />
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>
            {this.props.project.title}
            </Text>
          </View>
        </View>
      </Touchable>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
  optionsTitleText: {
    fontSize: 16,
    marginLeft: 15,
    marginTop: 9,
    marginBottom: 12,
  },
  optionIconContainer: {
    marginRight: 9,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#EDEDED',
  },
  optionText: {
    fontSize: 15,
    marginTop: 1,
  },
});
