import {StyleSheet} from 'react-native';
import * as Color from '../../styles/color';

const styles = StyleSheet.create({
  modalContainer: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: Color.BLACK_70,
    paddingHorizontal: 35,
  },
  modalContentContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: Color.WHITE,
    borderRadius: 10,
  },
  iconContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.WHISKEY_SOUR,
  },
  flexEndAlign: {
    alignItems: 'flex-end',
  },
  centerAlign: {
    alignItems: 'center',
  },
  flex1: {
    flex: 1,
  },
  flex9: {
    flex: 9,
  },
  selectionItem: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: Color.DARK_CORAL,
    height: 0,
  },
  selectedIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});

export default styles;
