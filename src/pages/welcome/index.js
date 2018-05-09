import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

// import Routes from 'routes';

import styles from './styles';

const Welcome = () => (
  // <Routes />
  <View style={styles.container}>
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
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Prosseguir </Text>
      </TouchableOpacity>
    </View>
  </View>
);

Welcome.navigationOptions = {
  header: null,
};

export default Welcome;
