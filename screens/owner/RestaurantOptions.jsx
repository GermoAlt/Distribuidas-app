import {Pressable, SafeAreaView, StyleSheet, Text, View} from "react-native";
import {useEffect} from "react";
import {Svg} from "react-native-svg";
import UserIcon from "../../assets/user_icon.svg";

export const RestaurantOptions = ({route, navigation}) => {

    const {item} = route.params

    useEffect(() => {
        navigation.setOptions({
            headerTitle: () => (
                <Text style={styles.headerText}>{item.name}</Text>
            )
        })
    }, [navigation])

    const goToScreen = (screen) => {
        navigation.navigate(screen, {item})
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.overflowFix}>
                <Pressable style={styles.button} android_ripple={{color:"lightgrey", borderless:false}}
                               onPress={()=>{goToScreen("RestaurantOwnerEdit")}}>
                    <Text style={styles.buttonText}>Editar información</Text>
                </Pressable>
            </View>
            <View style={styles.overflowFix}>
                <Pressable style={styles.button} android_ripple={{color:"lightgrey", borderless:false}}
                           onPress={()=>{goToScreen("RestaurantMenuEdit")}}>
                    <Text style={styles.buttonText}>Editar menú</Text>
                </Pressable>
            </View>
            <View style={styles.overflowFix}>
                <Pressable style={styles.button} android_ripple={{color:"lightgrey", borderless:false}}
                           onPress={()=>{goToScreen("RestaurantOwnerReviews")}}>
                    <Text style={styles.buttonText}>Ver calificaciones</Text>
                </Pressable>
            </View>
            <View style={styles.separator}></View>
            <View style={styles.overflowFix}>
                <Pressable style={[styles.button, {backgroundColor:"#DA4343"}]} android_ripple={{color:"lightgrey", borderless:false}}
                           onPress={()=>{goToScreen("OwnerLogin")}}>
                    <Text style={[styles.buttonText, {color:"white"}]}>Deshabilitar</Text>
                </Pressable>
            </View>
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