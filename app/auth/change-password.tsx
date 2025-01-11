import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { Ionicons } from '@expo/vector-icons';

interface ConfirmResetProps {
    onConfirm: () => void;
    onCancel: () => void;
}

export default function ConfirmReset({ onConfirm, onCancel }: ConfirmResetProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Are you sure you want{'\n'}to reset password?</Text>
            
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#666"
                    keyboardType="email-address"
                />
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Current password"
                    placeholderTextColor="#666"
                    secureTextEntry
                />
            </View>

            <View style={styles.buttonContainer}>
                <Pressable style={[styles.button, styles.confirmButton]} onPress={onConfirm}>
                    <Ionicons name="checkmark-outline" size={24} color="white" />
                </Pressable>
                <Pressable style={[styles.button, styles.cancelButton]} onPress={onCancel}>
                    <Ionicons name="close-outline" size={24} color="#FF3B30" />
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: '#F5F7FF',
        borderRadius: 20,
        alignItems: 'center',
        width: '100%',
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000',
        textAlign: 'center',
        marginBottom: 20,
        lineHeight: 24,
    },
    inputContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 16,
        paddingVertical: 14,
        paddingHorizontal: 16,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 2,
    },
    input: {
        flex: 1,
        padding: 8,
        fontSize: 15,
        color: '#333',
    },
    buttonContainer: {
        flexDirection: 'row',
        gap: 16,
        marginTop: 8,
    },
    button: {
        width: 44,
        height: 44,
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    confirmButton: {
        backgroundColor: '#34C759',
    },
    cancelButton: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#FF3B30',
    }
});