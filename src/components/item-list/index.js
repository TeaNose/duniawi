import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';

// styles
import styles from './styles';

// utils
import {currencyFormater} from '../../utils';

const ItemList = ({desc, amount}) => {
  return (
    <View style={styles.container}>
      <View style={styles.descContainer}>
        <Text style={styles.desc}>{desc}</Text>
      </View>
      <View style={styles.amountContainer}>
        <Text style={amount < 0 ? styles.itemTextNegative : styles.itemText}>
          {currencyFormater(amount)}
        </Text>
      </View>
    </View>
  );
};

ItemList.propTypes = {
  desc: PropTypes.string,
  amount: PropTypes.number,
};

ItemList.defaultProps = {
  desc: '',
  amount: 0,
};

export default React.memo(ItemList);
