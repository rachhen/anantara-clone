import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    StatusBar
} from "react-native";

class MyStaysScreen extends Component {
    static navigationOptions = {
        headerTitle: "My Stays"
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="blue" barStyle="light-content" />
                <Text>MyStaysScreen</Text>
            </View>
        );
    }
}
export default MyStaysScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});