import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { Center,Button,useToast, NativeBaseProvider } from "native-base"



export default function TutorConfirm({ route, navigation }) {
//getting the params
//const [ Accepted, setAccepted] = useState(false);
    const { TestKey, accepted } = route.params;
    //const toast = useToast();

    if(!accepted){


    return (
        <Center flex={1} px="3">
        <View>
            <Text>{JSON.stringify(TestKey)}</Text>

            <Button onPress={() => {
                //update the accespted status on the db
                navigation.navigate('signin')
                
                }} colorScheme="success">Accept</Button>
        </View>
        </Center>
    ); }else{
        return(
        <Center flex={1} px="3">
        <View>
            <Text>{JSON.stringify(TestKey)}</Text>

            <Button onPress={() => {
                //update the accespted status on the db
                // toast.show({
                //     title: 'Already accepted',
                //     placement: 'bottom',
                //     status: 'warning',
                //   });
                navigation.navigate('signin')
                
                }} colorScheme="success">Already Acceptted!</Button>
        </View>
        </Center>);
    }
}
