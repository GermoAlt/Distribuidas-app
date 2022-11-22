import {KeyboardAvoidingView, SafeAreaView, TextInput, View, StyleSheet, Pressable, Text} from "react-native";
import {Svg} from "react-native-svg";
import BackgroundSvg from "../../assets/images/background.svg";
import LogoSvg from "../../assets/images/full_logo.svg";
import {useState} from "react";
import {ownerLogin} from "../../service/ownerService";
import { FadeView } from 'react-native-fadeview-wrapper';
import useUser from "../../components/context/user/useUser";
import {useTranslation} from "react-i18next";

export const OwnerLogin = ({navigation}) => {
    const { t, i18n } = useTranslation();
    const {user, changeUser} = useUser()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const [error, setError] = useState(false)

    const login = () => {
        ownerLogin({username, password})
            .then(res => {
                if(res.status === 400) {
                    setError(true)
                } else {
                    changeUser(res)
                    setError(false)
                    goToScreen("OwnerNav", {screen:"OwnerLanding"})
                }
            }).catch(e => {
                console.log("error", e)
                setError(true)
            })
    }

    const goToScreen = (screen) => {
        navigation.navigate(screen)
    }

    return (
        <View style={styles.container}>
            <View style={styles.background}>
                <Svg height={"100%"} width={"100%"}>
                    <BackgroundSvg/>
                </Svg>
            </View>
            <View style={styles.content}>
                <View style={styles.imageContainer}>
                    <Svg >
                        <LogoSvg></LogoSvg>
                    </Svg>
                </View>
                <FadeView style={[styles.errorContainer]} visible={error}>
                    <Text style={styles.errorText}>{t("login.wrong_credentials_error")}</Text>
                </FadeView>
                <KeyboardAvoidingView style={styles.inputContainer}>
                    <TextInput autoComplete={"username"} clearButtonMode={"while-editing"}
                               onChangeText={(text) => setUsername(text)} placeholderTextColor={"#49515833"}
                               placeholder={"Usuario"} style={styles.input}/>
                    <TextInput autoComplete={"password"} clearButtonMode={"while-editing"} secureTextEntry
                               onChangeText={(text) => setPassword(text)} placeholderTextColor={"#49515833"}
                               placeholder={"Contraseña"} style={styles.input}/>
                </KeyboardAvoidingView>
                <View style={styles.pressableContainer}>
                    <Pressable onPress={()=>goToScreen("RecoverAccount")}>
                        <Text style={styles.text}>{t("login.forgot_password_button")}</Text>
                    </Pressable>
                    <Pressable onPress={()=>goToScreen("RegisterAccount")}>
                        <Text style={styles.text}>{t("login.no_account_register_here_1")}
                            <Text style={{color:"red"}}>{t("login.no_account_register_here_2")}</Text>
                        </Text>
                    </Pressable>
                    <Pressable  android_ripple={{color:"lightgrey", borderless:false}} style={styles.button} onPress={()=>login()}>
                        <Text style={styles.buttonText}>{t("login.button_login")}</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    background : {
        zIndex:-1,
        position:"absolute"
    },
    container:{
        flex:1,
        width:"100%",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
    },
    content:{
        flex:1,
        width:"100%",
        flexDirection:"column",
        justifyContent:"flex-end",
        alignItems:"center",
        paddingHorizontal:15,
        paddingVertical:"15%",
    },
    inputContainer:{
        width:"70%",
        maxHeight:150,
        flex:1,
        justifyContent:"flex-end",
        paddingBottom:25
    },
    input:{
        flex:1,
        maxHeight:40,
        minHeight:40,
        backgroundColor:"white",
        borderRadius:25,
        elevation:5,
        borderColor:"black",
        borderWidth:1,
        borderStyle:"solid",
        marginTop:15,
        paddingHorizontal:15
    },
    text:{
        color:"black",
        textAlign:"center",
        marginVertical:10
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
        flex:1,
        justifyContent:"center",
        maxHeight:100
    },
    errorContainer: {
        display:"flex",
        backgroundColor:"#DA4343",
        height:"10%",
        width:"90%",
        padding:10,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10
    },
    errorText:{
        color:"white",
    },
    pressableContainer:{
        flex:1
    }

})