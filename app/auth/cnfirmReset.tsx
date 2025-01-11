import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
  Image,
} from "react-native";
import right from "../../assets/images/right.png";
import cross from "../../assets/images/cross.png"
type ConfirmResetPasswordProps = {
  onConfirm: (event: GestureResponderEvent) => void;
  onCancel: (event: GestureResponderEvent) => void;
};

const ConfirmResetPassword: React.FC<ConfirmResetPasswordProps> = ({
  onConfirm,
  onCancel,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Are you sure you want{"\n"}to reset password?
      </Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.confirmButton} onPress={onConfirm}>
          <Text style={styles.confirmText}>  <Image source={right} /></Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
          <Text style={styles.cancelText}>  <Image source={cross} /></Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    width: 300,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "#000",
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  confirmButton: {
    backgroundColor: "#fff",
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ebebeb",
    width:86,
    display:'flex',
    justifyContent:"center",
    
  },
  cancelButton: {
    backgroundColor: "#f9f9f9",
    borderRadius: 30,
    padding:12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ebebeb",
    width:86,
    display:'flex',
    justifyContent:"center",
    
  },
  confirmText: {
    fontSize: 18,
    color: " rgba(76, 175, 80, 1)",
  },
  cancelText: {
    fontSize: 18,
    color: "rgba(255, 61, 0, 1)",
  },
});

export default ConfirmResetPassword;
