/**
 * Routes
 * @author Money Jain
 * @flow
 */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SongsDashboard from '../screens/SongsDashboard';
import SongDetails from '../screens/SongDetails';
import Constant from '../utilities/Constant';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SongsDashboard"
        component={SongsDashboard}
        options={{
          headerTitle: Constant.STRINGS.SONGS,
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          headerTintColor: Constant.COLORS.WHITE,
          headerStyle: {
            backgroundColor: Constant.COLORS.BLUE,
            elevation: 0,
            shadowColor: 'transparent',
          },
        }}
      />
      <Stack.Screen
        name="SongDetails"
        component={SongDetails}
        options={{
          headerTitle: Constant.STRINGS.DETAILS,
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          headerTintColor: Constant.COLORS.WHITE,
          headerStyle: {
            backgroundColor: Constant.COLORS.BLUE,
            elevation: 0,
            shadowColor: 'transparent',
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default Routes;
