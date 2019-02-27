import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    KeyboardAvoidingView,
} from "react-native";
import { Button, Form, Item, Input, Label, Spinner } from 'native-base';
import firebase from 'firebase';

class WelcomeScreen extends Component {

    state = {
        username: '',
        password: '',
        loading: false
    }

    static navigationOptions = {
        header: null
    }

    Login = () => {
        console.log(this.state);
        const { username, password } = this.state;
        this.setState({ loading: true });
        firebase
            .auth()
            .signInWithEmailAndPassword(username, password)
            .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
                console.log(errorCode, errorMessage);

            });
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <Form style={{ marginRight: 15 }}>
                    <Item stackedLabel>
                        <Label>Username</Label>
                        <Input
                            autoCapitalize='none'
                            onChangeText={(username) => this.setState({ username })}
                            value={this.state.username}
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
                <View style={{ margin: 15 }}>
                    <Button block warning onPress={this.Login.Login}>
                        {
                            this.state.loading ?
                                <Spinner color='orange' />
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