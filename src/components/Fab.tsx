import React from "react";
import {
    TouchableOpacity,
    TouchableNativeFeedback,
    View,
    Text,
    StyleSheet,
    Platform,
} from "react-native";

interface Props {
    position?: "left" | "right";
    title: string;
    onPress: () => void;
}

export const Fab = ({ title, onPress, position }: Props) => {
    const ios = () => {
        return (
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={onPress}
                style={[
                    styles.fabLocation,
                    position === "left" ? styles.left : styles.right,
                ]}
            >
                <View style={styles.fab}>
                    <Text style={styles.fabText}>{title}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    const android = () => {
        return (
            <View
                style={[
                    styles.fabLocation,
                    position === "left" ? styles.left : styles.right,
                ]}
            >
                <TouchableNativeFeedback
                    onPress={onPress}
                    background={TouchableNativeFeedback.Ripple(
                        "#fa0f36",
                        false,
                        30
                    )}
                >
                    <View style={styles.fab}>
                        <Text style={styles.fabText}>{title}</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    };

    return Platform.OS === "ios" ? ios() : android();
};

const styles = StyleSheet.create({
    fabLocation: {
        position: "absolute",
        bottom: 25,
    },
    right: {
        right: 25,
    },
    left: {
        left: 25,
    },
    fab: {
        backgroundColor: "#dc0428",
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 8,
    },
    fabText: {
        color: "white",
        fontSize: 25,
        fontWeight: "bold",
        alignSelf: "center",
    },
});
