import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TutorAppointment from './TutorAppointment';
import TutorAccount from './TutorAccount'
const Tab = createMaterialTopTabNavigator();

export default function TutorDashboard({route, navigation}) {
  const { emailid, id } = route.params;
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: '#042069',
      headerTitleAlign: "center",
      headerShadowVisible: false
    }}
    >
      <Tab.Screen name="TutorAppointment" children={()=><TutorAppointment navigation={navigation}emailid={emailid}/>} />
      <Tab.Screen name="TutorAccount" children={()=><TutorAccount navigation={navigation} id={id}emailid={emailid}/>} />
    </Tab.Navigator>
  );
}