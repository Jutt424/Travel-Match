import { View, Text, StyleSheet, TextInput, Pressable, Image, ImageBackground, SafeAreaView } from "react-native";
import { router } from "expo-router";
import travelmatch_logo from "../../assets/images/travel_match_logo.png";
import user_icon from "../../assets/icons/user_icon.png";
import lock_icon from "../../assets/icons/password_icon.png";
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import apple_icon from "../../assets/icons/apple_icon.png";
import google_icon from "../../assets/icons/google_icon.png";
import background_image from "../../assets/images/bg.png"; // Add your background image path here

export default function SignIn() {
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    return (
       <SafeAreaView style={{flex:1}}>
         <ImageBackground source={background_image} style={styles.container}>
            <View style={styles.header}>
                <Text style={{fontSize:20,fontWeight:700,color:"#000000"}}>travel<Text style={{color:"#233DFF"}}>match</Text></Text>
              <View style={{display:'flex',gap:0}}>
              <Text style={styles.title}>Welcome</Text>
              <Text style={styles.highlight}>Back!</Text>
              </View>
            </View>

            <View style={styles.form}>
                <View style={styles.inputContainer}>
                    <Image source={user_icon} style={{ width: 30, height: 30 }} />
                    <TextInput
                        style={styles.input}
                        placeholder="Email or Username"
                        placeholderTextColor="#666"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Image source={lock_icon} style={{ width: 30, height: 30 }} />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor="#666"
                        secureTextEntry={!showPassword}
                    />
                    <Pressable onPress={() => setShowPassword(!showPassword)} style={styles.passwordIcon}>
                        <Ionicons
                            name={showPassword ? "eye-outline" : "eye-off-outline"}
                            size={20}
                            color="#233DFF"
                        />
                    </Pressable>
                </View>

                <View style={styles.rememberForgotContainer}>
                    <Pressable
                        style={styles.rememberMeContainer}
                        onPress={() => setRememberMe(!rememberMe)}
                    >
                        <Ionicons
                            name={rememberMe ? "checkbox" : "square-outline"}
                            size={20}
                            color="#ececec"
                        />
                        <Text style={styles.rememberMeText}>Remember me</Text>
                    </Pressable>
                    <Pressable onPress={() => router.push("/auth/forgot-password")}>
                        <Text style={styles.forgotPasswordText}>Forgot password?</Text>
                    </Pressable>
                </View>

                <Pressable style={styles.button} onPress={()=>router.push('/auth/select')}>
                    <Text style={styles.buttonText}>SIGN IN</Text>
                </Pressable>

                <View style={styles.orContainer}>
                    <View style={styles.line} />
                    <Text style={styles.orText}>or</Text>
                    <View style={styles.line} />
                </View>

                <View style={styles.socialButtons}>
                    <Pressable style={styles.socialButton}>
                        <Image source={apple_icon} style={{ width: 20, height: 20 }} />
                    </Pressable>
                    <Pressable style={styles.socialButton}>
                        <Image source={google_icon} style={{ width: 20, height: 20 }} />
                    </Pressable>
                </View>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>Don't have an account?</Text>
                    <Pressable onPress={() => router.push("/auth/signup")}>
                        <Text style={styles.link}>SIGN UP NOW</Text>
                    </Pressable>
                </View>
            </View>
        </ImageBackground>
       </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft:20,
        paddingRight:20,
        
    },
    header: {
        marginTop: 62,
        
        display:'flex',
      
    },
    brand: {
        height: 20,
        width: 150,
    },
    title: {
        fontSize: 48,
        fontWeight: "bold",
        
    },
    highlight: {
        fontSize: 48,
        fontWeight: "bold",
        color: "#0037FF",
        lineHeight:44
    },
    form: {
        marginTop: 45,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 20,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 7,
    },
    input: {
        flex: 1,
        padding: 16,
    },
    passwordIcon: {
        padding: 16,
    },
    rememberForgotContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    rememberMeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    rememberMeText: {
        color: '#666',
    },
    forgotPasswordText: {
        fontWeight: '400',
    },
    button: {
        backgroundColor: "#0037FF",
        padding: 16,
        borderRadius: 12,
        marginTop: 8,
    },
    buttonText: {
        color: "white",
        textAlign: "center",
        fontWeight: "600",
    },
    orContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
        width: '70%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#ddd',
    },
    orText: {
        color: '#666',
        paddingHorizontal: 10,
    },
    socialButtons: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 16,
    },
    socialButton: {
        borderWidth: 1,
        borderColor: "#ddd",
        padding: 12,
        borderRadius: 8,
        width: 100,
        alignItems: "center",
        justifyContent: "center",
        height: 48,
    },
    footer: {
        marginTop: 40,
        alignItems: "center",
    },
    footerText: {
        color: "#0037FF",
    },
    link: {
        fontWeight: "700",
        marginTop: 4,
    },
});
