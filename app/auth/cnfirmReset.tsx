import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
} from "react-native";

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
          <Text style={styles.confirmText}>✔</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
          <Text style={styles.cancelText}>✖</Text>
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
    color: "#00C853",
  },
  cancelText: {
    fontSize: 18,
    color: "#D32F2F",
  },
});

export default ConfirmResetPassword;
