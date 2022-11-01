import {useEffect} from "react";
import {StyleSheet, Text} from "react-native";

export const MenuEdit = ({navigation, route}) => {
    useEffect(() => {
        navigation.setOptions({
            headerTitle: () => (
                <Text style={styles.headerText}>Menú</Text>
            )
        })
    }, [navigation])


    return (
        <></>
    )
}

const styles = StyleSheet.create({
    headerText : {
        color:"black",
        fontSize:24
    },
    button:{
        width:"100%",
        backgroundColor:"#FFFFFF",
        minHeight:50,
    },
    container:{
        flex:1,
        backgroundColor:"#FCF7F3",
        justifyContent:"flex-start",
        alignItems:"center",
    },
    buttonText:{
        color:"#B4A596",
        textAlign:"center",
        textAlignVertical:"center",
        fontSize:18,
        flex:1,
        fontWeight:"500"
    },
    separator:{
        width:"40%",
        backgroundColor:"black",
        height:1,
        marginVertical:20
    },
    overflowFix:{
        borderRadius:15,
        overflow:"hidden",
        elevation: 10,
        marginVertical:30,
        width:"60%"
    },
})