import React from 'react';
import { ScrollView, StyleSheet, View, Button } from 'react-native';
import ProjectList from '../components/ProjectList';

export default class ProjectsScreen extends React.Component {
  static navigationOptions = {
    title: 'Projects',
  };

  render() {
    return (
      <View>
      <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('ProjectDetail')}
        />
      <ProjectList />
      </View>
      // <ScrollView style={styles.container}>
      //   {/* Go ahead and delete ExpoLinksView and replace it with your
      //      * content, we just wanted to provide you with some helpful links */}
      //   <ProjectList />
      // </ScrollView>
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
