import {Login} from "../login/Login";
import {OwnerNavigate} from "../owner/OwnerNavigate";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {UserLanding} from "./UserLanding";
import {UserProfile} from "./UserProfile";
import {UserSearch} from "./UserSearch";
import {UserFavorites} from "./UserFavorites";
import {UserRestaurant} from "./UserRestaurant";
import {UserReview} from "./UserReview";
import {UserSearchFilters} from "./UserSearchFilters";
import {UserNewReview} from "./UserNewReview";

export const UserNavigate = () => {

    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator initialRouteName={"Login"}  screenOptions={{
            headerStyle:{backgroundColor:"#695E50"},
            headerTintColor:"white",
            headerTitleStyle: {
                color:"white",
                fontSize:24
            }
        }}>
            <Stack.Screen name={"UserLanding"} component={UserLanding}/>
            <Stack.Screen name={"UserProfile"} component={UserProfile}/>
            <Stack.Screen name={"UserFavorites"} component={UserFavorites}/>
            <Stack.Screen name={"UserSearch"} component={UserSearch}/>
            <Stack.Screen name={"UserSearchFilters"} component={UserSearchFilters}/>
            <Stack.Screen name={"UserRestaurant"} component={UserRestaurant}/>
            <Stack.Screen name={"UserReview"} component={UserReview}/>
            <Stack.Screen name={"UserNewReview"} component={UserNewReview}/>
        </Stack.Navigator>
    )
}