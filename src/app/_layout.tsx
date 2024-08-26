import { View } from "react-native";
import App from "./App";
import { StatusBar } from "react-native";

export default function RootLayout() {
    return (
        <View style={{ flex: 1 }}>
            <StatusBar barStyle="default" backgroundColor="#000000"></StatusBar>
            <App></App>
        </View>
    );
}
