import React from 'react';
import { ScrollView, StyleSheet, Text, View, PixelRatio } from 'react-native';
import {AsyncStorage} from "react-native";
import base64 from 'base-64';
import axios from 'axios';
import { Spinner } from '../components/common/Spinner';
export default class TicketScreen extends React.Component {
  static navigationOptions = {
    title: 'Ticket',
  };
  state={
    loading: false,
    ticket: {}
  }
  componentWillMount(){
    const { params } = this.props.navigation.state;
    const ticketID = params ? params.ticketID : null;
    const projectID = params ? params.projectID : null;
    this.setState({loading: true});

    AsyncStorage.getItem("access_token").then(value => {
      console.log(value);

      encodeData = base64.encode(value);
      var axiosInstance = axios.create({
      baseURL: 'https://vinova.unfuddle.com/api/v1',
      headers: {'Authorization':  `Basic ${encodeData}`}
      });
      axiosInstance.get(`projects/${projectID}/tickets/${ticketID}.json`)
        .then(response => this.setState({ ticket: response.data, loading: false}));
    }).then(res => {
      console.log(res);
    });
  }
  render() {
    if(this.state.loading){
      return <Spinner size="small" />
    }
    let ticket = this.state.ticket;
    console.log(ticket);
    let milestone = ticket.milestone[0];
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.ticketSummary}>{ticket.summary}</Text>
          <Text style={styles.ticketSubtitle}>{milestone.title}</Text>
        </View>
        <View style={styles.description}>
          <Text>{ticket.description}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    padding: 10,
    backgroundColor: '#fff',
  },
  headerContainer: {
    borderBottomColor: '#CCC',
    borderBottomWidth: 1 / PixelRatio.get(),
  },
  ticketSummary: {
    fontSize: 17,
    paddingBottom: 5
  },
  ticketSubtitle: {
    fontSize: 13
  },
  description:{
    
  }
});
