/* eslint-disable prettier/prettier */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
const Stack = createStackNavigator();
import { StartingPoint, Login, SignUp,Dashbord } from './screen/index';
function App() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="StartingPoint" component={StartingPoint} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Dashbord" component={Dashbord} />
    </Stack.Navigator>
  );
}
export default () => {
  return (
    <NavigationContainer >
      <App />
    </NavigationContainer>
  );
};
