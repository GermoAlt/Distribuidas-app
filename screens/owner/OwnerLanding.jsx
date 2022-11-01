import {Text, View, StyleSheet, SafeAreaView, Pressable, ScrollView, FlatList} from "react-native";
import {useEffect, useState} from "react";
import {Svg} from "react-native-svg";
import UserIcon from "../../assets/user_icon.svg"

const data = [
    {
        id:"369",
        name:"Restaurante 1",
        address:"Av. Las Heras 654",
        rating:"4.32",
        openTime:"09:00",
        closedTime:"22:00",
    },
    {
        id:"3693",
        name:"Restaurante 2",
        address:"Av. Las Heras 654",
        rating:"4.32",
        openTime:"09:00",
        closedTime:"22:00",
    },
    {
        id:"3659",
        name:"Restaurante 3",
        address:"Av. Las Heras 654",
        rating:"4.32",
        openTime:"09:00",
        closedTime:"22:00",
    },
]


export const OwnerLanding = ({navigation}) => {

    const [restaurantList, setRestaurantList] = useState(data)

    const restaurant = ({item}) => (
        <Pressable onPress={()=>navigation.navigate("RestaurantOwnerOptions", {item})}>
            <View style={styles.card}>
                <Text style={styles.cardText}>{item.name}</Text>
            </View>
        </Pressable>
    )

    useEffect(()=> {
        setRestaurantList(data)
    }, [data])

    useEffect(() => {
        navigation.setOptions({
            headerLeft:() => (
                <View>
                    <Svg>
                        <UserIcon />
                    </Svg>
                </View>
            ),
            headerTitle: () => (
                <Text style={styles.headerText}>Hola Juan Carlos!</Text>
            )
        })
    }, [navigation])

    function getRestaurantList() {
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.titleText}>Mis restaurantes</Text>
            <FlatList data={restaurantList} renderItem={restaurant}/>
            <Pressable style={styles.button}>
                <Text style={styles.footerText}>Agregar nuevo restaurante</Text>
            </Pressable>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    headerText : {
        color:"black",
        fontSize:24
    },
    titleText:{
        color:"black",
        margin:15,
        fontSize:36
    },
    button:{
        width:"100%",
        backgroundColor:"#5BC03C",
        textAlign:"center"
    },
    container:{
        flex:1,
        backgroundColor:"#FCF7F3"
    },
    footerText:{
        color:"white",
        textAlign:"center",
        lineHeight:80,
        fontSize:22,
        fontWeight: "800"
    },
    card:{
        marginHorizontal:15,
        elevation:10,
        borderRadius:15,
        backgroundColor:"white",
        minHeight:200,
        marginVertical:15,
        padding:15
    },
    cardText:{
        color:"black"
    }
})