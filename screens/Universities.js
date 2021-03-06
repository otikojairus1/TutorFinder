
import React, { useState ,useEffect} from 'react';
import { Dimensions, TouchableOpacity, View } from 'react-native';

import {
  NativeBaseProvider,
  Box,
  Text,
  Pressable,
  Heading,
  IconButton,
  Icon,
  HStack,
  Avatar,
  VStack,
  Spacer,
  Spinner,
  Center,
} from 'native-base';
import { SwipeListView } from 'react-native-swipe-list-view';
import { MaterialIcons, Ionicons, Entypo } from '@expo/vector-icons';

export default function TabScreen() {
  const [mode, setMode] = useState('Basic');

  return (
    <NativeBaseProvider>
      <Box bg="white" flex="1" safeAreaTop>
        <Heading p="4" pb="3" size="lg">
          Check out available colleges
        </Heading>
        <Basic />
      </Box>
    </NativeBaseProvider>
  );
}

function Basic() {
    useEffect(() => {
        //using a fake rest api, will replace with the voters api when done
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(setIsLoading(false))
      });
  const data = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      fullName: 'Harvard University',
      timeStamp: '12:47 PM',
      recentText: 'Welcome to Harvard',
      avatarUrl: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      fullName: 'Oxford university',
      timeStamp: '11:11 PM',
      recentText: 'This is Oxford',
      avatarUrl:
        'https://images.pexels.com/photos/1130683/pexels-photo-1130683.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      fullName: 'Cambridge',
      timeStamp: '6:22 PM',
      recentText: 'We are cambridge university',
      avatarUrl: 'https://images.pexels.com/photos/7107578/pexels-photo-7107578.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },

    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        fullName: 'Oxford university',
        timeStamp: '11:11 PM',
        recentText: 'This is Oxford',
        avatarUrl:
          'https://images.pexels.com/photos/1130683/pexels-photo-1130683.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        fullName: 'Cambridge',
        timeStamp: '6:22 PM',
        recentText: 'We are cambridge university',
        avatarUrl: 'https://images.pexels.com/photos/7107578/pexels-photo-7107578.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },

      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        fullName: 'Oxford university',
        timeStamp: '11:11 PM',
        recentText: 'This is Oxford',
        avatarUrl:
          'https://images.pexels.com/photos/1130683/pexels-photo-1130683.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        fullName: 'Cambridge',
        timeStamp: '6:22 PM',
        recentText: 'We are cambridge university',
        avatarUrl: 'https://images.pexels.com/photos/7107578/pexels-photo-7107578.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },

      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        fullName: 'Oxford university',
        timeStamp: '11:11 PM',
        recentText: 'This is Oxford',
        avatarUrl:
          'https://images.pexels.com/photos/1130683/pexels-photo-1130683.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        fullName: 'Cambridge',
        timeStamp: '6:22 PM',
        recentText: 'We are cambridge university',
        avatarUrl: 'https://images.pexels.com/photos/7107578/pexels-photo-7107578.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },

      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        fullName: 'Oxford university',
        timeStamp: '11:11 PM',
        recentText: 'This is Oxford',
        avatarUrl:
          'https://images.pexels.com/photos/1130683/pexels-photo-1130683.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        fullName: 'Cambridge',
        timeStamp: '6:22 PM',
        recentText: 'We are cambridge university',
        avatarUrl: 'https://images.pexels.com/photos/7107578/pexels-photo-7107578.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },

      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        fullName: 'Harvard University',
        timeStamp: '12:47 PM',
        recentText: 'Welcome to Harvard',
        avatarUrl: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        fullName: 'Oxford university',
        timeStamp: '11:11 PM',
        recentText: 'This is Oxford',
        avatarUrl:
          'https://images.pexels.com/photos/1130683/pexels-photo-1130683.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },

      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        fullName: 'Harvard University',
        timeStamp: '12:47 PM',
        recentText: 'Welcome to Harvard',
        avatarUrl: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        fullName: 'Oxford university',
        timeStamp: '11:11 PM',
        recentText: 'This is Oxford',
        avatarUrl:
          'https://images.pexels.com/photos/1130683/pexels-photo-1130683.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },

  ];

  const [listData, setListData] = useState(data);
  const [isLoading, setIsLoading] = useState(true);
  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  
  const deleteRow = (rowMap, rowKey) => {
    closeRow(rowMap, rowKey);
    const newData = [...listData];
    const prevIndex = listData.findIndex((item) => item.key === rowKey);
    newData.splice(prevIndex, 1);
   // setTimeout(() => setIsLoading(false), 1000);
    setListData(newData);

  };

  const onRowDidOpen = (rowKey) => {
    console.log('This row opened', rowKey);
  };

  const renderItem = ({ item, index }) => (
      
    <Box>
      <Pressable onPress={() => console.log('You touched me')} bg="white">
        <Box
          pl="4"
          pr="5"
          py="2"
          >
          <HStack alignItems="center" space={3}>
            <Avatar size="48px" source={{ uri: item.avatarUrl }} />
            <VStack>
              <Text color="coolGray.800"  _dark={{ color: 'warmGray.50' }}  bold>
                {item.fullName}
              </Text>
              <Text color="coolGray.600" _dark={{ color: 'warmGray.200' }}>{item.recentText}</Text>
            </VStack>
            <Spacer />
            <Text fontSize="xs" color="coolGray.800"  _dark={{ color: 'warmGray.50' }} alignSelf="flex-start">
              {item.timeStamp}
            </Text>
          </HStack>
        </Box>
      </Pressable>
    </Box>
  );

  const renderHiddenItem = (data, rowMap) => (
    <HStack flex="1" pl="2">
      <Pressable
        w="70"
        ml="auto"
        
        bg="coolGray.200"
        justifyContent="center"
        onPress={() => closeRow(rowMap, data.item.key)}
        _pressed={{
          opacity: 0.5,
        }}>
        <VStack alignItems="center" space={2}>
          <Icon
            as={<Entypo name="dots-three-horizontal" />}
            size="xs"
            color="coolGray.800"
          />
          <Text fontSize="xs" fontWeight="medium" color="coolGray.800">
            More
          </Text>
        </VStack>
      </Pressable>
      <Pressable
        w="70"
        
        bg="red.500"
        justifyContent="center"
        onPress={() => deleteRow(rowMap, data.item.key)}
        _pressed={{
          opacity: 0.5,
        }}>
        <VStack alignItems="center" space={2}>
          <Icon as={<MaterialIcons name="delete" />} color="white" size="xs" />
          <Text color="white" fontSize="xs" fontWeight="medium">
            Delete
          </Text>
        </VStack>
      </Pressable>
    </HStack>
  );


  if (!isLoading){
    return (
        <Box bg="white" safeArea flex="1">
        <SwipeListView
          data={listData}
          renderItem={renderItem}
          renderHiddenItem={renderHiddenItem}
          rightOpenValue={-130}
          previewRowKey={'0'}
          previewOpenValue={-40}
          previewOpenDelay={3000}
          onRowDidOpen={onRowDidOpen}
        />
      </Box> 
      
      );
  }else{
      return(

        <Center flex={1} px="3">
    <HStack space={2} alignItems="center">
    <Spinner accessibilityLabel="Loading posts" />
    <Heading color="primary.500" fontSize="md">
      We are Personalizing your experience...!
    </Heading>
  </HStack>
  </Center>);
  }

  

 
}
