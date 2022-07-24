import React from 'react';
import { View, Text, TouchableOpacity,Image } from 'react-native';
import { XIcon } from 'react-native-heroicons/solid';
import * as Progress from 'react-native-progress';
import {useNavigation} from "@react-navigation/native"
export default function DeliveryScreen() {
  const navigation=useNavigation()
  return (
    <>
      <View className="bg-[#D70F64] h-60 px-4 w-full">
        <TouchableOpacity className="pt-16 pb-8" onPress={()=>navigation.navigate('Home')}>
        <XIcon color={"white"} size={24} />
        </TouchableOpacity>
        <View className="bg-white h-36 px-4 w-full rounded-md flex-row items-center space-x-2 ">
          <View className="px-4">
            <Text className="text-gray-400 font-bold text-x">Estimated Arrival</Text>
            <Text className="font-bold text-2xl">45-55 MINUTES</Text>
            <Progress.Bar className="mt-2" indeterminate={true} color="rgb(215, 15, 100)"/>
          </View>
          <Image source={{
            uri:"https://thumbs.dreamstime.com/z/cartoon-cyclist-vector-illustration-37069887.jpg"
          }} 
          className="h-20 w-20"
          ></Image>
        </View>
      </View>

      </>
  );
}
