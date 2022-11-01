import {Login} from "../login/Login";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {UserNavigate} from "../user/UserNavigate";
import {OwnerNavigate} from "../owner/OwnerNavigate";
import {LoginNavigate} from "../login/LoginNavigate";


export const Main = () => {
    const Stack = createNativeStackNavigator()

    const getStartingPoint = () => {
        return "Login"
    }

    return (
        <Stack.Navigator initialRouteName={getStartingPoint}
                         screenOptions={{
                             headerStyle:{backgroundColor:"#695E50"},
                             headerTintColor:"white",
                             headerTitleStyle: {
                                 color:"white",
                                 fontSize:24
                             }
                         }}>
            <Stack.Screen name={"Login"} component={LoginNavigate} options={{ headerShown:false}}/>
            <Stack.Screen name={"User Nav"} component={UserNavigate} options={{ headerShown:false}}/>
            <Stack.Screen name={"Owner Nav"} component={OwnerNavigate} options={{ headerShown:false}}/>
        </Stack.Navigator>
    )
}