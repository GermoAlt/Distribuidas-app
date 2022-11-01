import {Button, SafeAreaView, StyleSheet, Text, TextInput, View} from "react-native";
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
                    <TextInput></TextInput>
                    <TextInput></TextInput>
                    <View>
                    </View>
                    <TextInput></TextInput>
                </View>
                <View>
                    <View>

                    </View>
                    <View>

                    </View>
                </View>
                <View>
                    <View>
                        <TextInput></TextInput>
                    </View>
                    <View></View>
                    <View></View>
                </View>
            </Swiper>
            <Button title={"s"} onPress={() => swiper.current.scrollBy(1)}></Button>
            <Button title={"s"} onPress={() => swiper.current.scrollBy(-1)}></Button>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    text:{
        color:"black"
    }
})