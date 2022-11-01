import {Button, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View} from "react-native";
import {useEffect, useRef} from "react";
import Swiper from 'react-native-swiper'

export const RestaurantEdit = ({navigation, route}) => {

    const swiper = useRef(null)

    const isEdit = () => {
      return true
    }

    useEffect(() => {
        navigation.setOptions({
            headerTitle: (isEdit() ? "Editá" : "Añadí" ) + " tu restaurante"
        })
    }, [navigation])



    return (
        <SafeAreaView style={styles.container}>
            <Swiper loop={false} ref={swiper}>
                <View>
                    <Text style={styles.text}>Necesitarás completar los siguientes datos</Text>
                    <View style={styles.card}>
                        <TextInput></TextInput>
                    </View>
                    <View style={styles.card}>
                        <TextInput></TextInput>
                    </View>
                    <View>
                    </View>
                    <View style={styles.card}>
                        <TextInput></TextInput>
                    </View>
                </View>
                <View>
                    <View style={styles.card}>

                    </View>
                    <View style={styles.card}>

                    </View>
                </View>
                <View>
                    <View style={styles.card}>
                        <TextInput></TextInput>
                    </View>
                    <View style={styles.card}></View>
                    <View></View>
                </View>
            </Swiper>
            <View style={styles.buttonContainer}>
                <Pressable title={"s"} onPress={() => swiper.current.scrollBy(-1)} style={styles.button}>
                    <Text style={styles.buttonText}>
                        Atrás
                    </Text>
                </Pressable>
                <Pressable title={"s"} onPress={() => swiper.current.scrollBy(1)} style={styles.button}>
                    <Text style={styles.buttonText}>
                        Continuar
                    </Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#FCF7F3"
    },
    card:{
        backgroundColor:"white",
        borderRadius:15,
        elevation:5,
        margin:5
    },
    text:{
        color:"black"
    },
    buttonContainer:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-evenly",
        maxHeight:75
    },
    button:{
        backgroundColor:"white",
        borderRadius:15,
        elevation:5,
        margin:15,
        flex:1,
        justifyContent:"center"
    },
    buttonText:{
        color:"#B4A596",
        textAlign:"center"
    }
})