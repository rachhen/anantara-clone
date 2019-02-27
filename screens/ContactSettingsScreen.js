import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

class ContactSettingsScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>ContactSettingsScreen</Text>
            </View>
        );
    }
}
export default ContactSettingsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});