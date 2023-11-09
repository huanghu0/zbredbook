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
import MainTab from './src/modules/mainTab/mainTab';

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
              headerShown:false,
              ...TransitionPresets.SlideFromRightIOS
            }}
          />
          <Stack.Screen
            name='Login'
            component={Login}
            options={{
              headerShown:false,
              ...TransitionPresets.SlideFromRightIOS
            }}
          />
          <Stack.Screen
            name='MainTab'
            component={MainTab}
            options={{
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
