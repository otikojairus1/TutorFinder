import {React, useEffect, useState} from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Tutors from './Tutors'
import Universities from './Universities'
import Courses from './Courses'
import AccountScreen from './Account';
const Tab = createBottomTabNavigator();

export default function HelloScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Tutors"
      screenOptions={{
        tabBarActiveTintColor: '#042069',
        headerTitleAlign: "center",
        headerShadowVisible: false
      }}
    >
      <Tab.Screen
        name="Tutors"
        component={Tutors}
        //children={()=><Tutors propName={"sds"}/>}

        options={{
          tabBarLabel: 'Tutors',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-check-outline" color={color} size={size} />
          ),  tabBarBadge: 345,
        }}
      />
      {/* <Tab.Screen
        name="Universities"
        component={Universities}
        options={{
          tabBarLabel: 'Universities',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="school" color={color} size={size} />
          ),
          tabBarBadge: 23,
        }}
      /> */}
      {/* <Tab.Screen
        name="Courses"
        component={Courses}
        options={{
          tabBarLabel: 'Courses',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bookshelf" color={color} size={size} />
          ),  tabBarBadge: 23,
        }}
      /> */}

<Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-lock" color={color} size={size} />
          ), // tabBarBadge: 23,
        }}
      />
    </Tab.Navigator>
  );
}