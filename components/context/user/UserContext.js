import React, {useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const UserContext = React.createContext();

const defaultUser = {id:0, type:null}

export const UserProvider = ({ children, user }) => {

    const getStoredUser = async () => {
        return  JSON.parse(await AsyncStorage.getItem("@user_info"))
    }

    const setStoredUser = async (newUser) => {
        return await AsyncStorage.setItem("@user_info", JSON.stringify(newUser))
    }

    const [currentUser, setCurrentUser] = useState(
        getStoredUser || defaultUser
    )

    const changeUser = (newUser) => {
        setCurrentUser(newUser)
        setStoredUser(newUser).then(() => {})
    }

    return(
        <UserContext.Provider value={{user:currentUser, changeUser}}>
            {children}
        </UserContext.Provider>
    )
}

export const UserConsumer = UserContext.Consumer;

export default UserContext;