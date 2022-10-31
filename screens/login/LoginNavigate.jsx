import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Login} from "./Login";
import {RecoverAccount} from "./RecoverAccount";
import {SocialLogin} from "./SocialLogin";
import {OwnerLogin} from "./OwnerLogin";
import {RegisterOwner} from "./RegisterOwner";

export const LoginNavigate = () => {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator initialRouteName={"LandingLogin"}>
            <Stack.Screen name={"LandingLogin"} component={Login} options={{ headerShown:false}}></Stack.Screen>
            <Stack.Screen name={"OwnerLogin"} component={OwnerLogin} options={{ headerShown:false}}></Stack.Screen>
            <Stack.Screen name={"RecoverAccount"} component={RecoverAccount} options={{ headerShown:false}}></Stack.Screen>
            <Stack.Screen name={"SocialLogin"} component={SocialLogin} options={{ headerShown:false}}></Stack.Screen>
            <Stack.Screen name={"RegisterAccount"} component={RegisterOwner} options={{ headerShown:false}}></Stack.Screen>
        </Stack.Navigator>
    )
}