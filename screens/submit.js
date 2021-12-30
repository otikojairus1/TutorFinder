import React from 'react'
import { View,} from 'react-native'
import {
    Box,
    Text,
    Heading,
    VStack,
    FormControl,
    Input, IconButton,
    Link,  Spinner,
    Button,  Alert,CheckIcon,
    HStack, useToast,
    Center,  CloseIcon,
    NativeBaseProvider,
  } from "native-base"
export default function submit({ route, navigation }) {
    const { email, accepted } = route.params;
    return (
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
        <Button mt="2" colorScheme="indigo"
        onPress={()=>{

            navigation.navigate('success');

        }}>
          Confirm Request!
        </Button>
      </Alert>
      
    )
}
