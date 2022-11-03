import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {Main} from "./screens/main/Main";
import {enableLatestRenderer} from "react-native-maps";
import {UserProvider} from "./screens/context/user/UserContext";
const App = () => {
    enableLatestRenderer()
    return (
        <UserProvider>
            <NavigationContainer>
                <Main/>
            </NavigationContainer>
        </UserProvider>
    );
}
export default App;
