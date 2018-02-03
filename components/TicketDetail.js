import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class TicketDetail extends Component{
  render(){
    console.log(this.props)
    return(
      <Text>{this.props.ticket.summary}</Text>
    )
  }
}