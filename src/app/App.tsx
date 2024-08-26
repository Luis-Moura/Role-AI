import Slider from "@react-native-community/slider";
import Constants from "expo-constants";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import {
    Text,
    StyleSheet,
    View,
    TextInput,
    Pressable,
    ScrollView,
    ActivityIndicator,
} from "react-native";

import { handleGenerate } from "../utils/handleGenerate";

export default function App() {
    const [city, setCity] = useState("");
    const [days, setDays] = useState(3);
    const [loading, setloading] = useState(false);
    const [travel, setTravel] = useState("");

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>RolêAI</Text>

            <View style={styles.form}>
                <Text style={styles.label}>Cidade Destino</Text>

                <TextInput
                    placeholder="Ex: Campo Grande, MS"
                    style={styles.input}
                    value={city}
                    onChangeText={(text) => setCity(text)}
                ></TextInput>

                <Text style={styles.label}>
                    Tempo de estadia: <Text style={styles.days}>{days} </Text>
                    dias
                </Text>

                <Slider
                    minimumValue={1}
                    maximumValue={30}
                    value={days}
                    onValueChange={(value) => setDays(Number(value.toFixed(0)))}
                ></Slider>
            </View>

            <Pressable
                style={styles.button}
                onPress={async () =>
                    await handleGenerate(city, days, setTravel, setloading)
                }
            >
                <Text style={styles.buttonText}>Gerar roteiro</Text>
                <MaterialIcons
                    name="travel-explore"
                    size={24}
                    color={"#FFF"}
                ></MaterialIcons>
            </Pressable>

            <ScrollView
                contentContainerStyle={{ paddingBottom: 30, marginTop: 4 }}
                style={styles.containerScroll}
                showsVerticalScrollIndicator={false}
            >
                {loading && (
                    <View style={styles.content}>
                        <Text style={styles.title}>CARREGANDO ROLÊ...</Text>
                        <ActivityIndicator size={"large"}></ActivityIndicator>
                    </View>
                )}

                {travel && (
                    <View style={styles.content}>
                        <Text style={styles.title}>Roteiro do seu Rolê 👇🏻</Text>
                        <Text style={styles.textTravel}>{travel}</Text>
                    </View>
                )}
            </ScrollView>
        </View>
    );
}

const statusBarHeight = Constants.statusBarHeight;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f1f1f1",
        alignItems: "center",
    },
    heading: {
        fontSize: 32,
        fontWeight: "bold",
        paddingTop: statusBarHeight + 25,
    },
    form: {
        backgroundColor: "#FFF",
        width: "90%",
        borderRadius: 8,
        padding: 16,
        marginTop: 16,
        marginBottom: 8,
    },
    label: {
        fontWeight: "bold",
        fontSize: 18,
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderRadius: 4,
        borderColor: "#94a3b8",
        padding: 8,
        fontSize: 16,
        marginBottom: 16,
    },
    days: {
        backgroundColor: "#F1F1F1",
    },
    button: {
        backgroundColor: "#ff5656",
        width: "90%",
        borderRadius: 16,
        padding: 14,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        gap: 8,
    },
    buttonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
    },
    content: {
        backgroundColor: "#fff",
        padding: 16,
        width: "100%",
        marginTop: 16,
        borderRadius: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 8,
    },
    containerScroll: {
        width: "90%",
        marginTop: 8,
    },
    textTravel: {
        fontSize: 16,
    },
});
