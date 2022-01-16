import React, { useState } from 'react'
import { View,} from 'react-native'
import {
    Box,
    Text,
    Heading,
    VStack,
    FormControl,Icon,
    Input, IconButton,
    Link,  Spinner, Divider,
    Button,  Alert,CheckIcon,
    HStack, useToast,
    Center,  CloseIcon,
    NativeBaseProvider,
  } from "native-base"
export default function submit({ route, navigation }) {
    const { emailId, email,location, fullnames, accepted,joined } = route.params;
    const [loading, setLoading] = useState(false);
    const [favorites, setFavorites] = useState(true);

    if(loading){
      return (
        <Center flex={1} >
        <HStack space={2} alignItems="center">
      <Spinner size="lg" accessibilityLabel="Trying to sign you in!" />
      <Heading color="primary.500" fontSize="xl">
        Kindly wait as we organise things for you...
      </Heading>
    </HStack> </Center>
      );
    }else{
    return (
      <VStack>
      


      <Alert w="100%" status="success" colorScheme="success">
        <VStack space={2} flexShrink={1} w="100%">
          <HStack
            flexShrink={1}
            space={2}
            alignItems="center"
            justifyContent="space-between"
          >
            <HStack flexShrink={1} space={2} alignItems="center">
              <Alert.Icon />
              <Text fontSize="lg" fontWeight="medium" color="coolGray.800">
                Get to know your Tutor well!
              </Text>
            </HStack>
          
          </HStack>
          <Box
            pl="6"
            _text={{
              color: "coolGray.600",
            }}
          >
            Below is the details pertaining your tutor. They are the details your tutor submitted to us 
            during registration. we presume they are as accurate as they were provided. Take note of the 
            location for easier tutoring!
            <Divider my="2" />
          <Text style={{fontWeight: "bold"}}>Email: {JSON.stringify(email)} </Text>
          Joined : {JSON.stringify(joined)}
          Location: {JSON.stringify(location)}
          Full name: {JSON.stringify(fullnames)}
              <Button mt="2" colorScheme="green"
        onPress={()=>{

            
            setLoading(true);
                fetch('https://jsonplaceholder.typicode.com/todos/1')
     .then(response => response.json())
     .then(()=>{
       setLoading(false);
      navigation.navigate('ReviewList', {emailid: JSON.stringify(email)});
     })
     

        }}><Text>Check {JSON.stringify(email)}'s reviews</Text></Button>
          </Box>
        </VStack>
  
      </Alert>



      <Alert w="100%" status="info" colorScheme="info">
        <VStack space={2} flexShrink={1} w="100%">
          <HStack
            flexShrink={1}
            space={2}
            alignItems="center"
            justifyContent="space-between"
          >
            <HStack flexShrink={1} space={2} alignItems="center">
              <Alert.Icon />
              <Text fontSize="lg" fontWeight="medium" color="coolGray.800">
                Kindly confirm with us!
              </Text>
            </HStack>
            <IconButton
              variant="unstyled"
              icon={<CloseIcon size="3" color="coolGray.600" />}
            />
          </HStack>
          <Box
            pl="6"
            _text={{
              color: "coolGray.600",
            }}
          >
           Confirm sending a tutoring request to {JSON.stringify(email)}
          </Box>
        </VStack>
        <HStack>
        <Button mt="2" colorScheme="blue"
        onPress={()=>{


            navigation.navigate('success');

        }}>
          Confirm Request!
        </Button>
        <Button  ml="2" variant="outline" onPress={()=>{

            
setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(()=>{
setLoading(false);
navigation.navigate('success');
})


}} colorScheme="success">
  {favorites ? <Text>Add to Favorites</Text>: <Text>Already favorite</Text>}
</Button>
</HStack>
      </Alert>

      <Alert w="100%" status="success">
        <VStack space={1} flexShrink={1} w="100%" alignItems="center">
          <Alert.Icon size="md" />
          <Text
            fontSize="lg"
            fontWeight="bold"
            _dark={{
              color: "coolGray.800",
            }}
          >
           You can also review the services of this tutor here!
          </Text>

          <Box
            _text={{
              textAlign: "center",
            }}
            _dark={{
              _text: {
                color: "coolGray.600",
              },
            }}
          >
            by clicking review you are given the permission to rate and review the tutor, this information
            is vital in helping other students choose the correct tutor, kindly rate honestly. Thanks
            <Button iconLeft dark mt="2" colorScheme="green"
        onPress={()=>{

            navigation.navigate('Add Review',
            {
              emailId: JSON.stringify(email)
            }
            );

        }}>
           
          <Text>Review {JSON.stringify(email)}</Text>
        </Button>

          </Box>
        </VStack>
      </Alert>
      </VStack>
    )
}}
