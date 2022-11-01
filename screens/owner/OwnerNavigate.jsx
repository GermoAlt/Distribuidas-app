import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Login} from "../login/Login";
import {OwnerLanding} from "./OwnerLanding";
import {RestaurantEdit} from "./RestaurantEdit";
import {RestaurantReviews} from "./RestaurantReviews";
import {RestaurantOptions} from "./RestaurantOptions";
import {MenuEdit} from "./MenuEdit";

export const OwnerNavigate = () => {
    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator initialRouteName={"Login"}>
            <Stack.Screen name={"OwnerLanding"} component={OwnerLanding}/>
            <Stack.Screen name={"RestaurantOwnerOptions"} component={RestaurantOptions}/>
            <Stack.Screen name={"RestaurantOwnerEdit"} component={RestaurantEdit}/>
            <Stack.Screen name={"RestaurantMenuEdit"} component={MenuEdit}/>
            <Stack.Screen name={"RestaurantOwnerReviews"} component={RestaurantReviews}/>
        </Stack.Navigator>
    )
}