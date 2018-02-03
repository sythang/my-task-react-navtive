import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import TicketDetail from '../components/TicketDetail';

export default class TicketGroup extends Component {
  
  renderTickets(){
    var group = this.props.group;
    return group.tickets.map((ticket) => <TicketDetail key={ticket.id} ticket={ticket} />)
  }
  render(){
   
    return(
      <View>
        <Text>{this.props.group.title}</Text>
        <View>
          {this.renderTickets()}
        </View>
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