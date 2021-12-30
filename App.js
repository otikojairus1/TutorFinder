
import {React, useEffect, useState} from 'react'
import { NativeBaseProvider, SSRProvider, Text, Image } from 'native-base';
import SplashScreen from './screens/SplashScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HelloScreen from './screens/HelloScreen';
import SignInScreen from './screens/SignIn'
import SignUpScreen from './screens/SignUp'
import AccountScreen from './screens/Account'
import TutorDashboad from './screens/TutorDashboard'
import TutorAccount from './screens/TutorAccount';
import TutorAppointment from './screens/TutorAppointment';
import TutorConfirm from './screens/TutorConfirm';
import submit from './screens/submit';
import success from './screens/success'
//const [isLoading, setIsLoading] = useState(true);
const Stack2 = createNativeStackNavigator();

export default function App() {

  return (
    
    <NativeBaseProvider>
    <NavigationContainer>
            <Stack2.Navigator initialRouteName="SplashScreen">
                <Stack2.Screen name="Welcome" component={SplashScreen} options={{ headerShown: false ,headerTitleAlign: "center"}} />
                <Stack2.Screen name="Hello" component={HelloScreen}  options={{ headerShown: false,headerTitleAlign: "center" }}/>
                <Stack2.Screen name="My Dashboard" component={TutorDashboad}  options={{ headerTitleAlign: "center" }}/>
                <Stack2.Screen name="signin" component={SignInScreen}  options={{ headerShown: false ,headerTitleAlign: "center"}}/>
                <Stack2.Screen name="Register" component={SignUpScreen}  options={{ headerShown: false,headerTitleAlign: "center" }}/>
                <Stack2.Screen name="Account" component={AccountScreen}  options={{ headerShown: false,headerTitleAlign: "center" }}/>
                <Stack2.Screen name="TutorAccount" component={TutorAccount}  options={{ headerShown: false,headerTitleAlign: "center" }}/>
                <Stack2.Screen name="TutorConfirm" component={TutorConfirm}  options={{ headerShown: false,headerTitleAlign: "center" }}/>
                <Stack2.Screen name="TutorAppointment" component={TutorAppointment}  options={{ headerTitleAlign: "center" }}/>
                <Stack2.Screen name="submit" component={submit}  options={{ headerTitleAlign: "center" }}/>
                <Stack2.Screen name="success" component={success}  options={{ headerTitleAlign: "center" }}/>
            </Stack2.Navigator>
        </NavigationContainer>
    </NativeBaseProvider>
    
  );
}



