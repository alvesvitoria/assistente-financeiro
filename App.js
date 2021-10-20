import React from "react";

// Navigation
import { NavigationContainer } from "@react-navigation/native";
import Routes from './src/pages/routes';

export default function App(){
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  )
}



