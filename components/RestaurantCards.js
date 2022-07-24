import {React,useState} from 'react';
import { View, Text, TouchableOpacity,Image } from 'react-native';
import { MinusCircleIcon, PlusCircleIcon} from 'react-native-heroicons/solid';

export default function RestaurantCards({Title,img,descrip}) {
const [isPressed,setisPressed] = useState(false)
const [priceCount,setpriceCount]=useState(0)
  return (
    <>
    <TouchableOpacity className="bg-white p-4 border-y border-gray-200" onPress={()=>setisPressed(!isPressed)}>
        <View className="flex-row">
           <View className="flex-1">
            <Text className="text-xl">{Title}</Text>
            <Text className=" text-xs text-gray-500">{descrip}</Text>
            <Text  className=" text-xs text-gray-500">$1.499</Text>
           </View>
           <View>
            <Image source={{
                uri:img
            }}
            className="h-20 w-20"
            />
           </View>
        </View>
     </TouchableOpacity >
     {
        isPressed?
        <View className="bg-white border border-gray-200 pt-2 pb-2 px-4">
            <View className="flex-row space-x-2 items-center">
            <TouchableOpacity  onPress={()=>setpriceCount(priceCount>0?priceCount-1:0)}>
                <MinusCircleIcon size={40} color="#D70F64"/>
            </TouchableOpacity>
            <Text>{priceCount}</Text>
            <TouchableOpacity onPress={()=>setpriceCount(priceCount+1)}>
                <PlusCircleIcon size={40} color="#D70F64"/>
            </TouchableOpacity>
            </View>
        </View>:<View></View>
     }
     </>
  );
}
