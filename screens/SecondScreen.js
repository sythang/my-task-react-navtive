import React from "react";
import {
  Platform,
  StatusBar,
  ScrollView,
  StyleSheet,
  Text,
  AsyncStorage,
  View
} from "react-native";
import { AppLoading, Asset, Font } from "expo";
import RootNavigation from "../navigation/RootNavigation";
// import axiosInstance from "../api/api";

export default class SecondScreen extends React.Component {
    state = {
        isLoadingComplete: true,
    };
    constructor(){
        super()
        // value = AsyncStorage.getItem("ACCESS_TOKEN");
        // console.log('zxc');
        // console.log(value);
    }
    
    render() {
        if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
            return <AppLoading startAsync={this._loadResourcesAsync} onError={this._handleLoadingError} onFinish={this._handleFinishLoading} />;
        } else {
            return <View style={styles.container}>
                {Platform.OS === "ios" && <StatusBar barStyle="default" />}
                {Platform.OS === "android" && <View style={styles.statusBarUnderlay} />}
                <RootNavigation />
            </View>;
        }
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: "rgba(0,0,0,0.2)"
  }
});