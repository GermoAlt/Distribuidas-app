import {useEffect} from "react";
import {useTranslation} from "react-i18next";
import {FlatList, Pressable, SafeAreaView, Text, View, StyleSheet} from "react-native";
import {SelectableButton} from "../../components/visual/SelectableButton";

const categories = []
export const UserSearchFilters = ({ navigation }) => {

    const { t, i18n } = useTranslation();

    useEffect(() => {
        navigation.setOptions({
            headerTitle: t("user.title_filter_search"),
        })
    }, [navigation])

    const renderCategory = ({item}) => {

    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.filterBlock}>
                <View>
                    <Text style={styles.filterTitleText}>Rating</Text>
                </View>
                <View style={styles.buttonRow}>
                    <SelectableButton><Text>+3.5</Text></SelectableButton>
                    <SelectableButton><Text>+4.0</Text></SelectableButton>
                    <SelectableButton><Text>+4.5</Text></SelectableButton>
                </View>
            </View>
            <View style={styles.filterBlock}>
                <View>
                    <Text style={styles.filterTitleText}>Distancia de mi ubicación</Text>
                </View>
                <View style={styles.buttonRow}>
                    <SelectableButton><Text>&lt; 5 km</Text></SelectableButton>
                    <SelectableButton><Text>&lt; 10 km</Text></SelectableButton>
                    <SelectableButton><Text>&lt; 15 km</Text></SelectableButton>
                </View>
            </View>
            <View style={styles.filterBlock}>
                <View>
                    <Text style={styles.filterTitleText}>Precio</Text>
                </View>
                <View style={styles.buttonRow}>
                    <SelectableButton><Text>$</Text></SelectableButton>
                    <SelectableButton><Text>$$</Text></SelectableButton>
                    <SelectableButton><Text>$$$</Text></SelectableButton>
                    <SelectableButton><Text>$$$$</Text></SelectableButton>
                </View>
            </View>
            <View style={styles.filterBlock}>
                <View>
                    <Text style={styles.filterTitleText}>Restricciones alimentarias</Text>
                </View>
                <View style={styles.buttonRow}>
                    <SelectableButton><Text>Vegano</Text></SelectableButton>
                    <SelectableButton><Text>Sin Gluten</Text></SelectableButton>
                </View>
            </View>
            <View style={styles.filterBlock}>
                <View>
                    <Text style={styles.filterTitleText}>Tipo de comida</Text>
                </View>
                <View>
                    <FlatList data={categories} renderItem={renderCategory} horizontal />
                </View>
            </View>
            <Pressable onPress={()=>{}} style={styles.applyFilterButton}>
                <Text>Aplicar filtros</Text>
            </Pressable>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"column",
        justifyContent:"flex-start",
        alignItems:"stretch",
        backgroundColor:"#FCF7F3",
        padding:15
    },
    buttonRow:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center"
    },
    filterBlock: {
        flex:1
    },
    applyFilterButton: {
        flex:1,
        maxHeight:50,
        justifyContent:"center",
        alignItems:"center"
    },
    filterTitleText:{
        fontSize:16,
        fontWeight:"bold"
    }
})