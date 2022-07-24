import React from 'react';
import { View, Text,Image, TouchableOpacity } from 'react-native';

export default function Card({img,title}) {
  return (
    <TouchableOpacity className="relative mr-2">
    <View>
      <Image source={{
        uri:img
      }} 
      className="h-20 w-20 rounded"
      />
        
      <Text className="absolute bottom-1 text-white font-bold">{title}</Text>
     </View>
    </TouchableOpacity>
  );
}
