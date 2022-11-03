import {Login} from "../login/Login";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {UserNavigate} from "../user/UserNavigate";
import {OwnerNavigate} from "../owner/OwnerNavigate";
import {LoginNavigate} from "../login/LoginNavigate";
import useUser from "../context/user/useUser";
import {useEffect, useState} from "react";


export const Main = () => {
    const Stack = createNativeStackNavigator()

    const {user, } = useUser()
    const [firstScreen, setFirstScreen] = useState("")
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        if(user && user.role){
            if(user.role === "owner") {
                setFirstScreen("OwnerNav")
            } else {
                setFirstScreen("UserNav")
            }
        } else {
            setFirstScreen("Login")
        }
        setLoading(false)
    }, [])

    if(loading){return }

    return (
        <Stack.Navigator initialRouteName={firstScreen}
                         screenOptions={{
                             headerStyle:{backgroundColor:"#695E50"},
                             headerTintColor:"white",
                             headerTitleStyle: {
                                 color:"white",
                                 fontSize:24
                             }
                         }}>
            <Stack.Screen name={"Login"} component={LoginNavigate} options={{ headerShown:false}}/>
            <Stack.Screen name={"UserNav"} component={UserNavigate} options={{ headerShown:false}}/>
            <Stack.Screen name={"OwnerNav"} component={OwnerNavigate} options={{ headerShown:false}}/>
        </Stack.Navigator>
    )
}