import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableHighlight
} from "react-native";
import Icon from '@expo/vector-icons/Ionicons';
import firebase from 'firebase';

class SettingsScreen extends Component {
    static navigationOptions = {
        headerTitle: 'Settings'
    }

    state = {
        fullName: ''
    }

    onAccountPress = () => {
        this.props.navigation.navigate('AccountSettings');
    }
    onContactPress = () => {
        this.props.navigation.navigate('ContactSettings');
    }
    onLogoutPress = () => {
        firebase.auth().signOut();
    }
    componentDidMount() {
        let self = this;
        const { currentUser } = firebase.auth();

        firebase.database().ref('users/' + currentUser.uid).once('value').then(function (snapshot) {
            let updatedUser = snapshot.val();
            console.log(updatedUser);
            self.setState({ fullName: `${updatedUser.firstName} ${updatedUser.lastName}` });
        }).catch((err) => {
            console.log(err);

        });
    }
    render() {
        return (
            <ScrollView>
                <View style={styles.containerList}>
                    <View style={{ flex: 1 }}>
                        <TouchableHighlight
                            style={{ padding: 10, paddingStart: 30 }}
                            onPress={this.onAccountPress}
                            underlayColor="#ffedcc"
                        >
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Icon name="ios-person" size={20} />
                                    <Text style={{ marginLeft: 10 }}>Account</Text>
                                </View>
                                <View style={{ flexDirection: 'row', position: 'absolute', right: 0 }}>
                                    <Text style={{ marginRight: 10 }}>{this.state.fullName}</Text>
                                    <Icon name="ios-arrow-forward" size={20} />
                                </View>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <View style={{ borderBottomColor: '#ffedcc', borderBottomWidth: 1, marginLeft: 55 }}></View>
                    <View style={{ flex: 1 }}>
                        <TouchableHighlight
                            style={{ padding: 10, paddingLeft: 30 }}
                            onPress={this.onContactPress}
                            underlayColor="#ffedcc"
                        >
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Icon name="ios-call" size={20} />
                                    <Text style={{ marginLeft: 10 }}>Contact</Text>
                                </View>
                                <View style={{ flexDirection: 'row', position: 'absolute', right: 0 }}>
                                    <Icon name="ios-arrow-forward" size={20} />
                                </View>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={styles.containerList}>
                    <View style={{ flex: 1 }}>
                        <TouchableHighlight
                            style={{ padding: 10, paddingHorizontal: 30 }}
                            onPress={this.onLogoutPress}
                            underlayColor="#ffedcc"
                        >
                            <View style={{ flexDirection: 'row' }}>
                                <Icon name="ios-log-out" size={20} />
                                <Text style={{ marginLeft: 10 }}>Logout</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
            </ScrollView>
        );
    }
}
export default SettingsScreen;

const styles = {
    containerList: {
        flex: 1,
        marginTop: 30,
        borderTopWidth: 1,
        borderTopColor: '#ffedcc',
        borderWidth: 1,
        borderBottomColor: '#ffedcc',
        borderEndWidth: 0,
        borderStartWidth: 0
    }
}