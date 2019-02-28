import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    TextInput
} from "react-native";
import { Form, Item, Label, Input, Button, DatePicker } from 'native-base';
import KeyboardShiff from '../src/components/KeyboardShift';
import firebase from 'firebase';

class CreateAccountScreen extends Component {
    state = {
        firstName: '',
        lastName: '',
        phone: '',
        address: '',
        email: '',
        password: ''
    }
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: "Create Account",
            headerRight: (
                <TouchableOpacity style={{ marginEnd: 10 }} onPress={navigation.getParam('onCreateAccount')}>
                    <Text style={{ color: '#007AFF' }}>Create Account</Text>
                </TouchableOpacity>
            )
        }
    }

    onCreateAccount = () => {
        const { email, password, lastName, firstName, phone, address } = this.state;
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((authData) => {
                const database = firebase.database();
                database.ref(`/users/${authData.user.uid}`).set({
                    lastName,
                    firstName,
                    phone,
                    address
                }).then(() => {
                    firebase.database().ref('users/' + authData.uid).once('value').then(function (snapshot) {
                        let updatedUser = snapshot.val();
                    }).catch((err) => {
                        console.log(err);
                    });
                });
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    componentDidMount() {
        const { navigation } = this.props
        navigation.setParams({
            onCreateAccount: this.onCreateAccount,
        })
    }

    render() {
        return (
            <ScrollView>
                <KeyboardShiff>
                    {() => (
                        <View style={{ position: 'relative' }}>
                            <Form>
                                <Item stackedLabel>
                                    <Label>First Name</Label>
                                    <Input
                                        onChangeText={(firstName) => this.setState({ firstName })}
                                        value={this.state.firstName}
                                    />
                                </Item>
                                <Item stackedLabel>
                                    <Label>Last Name</Label>
                                    <Input
                                        onChangeText={(lastName) => this.setState({ lastName })}
                                        value={this.state.lastName}
                                    />
                                </Item>
                                <Item stackedLabel>
                                    <Label>Phone</Label>
                                    <Input
                                        keyboardType='numeric'
                                        onChangeText={(phone) => this.setState({ phone })}
                                        value={this.state.phone}
                                    />
                                </Item>
                                <Item stackedLabel>
                                    <Label>Address</Label>
                                    <Input
                                        onChangeText={(address) => this.setState({ address })}
                                    />
                                </Item>
                                <Item stackedLabel>
                                    <Label>Email</Label>
                                    <Input
                                        autoCapitalize='none'
                                        autoCorrect={false}
                                        onChangeText={(email) => this.setState({ email })}
                                        value={this.state.email}
                                    />
                                </Item>
                                <Item stackedLabel>
                                    <Label>Password</Label>
                                    <Input
                                        onChangeText={(password) => this.setState({ password })}
                                    />
                                </Item>
                            </Form>
                        </View>
                    )}
                </KeyboardShiff>
            </ScrollView>
        );
    }
}
export default CreateAccountScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start'
    }
});