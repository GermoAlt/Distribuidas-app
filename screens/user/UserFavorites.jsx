import {FlatList, SafeAreaView, View} from "react-native";
import {useEffect} from "react";
import {Svg} from "react-native-svg";
import UserIcon from "../../assets/images/user_icon.svg";
import {useTranslation} from "react-i18next";

const data = []

export const UserFavorites = ({ navigation }) => {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        navigation.setOptions({
            headerTitle: t("user.title_favorites"),
        })
    }, [navigation])

    const renderRestaurant = (item) => {
      return <div>
          <div>

          </div>
      </div>
    }
    return (
        <SafeAreaView>
            <FlatList data={data} renderItem={renderRestaurant}/>

        </SafeAreaView>
    )
}