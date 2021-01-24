import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';

// pages
import AddItemPage from '../pages/add-item-page';
import AssetPage from '../pages/asset-page';
import LiabilityPage from '../pages/liability-page';
import TotalPage from '../pages/total-page';

// styles
import styles from './styles';
import * as Color from '../styles/color';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const HomePage = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: styles.tabLabel,
        style: styles.tabBar,
        indicatorStyle: styles.indicator,
        activeTintColor: Color.WHISKEY_SOUR,
      }}>
      <Tab.Screen name="Aset" component={AssetPage} />
      <Tab.Screen name="Liabilitas" component={LiabilityPage} />
      <Tab.Screen name="Total" component={TotalPage} />
    </Tab.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{headerShown: false}}
        />
        <Stack.Screen name="AddItemPage" component={AddItemPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
