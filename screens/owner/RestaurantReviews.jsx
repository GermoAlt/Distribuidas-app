import {FlatList, SafeAreaView, StyleSheet, Text, View} from "react-native";
import {useEffect, useState} from "react";

export const RestaurantReviews = ({navigation, route}) => {

    const {item} = route.params

    useEffect(() => {
        navigation.setOptions({
            headerTitle: "Calificaciones"
        })
    }, [navigation])

    const calificaciones = useState([])

    const calificacion = () => (
        <View></View>
    )

    return (
        <SafeAreaView style={styles.container}>
            <View></View>
            <View></View>
            <View></View>
            <FlatList data={calificaciones} renderItem={calificacion}></FlatList>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    headerText : {
        color:"black",
        fontSize:24
    },
    button:{
        width:"100%",
        backgroundColor:"#FFFFFF",
        minHeight:50,
    },
    container:{
        flex:1,
        backgroundColor:"#FCF7F3",
        justifyContent:"flex-start",
        alignItems:"center",
    },
    buttonText:{
        color:"#B4A596",
        textAlign:"center",
        textAlignVertical:"center",
        fontSize:18,
        flex:1,
        fontWeight:"500"
    },
    separator:{
        width:"40%",
        backgroundColor:"black",
        height:1,
        marginVertical:20
    },
    overflowFix:{
        borderRadius:15,
        overflow:"hidden",
        elevation: 10,
        marginVertical:30,
        width:"60%"
    },
})