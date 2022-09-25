import { View, Text,Image, SafeAreaView, Button, TextComponent} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import loginImages from '../assets/loginImages';


const Index
 = () => {
  const navigation = useNavigation();
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])
  return (
    <SafeAreaView className="h-full w-full  bg-black">
      

     <Text className="text-white">Index</Text>
    </SafeAreaView>
  )
}

export default Index
