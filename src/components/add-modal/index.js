// @flow
import React from 'react';
import {Modal, TouchableOpacity, View, Text, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// constants
import GROUP from '../../constants';

// styles
import styles from './styles';
import * as Color from '../../styles/color';

type Props = {
  visible: boolean,
  onPressItem: (item: any) => void,
  onPressClose: () => void,
  dataList?: Array<any>,
};

function AddModal({
  visible,
  onPressItem,
  onPressClose,
  dataList,
  selectedData,
}: Props) {
  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.flex1}
        onPress={onPressClose}>
        <View style={styles.modalContainer}>
          <TouchableOpacity activeOpacity={1} onPress={() => {}}>
            <View style={styles.modalContentContainer}>
              <FlatList
                data={dataList}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => (
                  <TouchableOpacity
                    style={styles.selectionItem}
                    onPress={() => onPressItem(item)}>
                    <View style={styles.flex9}>
                      <Text>{item.title}</Text>
                    </View>
                    <View style={styles.selectedIconContainer}>
                      {item?.isSelected && (
                        <Icon
                          name="md-checkmark-circle-outline"
                          size={18}
                          color={Color.WHISKEY_SOUR}
                        />
                      )}
                    </View>
                  </TouchableOpacity>
                )}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
              />
            </View>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}

AddModal.defaultProps = {
  visible: false,
  onPressItem: () => {},
  onPressClose: () => {},
  dataList: GROUP,
};

export default React.memo<Props>(AddModal);
