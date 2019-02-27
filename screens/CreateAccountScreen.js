import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from "react-native";
import { Form, Item, Label, Input, Button, DatePicker } from 'native-base';

class CreateAccountScreen extends Component {
    static navigationOptions = {
        headerTitle: "Create Account"
    }
    render() {
        return (
            <ScrollView>
                <View style={{ flex: 1 }}>
                    <Form>
                        <Item stackedLabel>
                            <Label>First Name</Label>
                            <Input />
                        </Item>
                        <Item stackedLabel>
                            <Label>Last Name</Label>
                            <Input />
                        </Item>
                        <Item stackedLabel>
                            <Label>Phone</Label>
                            <Input />
                        </Item>
                        <Item stackedLabel>
                            <Label>Address</Label>
                            <Input />
                        </Item>
                        <Item stackedLabel>
                            <Label>Date Of Birth</Label>
                            <DatePicker />
                        </Item>
                        <Item stackedLabel>
                            <Label>Username</Label>
                            <Input autoCapitalize='none' autoCorrect={false} />
                        </Item>
                        <Item stackedLabel>
                            <Label>Password</Label>
                            <Input />
                        </Item>
                    </Form>
                    <View style={{ margin: 15 }}>
                        <Button block>
                            <Text style={{ color: 'white' }}>Create Account</Text>
                        </Button>
                    </View>
                </View>
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