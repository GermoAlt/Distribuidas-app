import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {Main} from "./screens/main/Main";
import {enableLatestRenderer} from "react-native-maps";
import {UserProvider} from "./screens/context/user/UserContext";
import { Provider as PaperProvider } from 'react-native-paper';
const App = () => {
    enableLatestRenderer()
    return (
        <PaperProvider>
            <UserProvider>
                <NavigationContainer>
                    <Main/>
                </NavigationContainer>
            </UserProvider>
        </PaperProvider>
    );
}
export default App;
