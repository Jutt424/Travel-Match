import { useEffect } from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import { router } from "expo-router";
import circle from "../assets/images/blue_circle.png";

export default function Index() {
  useEffect(() => {
    // First transition after 2 seconds
    const timer1 = setTimeout(() => {
  
      router.replace("./home/splash");
    }, 1000);
        
    return () => clearTimeout(timer1);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={circle} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  logo: {
    width: 154,
    height: 154,
  },
});
