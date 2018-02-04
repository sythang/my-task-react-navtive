import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  PixelRatio
} from 'react-native';
import { WebBrowser } from 'expo';
import { TicketList } from '../components/TicketList';
import { Spinner } from '../components/common/Spinner';
import Touchable from 'react-native-platform-touchable';
import {AsyncStorage} from "react-native";
import base64 from 'base-64';
import axios from 'axios';

export default class HomeScreen extends React.Component {
  // static navigationOptions = {
  //   title: 'Activity',
  // };
  state = {
    ticket: {},
    loading: false,
  };

  componentWillMount(){
    
    console.log("=====")
    this.setState({loading: true})
    AsyncStorage.getItem("access_token").then(value => {
      console.log(value);

      encodeData = base64.encode(value);
      var axiosInstance = axios.create({
      baseURL: 'https://vinova.unfuddle.com/api/v1',
      headers: {'Authorization':  `Basic ${encodeData}`}
      });
      axiosInstance.get('/ticket_reports/4/generate.json')
        .then(response => this.setState({ ticket: response.data, loading: false}));
    }).then(res => {
      console.log(res);
    });
    
    // console.log(access_token);
    // encodeData = base64.encode(access_token);
    // var axiosInstance = axios.create({
      // baseURL: 'https://vinova.unfuddle.com/api/v1',
      // headers: {'Authorization':  `Basic ${encodeData}`}
    // });
    // axiosInstance.get('/ticket_reports/4/generate.json')
      // .then(response => this.setState({ ticket: response.data, loading: false}));
  }
  _onPress = () => {
    this.props.navigation.navigate('Ticket')
  }
  renderTicketGroup = () =>{
    console.log(this.state.ticket);
    return this.state.ticket.groups.map(group => 
      <View key={group.title}>
        <View style={styles.base}>
          <View style={[styles.content, styles.content__lightning]}>
            <Text style={[styles.text]}>
              <Text style={styles.title}>{group.title}</Text>
            </Text>
          </View>
        </View>
        { group.tickets.map((ticket) => 
          <Touchable
          key={ticket.id}
          style={styles.option}
          background={Touchable.Ripple('#ccc', false)}
          onPress={() => this.props.navigation.navigate('Ticket',{ticketID: ticket.id, projectID: ticket.project_id})}>
            <View style={styles.container}>
              <View style={styles.section}>
                <View style={styles.thumnailContainerStyle}>
                  <Image
                    style={styles.thumnailStyle}
                    source={require('../assets/images/robot-dev.png')
                    }/>
                </View>
                <View style={styles.headerContentStyle}>
                  <Text>{ticket.summary}</Text>
                  <Text>Status: <Text style={[styles.status, styles['status__'+ticket.status]]}>{ticket.status}</Text></Text>
                </View>
              </View>
            </View>
          </Touchable>
        )}
        
      </View>
    );
   }
  render() {
    if(this.state.loading){
      return <Spinner size="small" />
    }
    return (
      <View style={styles.container}>
        <ScrollView>
          {this.renderTicketGroup()}
      </ScrollView>
      </View>
    );
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  base: {
    alignItems: 'stretch',
    backgroundColor: '#fbfbfb',
    borderBottomColor: '#CCC',
    borderBottomWidth: 1 / PixelRatio.get(),
    flexDirection: 'row',
  },
  content: {
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    flexGrow: 1,
    height: 44,
    justifyContent: 'center',
  },
  content__lightning: {
    height: 32,
  },
  text: {
    backgroundColor: 'transparent',
    color: '#383838',
    fontSize: 14,
    fontWeight: '300',
  },
  text__past: {
    color: '#999',
  },
  title: {
    fontWeight: '500',
  },
  canvasContainer:{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  option: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#EDEDED',
  },
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    marginVertical: 5
  },
  section:{
    padding: 15,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  },
  thumnailStyle:{
    height: 50,
    width: 50,
  },
  thumnailContainerStyle:{
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  headerContentStyle:{
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  status: {
    color: '#fff',
    backgroundColor: '#00bbbb',
    padding: 2
  },
  status__Resolved:{
    backgroundColor: '#ee9900',    
  },
  status__Accepted:{
    backgroundColor: '#bbbb00',    
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  touchable: {
    backgroundColor: 'white',
  },
  base: {
    alignItems: 'stretch',
    backgroundColor: 'transparent',
    borderBottomColor: '#CCC',
    borderBottomWidth: 1 / PixelRatio.get(),
    flexDirection: 'row',
  },
  statusbarIcon: {
    backgroundColor: 'transparent',
    height: 34,
    left: 0,
    position: 'absolute',
    top: 10,
    width: 34,
  },

  // content
  content: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    flexDirection: 'row',
    flexGrow: 1,
    flexShrink: 1,
    padding: 17,
  },
  // content__past: {
  //   opacity: 0.5,
  // },
  text: {
    flexGrow: 1,
    flexShrink: 1,
    paddingRight: 12,
  },
  subtitle: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 14,
  },
  subtitleText: {
    color: '#666',
    flexShrink: 1,
    fontSize: 14,
    fontWeight: '300',
  },
  title: {
    color: '#383838',
    fontSize: 17,
  },

  // right (avatar and chevron)
  right: {
    alignItems: 'center',
    flexDirection: 'row',
    flexShrink: 0,
  },

  // chevron
  chevron: {
    marginLeft: 17,
  },
});
