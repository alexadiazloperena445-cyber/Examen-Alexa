import { StyleSheet } from "react-native";

export const appTheme = StyleSheet.create({
    marginGlobal: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center"
    },
    container: {
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white" 
    },
    textInput: {
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        backgroundColor: "white",
        borderRadius: 10,
        textAlign: "center",
        fontWeight: "bold",
        height: 50,
        width: 280,
        margin: 5,
        borderWidth: 5,
        borderColor: "#4627F5",
        color: "black"
    },
    avatar: {
        height: 140,
        width: 140,
        borderRadius: 100,
        borderWidth: 5,
        borderColor: "#276FF5"
    },
    menuContainer:{
        alignItems: "center",
        marginHorizontal: 10,
        marginVertical: 10
    },
    menuBtn:{
        marginVertical: 10,
        borderWidth: 2,
        borderRadius: 10,
        width: 180,
        justifyContent: "center",
        borderColor: "#27D6F5"
    },
    textBtn:{
        fontSize: 20,
        color: "white", 
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "white"
    }
});