import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {
	createSwitchNavigator,
	createAppContainer,
	createStackNavigator,
	createBottomTabNavigator,
} from 'react-navigation';
import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import CreateAccountScreen from './screens/CreateAccountScreen';
import MyStaysScreen from './screens/MyStaysScreen';
import PastStaysScreen from './screens/PastStaysScreen';
import MessagesScreen from './screens/MessagesScreen';
import SettingsScreen from './screens/SettingsScreen';

class App extends React.Component {
	render() {
		return (
			<appContainer />
		);
	}
}

const appStackNavigator = createStackNavigator({
	Welcome: {
		screen: WelcomeScreen
	},
	CreateAccount: {
		screen: CreateAccountScreen
	}
});

class IconWithBadge extends React.Component {
	render() {
		const { name, badgeCount, color, size } = this.props;
		return (
			<View style={{ width: 24, height: 24, margin: 5 }}>
				<Ionicons name={name} size={size} color={color} />
				{badgeCount > 0 && (
					<View
						style={{
							// /If you're using react-native < 0.57 overflow outside of the parent
							// will not work on Android, see https://git.io/fhLJ8
							position: 'absolute',
							right: -6,
							top: -2,
							backgroundColor: 'red',
							borderRadius: 6,
							width: 12,
							height: 12,
							justifyContent: 'center',
							alignItems: 'center',
						}}>
						<Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
							{badgeCount}
						</Text>
					</View>
				)}
			</View>
		);
	}
}

const HomeIconWithBadge = props => {
	// You should pass down the badgeCount in some other ways like context, redux, mobx or event emitters.
	return <IconWithBadge {...props} badgeCount={3} />;
};

const getTabBarIcon = (navigation, focused, tintColor) => {
	const { routeName } = navigation.state;
	let IconComponent = Ionicons;
	let iconName;
	if (routeName === 'MyStays') {
		iconName = `ios-home`;
		// We want to add badges to home tab icon
		IconComponent = HomeIconWithBadge;
	} else if (routeName === 'PastStays') {
		iconName = `ios-${focused ? 'time' : 'timer'}`;
	} else if (routeName === 'Messages') {
		iconName = `ios-${focused ? 'mail-open' : 'mail'}`;
	} else if (routeName === 'Settings') {
		iconName = `ios-${focused ? 'options' : 'settings'}`;
	}

	// You can return any component that you like here!
	return <IconComponent name={iconName} size={25} color={tintColor} style={{ paddingTop: 5 }} />;
};

const getTabBarLabel = (navigation, tintColor) => {
	const { routeName } = navigation.state;
	let labelName;
	if (routeName === 'MyStays') {
		labelName = `My Stays`;
	} else if (routeName === 'PastStays') {
		labelName = 'Past Stays'
	} else if (routeName === 'Messages') {
		labelName = 'Messages'
	} else if (routeName === 'Settings') {
		labelName = 'Settings';
	}
	return <Text style={{ color: tintColor, fontSize: 10, fontWeight: '100', paddingBottom: 5 }}>{labelName}</Text>;
}

const myStaysStack = createStackNavigator({
	MyStaysStack: MyStaysScreen
}, {
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: 'orange',
			},
			headerTintColor: 'white'
		}
	});

const pastStaysStack = createStackNavigator({
	PastStaysStack: PastStaysScreen
}, {
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: 'orange',
			},
			headerTintColor: 'white'
		}
	});

const messagesStack = createStackNavigator({
	MessagesStack: MessagesScreen
}, {
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: 'orange',
			},
			headerTintColor: 'white'
		}
	});

const settingsStack = createStackNavigator({
	SettingsStack: SettingsScreen
}, {
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: 'orange',
			},
			headerTintColor: 'white'
		}
	});

const appBottomTabNavigator = createBottomTabNavigator({
	MyStays: myStaysStack,
	PastStays: pastStaysStack,
	Messages: messagesStack,
	Settings: settingsStack
}, {
		defaultNavigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ focused, tintColor }) => getTabBarIcon(navigation, focused, tintColor),
			tabBarLabel: ({ tintColor }) => getTabBarLabel(navigation, tintColor),
		}),
		tabBarOptions: {
			activeTintColor: 'orange',
			inactiveTintColor: 'gray',
		},
	});

const appSwitchNavigator = createSwitchNavigator({
	Welcome: {
		screen: appStackNavigator
	},
	Home: {
		screen: appBottomTabNavigator
	}
});

export default createAppContainer(appSwitchNavigator)

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
