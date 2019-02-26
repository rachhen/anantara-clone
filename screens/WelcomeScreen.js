import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    KeyboardAvoidingView,
    Keyboard,
} from "react-native";
import { Button, Form, Item, Input, Label, Icon } from 'native-base';

class WelcomeScreen extends Component {
    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <Form style={{ marginRight: 15 }}>
                    <Item stackedLabel>
                        <Label>Username</Label>
                        <Input autoCapitalize='none' onSubmitEditing={Keyboard.dismiss} />
                    </Item>
                    <Item stackedLabel last>
                        <Label>Password</Label>
                        <Input secureTextEntry />
                    </Item>
                </Form>
                <View style={{ margin: 15 }}>
                    <Button block warning onPress={() => this.props.navigation.navigate('Home')}>
                        <Text style={{ color: 'white' }}>Login</Text>
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