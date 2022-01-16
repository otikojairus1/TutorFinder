import React from 'react'
import { View } from 'react-native'
import {
    Box,
    Text,
    Heading,
    VStack,
    FormControl,
    Input, Alert,
    Link,
    Button,Spinner,
    HStack, TextArea,
    Center,
    NativeBaseProvider,
  } from "native-base"
export default function Done() {
    return (
        <Center flex={1} mx={4}>
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
           Youve done it!
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
           You've successfully submitted your review, other students can now see your review. This will help 
           them tremendously in ensuring they always get the best tutors on the platform. Tutors can also 
           learn from bad reviews to improve on their services.
      

          </Box>
        </VStack>
      </Alert></Center>
    )
}
