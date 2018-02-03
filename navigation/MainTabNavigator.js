import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom, StackNavigator } from 'react-navigation';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import ProjectsScreen from '../screens/ProjectsScreen';
import ProfilesScreen from '../screens/ProfilesScreen';
import TicketScreen from '../screens/TicketScreen';
import ProjectDetailScreen from '../screens/ProjectDetail';

const HomeStack = StackNavigator({
  Home: { screen: HomeScreen, navigationOptions: {title: "Activity"} },
  Ticket: { screen: TicketScreen}
  },{
    //  headerMode: 'none',
     initialRouteName: 'Home',
  })

const ProjectStack = StackNavigator({
  Projects: {screen: ProjectsScreen},
  ProjectDetail: { screen: ProjectDetailScreen}
})
export default TabNavigator(
  {
    Home: {
      screen: HomeStack,
    },
    Projects: {
      screen: ProjectStack,
    },
    Profiles: {
      screen: ProfilesScreen,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      headerTitleStyle: {
        fontWeight: 'normal',
      },
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName =
              Platform.OS === 'ios'
                ? `ios-home${focused ? '' : '-outline'}`
                : 'md-home';
            break;
          case 'Projects':
            iconName = Platform.OS === 'ios' 
              ? `ios-git-merge${focused ? '' : '-outline'}` 
              : 'md-link';
            break;
          case 'Profiles':
            iconName =
              Platform.OS === 'ios' ? `ios-contact${focused ? '' : '-outline'}` : 'md-options';
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);
