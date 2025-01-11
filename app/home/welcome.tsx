import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  ImageBackground,
} from "react-native";
import { router } from "expo-router";
import circle_logo from "../../assets/images/circle_sign.png";
import travelmatch_logo from "../../assets/images/travel_match_logo.png";
import background_image from "../../assets/images/bg.png";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Welcome() {
  console.log("Welcome Screen Rendered");
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground source={background_image} style={styles.container}>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <View style={styles.logoContainer}>
            <Image source={circle_logo} style={styles.circleLogo} />
            <Image source={travelmatch_logo} style={styles.travelmatchLogo} />
          </View>

          <View style={styles.content}>
            <Text style={styles.title}>Let's Get</Text>
            <Text style={styles.highlight}>Started!</Text>

            <Pressable
              style={styles.button}
              onPress={() => router.push("/auth/signin")}
            >
              <Text style={styles.buttonText}>SIGN IN</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Don't have an account?</Text>
          <Pressable onPress={() => router.push("/auth/signup")}>
            <Text style={styles.link}>SIGN UP NOW</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 12,
  },
  circleLogo: {
    width: 80,
    height: 80,
    marginBottom: 16,
  },
  travelmatchLogo: {
    width: 150,
    height: 20,
    resizeMode: "contain",
  },
  content: {
    alignItems: "center",
    marginBottom: 40,
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
    textAlign: "center",
  },
  highlight: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#0037FF",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#233DFF",
    width: 245,
    height: 63,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginTop: 52,
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 20,
    textAlign: "center",
  },
  footer: {
    marginTop: "auto",

    alignItems: "center",
    gap: 9,
  },
  footerText: {
    color: "#233DFF",
    fontSize: 16,
  },
  link: {
    fontWeight: "700",

    fontSize: 16,
    color: "#000000",
  },
});
