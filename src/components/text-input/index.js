import React from 'react';
import {
  View,
  Text,
  TextInput as TextInputNative,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import {TextInputMask} from 'react-native-masked-text';

// styles
import styles from './styles';

const TextInput = (props: Props) => {
  const {label, icon, notes, isCurrency, onPress, ...restProps} = props;

  const Wrapper = onPress ? TouchableOpacity : View;

  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{label}</Text>
      </View>
      <Wrapper onPress={onPress} style={styles.inputContainer}>
        {isCurrency && (
          <View style={styles.iconInputContainer}>
            <Text>{'Rp. '}</Text>
          </View>
        )}
        <View style={styles.textInputContainer}>
          {isCurrency ? (
            <TextInputMask
              type={'money'}
              options={{
                precision: 0,
                separator: ',',
                delimiter: '.',
                unit: '',
                suffixUnit: '',
              }}
              {...restProps}
            />
          ) : (
            <TextInputNative style={styles.textInput} {...restProps} />
          )}
        </View>
        {icon ? (
          <View style={styles.iconInputContainer}>{icon}</View>
        ) : (
          <View />
        )}
      </Wrapper>
    </View>
  );
};

TextInput.propTypes = {
  desc: PropTypes.string,
  amount: PropTypes.number,
};

TextInput.defaultProps = {
  desc: '',
  amount: 0,
};

export default React.memo(TextInput);
