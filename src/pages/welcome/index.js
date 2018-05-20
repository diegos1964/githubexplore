import React, { Component } from 'react';
import { NavigationActions, StackActions } from 'react-navigation';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
  AsyncStorage,
} from 'react-native';

import styles from './styles';
import api from '../../services/api';

export default class Welcome extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      dispatch: PropTypes.func,
    }).isRequired,
  }

  state = {
    username: '',
    loading: false,
    errorMessage: null,
  }

  checkUserExists = async (username) => {
    const user = await api.get(`/users/${username}`);

    return user;
  }

  saveUser = async (username) => {
    await AsyncStorage.setItem('@Githuber:username', username);
  }

  sigIn = async () => {
    const { username } = this.state;

    if (username.length === 0) return;

    this.setState({ loading: true });

    try {
      await this.checkUserExists(username);
      await this.saveUser(username);

      const { dispatch } = this.props.navigation;
      // this.props.navigation.navigate('User');
      const resetAction = StackActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'User' }),
        ],
      });

      dispatch(resetAction);
    } catch (error) {
      console.tron.log(error);
      this.setState({ loading: false, errorMessage: 'Usuário não existe!' });
    }
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

        { !!this.state.errorMessage
          && <Text style={styles.error}>{this.state.errorMessage}</Text>
        }

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite o seu usuário"
            underlineColorAndroid="rgba(0, 0, 0, 0)"
            value={this.state.username}
            onChangeText={username => this.setState({ username })}
          />
          <TouchableOpacity style={styles.button} onPress={this.sigIn}>
            {
              this.state.loading
              ? <ActivityIndicator size="small" color="#fff" />
              : <Text style={styles.buttonText}>Prosseguir </Text>
            }

          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

