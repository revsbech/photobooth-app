import * as React from 'react';
import {NavigationContainer} from "@react-navigation/native";

export const isMountedRef = React.createRef();
export const navigationRef = React.createRef<NavigationContainer>();

function navigate(route: string, params: any) {
  if (isMountedRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    console.log(route, "ROUTE");
    navigationRef.current.navigate(route, params);
    return true;
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
  return false;
}


export default {
  navigate,
};
