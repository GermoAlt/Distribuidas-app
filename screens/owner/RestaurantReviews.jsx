import {FlatList, SafeAreaView, StyleSheet, Text, View} from "react-native";
import {useEffect, useState} from "react";

const data = [
    {
        userID:1,
        calificacion:2,
        comentario:"El helado no tiene sabor a nada, tuve que tirarlo"
    },
    {
        userID:2,
        calificacion:5,
        comentario:"El helado es riquísimo y también barato"
    },
]


export const RestaurantReviews = ({navigation, route}) => {

    const {item} = route.params

    useEffect(() => {
        navigation.setOptions({
            headerTitle: "Calificaciones"
        })
    }, [navigation])

    const [calificaciones] = useState(data)

    const calificacion = ({item}) => (
        <View style={styles.card}>
            <Text>{"* ".repeat(item.calificacion)}</Text>
            <Text style={{color:"black"}}>{item.comentario}</Text>
        </View>
    )

    return (
        <SafeAreaView style={styles.container}>
            <View style={[styles.flexRow, {justifyContent: "flex-start"}]}>
                <View style={{width:50, height:50}}>{/*imagen*/}</View>
                <View>
                    <Text style={styles.headerText}>{item.name}</Text>
                    <View>
                        <Text>* {item.rating}</Text>
                    </View>
                </View>
            </View>
            <View>
                <Text>Puntos de mejora</Text>
                    <View style={styles.flexRow}>
                        <Text style={styles.subtitle}>Puntualidad</Text>
                        <Text style={styles.subtitle}>Mas variedad</Text>
                        <Text style={styles.subtitle}>Calidad</Text>
                        <Text style={styles.subtitle}>Disponibilidad</Text>
                    </View>
            </View>
            <View></View>
            <Text>Calificaciones</Text>
            <FlatList data={calificaciones} renderItem={calificacion} style={styles.list}/>
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
        alignItems:"flex-start",
        justifyContent:"flex-start",
        padding:10,
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
    card:{
        backgroundColor:"white",
        borderRadius:15,
        elevation:5,
        margin:5,
        padding:10,
        flex:1
    },
    list:{
        flex:1,
    },
    flexRow:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        maxHeight:100,
        width:"100%"
    }
})