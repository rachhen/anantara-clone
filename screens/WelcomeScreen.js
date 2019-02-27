import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    KeyboardAvoidingView,
    ActivityIndicator,
    TextInput,
    Keyboard
} from "react-native";
import { Button, Form, Item, Input, Label } from 'native-base';
import firebase from 'firebase';

class WelcomeScreen extends Component {

    state = {
        email: '',
        password: '',
        loading: false,
        errorMessage: ''
    }

    static navigationOptions = {
        header: null
    }

    Login = () => {
        const { email, password } = this.state;
        this.setState({ loading: true });
        var self = this;
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(function (error) {
                self.setState({ loading: false, errorMessage: 'Username or Password incorrect.' });
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
                // console.log(errorCode, errorMessage);
                console.log(error);
            });
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <Form style={{ marginRight: 15 }}>
                    <Item stackedLabel>
                        <Label>Email</Label>
                        <Input
                            autoCapitalize='none'
                            onChangeText={(email) => this.setState({ email })}
                            value={this.state.email}
                            returnKeyType='next'
                        />
                    </Item>
                    <Item stackedLabel last>
                        <Label>Password</Label>
                        <Input
                            secureTextEntry
                            onChangeText={(password) => this.setState({ password })}
                            value={this.state.password}
                        />
                    </Item>
                </Form>
                <View style={{ marginHorizontal: 15, marginTop: 15 }}>
                    <Text style={{ color: 'red' }}>{this.state.errorMessage}</Text>
                </View>
                <View style={{ margin: 15 }}>
                    <Button block warning onPress={this.Login} disabled={this.state.loading}>
                        {
                            this.state.loading ?
                                <ActivityIndicator size="small" color="white" />
                                :
                                <Text style={{ color: 'white' }}>Login</Text>
                        }
                    </Button>
                    <Button block style={{ marginTop: 15 }} warning onPress={() => this.props.navigation.navigate('CreateAccount')}>
                        <Text style={{ color: 'white' }}>Create Account</Text>
                    </Button>
                </View>
            </KeyboardAvoidingView>
        );
    }
}
export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }
});