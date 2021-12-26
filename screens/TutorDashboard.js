import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TutorAppointment from './TutorAppointment';
import TutorAccount from './TutorAccount'
const Tab = createMaterialTopTabNavigator();

export default function TutorDashboard({navigation}) {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: '#042069',
      headerTitleAlign: "center",
      headerShadowVisible: false
    }}
    >
      <Tab.Screen name="TutorAppointment" component={TutorAppointment} />
      <Tab.Screen name="TutorAccount" component={TutorAccount} />
    </Tab.Navigator>
  );
}