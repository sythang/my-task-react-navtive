import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import axios from 'axios';
import axiosInstance from '../api/api';

import TaskDetail from '../components/TaskDetail';
export class TaskList extends React.Component {
  state = {
    albums: []
  };
  componentWillMount(){
    axiosInstance.get('/ticket_reports/4/generate.json')
      .then(response => this.setState({ tickets: response.data}));
  }

  renderAlbums(){
   return this.state.albums.map(album => <TaskDetail key={album.title} album={album} />);
  }
  render() {
    console.log(this.state);
    return (
      <ScrollView>
        <Text>Project 1</Text>
        <Text>Project 1</Text>
      </ScrollView>
    );
  }
}
