import {useEffect, useState} from "react";
import {FlatList, Pressable, SafeAreaView, StyleSheet, Text, View} from "react-native";
import ArrowSvg from "../../assets/arrow_icon.svg"
import {Svg} from "react-native-svg";



export const MenuEdit = ({navigation, route}) => {
    useEffect(() => {
        navigation.setOptions({
            headerTitle: "Menú"
        })
    }, [navigation])

    function handleNavigate(item) {
        const screen = item.
        navigation.push("MenuEdit", {item})
    }

    let data = [
        {
            name:"Promociones",
            content:[]
        }
    ]

    data = [...data, {
        name:"Agregar categoría",
        content:[],
        isNewItemButton:true
    }]

    const [menuItems] = useState(data)

    const renderMenu = ({item}) => {
        if (item.isNewItemButton) {
            return (
                <Pressable onPress={(item) => handleNavigate(item)} style={[styles.listItem, styles.newCategoryButton]}>
                    <Text style={[styles.headerText, styles.newCategoryText]}>{item.name}</Text>
                </Pressable>
            )
        } else {
            return (
                <Pressable onPress={(item) => handleNavigate(item)} style={styles.listItem}>
                    <Text style={styles.headerText}>{item.name}</Text>
                    <Svg>
                        <ArrowSvg/>
                    </Svg>
                </Pressable>
            )
        }
    }



    return (
        <SafeAreaView style={styles.container}>
            <FlatList style={styles.list} data={menuItems} renderItem={renderMenu}/>
        </SafeAreaView>
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
        flexDirection:"column"
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
    list:{
        margin:5,
        flex:1,
    },
    listItem:{
        flex:1,
        backgroundColor:"white",
        flexDirection:"row",
        borderColor:"#495158B2",
        borderStyle:"solid",
        borderWidth:1,
        maxWidth:"100%",
        justifyContent:"space-between",
        alignItems:"center",
        padding:5
    },
    newCategoryText:{
        color:"black"
    },
    newCategoryButton:{
        opacity:0.5,
        borderStyle:"dashed"
    }
})