import {Login} from "../login/Login";
import {OwnerNavigate} from "../owner/OwnerNavigate";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {UserLanding} from "./UserLanding";

export const UserNavigate = () => {

    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator initialRouteName={"Login"}>
            <Stack.Screen name={"UserLanding"} component={UserLanding}/>
            <Stack.Screen name={"UserProfile"} component={Login}/>
            <Stack.Screen name={"UserFavorites"} component={Login}/>
            <Stack.Screen name={"UserSearch"} component={Login}/>
            <Stack.Screen name={"UserRestaurant"} component={Login}/>
            <Stack.Screen name={"UserReview"} component={Login}/>
        </Stack.Navigator>
    )
}