import React from 'react';
import { View, Text,Image, ScrollView, Touchable, TouchableOpacity} from 'react-native';
import {useRoute} from "@react-navigation/native"
import { ArrowLeftIcon,StarIcon,LocationMarkerIcon, QuestionMarkCircleIcon, ChevronRightIcon } from 'react-native-heroicons/solid';
import {useNavigation} from "@react-navigation/native"
import RestaurantCards from '../components/RestaurantCards';
import BasketCart from '../components/BasketCart';
export default function RestaurantScreen() {
  const navigation=useNavigation()
  const {
    params:{
      id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,   
        dishes,
        long,
        lat
    }
  }=useRoute()
  return (
    <>
    <BasketCart/>
    <ScrollView className="bg-gray-300">
      <View className="relative">
      <Image source={{
        uri:imgUrl
      }} 
      className="h-56 w-full"
      />
      <TouchableOpacity onPress={()=>navigation.goBack()
  } className="absolute top-10 left-2 p-2 bg-gray-100 rounded-full">
      <ArrowLeftIcon color="#D70F64" size={22}/>
      </TouchableOpacity>
     </View>
     <View className="px-4 pt-4 bg-white">
      <Text className="font-bold text-2xl">{title}</Text>
      <View className="flex-row items-center space-x-1">
        <StarIcon color="green" opacity={0.5} size={22}/>
        <Text className="text-xs text-green-500">4.8</Text>
       <Text className="text-xs text-gray-500">. Offers</Text>
       <LocationMarkerIcon color="gray" opacity={0.4} />
        <Text className="text-xs text-gray-500">Nearby</Text>
       <Text className="text-xs text-gray-500">. Clink Street</Text>
      </View>
      <Text className=" text-xs text-gray-500 mt-2 pb-4">{short_description}</Text>
     </View>
     <View className="bg-white">
     <TouchableOpacity className="flex-row  items-center px-3 pt-4 pb-4 space-x-2 border-y border-gray-300">
      <QuestionMarkCircleIcon size={20} color="gray" opacity={0.6}/>
      <Text className="pl-2 flex-1 text-md font-bold">Have a food allergy?</Text>
      <ChevronRightIcon color="#00CCBB" size={20}/>
     </TouchableOpacity>
     </View>
     <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>
     <View>
     <RestaurantCards Title={title} img={imgUrl} descrip={short_description}/>
     <RestaurantCards Title={title} img={imgUrl} descrip={short_description}/>
     <RestaurantCards Title={title} img={imgUrl} descrip={short_description}/>
      <RestaurantCards Title={title} img={imgUrl} descrip={short_description}/>
     </View>
    </ScrollView>
    </>
  );
}
