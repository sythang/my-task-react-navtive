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
import axiosInstance from "../api/api";
const SCREEN_WIDTH = Dimensions.get("window").width;

export default class ProfilesScreen extends React.Component {
  static navigationOptions = {
    title: 'My Profile',
  };
  state = { fontLoaded: false };
  componentWillMount() {
    axiosInstance
      .get("/people/current.json")
      .then(response =>
        this.setState({ profiles: response.data, fontLoaded: true })
      );
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