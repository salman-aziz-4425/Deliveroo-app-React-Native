import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import OrderScreen from './screens/OrderScreen';
import LoadingScreen from './screens/LoadingScreen';
import DeliveryScreen from './screens/DeliveryScreen';
import { Provider } from 'react-redux'
import { store } from './features/store';
const Stack=createNativeStackNavigator()
export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
    <TailwindProvider>
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
      
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen  name="Order" component={OrderScreen} />
        </Stack.Group >
        <Stack.Group screenOptions={{ presentation: 'fullScreenModal' }}>
        <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
        <Stack.Screen name="DeliveryScreen" component={DeliveryScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </TailwindProvider>
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
