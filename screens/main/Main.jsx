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
        <Stack.Navigator initialRouteName={getStartingPoint}>
            <Stack.Screen name={"Login"} component={LoginNavigate} options={{ headerShown:false}}/>
            <Stack.Screen name={"User Nav"} component={UserNavigate}/>
            <Stack.Screen name={"Owner Nav"} component={OwnerNavigate}/>
        </Stack.Navigator>
    )
}