import {useEffect} from "react";
import {useTranslation} from "react-i18next";
import {Pressable, SafeAreaView, Text, View} from "react-native";

export const UserRestaurant = ({ navigation }) => {

    const { t, i18n } = useTranslation();

    useEffect(() => {
        navigation.setOptions({
            headerTitle: t("user.title_restaurant"),
        })
    }, [navigation])

    return (
        <SafeAreaView>
            <View>
                <Text>title</Text>
                <Text>Categoria</Text>
            </View>
            <View>
                <Pressable onPress={()=>navigation.navigate("UserReview")}>
                    <Text>star</Text>
                </Pressable>
                <Pressable></Pressable>
                <Pressable></Pressable>
                <Pressable></Pressable>
            </View>
            <View></View>
        </SafeAreaView>
    )
}