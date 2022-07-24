
import React ,{ useLayoutEffect} from 'react';
import { View, Text, SafeAreaView,Image, TextInput, ScrollView } from 'react-native';
import {
    UserIcon,
    ChevronDownIcon,
    SearchIcon,
    AdjustmentsIcon
} from 'react-native-heroicons/outline'
import Categories from '../components/categories';
import Features from '../components/features';
export default function HomeScreen() {
  return (
    <SafeAreaView className="bg-white pt-5" > 
        {/* {Header} */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image 
        source={{
            uri:'https://post.healthline.com/wp-content/uploads/2020/09/healthy-eating-ingredients-732x549-thumbnail-732x549.jpg'
        }}
        className="h-7 w-7 bg-gray-300 p-4 rounded-full">
        </Image>
      <View className="flex-1">
      <Text className="font-bold text-gray-400 text-xs">Deliever Now!</Text>
      <Text className="font-bold text-xl">
        Current Location
        <ChevronDownIcon size={20} color="#D70F64"/>
        </Text>
      </View>
      <UserIcon size={35} color="#D70F64"/>
      </View>
        {/* {Search} */}
        <View className="flex-row items-center space-x-2 pb-2 mx-4">
            <View className="flex-row flex-1 space-x-2 bg-gray-200 p-2">
                <SearchIcon color="gray" size={20}/>
                <TextInput placeholder='Resturants and cusines ' keyboardType='default'/>
            </View>
            <AdjustmentsIcon color="#D70F64"></AdjustmentsIcon>
        </View>
           {/* {Body} */} 
           <ScrollView className="bg-gray-100" contentContainerStyle={{
            paddingBottom:100
           }}>
        <Categories/>
        <Features/>
       </ScrollView>
    </SafeAreaView>
    
  );
}
