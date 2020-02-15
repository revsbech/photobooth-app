import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ImageList from "./ImageList";
import {SafeAreaView} from "react-native";

type RootStackParamList = {
  Home: {images: strgin[]}
};

const Tab = createBottomTabNavigator<RootStackParamList>();

class RootNavigator extends React.Component {
  public render() {
    return (
      <Tab.Navigator initialRouteName={"Home"}>
        <Tab.Screen
          name="Home"
          component={ImageList}
          options={{title: 'Home'}}
        />
      </Tab.Navigator>
    )
  }
}

export default RootNavigator;