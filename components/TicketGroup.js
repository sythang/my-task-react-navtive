import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, PixelRatio } from 'react-native';
import TicketDetail from '../components/TicketDetail';

export default class TicketGroup extends Component {
  
  renderTickets(){
    var group = this.props.group;
    return group.tickets.map((ticket) => <TicketDetail navigation={this.props.navigation} key={ticket.id} ticket={ticket} />)
  }
  render(){
   
    return(
      <View>
        <View style={styles.base}>
          <View style={[styles.content, styles.content__lightning]}>
            <Text style={[styles.text]}>
              <Text style={styles.title}>{this.props.group.title}</Text>
            </Text>
          </View>
        </View>
        {this.renderTickets()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  base: {
    alignItems: 'stretch',
    backgroundColor: '#fbfbfb',
    borderBottomColor: '#CCC',
    borderBottomWidth: 1 / PixelRatio.get(),
    flexDirection: 'row',
  },
  content: {
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    flexGrow: 1,
    height: 44,
    justifyContent: 'center',
  },
  content__lightning: {
    height: 32,
  },
  text: {
    backgroundColor: 'transparent',
    color: '#383838',
    fontSize: 14,
    fontWeight: '300',
  },
  text__past: {
    color: '#999',
  },
  title: {
    fontWeight: '500',
  },
  canvasContainer:{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});