import { View, Text, StyleSheet, TextInput, Pressable, Image, Alert } from "react-native";
import ConfirmResetPassword from "./cnfirmReset";
import { router } from "expo-router";

export default function ForgotPassword() {
     
    const handleConfirm = () => router.push("/auth/change-password");
  const handleCancel = () => router.push('/auth/signin');
    return (
        <View style={styles.screen}>
      <ConfirmResetPassword onConfirm={handleConfirm} onCancel={handleCancel} />
    </View>
    )
    
}
const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#000",
    },
  });