import {Pressable, SafeAreaView, StyleSheet, Text, View} from "react-native";
import BackgroundSvg from "../../assets/background.svg"
import LogoSvg from "../../assets/full_logo.svg"
import {Svg} from "react-native-svg";


export const Login = ({navigation}) => {

    const goToScreen = (screen) => {
        navigation.navigate(screen)
    }


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.background}>
                <Svg height={"100%"} width={"100%"}>
                    <BackgroundSvg/>
                </Svg>
            </View>
            <View style={styles.logo}>
                <Svg height={"10%"} width={"10%"}>
                    <LogoSvg/>
                </Svg>
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.overflowFix}>
                    <Pressable style={styles.button} android_ripple={{color:"lightgrey", borderless:false}}
                               onPress={()=>{goToScreen("OwnerLogin")}}>
                        <Text style={styles.text}>Soy dueño</Text>
                    </Pressable>
                </View>
                <View style={styles.overflowFix}>
                    <Pressable style={styles.button} android_ripple={{color:"lightgrey", borderless:false}}
                               onPress={()=>{goToScreen("SocialLogin")}}>
                        <Text style={styles.text}>Soy cliente</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    background : {
        zIndex:-1,
        position:"absolute"
    },

    overflowFix:{
        borderRadius:25,
        overflow:"hidden",
        elevation: 5,
        shadowColor: '#52006A',
        marginTop:20,
    },

    logo:{
        width:"60%"
    },

    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },

    image: {
    },

    text: {
        fontSize: 24,
        lineHeight: 42,
        fontWeight: "bold",
        textAlign: "center",
        color:"#ECA62E",
    },

    buttonContainer: {
        width:"60%",
    },

    button: {
        textAlign:"center",
        textAlignVertical:"center",
        backgroundColor:"#FFFFFF",
        borderRadius:25,
        padding:5,

    }
});
