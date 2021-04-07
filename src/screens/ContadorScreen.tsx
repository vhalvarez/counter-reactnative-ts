import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Fab } from "../components/Fab";

export const ContadorScreen = () => {
    const [contador, setContador] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Counter: {contador}</Text>

            <Fab title="+1" onPress={() => setContador(contador + 1)} />

            <Fab
                title="-1"
                onPress={() => setContador(contador - 1)}
                position="left"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    title: {
        textAlign: "center",
        fontSize: 40,
    },
});
