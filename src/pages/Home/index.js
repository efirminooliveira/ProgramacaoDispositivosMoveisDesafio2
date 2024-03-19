import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Home() {
    return (
        <View style={styles.container}>

            <Text style={styles.text}>Bem vindo a Din Din - Fincare</Text>

            <Text style={styles.text1}>Aqui você pode cuidar das suas finanças rapidamente!</Text>

            <Text style={styles.text1}>Saiba como seu dinheiro está fugindo e tenha o controle financeiro na palma da mão!</Text>


        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#89b1d9',
    },

    text: {
        fontSize: 30,
        color: '#205285',
        marginVertical: 50,


    },

    text1: {
        fontSize: 25,
        color: '#205285',
        marginTop: 20,
        marginHorizontal: 30,

    },

});

