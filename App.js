
import {React, useEffect, useState} from 'react'
import { NativeBaseProvider, Text, Image } from 'native-base';
import SplashScreen from './screens/SplashScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HelloScreen from './screens/HelloScreen';
//const [isLoading, setIsLoading] = useState(true);
const Stack2 = createNativeStackNavigator();

export default function App() {

  return (
    <NativeBaseProvider>
    <NavigationContainer>
            <Stack2.Navigator initialRouteName="SplashScreen">
                <Stack2.Screen name="Welcome" component={SplashScreen} options={{ headerShown: false }} />
                <Stack2.Screen name="Hello" component={HelloScreen}  options={{ headerShown: false }}/>
            </Stack2.Navigator>
        </NavigationContainer>
    </NativeBaseProvider>
  );
}



