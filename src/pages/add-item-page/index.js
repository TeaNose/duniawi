import React, {useEffect, useState} from 'react';
import {SafeAreaView, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// constants
import GROUP from '../../constants';

// utils
import {currencyFormater2, currencyFormater} from '../../utils';

// uikit
import {AddModal, TextInput} from '../../components';

// styles
import * as Color from '../../styles/color';
import styles from './styles';

const AddItemPage = () => {
  const [title, setTitle] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(GROUP[0]);
  const [amount, setAmount] = useState('0');
  const [data] = useState(GROUP);

  useEffect(() => {
    console.log('selectedItem: ' + JSON.stringify(selectedItem));
    data.map((item) => {
      if (item.id !== selectedItem.id) {
        item.isSelected = false;
      } else {
        item.isSelected = true;
      }
      return item;
    });
  }, [selectedItem]);

  return (
    <SafeAreaView style={styles.container}>
      <AddModal
        visible={isModalVisible}
        onPressClose={() => setIsModalVisible(false)}
        dataList={data}
        selectedData={selectedItem}
        onPressItem={(item) => {
          setSelectedItem(item);
          setIsModalVisible(false);
        }}
      />
      <TextInput
        label="Grup"
        value={selectedItem.title}
        icon={
          <Icon
            name="md-chevron-down-outline"
            size={20}
            color={Color.DARK_CORAL}
          />
        }
        editable={false}
        onPress={() => setIsModalVisible(true)}
      />

      <TextInput
        label="Nama"
        value={title}
        onChangeText={(text) => setTitle && setTitle(text)}
      />

      <TextInput
        label="Jumlah"
        value={amount}
        isCurrency
        onChangeText={(text) => {
          setAmount && setAmount(text);
        }}
      />
    </SafeAreaView>
  );
};

export default AddItemPage;
