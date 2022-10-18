import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Login} from "../login/Login";

export const OwnerNavigate = () => {
    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator initialRouteName={"Login"}>
            <Stack.Screen name={"Login"} component={Login}/>
            <Stack.Screen name={"Register"} component={Login}/>
            <Stack.Screen name={"Reset Password"} component={Login}/>
            <Stack.Screen name={"Landing"} component={Login}/>
            <Stack.Screen name={"Restaurant Options"} component={Login}/>
            <Stack.Screen name={"Restaurant Edit"} component={Login}/>
            <Stack.Screen name={"Restaurant Create"} component={Login}/>
        </Stack.Navigator>
    )
}