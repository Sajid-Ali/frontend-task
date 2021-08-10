/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Devices } from './views/Devices/Devices';
import { Users } from './views/Users/Users';
import { SafeAreaView } from 'react-native';

const Tab = createMaterialTopTabNavigator();

const App = () => (
  <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Devices" component={Devices} />
        <Tab.Screen name="Users" component={Users} />
      </Tab.Navigator>
    </NavigationContainer>
  </SafeAreaView>
);

export default App;
