import React from 'react';
import { View, Text,Image, TouchableOpacity, ScrollView } from 'react-native';
import { LocationMarkerIcon, StarIcon } from 'react-native-heroicons/solid';
import {useNavigation} from "@react-navigation/native"
export default function FeatureCard() {
  const navigation=useNavigation()
  return (
    <TouchableOpacity className="bg-white mr-3" 
    onPress={()=>{
      navigation.navigate('Restaurant',{
        id:"123",
        imgUrl:"https://static.onecms.io/wp-content/uploads/sites/19/2018/04/23/1804-what-is-sushi-grade-fish-2000.jpg",
        title:"Nando's",
        rating:4.8,
        genre:"Nandos",
        address:"Clink Street",
        short_description:"Nando's is a South African multinational fast casual chain that specialises in flame-grilled peri-peri style chicken",   
        dishes:[],
        long:0,
        lat:0
      })
    }}
    >

      <Image
      source={{
        uri:"https://static.onecms.io/wp-content/uploads/sites/19/2018/04/23/1804-what-is-sushi-grade-fish-2000.jpg"
      }}
      className="h-36 w-64 rounded-sm"
      />
      <ScrollView >
      <View className="px-3 pb-4 bg-white">
      <Text className="text-lg font-bold pt-2">Nandos</Text>
      <View className="flex-row items-center space-x-1">
        <StarIcon color="green" opacity={0.5} size={22}/>
        <Text className="text-x text-green-500">4.8</Text>
       <Text className="text-x text-gray-500">. Offers</Text>
      </View>
      <View className="flex-row items-center space-x-1">
        <LocationMarkerIcon color="gray" opacity={0.4} />
        <Text className="text-x text-gray-500">Nearby</Text>
       <Text className="text-x text-gray-500">. Clink Street</Text>
      </View>
      </View>
      </ScrollView>
    
     </TouchableOpacity>
  );
}
