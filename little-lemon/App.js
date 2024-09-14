import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from './screens/Profile.js';

const Stack = createNativeStackNavigator();

function App() {
       
 return (
   <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen name="Onboarding" component={OnboardingScreen} /> 
       <Stack.Screen name="Profile" component={ProfileScreen} />
     </Stack.Navigator>
   </NavigationContainer>
 );
}
export default App;