import React from 'react';
import { StyleSheet, Image, Text, View, ListView, RefreshControl, FlatList } from 'react-native';
import { WebBrowser } from 'expo';
import Touchable from 'react-native-platform-touchable';
import { Spinner } from './common/Spinner';
import axiosInstance from '../api/api';
import ProjectItem from '../components/ProjectItem';

export default class ProjectList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      projects: [],
      loading: false,
      refreshing: false,
    }
  }
  _onRefresh() {
    this.setState({refreshing: true});
    this.fetchData();
  }
  componentWillMount(){
    this.setState({loading: true})
    this.fetchData();
  }
  fetchData(){
    axiosInstance.get('/projects.json')
    .then(response => this.setState({projects: response.data, loading: false, refreshing: false}))
  }
  _keyExtractor = (item, index) => item.id;
  _renderItem = ({item}) => (
    <ProjectItem project={item}></ProjectItem>
  )
  render() {
    if(this.state.loading){
      return <Spinner size='small' />
    }
    return (
      <FlatList
        onRefresh={() => this._onRefresh()}
        refreshing={this.state.refreshing}
        data={this.state.projects}
        renderItem={this._renderItem}
        keyExtractor={this._keyExtractor}>
      </FlatList>
    );
  }

  _handlePress = () => {
    WebBrowser.openBrowserAsync('https://slack.expo.io');
  };
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
