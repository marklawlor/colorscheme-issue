import { Appearance, StyleSheet, useColorScheme } from "react-native";

import { Text, View } from "../../components/Themed";
import { useState } from "react";

export default function TabOneScreen() {
  const colorScheme = useColorScheme();
  const [clicks, setClick] = useState(0);
  return (
    <View style={styles.container}>
      <Text
        style={styles.title}
        onPress={() => {
          setClick((clicks) => clicks + 1);
          Appearance.setColorScheme(colorScheme === "light" ? "dark" : "light");
        }}
      >
        Current: {colorScheme}
        {"\n"}
        Expected: {clicks % 2 === 0 ? "light" : "dark"}
        {"\n"}
        Clicks: {clicks}
        {"\n"}
        Press to toggle.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
