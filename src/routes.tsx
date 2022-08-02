import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '~/pages/Home';

const AppRoutes = createNativeStackNavigator();

const Routes = () => {
  return (
    <AppRoutes.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <AppRoutes.Screen name="Home" component={Home} />
    </AppRoutes.Navigator>
  );
};

export { Routes };
