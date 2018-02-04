import React from 'react';
import {
  AppRegistry,
  ScrollView,
  StyleSheet,
  View,
  Button,
  FlatList,
  Text
} from "react-native";
import ProjectList from '../components/ProjectList';
import { Spinner } from '../components/common/Spinner';
import Touchable from 'react-native-platform-touchable';
import { Ionicons } from '@expo/vector-icons';
import {AsyncStorage} from "react-native";
import base64 from 'base-64';
import axios from 'axios';


export default class ProjectsScreen extends React.Component {
  static navigationOptions = {
    title: 'Projects',
  };
  _onRefresh() {
    this.setState({refreshing: true});
    this.fetchData();
  }
  componentWillMount(){
    this.setState({loading: true})
    this.fetchData();
  }
  fetchData(){
    // axiosInstance.get('/projects.json')
    // .then(response => this.setState({projects: response.data, loading: false, refreshing: false}))
    AsyncStorage.getItem("access_token").then(value => {
      console.log(value);

      encodeData = base64.encode(value);
      var axiosInstance = axios.create({
      baseURL: 'https://vinova.unfuddle.com/api/v1',
      headers: {'Authorization':  `Basic ${encodeData}`}
      });
       axiosInstance.get('/projects.json')
        .then(response => this.setState({projects: response.data, loading: false, refreshing: false}))
    }).then(res => {
      console.log(res);
    });
  }
  _keyExtractor = (item, index) => item.id;
  _renderItem = ({item}) => (
    <Touchable
      key={item.id}
      style={styles.option}
      background={Touchable.Ripple('#ccc', false)}
      onPress= {() => this.props.navigation.navigate('ProjectDetail',{projectID: item.id})}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.optionIconContainer}>
          <Ionicons name="ios-clipboard" size={22} color="#ccc" />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>
          {item.title}
          </Text>
        </View>
      </View>
    </Touchable>
  )
  render() {
    if(this.state.loading){
      return <Spinner size='small' />
    }
    return (
      <View>
        <FlatList
          onRefresh={() => this._onRefresh()}
          refreshing={this.state.refreshing}
          data={this.state.projects}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}>
        </FlatList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
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
  }
});
AppRegistry.registerComponent("SimpleApp", () => SimpleApp);
