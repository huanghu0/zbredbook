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

import Welcome from './src/modules/welcome/Welcome';
import Login from './src/modules/login/Login';

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
          initialRouteName='Welcome'
          screenOptions={{
            cardStyle:{elevation:1}
          }}
        >
          <Stack.Screen
            name='Welcome'
            component={Welcome}
            options={{
              // TODO
              headerShown:false,
              ...TransitionPresets.SlideFromRightIOS
            }}
          />
          <Stack.Screen
            name='Login'
            component={Login}
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
