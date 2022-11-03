import {Button, Modal, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View} from "react-native";
import {useEffect, useRef, useState} from "react";
import Swiper from 'react-native-swiper'
import MapView, {PROVIDER_GOOGLE} from "react-native-maps";

export const RestaurantEdit = ({navigation, route}) => {

    const swiper = useRef(null)
    const [swiperIndex, setSwiperIndex] = useState(0)
    const [modalVisible, setModalVisible] = useState(false)

    const isEdit = () => {
      return route.params
    }

    useEffect(() => {
        navigation.setOptions({
            headerTitle: (isEdit() ? "Editá" : "Añadí" ) + " tu restaurante"
        })
    }, [navigation])

    const handleProgrammaticSwipe = (change) => {
        let newIndex = swiperIndex + change
        swiper.current.scrollBy(change)
        setSwiperIndex(newIndex)
    }

    const handleSubmit = (action) => {
        setModalVisible(false)
        navigation.navigate(action)
    }

    return (
        <SafeAreaView style={styles.container}>
            <Swiper loop={false} ref={swiper} activeDotColor={"#695E50"} scrollEnabled={false}
                    onIndexChanged={(index) => setSwiperIndex(index)}>
                <View>
                    <Text style={styles.text}>Necesitarás completar los siguientes datos</Text>
                    <View style={styles.card}>
                        <TextInput placeholder={"Nombre del restaurante"} placeholderTextColor={"#49515866"} />
                    </View>
                    <View style={styles.card}>
                        <TextInput placeholder={"Dirección"} placeholderTextColor={"#49515866"} />
                    </View>
                    <View style={styles.mapContainer}>
                        <MapView
                            provider={PROVIDER_GOOGLE}
                            style={styles.map}
                            initialRegion={{
                                latitude: 37.78825,
                                longitude: -122.4324,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }}
                        />
                    </View>
                    <View style={styles.card}>
                        <TextInput placeholder={"Información adicional (piso, depto, etc)"} placeholderTextColor={"#49515866"} />
                    </View>
                </View>
                <View>
                    <View style={styles.card}>

                    </View>
                    <View style={styles.card}>

                    </View>
                </View>
                <View>
                    <Modal animationType={"fade"} visible={modalVisible}
                           onRequestClose={()=>setModalVisible(false)} transparent>
                        <Pressable style={styles.modalBackground} onPress={()=>setModalVisible(false)}/>
                        <View style={styles.modalContainer}>
                            <View style={[styles.card, styles.modal]}>
                                <Text>Agregar Menú</Text>
                                <Text>¿Querés agregar el menú de tu restaurante ahora?</Text>
                                <View>
                                    <Pressable onPress={()=>handleSubmit("OwnerLanding")}><Text>Ahora no</Text></Pressable>
                                    <Pressable onPress={()=>handleSubmit("RestaurantMenuEdit")}><Text>Agregar</Text></Pressable>
                                </View>
                            </View>
                        </View>
                    </Modal>
                    <View style={styles.card}>
                        <TextInput></TextInput>
                    </View>
                    <View style={styles.card}></View>
                    <View></View>
                </View>
            </Swiper>
            <View style={styles.buttonContainer}>
                <Pressable style={[styles.button, {display:(swiperIndex === 0 ? "none" : "flex")}]}
                           onPress={() => handleProgrammaticSwipe(-1)}>
                    <Text style={styles.buttonText}>
                        Atrás
                    </Text>
                </Pressable>
                <Pressable onPress={() => handleProgrammaticSwipe(1)}
                           style={[styles.button, {display:(swiperIndex === 2 ? "none" : "flex")}]}>
                    <Text style={styles.buttonText}>
                        Continuar
                    </Text>
                </Pressable>
                <Pressable onPress={() => setModalVisible(true)}
                           style={[styles.button, {display:(swiperIndex !== 2 ? "none" : "flex")}]}>
                    <Text style={styles.buttonText}>
                        Finalizar
                    </Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#FCF7F3",
        padding:5,
    },
    card:{
        backgroundColor:"white",
        borderRadius:15,
        elevation:5,
        margin:5,
        paddingHorizontal:5
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
    },
    mapContainer:{
        flex:1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        minHeight:"50%"
    },
    map:{
        ...StyleSheet.absoluteFillObject,
        flex:1,

    },
    modalContainer:{
        flex:1,

        justifyContent:"center",
        alignItems:"center"
    },
    modalBackground:{
        position:"absolute",
        zIndex:2,
        height:"100%",
        width:"100%",
        backgroundColor:"black",
        flex:1,
        opacity:0.3
    },
    modal:{
        position:"absolute",
        height:200,
        width:200,
        zIndex:3,
    }
})