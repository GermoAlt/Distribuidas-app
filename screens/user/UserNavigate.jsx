import {Login} from "../login/Login";
import {OwnerNavigate} from "../owner/OwnerNavigate";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

export const UserNavigate = () => {

    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator initialRouteName={"Login"}>
            <Stack.Screen name={"Login"} component={Login}/>
            <Stack.Screen name={"Landing"} component={Login}/>
            <Stack.Screen name={"Profile"} component={Login}/>
            <Stack.Screen name={"Favorites"} component={Login}/>
            <Stack.Screen name={"Search"} component={Login}/>
            <Stack.Screen name={"Restaurant"} component={Login}/>
            <Stack.Screen name={"Review"} component={Login}/>
        </Stack.Navigator>
    )
}