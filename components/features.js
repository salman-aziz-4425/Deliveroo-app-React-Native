import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import FeatureCard from './featureCard';

export default function Features() {
  return (
    <View>
      <View className="flex-row justify-between mt-3 px-3">
        <Text className="font-bold text-xl">Featured</Text>
        <ArrowRightIcon color="#D70F64"/>
      </View>
      <Text className=" text-gray-500 font-bold text-xs px-3">Paid placements from our partners</Text>
      <ScrollView
      contentContainerStyle={{
        paddingHorizontal:15,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
      className="pt-4"
      >
        <FeatureCard/>
        <FeatureCard/>
        <FeatureCard/>
        <FeatureCard/>
      </ScrollView>
    </View>
  );
}
