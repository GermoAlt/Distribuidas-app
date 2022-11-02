import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {Main} from "./screens/main/Main";
import {enableLatestRenderer} from "react-native-maps";
const App = () => {
    enableLatestRenderer()
    return (
        <NavigationContainer>
            <Main/>
        </NavigationContainer>
    );
}
export default App;
