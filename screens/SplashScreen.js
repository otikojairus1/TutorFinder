import{ React ,useEffect}from 'react'
import { StatusBar } from 'expo-status-bar';
import {  Box, View,
    Text,
    Button,Image,
  } from 'native-base';
import { StyleSheet } from 'react-native';


export default function SplashScreen({navigation}) {
    // useEffect(() => {
    //     //using a fake rest api, will replace with the voters api when done
    //     fetch('https://jsonplaceholder.typicode.com/todos/1')
    //     .then(response => response.json())
    //     .then((res)=>console.log(res)).catch((err)=>console.log(err))
    //    // navigation.navigate('Hello');
    //   });
    return (
        <View style={styles.container}>
            <Image
            source={require('../assets/images/1.png')}
            alt="Alternate Text"
            size="2xl"
         />
    
            <Text fontSize="xl" >Hi! Welcome to the TutorFinder App</Text>
            <StatusBar style="auto" />
            <Button variant="outline" size="lg" colorScheme="success"
          onPress={() => navigation.navigate('Hello')}>
            Get Started
        </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
