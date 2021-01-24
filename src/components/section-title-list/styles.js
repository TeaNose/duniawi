import {StyleSheet} from 'react-native';

import * as Color from '../../styles/color';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: Color.CHILEAN_HEATH,
    flexDirection: 'row',
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  totalContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  total: {
    fontSize: 14,
    color: Color.WHISKEY_SOUR,
    fontWeight: 'bold',
  },
});

export default styles;
