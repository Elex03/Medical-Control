import React from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet, DimensionValue, Dimensions, Button } from "react-native";
const { width, height } = Dimensions.get('window')
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Button_find } from "../componentes/ButtonAc";
import { useState } from "react";
import { SetStateAction } from "react";
const Home = () => {

    const initialState = {

        Correo: '',
        Contraseña: ''
    }
    const [state, setState] = useState(initialState)
    const handlerChangeText = (value, name) => {
        setState({ ...state, [name]: value })
    }
    const saveProduct = () =>
    {
        Text:state
    }
    return (
        <View style={styles.Container}>
            <View></View>
            <Text style={styles.title}>Medical Control</Text>
            <TextInput
                placeholder="Correo Electrónico"
                style={styles.textInput}
                onChangeText={(value) => handlerChangeText(value, 'Correo')}
                value={state.Correo}
                

            />
            <TextInput
                placeholder="Contraseña"
                style={styles.textInput}
                secureTextEntry={true}
                onChangeText={(value) => handlerChangeText(value, 'Contraseña')}
                value={state.Contraseña}

            />
            <Button_find />
            <StatusBar style="auto" />
            
        </View>
    )
}
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: "#9CD2D3",
        alignItems: 'center', //para centra
        justifyContent: 'center' //para el centro
    },
    title: {
        fontSize: 45,
        color: "#000000",
        fontWeight: 'bold'
    },
    textInput: {
        backgroundColor: "#F2E6CF",
        borderRadius: 20,
        width: "60%",
        padding: 12,
        height: 50,
        marginTop: 40,
        paddingStart: 15
    },

})
export default Home
