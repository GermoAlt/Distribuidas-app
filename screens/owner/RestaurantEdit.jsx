import {
    Image,
    Modal,
    PermissionsAndroid,
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    View
} from "react-native";
import CheckBox from '@react-native-community/checkbox';
import {useEffect, useRef, useState} from "react";
import Swiper from 'react-native-swiper'
import MapView, {Marker, PROVIDER_GOOGLE} from "react-native-maps";
import CheckBoxWithRef from "@react-native-community/checkbox/dist/CheckBox.android";
import {Checkbox} from "react-native-paper";
import {launchImageLibrary} from "react-native-image-picker";
import GetLocation from "react-native-get-location";

export const RestaurantEdit = ({navigation, route}) => {

    const swiper = useRef(null)
    const [swiperIndex, setSwiperIndex] = useState(0)
    const [modalVisible, setModalVisible] = useState(false)

    const [coordinates, setCoordinates] = useState({latitude: -34.5743225, longitude: -58.4438911})

    const [lunes,  setLunes] = useState(false)
    const [martes, setMartes] = useState(false)
    const [miercoles, setMiercoles] = useState(false)
    const [jueves, setJueves] = useState(false)
    const [viernes, setViernes] = useState(false)
    const [sabado, setSabado] = useState(false)
    const [domingo, setDomingo] = useState(false)

    const [restaurantImage, setRestaurantImage] = useState("")

    const isEdit = () => {
      return route.params
    }

    useEffect(() => {
        navigation.setOptions({
            headerTitle: (isEdit() ? "Editá" : "Añadí" ) + " tu restaurante"
        })
    }, [navigation])

    const requestGeoPermission = async () => {
        try {
            await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: "Permisos de ubicacion",
                    message:
                        "Morfando necesita pedir tu ubicación ",
                    buttonNegative: "No",
                    buttonPositive: "OK"
                }
            );
            // if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            //     console.log("You can use the camera");
            // } else {
            //     console.log("Camera permission denied");
            // }
        } catch (err) {
            console.warn(err);
        }
    }
    useEffect( () => {
        requestGeoPermission().then(()=> {
            GetLocation.getCurrentPosition({
                enableHighAccuracy:true
            })
                .then(location => {
                    console.log(location)
                    setCoordinates({latitude: location.latitude, longitude: location.longitude})
                })
                .catch(error => {
                    const {code, message} = error;
                    console.warn(code, message);
                })
        })
    }, [])

    const handleProgrammaticSwipe = (change) => {
        let newIndex = swiperIndex + change
        swiper.current.scrollBy(change)
        setSwiperIndex(newIndex)
    }

    const handleSubmit = (action) => {
        setModalVisible(false)
        navigation.navigate(action)
    }

    const loadImage = () => {
        launchImageLibrary({
            mediaType:"photos",
            includeBase64: true
        }).then(img => {
            if(!img.errorCode) setRestaurantImage("data:image/jpeg;base64," + img.assets[0].base64)
        }).catch(e => console.log(e))
    }

     const getImageElement = (
        restaurantImage !== "" ? <Image style={[styles.restaurantImage]} source={{uri: restaurantImage}}/> : <View></View>
)

    return (
        <SafeAreaView style={styles.container}>
            <Swiper loop={false} ref={swiper} activeDotColor={"#695E50"} scrollEnabled={false}
                    onIndexChanged={(index) => setSwiperIndex(index)}>
                <View style={styles.swipePanel}>
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
                                latitude: coordinates.latitude,
                                longitude: coordinates.longitude,
                                latitudeDelta: 0.09,
                                longitudeDelta: 0.04,
                            }}
                        >
                            <Marker draggable coordinate={coordinates} />
                        </MapView>
                    </View>
                    <View style={styles.card}>
                        <TextInput placeholder={"Información adicional (piso, depto, etc)"} placeholderTextColor={"#49515866"} />
                    </View>
                </View>
                <View style={styles.swipePanel}>
                    <View style={[styles.card, styles.daySelectionCard]}>
                        <Text>Abrimos los...</Text>
                        <View style={styles.checkBoxArea}>
                            <View style={styles.checkBoxColumn}>
                                <View style={styles.checkBox}>
                                    <Checkbox status={lunes ? 'checked' : 'unchecked'} onPress={()=>setLunes(!lunes)}/>
                                    <Text style={styles.text}>Lunes</Text>
                                </View>
                                <View style={styles.checkBox}>
                                    <Checkbox status={martes ? 'checked' : 'unchecked'} onPress={()=>setMartes(!martes)}/>
                                    <Text style={styles.text}>Martes</Text>
                                </View>
                                <View style={styles.checkBox}>
                                    <Checkbox status={miercoles ? 'checked' : 'unchecked'} onPress={()=>setMiercoles(!miercoles)}/>
                                    <Text style={styles.text}>Miercoles</Text>
                                </View>
                                <View style={styles.checkBox}>
                                    <Checkbox status={jueves ? 'checked' : 'unchecked'} onPress={()=>setJueves(!jueves)}/>
                                    <Text style={styles.text}>Jueves</Text>
                                </View>
                            </View>
                            <View style={styles.checkBoxColumn}>
                                <View style={styles.checkBox}>
                                    <Checkbox status={viernes ? 'checked' : 'unchecked'} onPress={()=>setViernes(!viernes)}/>
                                    <Text style={styles.text}>Viernes</Text>
                                </View>
                                <View style={styles.checkBox}>
                                    <Checkbox status={sabado ? 'checked' : 'unchecked'} onPress={()=>setSabado(!sabado)}/>
                                    <Text style={styles.text}>Sabado</Text>
                                </View>
                                <View style={styles.checkBox}>
                                    <Checkbox status={domingo ? 'checked' : 'unchecked'} onPress={()=>setDomingo(!domingo)}/>
                                    <Text style={styles.text}>Domingo</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <Text>Horarios de atencion</Text>
                        <View></View>
                    </View>
                </View>
                <View style={styles.swipePanel}>
                    <Modal animationType={"fade"} visible={modalVisible}
                           onRequestClose={()=>setModalVisible(false)} transparent>
                        <Pressable android_ripple={{color:"lightgrey", borderless:false}} style={styles.modalBackground} onPress={()=>setModalVisible(false)}/>
                        <View style={styles.modalContainer}>
                            <View style={[styles.card, styles.modal]}>
                                <Text>Agregar Menú</Text>
                                <Text>¿Querés agregar el menú de tu restaurante ahora?</Text>
                                <View>
                                    <Pressable android_ripple={{color:"lightgrey", borderless:false}} onPress={()=>handleSubmit("OwnerLanding")}><Text>Ahora no</Text></Pressable>
                                    <Pressable android_ripple={{color:"lightgrey", borderless:false}} onPress={()=>handleSubmit("RestaurantMenuEdit")}><Text>Agregar</Text></Pressable>
                                </View>
                            </View>
                        </View>
                    </Modal>
                    <View style={styles.card}>
                        <TextInput placeholder={"Tipo de comida"}></TextInput>
                    </View>
                    <View style={styles.card}>
                        <Pressable android_ripple={{color:"lightgrey", borderless:false}} onPress={()=>loadImage()}>
                            <Text style={styles.text}>Cargar imagen</Text>
                        </Pressable>
                    </View>
                    <View style={[styles.card, {flex:1}]}>
                        {getImageElement}
                    </View>
                </View>
            </Swiper>
            <View style={styles.buttonContainer}>
                <Pressable android_ripple={{color:"lightgrey", borderless:false}} style={[styles.button, {display:(swiperIndex === 0 ? "none" : "flex")}]}
                           onPress={() => handleProgrammaticSwipe(-1)}>
                    <Text style={styles.buttonText}>
                        Atrás
                    </Text>
                </Pressable>
                <Pressable android_ripple={{color:"lightgrey", borderless:false}} onPress={() => handleProgrammaticSwipe(1)}
                           style={[styles.button, {display:(swiperIndex === 2 ? "none" : "flex")}]}>
                    <Text style={styles.buttonText}>
                        Continuar
                    </Text>
                </Pressable>
                <Pressable android_ripple={{color:"lightgrey", borderless:false}} onPress={() => setModalVisible(true)}
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
        padding:10
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
    },
    checkBox:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"flex-start",
        margin:5
    },
    checkBoxColumn: {
        flex:1,
        flexDirection:"column",
        justifyContent:"flex-start",
        alignItems:"flex-start",
    },
    checkBoxArea: {
        flex:1,
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"flex-start",
    },

    daySelectionCard:{
        height:"50%"
    },
    swipePanel:{
        height:"80%"
    },
    restaurantImage:{
        flex:1,
        backgroundColor: "#B4A596",
        borderRadius:15
    }
})