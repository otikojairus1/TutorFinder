import React from 'react'
import { View } from 'react-native'
import {
    Box,
    Text,
    Heading,
    VStack,
    FormControl,
    Input,
    Link,
    Button,Spinner,
    HStack, TextArea,
    Center,
    NativeBaseProvider,
  } from "native-base"
import axios from 'axios';
export default function AddReview({ route, navigation }) {
    const { emailId, accepted,created_at } = route.params;
const[message, setMessage] = React.useState('');
const[username, setUsername] = React.useState('');
const [loading, setLoading] = React.useState(false);
const onChangeHandler = (event) => {
    setUsername(event);
console.log(username);
}

const onChangeHandler2 = (event) => {
    
    setMessage(event);
    console.log(message);
}

const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log({
        "username":username,
        "review":message
    });
    setLoading(true);
    
      axios.post('https://tutorfinderapi.herokuapp.com/api/add/review', {
        reviewName:username,
        review:message,
        reviewTargetEmail:JSON.parse(emailId)
      })
       .then(()=>{setLoading(false);
        navigation.navigate('Done');
    })
}

if (loading){
    return (
        <Center flex={1}>
        <VStack space={2} alignItems="center">
      <Spinner size="lg" accessibilityLabel="Kindly wait while we evaluate your review!" />
      <Heading color="primary.500" fontSize="xl">
      Kindly wait while we evaluate your review!
      </Heading>
    </VStack></Center>
    );
}else{
    return (
        <Center flex={1} px="3">
        <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading
          size="lg"
          fontWeight="600"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
        >
          Review {JSON.parse(emailId)}
        </Heading>
        <Heading
          mt="1"
          _dark={{
            color: "warmGray.200",
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="xs"
        >
          We will store this review and other students will be able to see it!
        </Heading>
  
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Reviewer name</FormControl.Label>
            <Input placeholder='your name here...' value={username} onChangeText={onChangeHandler} />
          </FormControl>
          <TextArea
           value={message} onChangeText={onChangeHandler2}
      h={20}
      placeholder={`Give us your views on ${JSON.parse(emailId)}`}
      w={{
        base: "100%",
        md: "25%",
      }}
    />
        
          <Button onPress={onSubmitHandler} mt="2" colorScheme="green">
           Complete Review
          </Button>
    
        </VStack>
      </Box>
      </Center>
    )}
}
