import {Button, SafeAreaView, StyleSheet, View} from "react-native";
import BackgroundSvg from "../../assets/background.svg"
import LogoSvg from "../../assets/full_logo.svg"
import {Svg} from "react-native-svg";


export const Login = () => {
    return (
        <SafeAreaView>
            {/*<View style={styles.background}>*/}
            {/*    <Svg height={"100%"} width={"100%"}>*/}
            {/*        <BackgroundSvg/>*/}
            {/*    </Svg>*/}
            {/*</View>*/}
            {/*<View style={styles.container}>*/}
            {/*    <View>*/}
            {/*        <Svg>*/}
            {/*            <LogoSvg height={"90%"} width={"90%"} />*/}
            {/*        </Svg>*/}
            {/*    </View>*/}
            {/*</View>*/}
            <View>
                <Button title={"Soy dueño"}></Button>
                <Button title={"Soy cliente"}></Button>
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
        justifyContent:"center",
        alignItems:"center"
    },
    image: {
        zIndex:2,
    },

    text: {
        color: "black",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0"
    }
});
