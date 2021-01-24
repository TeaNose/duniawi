import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';

// styles
import styles from './styles';

// utils
import {currencyFormater} from '../../utils';

const SectionTitleList = ({title, total}) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.totalContainer}>
        <Text style={styles.total}>{currencyFormater(total)}</Text>
      </View>
    </View>
  );
};

SectionTitleList.propTypes = {
  title: PropTypes.string,
  total: PropTypes.number,
};

SectionTitleList.defaultProps = {
  title: '',
  total: 0,
};

export default React.memo(SectionTitleList);
