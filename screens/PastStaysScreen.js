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
                <Text style={{ fontWeight: 'bold' }}>No Past stays</Text>
                <Text>You haven't got any past hotel booking yet.</Text>
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