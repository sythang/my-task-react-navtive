import React from 'react';
import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  AppRegistry,
  AsyncStorage,
  Navigator
} from "react-native";
import { AppLoading, Asset, Font } from 'expo';
// import { Ionicons } from '@expo/vector-icons';
import RootNavigation from './navigation/RootNavigation';
import LoginScreen from "./screens/LoginScreen.js";
import SecondScreen from "./screens/SecondScreen.js";
import { StackNavigator } from "react-navigation";
import GetListTickets from './screens/GetListTickets.js';

const RootStack = StackNavigator(
  {
    LoginScreen: {
      screen: LoginScreen
    },
    App: {
      screen: SecondScreen
    }
  },
  {
    headerMode: 'none',
    initialRouteName: "LoginScreen"
  }
);



export default class App extends React.Component {
  state = {
    is_login: "false",
    isLoadingComplete: false,
  };
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <RootStack />
    )
    // return (
    //   // <View style={styles.container}>
    //   //   <NavigationExperimental.Navigator initialRoute={{ name: "root" }} renderScene={this.renderScene.bind(this)} />
    //   // </View>
    //   <View style={styles.container}>
    //     <LoginScreen/>
    //   </View>
    // )
    // return (
    //   <LoginScreen/>
    // )
    // if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
    //   return (
    //     <AppLoading
    //       startAsync={this._loadResourcesAsync}
    //       onError={this._handleLoadingError}
    //       onFinish={this._handleFinishLoading}
    //     />
    //   );
    // } else {
    //   return (
    //     <View style={styles.container}>
    //       {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
    //       {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}
    //       <RootNavigation />
    //     </View>
    //   );
    // }
  }
  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});

