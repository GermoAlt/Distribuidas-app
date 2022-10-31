import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Login} from "../login/Login";
import {OwnerLanding} from "./OwnerLanding";

export const OwnerNavigate = () => {
    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator initialRouteName={"Login"}>
            <Stack.Screen name={"OwnerLanding"} component={OwnerLanding} options={{ headerShown:false}}/>
            <Stack.Screen name={"Restaurant Options"} component={Login} options={{ headerShown:false}}/>
            <Stack.Screen name={"Restaurant Edit"} component={Login} options={{ headerShown:false}}/>
            <Stack.Screen name={"Restaurant Create"} component={Login} options={{ headerShown:false}}/>
        </Stack.Navigator>
    )
}