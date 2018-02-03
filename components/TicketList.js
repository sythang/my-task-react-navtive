import React from 'react';
import { Text, View, ScrollView } from 'react-native';
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

  render() {
    console.log(this.state.ticket.groups);
    if(this.state.loading){
      return <Spinner size="small" />
    }
    return (
      <ScrollView>
        {this.renderTicketGroup()}
      </ScrollView>
    );
  }
}
