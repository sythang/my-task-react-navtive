import React from 'react';
import { Text, View, ScrollView, Button } from 'react-native';
import { Spinner } from './common/Spinner';
import axiosInstance from '../api/api';

import TicketGroup from '../components/TicketGroup';
export class TicketList extends React.Component {
  state = {
    ticket: {},
    loading: false,
  };
  componentWillMount(){
    this.setState({loading: true})
    axiosInstance.get('/ticket_reports/4/generate.json')
      .then(response => this.setState({ ticket: response.data, loading: false}));
  }

  renderTicketGroup(){
   return this.state.ticket.groups.map(group => <TicketGroup key={group.title} group={group} />);
  }
  onPress =() => {
    this.props.navigation.navigate("Ticket")
  }
  render() {
    console.log(this.props);
    if(this.state.loading){
      return <Spinner size="small" />
    }
    return (
      <View>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Ticket')}
        />
      <ScrollView>
        {this.renderTicketGroup()}
        <Button
          title="Go to Details"
          onPress={this.onPress()}
        />
      </ScrollView>
      </View>
    );
  }
}
