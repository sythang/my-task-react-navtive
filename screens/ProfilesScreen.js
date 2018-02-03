import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions
} from "react-native";
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
    return <View style={{ flex: 1 }}>
      {this.state.fontLoaded ? <View style={{ flex: 1, backgroundColor: "rgba(47,44,60,1)" }}>
          <View style={styles.statusBar} />
          <View style={styles.navBar}>
            <Text style={styles.nameHeader}>
              {this.state.profiles.username}
            </Text>
          </View>
          <ScrollView style={{ flex: 1 }}>
            <View style={{ flex: 1, marginTop: 30 }}>
              <Text style={{ flex: 1, fontSize: 15, color: "rgba(216, 121, 112, 1)", marginLeft: 40 }}>
                General
              </Text>
              <View style={{ flex: 1, flexDirection: "row", marginTop: 20, marginHorizontal: 30 }}>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <View>
                    <Text style={styles.infoTypeLabel}>Email</Text>
                    <Text style={styles.infoTypeLabel}>First Name</Text>
                    <Text style={styles.infoTypeLabel}>Last Name</Text>
                    <Text style={styles.infoTypeLabel}>Time Zone</Text>
                    <Text style={styles.infoTypeLabel}>Text Format:	</Text>
                  </View>
                  <View style={{marginLeft: 10 }}>
                    <Text style={styles.infoAnswerLabel}>{this.state.profiles.email}</Text>
                    <Text style={styles.infoAnswerLabel}>{this.state.profiles.first_name}</Text>
                    <Text style={styles.infoAnswerLabel}>{this.state.profiles.last_name}</Text>
                    <Text style={styles.infoAnswerLabel}>{this.state.profiles.time_zone}</Text>
                    <Text style={styles.infoAnswerLabel}>{this.state.profiles.text_markup}</Text>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View> : 
        <View style={{ flex: 1, backgroundColor: "rgba(47,44,60,1)" }}>
          <View style={styles.statusBar} />
          <View style={styles.navBar}>
            <Text style={styles.nameHeader}>
              Loading...
            </Text>
          </View>
        </View>
        }
    </View>;
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
    color: "white",
    fontSize: 22,
    textAlign: "center"
  },
  infoTypeLabel: {
    fontSize: 15,
    textAlign: "right",
    color: "rgba(126,123,138,1)",
    paddingBottom: 10
  },
  infoAnswerLabel: {
    fontSize: 15,
    color: "white",
    paddingBottom: 10
  }
});