import {FlatList, Pressable, StyleSheet, Text, View} from "react-native";
import {useEffect, useState} from "react";

export const RestaurantList = (props)=> {

    const [data, setData] = useState(props.restaurantList)


    const renderRestaurant = ({item}) => (
        <View style={styles.rippleFix}>
            <Pressable android_ripple={{color:"lightgrey", borderless:false}} onPress={()=>props.navigation.navigate("UserRestaurant", {item})}>
                <View style={styles.card}>
                    <View>{/*Imagen*/}</View>
                    <View>
                        <Text style={styles.cardText}>{item.name}</Text>
                        <Text style={styles.cardText}>{item.address}</Text>
                        <View>
                            <Text>{item.rating}</Text>
                            <View>
                                <Text>{item.openTime} - {item.closedTime}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </Pressable>
        </View>
    )

    return (
        <FlatList data={data} renderItem={renderRestaurant}/>
    )
}

const styles = StyleSheet.create({
    card:{
        borderRadius:15,
        backgroundColor:"white",
        minHeight:200,
        padding:15,
        elevation:11
    },
    cardText:{
        color:"black"
    },
    rippleFix:{
        borderRadius:15,
        overflow:"hidden",
        marginVertical:15,
        marginHorizontal:15,
        elevation:10,
    }
})