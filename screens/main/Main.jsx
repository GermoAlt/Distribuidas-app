import {Login} from "../login/Login";
import {createNativeStackNavigator} from "@react-navigation/native-stack";


export const Main = () => {
    const Stack = createNativeStackNavigator()

    const getStartingPoint = () => {
        return "Login"
    }

    return (
        <Stack.Navigator initialRouteName={getStartingPoint}>
            <Stack.Screen name={"Login"} component={Login}/>
        </Stack.Navigator>
    )
}