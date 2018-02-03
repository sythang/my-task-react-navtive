import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  SectionList
} from "react-native";
import { Constants } from "expo";
import {AsyncStorage} from "react-native";
import base64 from 'base-64';
import axios from 'axios';

const SCREEN_WIDTH = Dimensions.get("window").width;

export default class ProfilesScreen extends React.Component {
  static navigationOptions = {
    title: 'My Profile',
  };
  state = { fontLoaded: false };
  componentWillMount() {
    AsyncStorage.getItem("access_token").then(value => {
      console.log(value);

      encodeData = base64.encode(value);
      var axiosInstance = axios.create({
      baseURL: 'https://vinova.unfuddle.com/api/v1',
      headers: {'Authorization':  `Basic ${encodeData}`}
      });
      axiosInstance
        .get("/people/current.json")
        .then(response =>
          this.setState({ profiles: response.data, fontLoaded: true })
        );
    }).then(res => {
      console.log(res);
    });
    
  }
  render() {
    return <View style={{ flex: 1, backgroundColor: "white" }}>
        {this.state.fontLoaded ? <View style={{ flex: 1 }}>
            {/* <View style={styles.statusBar} /> */}
            <View style={styles.navBar}>
              <Text style={styles.nameHeader}>
                {this.state.profiles.username.toUpperCase()}
              </Text>
            </View>
            <ScrollView style={{ flex: 1 }}>
              <View style={{ flex: 1, marginTop: 10 }}>
                <View style={styles.sectionHeaderContainer}>
                  <Text style={styles.sectionHeaderText}>Email</Text>
                </View>
                <View style={styles.sectionContentContainer}>
                  <Text>{this.state.profiles.email}</Text>
                </View>
                <View style={styles.sectionHeaderContainer}>
                  <Text style={styles.sectionHeaderText}>First Name</Text>
                </View>
                <View style={styles.sectionContentContainer}>
                  <Text>{this.state.profiles.first_name}</Text>
                </View>
                <View style={styles.sectionHeaderContainer}>
                  <Text style={styles.sectionHeaderText}>Last Name</Text>
                </View>
                <View style={styles.sectionContentContainer}>
                  <Text>{this.state.profiles.last_name}</Text>
                </View>
                <View style={styles.sectionHeaderContainer}>
                  <Text style={styles.sectionHeaderText}>Time Zone</Text>
                </View>
                <View style={styles.sectionContentContainer}>
                  <Text>{this.state.profiles.time_zone}</Text>
                </View>
                <View style={styles.sectionHeaderContainer}>
                  <Text style={styles.sectionHeaderText}>Text Format</Text>
                </View>
                <View style={styles.sectionContentContainer}>
                  <Text>{this.state.profiles.text_markup}</Text>
                </View>
              </View>
            </ScrollView>
          </View> : <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style={styles.statusBar} />
            <View style={styles.navBar}>
              <Text style={styles.nameHeader}>Loading...</Text>
            </View>
          </View>}
      </View>;
    // return <ExpoConfigView />;
    // return (<View style={styles.sectionHeaderContainer}>
    //   <Text style={styles.sectionHeaderText}>
    //     qw
    //   </Text>
    // </View>);
    // return <View>
        
    //   </View>;
  }
  
}
const styles = StyleSheet.create({
  statusBar: {
    height: 10
  },
  navBar: {
    height: 60,
    width: SCREEN_WIDTH,
    justifyContent: "center",
    alignContent: "center"
  },
  nameHeader: {
    color: "#DD3645",
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold"
  },
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  sectionHeaderContainer: {
    backgroundColor: "#fbfbfb",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#ededed"
  },
  sectionHeaderText: {
    fontSize: 14,
    fontWeight: "bold"
  },
  sectionContentContainer: {
    paddingTop: 8,
    paddingBottom: 12,
    paddingHorizontal: 15
  }
});