import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Card from './categoryCard';

export default function Categories() {
  return (
    <ScrollView contentContainerStyle={{
        paddingHorizontal:15,
        paddingTop:15
    }}
    horizontal
    showsHorizontalScrollIndicator={false}>
        {/* {Catageories} */}
      <Card img="https://www.japan.go.jp/kizuna/_src/7989285/sushi_robots_01.jpg?v=1646641593194" title="Testing"/>
      <Card img="https://www.japan.go.jp/kizuna/_src/7989285/sushi_robots_01.jpg?v=1646641593194" title="Testing"/>
      <Card img="https://www.japan.go.jp/kizuna/_src/7989285/sushi_robots_01.jpg?v=1646641593194" title="Testing"/>
      <Card img="https://www.japan.go.jp/kizuna/_src/7989285/sushi_robots_01.jpg?v=1646641593194" title="Testing"/>
      <Card img="https://www.japan.go.jp/kizuna/_src/7989285/sushi_robots_01.jpg?v=1646641593194" title="Testing"/>
      <Card img="https://www.japan.go.jp/kizuna/_src/7989285/sushi_robots_01.jpg?v=1646641593194" title="Testing"/>
     </ScrollView>
  );
}
