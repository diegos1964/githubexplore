import React, { Component } from 'react';
import { NavigationActions, StackActions } from 'react-navigation';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import styles from './styles';

export default class Welcome extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      dispatch: PropTypes.func,
    }).isRequired,
  }

  sigIn = () => {
    const { dispatch } = this.props.navigation;
    // this.props.navigation.navigate('User');
    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'User' }),
      ],
    });

    dispatch(resetAction);
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="white"
        />
        <Text style={styles.title}>Bem-vindo </Text>
        <Text style={styles.text}>
          Para continuar, precisamos que você informe o seu usuário do github.
        </Text>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite o seu usuário"
            underlineColorAndroid="rgba(0, 0, 0, 0)"
          />
          <TouchableOpacity style={styles.button} onPress={this.sigIn}>
            <Text style={styles.buttonText}>Prosseguir </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

