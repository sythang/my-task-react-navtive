import React from 'react';
import { ScrollView, StyleSheet, Text, View, PixelRatio, Image, FlatList } from 'react-native';
import { Spinner } from '../components/common/Spinner';
import Touchable from "react-native-platform-touchable";
import { Ionicons } from "@expo/vector-icons";
import {AsyncStorage} from "react-native";
import base64 from 'base-64';
import axios from 'axios';

export default class ProjectDetailScreen extends React.Component {
  static navigationOptions = {
    title: 'Milestone',
  };
  state={
    loading: false
  }
  componentWillMount(){
    const { params } = this.props.navigation.state;
    const ticketID = params ? params.ticketID : null;
    const projectID = params ? params.projectID : null;
    this.setState({loading: true});

    AsyncStorage.getItem("access_token").then(value => {
      // console.log(value);

      encodeData = base64.encode(value);
      var axiosInstance = axios.create({
      baseURL: 'https://vinova.unfuddle.com/api/v1',
      headers: {'Authorization':  `Basic ${encodeData}`}
      });
      axiosInstance.get(`projects/${projectID}/milestones.json`)
        .then(response => this.setState({ milestones: response.data, loading: false}));
    }).then(res => {
      // console.log(res);
    });
  }
  _onPress = () => {
    this.props.navigation.navigate('AllTicket')
  }
  _keyExtractor = (item, index) => item.id;
  _renderItem = ({item}) => (
    <Touchable
      key={item.id}
      style={styles.option}
      background={Touchable.Ripple('#ccc', false)}
      onPress= {() => this.props.navigation.navigate('AllTicket',{projectID: item.project_id, milID: item.id})}>
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
          data={this.state.milestones}
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
    backgroundColor: "#fff"
  },
  optionsTitleText: {
    fontSize: 16,
    marginLeft: 15,
    marginTop: 9,
    marginBottom: 12
  },
  optionIconContainer: {
    marginRight: 9
  },
  option: {
    backgroundColor: "#fdfdfd",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#EDEDED"
  },
  optionText: {
    fontSize: 15,
    marginTop: 1
  },
  optionsTitleText: {
    fontSize: 16,
    marginLeft: 15,
    marginTop: 9,
    marginBottom: 12
  },
  optionIconContainer: {
    marginRight: 9
  },
  option: {
    backgroundColor: "#fdfdfd",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#EDEDED"
  },
  optionText: {
    fontSize: 15,
    marginTop: 1
  }
});
