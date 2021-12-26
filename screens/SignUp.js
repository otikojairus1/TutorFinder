import * as React from "react"
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,  Spinner,
  Button,
  HStack, useToast,
  Center, Select, CheckIcon,
  NativeBaseProvider,
} from "native-base"
export default function SignInScreen ({ navigation }){

  
const [email, setEmail] = React.useState('');

const [password, setPassword] = React.useState('');

let [service, setService] = React.useState("")
const [isLoading, setIsLoading] = React.useState(false);
  // useEffect(() => {
  //   //using a fake rest api, will replace with the voters api when done
  //   fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   .then(response => response.json())
  //   .then(setIsLoading(false))
  // });

    const toast = useToast()

const onChangeEvent = (event) => {
 setEmail(event)
  console.log(email);
}

const onChangeEvent2 = (event) => {
 setPassword(event)
  console.log(password);
}

const onSubmitHandler = (event) => {
  event.preventDefault();
  setIsLoading(true);
  fetch('https://jsonplaceholder.typicode.com/todos/1')
     .then(response => response.json())
     .then((data)=>{

      
      navigation.navigate('Hello');
      setIsLoading(false);
      //console.log(data.userId);
     })
  console.log({
    'emailID':email,
    'password':password
  });
}


  return (
    <NativeBaseProvider>
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
        Hi! {service}
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
          Get Started!
      </Heading>

      {isLoading ? <HStack space={2} alignItems="center">
      <Spinner size="lg" accessibilityLabel="Trying to sign you in!" />
      <Heading color="primary.500" fontSize="xl">
        We are trying to Onboard you on to the system...
      </Heading>
    </HStack> : 

      <VStack space={3} mt="5">
        <FormControl>
          <FormControl.Label>Email ID</FormControl.Label>
          <Input name="email" value={email} onChangeText={onChangeEvent} />
        </FormControl>
        <FormControl>
          <FormControl.Label>Account Type</FormControl.Label>

        <VStack alignItems="center" space={4}>
      <Select
        selectedValue={service}
        minWidth="270"
        accessibilityLabel="Choose an Account Type"
        placeholder="Choose an Account Type"
        _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="5" />,
        }}
        mt={1}
        onValueChange={(itemValue) => setService(itemValue)}
      >
        <Select.Item label="Tutor" value="Tutor" />
        <Select.Item label="Student" value="Student" />
       
      </Select>
    </VStack>

    </FormControl>


        <FormControl>
          
          <FormControl.Label>Password</FormControl.Label>
          <Input  name="password" value={password} onChangeText={onChangeEvent2} type="password" />
     
        </FormControl>
        <FormControl>

          <FormControl.Label> Confirm Password</FormControl.Label>
          <Input  name="cpassword" value={password} onChangeText={onChangeEvent2} type="password" />
          <Link
            _text={{
              fontSize: "xs",
              fontWeight: "500",
              color: "indigo.500",
            }}
            alignSelf="flex-end"
            mt="1"
          >
            Terms and conditions...
          </Link>
        </FormControl>
        <Button type="submit"mt="2" colorScheme="indigo"
        onPress={onSubmitHandler}>
          Create an account
        </Button>
        <HStack mt="6" justifyContent="center">
          <Text
            fontSize="sm"
            color="coolGray.600"
            _dark={{
              color: "warmGray.200",
            }}
          >
            I'm an existing user.{" "}
          </Text>
          <Button variant="ghost" colorScheme="success"
          onPress={() => navigation.navigate('signin')}>
            Sign in
        </Button>
        </HStack>
      </VStack>}
    </Box>
    </Center>
    </NativeBaseProvider>
  )
}
