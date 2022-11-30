import {Pressable, StyleSheet, View} from "react-native";
import {useState} from "react";
import {black} from "react-native-paper/lib/typescript/styles/colors";

export const SelectableButton = (props) => {
    const [isSelected, setIsSelected] = useState(false)
    if(isSelected) {
        return (
            <View style={styles.wrapper}>
                <View style={styles.container}>
                    <Pressable onPress={()=>setIsSelected(false)} style={[styles.button, styles.selected]}  android_ripple={{color:"#695E50", borderless:false}}>
                        {props.children}
                    </Pressable>
                </View>
            </View>
        )
    } else {
        return (
            <View style={styles.wrapper}>
                <View style={styles.container}>
                    <Pressable onPress={()=>setIsSelected(true)} style={[styles.button, styles.unselected]}  android_ripple={{color:"#695E50", borderless:false}}>
                        {props.children}
                    </Pressable>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    unselected:{
        borderStyle:"solid",
        borderRadius:15,
        borderWidth:1,
        borderColor:"#695E50",
    },
    selected:{
        borderStyle:"solid",
        borderRadius:15,
        borderWidth:3,
        borderColor:"#695E50",
    },
    button:{
        paddingHorizontal:10,
        paddingVertical:5,
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        maxHeight:40,
        minWidth:60
    },
    container:{

        borderRadius:15,
        overflow:"hidden",

    },
    wrapper:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})