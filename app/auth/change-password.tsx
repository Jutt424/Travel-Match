import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { router } from "expo-router";

interface ChangePasswordProps {
    onSubmit: (newPassword: string) => void;
}

export default function ChangePassword({ onSubmit }: ChangePasswordProps) {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = () => {
        if (newPassword === confirmPassword) {
          router.push('/auth/signin')
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.inputGroup}>
                <Text style={styles.label}>New password</Text>
                <TextInput
                    style={styles.input}
                    secureTextEntry
                    value={newPassword}
                    onChangeText={setNewPassword}
                    placeholder="********"
                    placeholderTextColor="#000"
                />
            </View>

            <View style={styles.inputGroup}>
                <Text style={styles.label}>Confirm new password</Text>
                <TextInput
                    style={styles.input}
                    secureTextEntry
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    placeholder="********"
                    placeholderTextColor="#000"
                />
            </View>

            <Pressable 
                style={styles.button}
                onPress={handleSubmit}
            >
                <Text style={styles.buttonText}>Change password</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 24,
        padding: 24,
        width: '100%',
        flex:1,
        justifyContent:'center',
        alignItems:"center"
    },
    inputGroup: {
        marginBottom: 24,
        width:"100%"
    },
    label: {
        fontSize: 16,
        fontWeight: 700,
        color: '#000',
        marginBottom: 8,
    },
    input: {
        height: 56,
        borderWidth: 1,
        borderColor: '#E5E5E5',
        borderRadius: 16,
        paddingHorizontal: 16,
        fontSize: 16,
        backgroundColor: 'white',
    },
    button: {
        backgroundColor: '#233dff',
        height: 56,
        borderRadius: 44,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
        paddingLeft:12,
        width:'100%',
        paddingRight:12
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 700,
    },
});