import React from 'react';
import "react-native-gesture-handler";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from "@react-navigation/native";
import HabitEmptyState from '../Screens/HabitEmptyState';
import EditScreen from '../Screens/EditScreen';
import DetailScreen from '../Screens/DetailScreen';
import HomeScreen from '../Screens/HomeScreen';
import { Provider as PaperProvider } from "react-native-paper";
import ProfileScreen from '../Screens/ProfileScreen';
import EditProfileScreen from '../Screens/EditProfileScreen';



const Stack = createStackNavigator();

export default function UserStack() {

 

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{
            headerStyle: {
            backgroundColor: '#FFF1E7',
            shadowColor: '#FFF1E7',
            elevation: 0,
            height: 56,
          },

      }}
        >
          <Stack.Screen name="Profile" options={{title: '', headerShown: false} } component={ProfileScreen} />
          <Stack.Screen name="EditProfile" options={{headerShown: false} } component={EditProfileScreen} />
          <Stack.Screen name="Habit" options={{title: ''} } component={HabitEmptyState} />
          <Stack.Screen name="Home" options={{title: ''} } component={HomeScreen} />
          <Stack.Screen name="Edit" options={{title: ''} } component={EditScreen} />
          <Stack.Screen name="Detail" options={{title: ''} } component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}