import {useEffect} from "react";
import {Pressable, Text} from "react-native";

export const UserReview = ({navigation}) => {

    useEffect(() => {
        navigation.setOptions({
            headerTitle: "",
            headerRight: () => (
                <Pressable onPress={()=>navigation.navigate("UserNewReview")}>
                    <Text>nuevo</Text>
                </Pressable>
            )
        })
    }, [navigation])

    return (
        <></>
    )
}