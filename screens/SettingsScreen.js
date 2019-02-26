import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";

class SettingsScreen extends Component {
    static navigationOptions = {
        headerTitle: 'Settings'
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>SettingsScreen</Text>
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
            </View>
        );
    }
}
export default SettingsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});