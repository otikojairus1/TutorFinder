import React from "react"
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
  NativeBaseProvider, AlertDialog,
} from "native-base"
import axios from "axios";


export default function TutorAccount ({navigation, emailId, id}){
    const [isOpen, setIsOpen] = React.useState(false)
    const [fullnames, setName] = React.useState('');

const [location, setLocation] = React.useState('');

    const onClose = () => {
        
      setIsOpen(false)
     navigation.navigate('signin')
}
  
    const cancelRef = React.useRef(null)
    let [alert, setAlert] = React.useState(false);
let [AlertMessage, setAlertMessage] = React.useState("");
const [isLoading, setIsLoading] = React.useState(false);
  // useEffect(() => {
  //   //using a fake rest api, will replace with the voters api when done
  //   fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   .then(response => response.json())
  //   .then(setIsLoading(false))
  // });

    const toast = useToast()

const onChangeName = (event) => {
 setName(event)
  console.log(fullnames);
}

const onChangeLocation = (event) => {
 setLocation(event);
  console.log(location);
}

const onSubmitHandler = (event) => {
  event.preventDefault();
  setIsLoading(true);
  axios({
    method: 'post',
    url: `https://tutorfinderapi.herokuapp.com/api/update/profile/${id}`,
    data: {
      "location":location,
      "fullnames":fullnames
  },
    config: { headers: {'Content-Type': 'application/json' }}
    })
     .then(function (response){
       console.log(response.data);
      setIsLoading(false);
      setAlert(true);
   
     }).catch((err)=>console.log(err));
 
}


let AlertRender;
if (alert){
  AlertRender = <Alert w="100%" status="info" colorScheme="info">
  <VStack space={2} flexShrink={1} w="100%">
    <HStack
      flexShrink={1}
      space={2}
      alignItems="center"
      justifyContent="space-between"
    >
      <HStack flexShrink={1} space={2} alignItems="center">
        <Alert.Icon />
        <Text fontSize="md" fontWeight="medium" color="coolGray.800">
          We've added your location and fullnames to the system, All students can now see this information!
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
     {AlertMessage}
    </Box>
  </VStack>
</Alert>
}else{
  AlertRender = "";
}

    return (
      
        <Center flex={1} px="3">
          <Center>
          
    <Box safeArea p="2" py="8" w="90%" maxW="290">
      <Heading
        size="lg"
        fontWeight="600"
        color="coolGray.800"
        _dark={{
          color: "warmGray.50",
        }}
      >
        Update your details!
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
        
      </Heading>

      {AlertRender}

      {isLoading ? <HStack space={2} alignItems="center">
      <Spinner size="lg" accessibilityLabel="Trying to sign you in!" />
      <Heading color="primary.500" fontSize="2xl">
        We are trying to update your profile..
      </Heading>
    </HStack> : 

      <VStack space={3} mt="5">
        <FormControl>
          <FormControl.Label>Full names</FormControl.Label>
          <Input name="fullnames" value={fullnames} onChangeText={onChangeName} />
        </FormControl>
        <FormControl>
          <FormControl.Label>Location</FormControl.Label>
          <Input name="location" value={location} onChangeText={onChangeLocation} />
        </FormControl>
    
        <Button type="submit"mt="2" colorScheme="indigo"
        onPress={onSubmitHandler}>
          Update info
        </Button>
  
      </VStack>}
    </Box>
    </Center>
      <Button colorScheme="danger" onPress={() => setIsOpen(!isOpen)}>
        Log Out
      </Button>
      <AlertDialog
        leastDestructiveRef={cancelRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>Sign Out?</AlertDialog.Header>
          <AlertDialog.Body>
            This will sign out all data relating to you. This action cannot be
            reversed.You will be required to re-enter your email and password the next time you'll need access to the account.
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button.Group space={2}>
              <Button
                variant="unstyled"
                colorScheme="coolGray"
                onPress={onClose}
                ref={cancelRef}
              >
                Cancel
              </Button>
              <Button colorScheme="danger" onPress={onClose}>
                Sign Out!
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </Center>
        
      
    )
  }

