import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    ImageBackground,
    Pressable,
    Image,
} from "react-native";
import background_image from "../../assets/images/bg.png"; // Add your background image path here
import { Ionicons } from "@expo/vector-icons";
import group from "../../assets/images/group.png";
import polygon from "../../assets/images/polygon.png";
import language from "../../assets/images/language.png"
import old_man from "../../assets/images/oldMan.png"
import travel from "../../assets/images/travel.png"


// Define types for selected options
interface SelectedOptions {
    age: string | null;
    languages: string[];
    group: string | null;
    travelType: string[];
}

const Select: React.FC = () => {
    const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({
        age: null,
        languages: [],
        group: null,
        travelType: [],
    });

    const toggleSelection = (category: keyof SelectedOptions, value: string) => {
        if (category === "age" || category === "group") {
            setSelectedOptions((prev) => ({ ...prev, [category]: value }));
        } else if (["languages", "travelType"].includes(category)) {
            setSelectedOptions((prev) => {
                const current = prev[category] as string[];
                return current.includes(value)
                    ? {
                        ...prev,
                        [category]: current.filter((item) => item !== value),
                    }
                    : { ...prev, [category]: [...current, value] };
            });
        }
    };

    const clearSelection = () => {
        setSelectedOptions({
            age: null,
            languages: [],
            group: null,
            travelType: [],
        });
    };

    return (
        <SafeAreaView style={{ flex: 1, paddingRight: 10 }}>
            <ImageBackground source={background_image} style={styles.bgcontainer}>
                <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
                    <View style={styles.header}>

                        <View style={{ display: 'flex', justifyContent: "space-between", flexDirection: "row", alignItems: 'center' }}>
                            <View>
                                <Text style={{ fontSize: 20, fontWeight: 700, color: "#000000" }}>
                                    travel
                                    <Text style={{ color: "#233DFF" }}>match</Text>
                                </Text>
                            </View>
                            <View>
                                <View style={{ display: "flex", justifyContent: 'center', gap: 1, flexDirection: 'row', alignItems: "center" }}>
                                    <Text>SKIP</Text>
                                    <Image source={polygon} />
                                </View>
                            </View>
                        </View>
                        <View style={{ display: 'flex', gap: 0 }}>
                            <Text style={styles.title}>Find your</Text>
                            <Text style={styles.highlight}>perfect match</Text>
                        </View>


                    </View>


                    <Text style={styles.subHeader}>
                        Tell us what you love, so we can show you trips and events that excite you!
                    </Text>

                    {/* Age Section */}
                    <View style={styles.section}>
                        <View style={{ display: "flex", flexDirection: "row", gap: 10, alignItems: "center", marginBottom: 23 }}>
                            <Image source={old_man} />
                            <Text style={styles.sectionTitle}>Age</Text>
                        </View>
                        <View style={styles.optionsRow}>
                            {["< 18", "18 - 25", "25 - 30", "30+"].map((age) => (
                                <TouchableOpacity
                                    key={age}
                                    style={[styles.option, selectedOptions.age === age && styles.selectedOption]}
                                    onPress={() => toggleSelection("age", age)}
                                >
                                    <Text style={[styles.optionText, selectedOptions.age === age && styles.selectedOptionText]}>
                                        {age}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>

                    {/* Languages Section */}
                    <View style={styles.section}>
                        <View style={{ display: "flex", flexDirection: "row", gap: 10, alignItems: "center", marginBottom: 23 }}>
                            <Image source={language} />
                            <Text style={styles.sectionTitle}>Spoken languages</Text>
                        </View>
                        <View style={styles.optionsRow}>
                            {["english", "italian", "spanish", "french", "deutsch"].map((language) => (
                                <TouchableOpacity
                                    key={language}
                                    style={[styles.option, selectedOptions.languages.includes(language) && styles.selectedOption]}
                                    onPress={() => toggleSelection("languages", language)}
                                >
                                    <Text style={[styles.optionText, selectedOptions.languages.includes(language) && styles.selectedOptionText]}>
                                        {language}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>

                    {/* Group Preferences Section */}
                    <View style={styles.section}>
                        <View style={{ display: "flex", flexDirection: "row", gap: 10, alignItems: "center", marginBottom: 23 }}>
                            <Image source={group} />
                            <Text style={styles.sectionTitle}>Group preferences</Text>
                        </View>
                        <View style={styles.optionsRow}>
                            {["only girls", "only boys", "couples", "families", "boys & girls"].map((group) => (
                                <TouchableOpacity
                                    key={group}
                                    style={[styles.option, selectedOptions.group === group && styles.selectedOption]}
                                    onPress={() => toggleSelection("group", group)}
                                >
                                    <Text style={[styles.optionText, selectedOptions.group === group && styles.selectedOptionText]}>
                                        {group}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>

                    {/* Travel Type Section */}
                    <View style={styles.section}>
                        <View style={{ display: "flex", flexDirection: "row", gap: 10, alignItems: "center", marginBottom: 23 }}>
                            <Image source={travel} />
                            <Text style={styles.sectionTitle}>Travel type</Text>
                        </View>
                        <View style={styles.optionsRow}>
                            {["nightlife/club", "relax", "adventure", "cultural", "nature"].map((type) => (
                                <TouchableOpacity
                                    key={type}
                                    style={[styles.option, selectedOptions.travelType.includes(type) && styles.selectedOption]}
                                    onPress={() => toggleSelection("travelType", type)}
                                >
                                    <Text style={[styles.optionText, selectedOptions.travelType.includes(type) && styles.selectedOptionText]}>
                                        {type}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>

                    {/* Footer with Save and Clear buttons */}
                    <View style={styles.footer}>
                        <TouchableOpacity
                            style={styles.saveButton}
                            onPress={() => { /* */ }}
                        >
                            <Text style={styles.saveButtonText}>SAVE</Text>
                            <Ionicons name="save-outline" size={24} color="#fff" />
                        </TouchableOpacity>
                        <Pressable style={styles.clearButton} onPress={clearSelection}>
                            <Text style={styles.clearButtonText}>CLEAR SELECTION</Text>
                            <Ionicons name="close-outline" size={20} color="#0037FF" />
                        </Pressable>
                    </View>
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 63,
        paddingLeft: 20,
        paddingRight: 20,
    },
    bgcontainer: {
        flex: 1,
    },
    header: {
        marginBottom: 39,
    },
    title: {
        fontSize: 48,
        fontWeight: "bold",
    },
    highlight: {
        fontSize: 48,
        fontWeight: "bold",
        color: "#233dff",
        lineHeight: 48,
    },
    subHeader: {
        fontSize: 14,
        color: "#000000b0",
        marginBottom: 23,
    },
    section: {
        marginBottom: 32,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 700,
        color: "#000",
    },
    optionsRow: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    option: {
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal: 15,
        marginRight: 10,
        marginBottom: 10,
    },
    selectedOption: {
        backgroundColor: "rgba(35, 61, 255, 1)",
        borderColor: "#0000005e",
    },
    optionText: {
        color: "#333",
        fontWeight: 'bold',
    },
    selectedOptionText: {
        color: "#fff",
        fontWeight: 'bold',
    },
    footer: {
        gap: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 80,
    },
    saveButton: {
        flex: 1,
        backgroundColor: '#0000FF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 62,
        paddingLeft: 16,
        paddingRight: 16,
        gap: 8,
        height: 52
    },
    saveButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    clearButton: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 16,
        paddingRight: 16,
        borderRadius: 62,
        borderWidth: 1,
        borderColor: '#0037FF',
        gap: 8,
        height: 52,

    },
    clearButtonText: {
        color: '#0037FF',
        fontWeight: 700,
        fontSize: 14,
    },
});

export default Select;