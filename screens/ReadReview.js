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
export default function ReadReview({route}) {
    const { updated_at, review, reviewer, reviewee,created_at } = route.params;
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
           You are Here! This is a review made by {JSON.stringify(reviewee)}
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
           {JSON.stringify(review)} { "\n"}
           created on: {JSON.stringify(created_at)}
           updated on: {JSON.stringify(updated_at)}

          </Box>
        </VStack>
      </Alert></Center>
    )
}
