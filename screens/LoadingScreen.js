import React, { Component } from "react";
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import firebase from 'firebase';

export default class Loading extends Component {
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? 'Home' : 'Welcome');
            // console.log(user);
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator color='orange' size="large" />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});