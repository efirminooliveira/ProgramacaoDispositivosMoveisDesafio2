import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Button, StyleSheet } from "react-native";

function CriarConta() {

  const navigation = useNavigation();
  return (
    <View>

      <Button
        title="Cadastre-se"
        onPress={() => navigation.navigate('Cadastro')}>

      </Button>
    </View>
  );

}

const styles = StyleSheet.create({
  Button: {
    alignItems: 'center',
    padding: 12,
  },
});

export default CriarConta;