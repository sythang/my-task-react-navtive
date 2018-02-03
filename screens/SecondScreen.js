import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";

export default class SecondScreen extends React.Component {
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

