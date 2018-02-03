import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default class ProjectDetailScreen extends React.Component {
  render() {
    return (

      // <ScrollView style={styles.container}>
      //   {/* Go ahead and delete ExpoLinksView and replace it with your
      //      * content, we just wanted to provide you with some helpful links */}
      //   <ProjectList />
      // </ScrollView>
      <Text>Ticket</Text>
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
