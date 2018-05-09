import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secundary,
    padding: metrics.basePadding * 2,
    justifyContent: 'center',
    alignItems: 'stretch',

  },
  title: {
    textAlign: 'center',
  },
});

export default styles;
