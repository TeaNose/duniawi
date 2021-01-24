import {StyleSheet} from 'react-native';

import * as Color from '../../styles/color';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingBottom: 8,
  },
  labelContainer: {
    flex: 3,
    justifyContent: 'center',
  },
  label: {
    fontSize: 12,
  },
  inputContainer: {
    flex: 7,
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: Color.BLACK,
  },
  textInputContainer: {
    flex: 9,
  },
  iconInputContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    fontSize: 12,
    padding: 0,
    margin: 0,
    alignItems: 'flex-end',
    color: Color.BLACK,
  },
});

export default styles;
