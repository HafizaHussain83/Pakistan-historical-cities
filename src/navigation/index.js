// AppNavigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen'; // Ensure correct path
import Destination from '../components/Destination';
import WelcomeScreen from '../screens/WelcomeScreen';  // Ensure correct path
import KarachiScreen from '../screens/KarachiScreen'; // New Karachi Screen
import LahoreScreen from '../screens/LahoreScreen';   // New Lahore Screen
import FaisalabadScreen from '../screens/FaisalabadScreen'; // New Faisalabad Screen
import CityDetailsScreen from '../screens/CityDetailsScreen'; // Ensure correct path
import BahawalpurScreen from '../screens/BahawalpurScreen'; // New Bahawalpur Screen
import HyderabadScreen from '../screens/HyderabadScreen'; // New Hyderabad Screen
import MultanScreen from '../screens/MultanScreen'; // New Multan Screen
import RawalpindiScreen from '../screens/RawalpindiScreen'; // New Rawalpindi Screen
import DestinationScreen from '../screens/DestinationScreen';


const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Destination" component={DestinationScreen} />
        <Stack.Screen name="KarachiScreen" component={KarachiScreen} />
        <Stack.Screen name="LahoreScreen" component={LahoreScreen} />
        <Stack.Screen name="FaisalabadScreen" component={FaisalabadScreen} />
        <Stack.Screen name="CityDetails" component={CityDetailsScreen} />
        <Stack.Screen name="BahawalpurScreen" component={BahawalpurScreen} />
        <Stack.Screen name="MultanScreen" component={MultanScreen} />
        <Stack.Screen name="RawalpindiScreen" component={RawalpindiScreen} />
       <Stack.Screen name="HyderabadScreen" component={HyderabadScreen} />
       
        

      </Stack.Navigator>
    </NavigationContainer>
  );
}
