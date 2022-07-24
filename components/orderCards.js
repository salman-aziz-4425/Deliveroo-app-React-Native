import React from 'react';
import { View, Text ,Image,TouchableOpacity} from 'react-native';
import { useDispatch } from 'react-redux'
import {RemoveBasket} from '../features/Slices/BasketManagement'
export default function OrderCards({Title,img,quantity}) {
  const dispatch=useDispatch()
  return (
    <View className="flex-row space-x-4 bg-white py-2 px-3 items-center border-y border-gray-300">
        <View  className="flex-row space-x-1">
        <Text className="text-[#D70F64] text-xs">{quantity}</Text>
        <Text className="text-[#D70F64] text-x">x</Text>
        </View>
    <Image
            source={{
              uri:img
          }}
          className="h-12 w-12 rounded-full"
    />
    <Text className="flex-1">{Title}</Text>
    <Text className="text-x">$2.00</Text>
    <TouchableOpacity onPress={()=>dispatch(RemoveBasket(Title))}>
      <Text className="text-[#D70F64] text-xs">Remove</Text>
    </TouchableOpacity>
  </View>
  );
}
