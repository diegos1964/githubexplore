import React, { Component } from 'react';
import 'config/ReactotronConfig';
import 'styles';

import { AsyncStorage, YellowBox } from 'react-native';
import createNavigator from 'routes';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated'])

export default class App extends Component {
  state = {
    userChecked: false,
    userLogged: false,
  };
  async componentDidMount() {
    // await AsyncStorage.clear();
    const username = await AsyncStorage.getItem('@Githuber:username');
    this.appLoaded(username);
  }

  appLoaded = (username) => {
    this.setState({
      userChecked: true,
      userLogged: !!username,
    });
  }

  render() {
    if (!this.state.userChecked) return null;
    const Routes = createNavigator(this.state.userLogged);

    return <Routes />;
  }
}
