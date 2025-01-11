import { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { router } from "expo-router";
import travelmatch_logo from "../../assets/images/travel_match_logo.png";
import circle from "../../assets/images/circle_sign.png";

export default function Splash() {
  console.log("splash")
  useEffect(() => {
    // Transition to welcome screen after 2 seconds
    const timer = setTimeout(() => {
      router.replace("/home/welcome");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={circle} style={styles.circle} />
      <Image source={travelmatch_logo} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    gap:18
  },
  circle: {
    height: 154,
    width: 154,
    resizeMode: "contain",
  },
  logo: {
    height: 30,
    width: 200,
    resizeMode: "contain",
  },
  text: {
    fontSize: 18,
    color: "#666",
  },
}); 