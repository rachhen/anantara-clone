import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

class PastStaysScreen extends Component {
    static navigationOptions = {
        headerTitle: 'Past Stays'
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>PastStaysScreen</Text>
            </View>
        );
    }
}
export default PastStaysScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});