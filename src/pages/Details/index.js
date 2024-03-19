import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Details() {
    return (
        <View style={styles.container}>

            <Text style={styles.text}>Relatório</Text>

            <Text style={styles.text1}>Total de entradas: R$3027,80</Text>
            <Text style={styles.text1}>Total de saídas: R$4281,00</Text>
            <Text style={styles.text1}>Saldo: -R$1253,20</Text>

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
        marginVertical: 50

    },

    text1: {
        fontSize: 25,
        color: '#205285',
        marginTop: 20,

    },

});
