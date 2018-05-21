import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Welcome from 'pages/welcome';
import Repositories from 'pages/repositories';
import Organizations from 'pages/organizations';
import HeaderRight from './components/headerRight';
import { metrics, colors } from 'styles';

const headerTitle = (state) => {
  switch (state) {
    case 0:
      return 'Repositórios';
    case 1:
      return 'Organizações';
    default:
      return '';
  }
};

const createNavigator = (isLogged = false) => createStackNavigator({
  Welcome: { screen: Welcome },
  User: {
    screen: createBottomTabNavigator({
      Repositories: { screen: Repositories },
      Organizations: { screen: Organizations },
    }, {
      tabBarOptions: {
        showIcon: true,
        showLabel: false,
        activeTintColor: colors.white,
        inactiveTintColor: colors.whiteTransparent,
        style: {
          backgroundColor: colors.secundary,
        }
      },
    }),
  },
}, {
  initialRouteName: isLogged ? 'User' : 'Welcome',
  navigationOptions: ({ navigation }) => ({
    title: headerTitle(navigation.state.index),
    headerStyle: {
      paddingHorizontal: metrics.basePadding,

    },
    headerTitleStyle: {
      color: colors.darker,
      width: '100%',
      fontSize: 16,
      textAlign: 'center',

    },
    headerRight: <HeaderRight navigation={navigation} />,
  }),
});

export default createNavigator;
