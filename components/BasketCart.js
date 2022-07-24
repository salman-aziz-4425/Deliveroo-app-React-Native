import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {useNavigation} from "@react-navigation/native"
import OrderScreen from '../screens/OrderScreen';
import { useSelector } from 'react-redux';
export default function BasketCart() {
  const BasketItems=useSelector((state)=>state.Basket)
  const navigation=useNavigation()
  return (
    <View className="absolute w-full bottom-10 z-50">
    <TouchableOpacity className="mx-3 bg-[#D70F64] rounded-md" onPress={()=>navigation.navigate('Order',{})}>
  <View className="flex-row p-4 px-6 justify-between items-center">
    <View className="bg-[#8c395b] py-1 px-2">
    <Text className="text-white font-extrabold">{BasketItems.length}</Text>
    </View>
      <Text className="font-extrabold text-white text-x" color="white">View Basket</Text>
      <Text className="text-white font-extrabold">$20</Text>
     </View>
    </TouchableOpacity>
    </View>
  );
}
 