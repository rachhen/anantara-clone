import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    ScrollView,
    TextInput,
    FlatList,
    TouchableHighlight
} from "react-native";
import { SearchBar } from 'react-native-elements';

class MyStaysScreen extends Component {
    static navigationOptions = {
        headerTitle: "My Stays"
    }

    state = {
        search: '',
    };

    updateSearch = search => {
        this.setState({ search });
    };

    _onPress = (item) => {
        alert(item.title);
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="blue" barStyle="light-content" />
                <ScrollView>
                    {/* <View style={{ flex: 1 }}>
                        <TextInput placeholder="Search" style={{
                            backgroundColor: '#ccc',
                            borderRadius: 50,
                            padding: 10
                        }} />

                    </View> */}
                    <View>
                        <SearchBar
                            placeholder="Search..."
                            onChangeText={this.updateSearch}
                            value={this.state.search}
                            lightTheme={true}
                            round={true}
                            containerStyle={{ backgroundColor: 'white', borderBottomWidth: 0, borderTopWidth: 0 }}
                            inputStyle={{ color: '#333' }}
                            inputContainerStyle={{ borderRadius: 50 }}
                        />
                    </View>
                    <FlatList
                        style={{ margin: 10 }}
                        data={[
                            { title: 'Title Text Cillum tempor Lorem quis ex.', key: 'item1' },
                            { title: 'Nostrud irure ex aute nulla nisi Lorem ullamco ut eu amet laborum.', key: 'item2' },
                            { title: 'Enim culpa minim exercitation aute eu ea nulla sit qui nisi reprehenderit.', key: 'item3' },
                            { title: 'Incididunt in anim aliqua magna nulla occaecat.', key: 'item4' },
                        ]}
                        renderItem={({ item, separators }) => (
                            <TouchableHighlight
                                onPress={() => this._onPress(item)}
                                onShowUnderlay={separators.highlight}
                                onHideUnderlay={separators.unhighlight}>
                                <View style={{ backgroundColor: 'white', borderWidth: 1, borderColor: '#ddd', padding: 5 }}>
                                    <Text>{item.title}</Text>
                                </View>
                            </TouchableHighlight>
                        )}
                    />
                </ScrollView>
            </View>
        );
    }
}
export default MyStaysScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
});