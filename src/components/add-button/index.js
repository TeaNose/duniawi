import React from 'react';
import {TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

// styles
import styles from './styles';
import * as Color from '../../styles/color';

const AddButton = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Ionicons name="md-add-outline" size={30} color={Color.CHILEAN_HEATH} />
    </TouchableOpacity>
  );
};

AddButton.propTypes = {
  onPress: PropTypes.func,
};

AddButton.defaultProps = {
  onPress: () => {},
};

export default React.memo(AddButton);
