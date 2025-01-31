import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: "#131016",
    },
    eventName: {
        color: "#fdfcfe",
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 10,
    },
    eventDate: {
        width: "100%",
        marginTop: 40,
        color: "#6b6b6b",
        fontSize: 16,
        alignItems: "flex-end",
        justifyContent: "flex-end" 
    },
    input: {
        height: 56,
        backgroundColor: "#1f1e25",
        borderRadius: 5,
        color: "#fff",
        padding: 16,
        fontSize: 16,
        width: 250,
        // marginRight: 8
    },
    buttonText: {
        color: "#fff",
        fontSize: 24
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: "#31cf67",
        alignItems: "center",
        justifyContent: "center"
    },
    inputContainer: {
        width: "100%",
        marginTop: 36,
        marginBottom: 42,
        flexDirection: "row",
        gap: 7
    },
    listEmptyText: {
        alignItems: "center",
        justifyContent: "center",
        fontSize: 14,
        color: "#fff",
        textAlign: "center"
    }
});