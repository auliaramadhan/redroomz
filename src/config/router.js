import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Text, View } from 'native-base'

import { Login, Register, ForgotPass,Splash } from '../pages/'

import MyIcon from 'react-native-vector-icons/MaterialIcons'
import MeIcon from 'react-native-vector-icons/Entypo'
import MmIcon from 'react-native-vector-icons/AntDesign'
import McIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import MfIcon from 'react-native-vector-icons/Feather'

import Search from '../pages/Search';

class Pages extends React.Component {
    render() {
        return (
            <>
                <Text>pages</Text>
            </>
        )
    }
}


const AuthStack = createStackNavigator(
    {
      Login: { screen: Login },
      Register: { screen: Register },
      ForgotPass: { screen: ForgotPass },
    },
    {
      headerMode: 'none',
      initialRouteName: 'Login',
    },
  );
  


const SearchNav = createStackNavigator({
    Search: {
        screen: Search,
        navigationOptions: {
            headerShown: false,
        },
    },
}, {
    initialRouteName: 'Search',
})

SearchNav.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible,
    }
}


const BottomNav = createBottomTabNavigator({
    Search: {
        screen: SearchNav,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => {
                return <MmIcon name='search1' size={25} color={tintColor} />;
            },
        },
    },
    CoLiving: {
        screen: SearchNav,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => {
                return <McIcon name='home-group' size={25} color={tintColor} />;
            },
        },
    },
    Offers: {
        screen: SearchNav,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => {
                return <McIcon name='percent' size={25} color={tintColor} />;
            },
        },
    },
    Bookings: {
        screen: SearchNav,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => {
                return <MeIcon name='archive' size={25} color={tintColor} />;
            },
        },
    },
    Profile: {
        screen: SearchNav,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => {
                return <MfIcon name='user' size={25} color={tintColor} />;
            },
        },
    },

}, {
    initialRouteName: 'Search',
    tabBarOptions: {
        labelStyle: {
            marginBottom: 5
        },
        activeTintColor: '#C81E1F',
        inactiveTintColor: '#ACACAC',
        style: {
            backgroundColor: 'white',
            borderTopColor: 'transparent',
            marginVertical: 3
        }
    }
})

const SwitchNav = createSwitchNavigator({
    BottomNav,
    AuthStack,
    Splash: { screen: Splash },
}, {
    initialRouteName: 'BottomNav',
})

const AppContainer = createAppContainer(SwitchNav)

// create a component
class Router extends Component {
    render() {
        return (
            <AppContainer />
        );
    }
}

export default Router;