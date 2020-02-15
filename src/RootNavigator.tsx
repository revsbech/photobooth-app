import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import SingleViewScreen from "./screens/SingleViewScreen";
import ImageListScreen from "./screens/ImageListScreen";

type RootStackParamList = {
  Home: {images: string[]}
};

const Tab = createBottomTabNavigator<RootStackParamList>();
const Stack = createStackNavigator();

class ImagesNavigator extends React.Component {
  public render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="ImageList" component={ImageListScreen} />
        <Stack.Screen name="SingleView" component={SingleViewScreen} />
      </Stack.Navigator>
    )
  }
}

class RootNavigator extends React.Component {
  public render() {
    return (
      <Tab.Navigator initialRouteName={"Home"}>
        <Tab.Screen
          name="Home"
          component={ImagesNavigator}
        />
      </Tab.Navigator>
    )
  }
}

export default RootNavigator;