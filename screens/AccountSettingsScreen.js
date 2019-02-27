import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

class AccountSettingsScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>AccountSettingsScreen</Text>
            </View>
        );
    }
}
export default AccountSettingsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});