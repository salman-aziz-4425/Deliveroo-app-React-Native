import { useFocusEffect } from '@react-navigation/native';
import {React,useState,useEffect,useCallback} from 'react';
import { View, Text, TouchableOpacity,Image } from 'react-native';
import { MinusCircleIcon, PlusCircleIcon} from 'react-native-heroicons/solid';
import { useSelector,useDispatch } from 'react-redux'
import {AddBasket, RemoveBasket} from '../features/Slices/BasketManagement'
export default function RestaurantCards({Title,img,descrip}) {
const dispatch=useDispatch()
const Basket=useSelector((state)=>state.Basket)
const [isPressed,setisPressed] = useState(false)
const [quantityCount,setquantityCount]=useState(0)
useFocusEffect(useCallback(() => {
      return () => {
        setisPressed(false)
      };
    }, [])
  );
const PlusButtonHandler=()=>{
    setquantityCount(quantityCount+1)
    dispatch(AddBasket({
        name:Title,
        img:img
    }))
    
}
const MinusButtonHandler=()=>{
    if(quantityCount>0){
        setquantityCount(quantityCount-1)
        dispatch(RemoveBasket(Title))
    }
    else{
        setquantityCount(0)
    }
}
  return (
    <>
    <TouchableOpacity className="bg-white p-4 border-y border-gray-200" onPress={()=>{
        setisPressed(!isPressed)
        setquantityCount(0)
        }}>
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
            <TouchableOpacity  onPress={MinusButtonHandler}>
                <MinusCircleIcon  size={40} color="#D70F64"/>
            </TouchableOpacity>
            <Text>{quantityCount}</Text>
            <TouchableOpacity onPress={PlusButtonHandler}>
                <PlusCircleIcon size={40} color="#D70F64"/>
            </TouchableOpacity>
            </View>
        </View>:<View></View>
     }
     </>
  );
}
