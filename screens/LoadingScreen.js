import {React,useEffect,useMemo} from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import ProgressBar from 'react-native-progress/Bar'
import * as Progress from 'react-native-progress';
import {useNavigation} from "@react-navigation/native"
export default function LoadingScreen() {
    const navigation=useNavigation()
  useEffect(()=>{
    setTimeout(()=>{
      navigation.navigate('DeliveryScreen')
    },5000)
  },[])
  return (
    <SafeAreaView className="bg-[#D70F64] flex-1 justify-center items-center">
        <Animatable.Image 
        source={require('/Applications/XAMPP/xamppfiles/htdocs/ReactNative/deliveroo-clone/assets/VdgG.gif')}
        delay={0}
        animation={"slideInUp"}
        className="h-60 w-80 rounded-md"
        >
            
        </Animatable.Image>
      <View className="mt-4 mb-2">
      <Animatable.Text className="text-white font-extrabold" animation="slideInUp"  direction='normal'  iterationCount={1}>Your order is on the way</Animatable.Text>
      </View>
      <Progress.Circle className="top-3" direction='counter-clockwise' borderWidth={2} size={50} indeterminate={true} color="rgba(255,255,255, 0.9)"  />
     </SafeAreaView>
  );
}
