import {Dimensions, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View} from "react-native";
import {useEffect, useRef, useState} from "react";
import {useTranslation} from "react-i18next";
import {RestaurantList} from "../../components/visual/RestaurantList";

export const UserSearch = ({route, navigation}) => {
    const { t, i18n } = useTranslation();
    const restaurantData = useState([])


    const inputRef = useRef(null)

    useEffect(() => {
        navigation.setOptions({
            headerTitle: t("user.title_search"),
        })
    }, [navigation])

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput placeholder={t("user.search_bar_placeholder")} autoFocus={true} ref={inputRef} onLayout={()=>inputRef.current.focus()}
                           style={[styles.yellow, styles.searchField]} onTouchStart={()=>navigation.navigate("UserSearch")}/>
                <View style={[styles.rippleFix, styles.yellow, styles.filterButtonContainer]}>
                    <Pressable android_ripple={{color:"lightgrey", borderless:false}} style={styles.filterButton}
                               onPress={()=>navigation.navigate("UserSearchFilters")}>
                        <Text>{t("user.filters")}</Text>
                    </Pressable>
                </View>
            </View>
            <RestaurantList restaurantList={restaurantData} navigation={navigation}></RestaurantList>
        </View>
    )
}

const styles = StyleSheet.create({

    container:{
        backgroundColor:"#FCF7F3",
        flex:1,
        minHeight: 200
    },
    rippleFix: {
        borderRadius:20,
        overflow:"hidden",
    },
    searchContainer:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center",
        paddingHorizontal:15
    },
    yellow:{
        borderRadius:20,
        flex:1,
        backgroundColor:"white",
        maxHeight:40,
    },
    filterButtonContainer:{
        flex:1,
        maxWidth:75,
        height:40,
        borderWidth:1,
        borderColor:"#black",
        marginHorizontal:15
    },
    filterButton:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    searchField:{
        elevation:2,
        paddingHorizontal:15
    },
})