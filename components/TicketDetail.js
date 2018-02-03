import React, { Component } from 'react'
import { View, Text, StyleSheet, 
  Animated,
  Easing,
  PixelRatio, } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Touchable from 'react-native-platform-touchable';

export default class TicketDetail extends Component{
  

  render(){
    console.log(this.props)
    
    const touchableProps = {
      activeOpacity: 1,
      style: styles.touchable,
      underlayColor: '#F2F2F2',
    };

    return(
    //     <View style={styles.container}>
    //       <Ionicons name="ios-clipboard" size={22} color="#ccc" />
    //     <Text style={styles.text}>
    //       {this.props.ticket.summary}
    //     </Text>
    // </View>

    <Touchable
      key={this.props.ticket.id}
      style={styles.option}
      background={Touchable.Ripple('#ccc', false)}
      onPress={this._onPress}>
        <View style={styles.content}>
            <View style={[styles.text]}>
              <Text>{this.props.ticket.summary}</Text>
              <Text style={styles.title}>
                TItle
              </Text>
            </View>

            <View style={styles.right}>
              <Ionicons
                color='#999'
                name="ios-arrow-forward"
                size={20}
                style={styles.chevron}
              />
            </View>
          </View>
      </Touchable>
    )
  }
}
const styles = StyleSheet.create({
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#EDEDED',
  },
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  touchable: {
    backgroundColor: 'white',
  },
  base: {
    alignItems: 'stretch',
    backgroundColor: 'transparent',
    borderBottomColor: '#CCC',
    borderBottomWidth: 1 / PixelRatio.get(),
    flexDirection: 'row',
  },
  statusbarIcon: {
    backgroundColor: 'transparent',
    height: 34,
    left: 0,
    position: 'absolute',
    top: 10,
    width: 34,
  },

  // content
  content: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    flexDirection: 'row',
    flexGrow: 1,
    flexShrink: 1,
    padding: 17,
  },
  // content__past: {
  //   opacity: 0.5,
  // },
  text: {
    flexGrow: 1,
    flexShrink: 1,
    paddingRight: 12,
  },
  subtitle: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 14,
  },
  subtitleText: {
    color: '#666',
    flexShrink: 1,
    fontSize: 14,
    fontWeight: '300',
  },
  title: {
    color: '#383838',
    fontSize: 17,
  },

  // right (avatar and chevron)
  right: {
    alignItems: 'center',
    flexDirection: 'row',
    flexShrink: 0,
  },

  // chevron
  chevron: {
    marginLeft: 17,
  },
});
