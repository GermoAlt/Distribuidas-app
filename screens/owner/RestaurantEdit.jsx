import {SafeAreaView, StyleSheet, Text, TextInput, View} from "react-native";
import {useEffect} from "react";
import Swiper from 'react-native-swiper'

export const RestaurantEdit = ({navigation, route}) => {

    const isEdit = () => {
      return true
    }

    useEffect(() => {
        navigation.setOptions({
            headerTitle: (isEdit() ? "Editá" : "Añadí" ) + " tu restaurante"
        })
    }, [navigation])

    return (
        <Swiper>
            <View>
                <Text style={styles.text}>Necesitarás completar los siguientes datos</Text>
                <TextInput></TextInput>
                <TextInput></TextInput>
                <View></View>
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
    )
}

const styles = StyleSheet.create({
    text:{
        color:"black"
    }
})