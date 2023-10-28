/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator,TransitionPresets } from '@react-navigation/stack';

import PageA from './src/modules/PageA';
import PageB from './src/modules/PageB';

const Stack = createStackNavigator()


function App(): JSX.Element {

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'white'}
      />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='PageA'
          screenOptions={{
            cardStyle:{elevation:1}
          }}
        >
          <Stack.Screen
            name='PageA'
            component={PageA}
            options={{
              // TODO
              headerShown:false,
              ...TransitionPresets.SlideFromRightIOS
            }}
          />
          <Stack.Screen
            name='PageB'
            component={PageB}
            options={{
              // TODO
              headerShown:false,
              ...TransitionPresets.SlideFromRightIOS
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}


export default App;
