import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default class TicketScreen extends React.Component {
  static navigationOptions = {
    title: 'Ticket',
  };

  render() {
    return (

      // <ScrollView style={styles.container}>
      //   {/* Go ahead and delete ExpoLinksView and replace it with your
      //      * content, we just wanted to provide you with some helpful links */}
      //   <ProjectList />
      // </ScrollView>
      <View style={styles.container}>
      
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
});