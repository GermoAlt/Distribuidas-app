import {useEffect} from "react";
import {FlatList, Pressable, SafeAreaView, Text, TextInput, View} from "react-native";
import {Svg} from "react-native-svg";
import UserIcon from "../../assets/images/user_icon.svg";
import {useTranslation} from "react-i18next";
import useUser from "../../components/context/user/useUser";
import SideMenu from "react-native-side-menu/index";

const dataCategorias = []
const dataRestaurantes = []

export const UserLanding = ({ navigation }) => {
    const menu = (
        <View>

        </View>
    )

    const renderRestaurant = () => {
        return (
            <View>

            </View>
        )
    }

    const renderCategory = () => {
        return (
            <View>

            </View>
        )
    }

    const { t, i18n } = useTranslation();
    const {user, } = useUser()

    useEffect(() => {
        navigation.setOptions({
            headerLeft:() => (
                <View>
                    <Svg>
                        <UserIcon />
                    </Svg>
                </View>
            ),
            headerTitle: t("user.landing_title"),
        })
    }, [navigation])

    return (
        <SafeAreaView>
            <SideMenu menu={menu}>
                <View>
                    <Text>Hola {user.name}!</Text>
                    <View>
                        <TextInput placeholder={t("user.search_bar_placeholder")}></TextInput>
                        <Pressable>
                            <Text>{t("user.filters")}</Text>
                        </Pressable>
                    </View>
                </View>
                <View>
                    <Text>{t("user.title_categories")}</Text>
                    <FlatList data={dataCategorias} renderItem={renderCategory} horizontal></FlatList>
                </View>
                <View>
                    <Text>{t("user.title_restaurants")}</Text>
                    <FlatList data={dataRestaurantes} renderItem={renderRestaurant} horizontal></FlatList>
                </View>
            </SideMenu>
        </SafeAreaView>
    )
}