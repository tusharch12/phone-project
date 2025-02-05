import * as React from 'react';


import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


//component
import BottomNavigator from './bottom';

//Screen
import DetailsScreen from './screen/details';
import SearchScreen from './screen/searchPage';

//const
const searchName = 'search';

const Stack = createNativeStackNavigator();

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="bottomBar"
          component={BottomNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="detail"
          component={DetailsScreen}
          options={{headerShown: false}}
        />
    <Stack.Screen 
    name={searchName}
    component={SearchScreen}
    options={{headerShown:false}}
    />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
