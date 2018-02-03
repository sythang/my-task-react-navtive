import React, { Component } from 'react'
import { View, Text, StyleSheet, 
  Animated,
  Easing,
  PixelRatio,
  Image, } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Touchable from 'react-native-platform-touchable';
import { StackNavigator } from 'react-navigation';

export default class TicketDetail extends Component{
  
  _onPress(){
    console.log("Press");
  }
  render(){
    const touchableProps = {
      activeOpacity: 1,
      style: styles.touchable,
      underlayColor: '#F2F2F2',
    };
    let ticket = this.props.ticket;
    return(
    <Touchable
      key={this.props.ticket.id}
      style={styles.option}
      background={Touchable.Ripple('#ccc', false)}
      onPress={this._onPress}>
        <View style={styles.container}>
          <View style={styles.section}>
            <View style={styles.thumnailContainerStyle}>
              <Image
                style={styles.thumnailStyle}
                source={require('../assets/images/robot-dev.png')
                }/>
            </View>
            <View style={styles.headerContentStyle}>
              <Text>{ticket.summary}</Text>
              <Text>Status: <Text style={[styles.status, styles['status__'+ticket.status]]}>{ticket.status}</Text></Text>
            </View>
          </View>
        </View>
      </Touchable>
    )
  }
}
const styles = StyleSheet.create({
  option: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#EDEDED',
  },
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    marginVertical: 5
  },
  section:{
    padding: 15,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  },
  thumnailStyle:{
    height: 50,
    width: 50,
  },
  thumnailContainerStyle:{
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  headerContentStyle:{
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  status: {
    color: '#fff',
    backgroundColor: '#00bbbb',
    padding: 2
  },
  status__Resolved:{
    backgroundColor: '#ee9900',    
  },
  status__Accepted:{
    backgroundColor: '#bbbb00',    
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
