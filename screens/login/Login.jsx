import {ImageBackground, SafeAreaView, StyleSheet, Text, View} from "react-native";
import Img from "../../assets/background.svg"
import {Svg} from "react-native-svg";


export const Login = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Svg height={"100%"} width={"100%"}>
                <Img />
            </Svg>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: "center"
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
