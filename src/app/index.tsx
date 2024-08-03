import { StatusBar, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});

export default function Index(){
    return (
        <View style={styles.container}>
            <Text>Nova tela na Shit toda</Text>
            <StatusBar barStyle="dark-content"/>
        </View>
    )
}