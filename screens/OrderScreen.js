import React from 'react';
import { View, Text, ScrollView, TouchableOpacity,Image } from 'react-native';
import { XCircleIcon } from 'react-native-heroicons/solid';
import {useNavigation} from "@react-navigation/native"
import OrderCards from '../components/orderCards';
import { useSelector } from 'react-redux';
export default function OrderScreen() {
    const navigation=useNavigation()
    const BasketItems=useSelector((state)=>state.Basket)
    const res = [];
    BasketItems.forEach(el => {
      const index = res.findIndex(obj => {
         return obj['name'] === el.name;
      });
      if(index === -1){
         res.push({
            "name": el.name,
            "img":el.img,
            "count": 1
         })
      }
      else{
         res[index]["count"]++;
      };
   });
  return (
    <View className="bg-gray-200 flex-1">
    <View className="bg-white">
        <View className="items-center pt-5 pb-4">
                <Text className="font-bold text-lg">Basket</Text>
                <Text className="text-xs text-gray-400 font-bold">Nando's</Text>
        </View>
        <TouchableOpacity className="absolute right-4 top-4 rounded-full"  onPress={()=>navigation.goBack()}>
            <XCircleIcon size={44} color="#D70F64"/>
        </TouchableOpacity>
    </View>
    <View className="flex-row space-x-4 mt-4 bg-white p-3 items-center">
      <Image
              source={{
                uri:'https://post.healthline.com/wp-content/uploads/2020/09/healthy-eating-ingredients-732x549-thumbnail-732x549.jpg'
            }}
            className="h-7 w-7 rounded-full p-4"
      />
      <Text className="flex-1">Deliver in 50-70 min</Text>
      <TouchableOpacity>
        <Text className="text-[#D70F64] text-x">Change</Text>
      </TouchableOpacity>
    </View>
    <ScrollView className="mt-6">
      {
        res.map((object,index)=>{
          return(
             <OrderCards key={index} Title={object.name} img={object.img} quantity={object.count}/>
          ) 
        })
      }
    </ScrollView>
    <View className="bg-white px-4 pt-4 pb-2">
      <View className="flex-row justify-between">
        <Text className="text-gray-300 font-bold">Subtotal</Text>
        <Text className="text-gray-300 font-bold">$2.00</Text>
      </View>
      <View className="flex-row justify-between pt-2 pb-2">
        <Text className="text-gray-300 font-bold">Delivery fee</Text>
        <Text className="text-gray-300 font-bold">$2.00</Text>
      </View>
      <View className="flex-row justify-between pb-2">
        <Text >Order Total</Text>
        <Text >$2.00</Text>
      </View>
      <TouchableOpacity className=" bg-[#D70F64] rounded-md mt-4 mb-10" onPress={()=>navigation.navigate('LoadingScreen',{})}>
  <View className="flex-row p-4 px-6 items-center justify-center">
      <Text className="font-extrabold text-white text-x" color="white">Place Order</Text>
     </View>
    </TouchableOpacity>
    </View>
    </View>
  );
}
