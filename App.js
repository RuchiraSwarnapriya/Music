import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import app screens
import HomeScreen from './src/screens/home/Home';
import ArtistScreen from './src/screens/artist/Artist';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Artist" component={ArtistScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
