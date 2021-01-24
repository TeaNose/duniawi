import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  descContainer: {
    flex: 1,
  },
  amountContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  desc: {
    fontSize: 12,
  },
  itemText: {
    fontSize: 12,
  },
  itemTextNegative: {
    fontSize: 12,
    color: 'red',
  },
});

export default styles;
