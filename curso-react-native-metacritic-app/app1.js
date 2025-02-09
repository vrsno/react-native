import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  Pressable,
} from "react-native";

//const icon = require("./assets/icon.png");

import icon from "./assets/icon.png";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <StatusBar style="light" />
      <Image
        source={{
          uri: "https://www.metacritic.com/a/img/resize/3a65ba1dd9590573774ad33a39c52384174cb796/catalog/provider/6/3/6-1-4763-13.jpg?auto=webp&fit=cover&height=300&width=200",
        }}
        style={{ width: 215, height: 294, resizeMode: "center" }}
      />
      <Text style={{ color: "white" }}>App instalada</Text>
      {/* no se puede estilar */}
      {/* <Button color="red" title="pulsa aqui" onPress={() => alert("hola")} /> */}
      {/* otro componente, se puede estilar */}
      {/* <TouchableHighlight
        underlayColor={"#ededed"}
        onPress={() => alert("hola")}
        style={{
          width: 200,
          height: 200,
          backgroundColor: "red",
          borderRadius: 100,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white" }}>Pulsa aqui!!!!</Text>
      </TouchableHighlight> */}

      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "rgb(210, 230, 255)" : "white",
          },
          styles.wrapperCustom,
        ]}
      >
        {({ pressed }) => (
          <Text
            style={{
              fontSize: pressed ? 32 : 16,
            }}
          >
            {pressed ? "pressed" : "press meee"}
          </Text>
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
