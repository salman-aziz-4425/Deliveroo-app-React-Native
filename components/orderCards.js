import React from 'react';
import { View, Text ,Image,TouchableOpacity} from 'react-native';

export default function OrderCards() {
  return (
    <View className="flex-row space-x-4 bg-white py-2 px-3 items-center border-y border-gray-300">
        <View  className="flex-row space-x-1">
        <Text className="text-[#D70F64] text-xs">3</Text>
        <Text className="text-[#D70F64] text-x">x</Text>
        </View>
    <Image
            source={{
              uri:'https://post.healthline.com/wp-content/uploads/2020/09/healthy-eating-ingredients-732x549-thumbnail-732x549.jpg'
          }}
          className="h-12 w-12 rounded-full"
    />
    <Text className="flex-1">Nando's</Text>
    <Text className="text-x">$2.00</Text>
    <TouchableOpacity>
      <Text className="text-[#D70F64] text-xs">Remove</Text>
    </TouchableOpacity>
  </View>
  );
}
