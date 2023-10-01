import { Image, Text } from "@rneui/themed"
import { StyleSheet } from "react-native"

export default function Produto({route, navigation}){
    const {produto} = route.params
    return(
        <>
        <Text>Name: {produto.name}</Text>
        <Text>Location: {produto.location.name}</Text>
        <Image source={{uri:produto.image}} containerStyle={styles.item}/>
        </>
    )
}

const styles = StyleSheet.create({
    item: {
        aspectRatio: 1,
        width: '100%',
        flex: 1,
    }
})