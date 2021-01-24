import React from 'react';
import {SafeAreaView, SectionList, View} from 'react-native';

// styles
import styles from './styles';

// uikit
import {SectionTitleList, ItemList, AddButton} from '../../components';

const data = [
  {
    title: 'Tunai',
    amount: 276000,
    data: [
      {
        id: 1,
        desc: 'Dompet',
        amount: 300000,
      },
      {
        id: 2,
        desc: 'Makan siang',
        amount: -24000,
      },
    ],
  },
  {
    title: 'Akun',
    amount: 20000,
    data: [
      {
        id: 1,
        desc: 'BCA',
        amount: 51000000,
      },
    ],
  },
];

const AssetPage = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={data}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => (
          <ItemList desc={item.desc} amount={item.amount} />
        )}
        renderSectionHeader={({section: {title, amount}}) => (
          <SectionTitleList title={title} total={amount} />
        )}
      />
      <View style={styles.buttonContainer}>
        <AddButton onPress={() => navigation.navigate('AddItemPage')} />
      </View>
    </SafeAreaView>
  );
};

export default AssetPage;
