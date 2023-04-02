import React from 'react';
import {View, Text,LogBox} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {Store, persistor} from './src/redux';
import {PersistGate} from 'redux-persist/integration/react';
import ProfileScreen from './src/screens/profile/ProfileScreen';
import DashBoardScreen from './src/screens/dashboard/DashboardScreen';
import Toast from 'react-native-toast-message';
LogBox.ignoreAllLogs()
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Dashboard" component={DashBoardScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
      <Toast />
    </Provider>
  );
}
