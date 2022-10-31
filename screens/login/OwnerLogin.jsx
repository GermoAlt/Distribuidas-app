import {KeyboardAvoidingView, SafeAreaView, TextInput, View, StyleSheet, Pressable, Text} from "react-native";
import {Svg} from "react-native-svg";
import BackgroundSvg from "../../assets/background.svg";
import LogoSvg from "../../assets/full_logo.svg";
import {useState} from "react";

export const OwnerLogin = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.background}>
                <Svg height={"100%"} width={"100%"}>
                    <BackgroundSvg/>
                </Svg>
            </View>
            <View style={styles.imageContainer}>
                <Svg height={"100%"}  width={"100%"}>
                    <LogoSvg></LogoSvg>
                </Svg>
            </View>
            <KeyboardAvoidingView style={styles.inputContainer}>
                <TextInput autoComplete={"username"} clearButtonMode={"while-editing"}
                           onChangeText={(text) => setUsername(text)} placeholderTextColor={"#49515833"}
                           placeholder={"Usuario"} style={styles.input}/>
                <TextInput autoComplete={"password"} clearButtonMode={"while-editing"}
                           onChangeText={(text) => setPassword(text)} placeholderTextColor={"#49515833"}
                           placeholder={"Contraseña"} style={styles.input}/>
            </KeyboardAvoidingView>
            <View >
                <Pressable>
                    <Text style={styles.text}>¿Olvidaste tu contraseña?</Text>
                </Pressable>
                <Text style={styles.text}>Si no tenés usuario,
                    <Pressable>
                        <Text style={{color:"red"}}>¡Registrate acá!</Text>
                    </Pressable>
                </Text>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Ingresar</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    background : {
        zIndex:-1,
        position:"absolute"
    },
    container:{
        flex:1,
        justifyContent:"space-around",
        alignItems:"center",
        paddingVertical:25
    },
    inputContainer:{
        width:"70%",
        flex:1,
        justifyContent:"flex-end",
        alignItems:"stretch"
    },
    input:{
        flex:1,
        maxHeight:"30%",
        backgroundColor:"white",
        borderRadius:25,
        elevation:5,
        borderColor:"black",
        borderWidth:1,
        borderStyle:"solid",
        marginTop:15,
        paddingHorizontal:15,
    },
    text:{
        color:"black",
        marginVertical:50
    },
    button: {
        textAlign:"center",
        textAlignVertical:"center",
        backgroundColor:"#FFFFFF",
        borderRadius:25,
        padding:5,
        elevation:5
    },
    buttonText:{
        fontSize: 20,
        lineHeight: 36,
        fontWeight: "bold",
        textAlign: "center",
        color:"#ECA62E",
    },
    imageContainer:{
        flex:1
    }
})