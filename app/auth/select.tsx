import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";

interface PreferenceOption {
    id: string;
    label: string;
}

export default function PreferencesForm() {
    const [selectedAge, setSelectedAge] = useState<string>('');
    const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
    const [selectedGroupType, setSelectedGroupType] = useState<string>('');
    const [selectedTravelTypes, setSelectedTravelTypes] = useState<string[]>([]);

    const ageRanges: PreferenceOption[] = [
        { id: '<18', label: '< 18' },
        { id: '18-25', label: '18 - 25' },
        { id: '26-30', label: '26 - 30' },
        { id: '30+', label: '30+' },
    ];

    const languages: PreferenceOption[] = [
        { id: 'english', label: 'english' },
        { id: 'italian', label: 'italian' },
        { id: 'spanish', label: 'spanish' },
        { id: 'french', label: 'french' },
        { id: 'deutsch', label: 'deutsch' },
    ];

    const groupPreferences: PreferenceOption[] = [
        { id: 'only_girls', label: 'only girls' },
        { id: 'only_boys', label: 'only boys' },
        { id: 'couples', label: 'couples' },
        { id: 'families', label: 'families' },
        { id: 'boys_girls', label: 'boys & girls' },
    ];

    const travelTypes: PreferenceOption[] = [
        { id: 'nightlife', label: 'nightlife/club' },
        { id: 'relax', label: 'relax' },
        { id: 'adventure', label: 'adventure' },
        { id: 'cultural', label: 'cultural' },
        { id: 'nature', label: 'nature' },
    ];

    const toggleSelection = (id: string, type: 'age' | 'language' | 'group' | 'travel') => {
        switch (type) {
            case 'age':
                setSelectedAge(selectedAge === id ? '' : id);
                break;
            case 'language':
                setSelectedLanguages(prev => 
                    prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
                );
                break;
            case 'group':
                setSelectedGroupType(selectedGroupType === id ? '' : id);
                break;
            case 'travel':
                setSelectedTravelTypes(prev => 
                    prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
                );
                break;
        }
    };

    const clearAll = () => {
        setSelectedAge('');
        setSelectedLanguages([]);
        setSelectedGroupType('');
        setSelectedTravelTypes([]);
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Find your</Text>
                <Text style={styles.highlight}>perfect match</Text>
                <Text style={styles.subtitle}>Tell us what you love, so we can show you trips and events that excite you!</Text>
            </View>

            <View style={styles.section}>
                <View style={styles.sectionHeader}>
                    <Ionicons name="person-outline" size={20} color="#0037FF" />
                    <Text style={styles.sectionTitle}>Age</Text>
                </View>
                <View style={styles.optionsContainer}>
                    {ageRanges.map(range => (
                        <Pressable
                            key={range.id}
                            style={[
                                styles.option,
                                selectedAge === range.id && styles.selectedOption
                            ]}
                            onPress={() => toggleSelection(range.id, 'age')}
                        >
                            <Text style={[
                                styles.optionText,
                                selectedAge === range.id && styles.selectedOptionText
                            ]}>{range.label}</Text>
                        </Pressable>
                    ))}
                </View>
            </View>

            <View style={styles.section}>
                <View style={styles.sectionHeader}>
                    <Ionicons name="language-outline" size={20} color="#0037FF" />
                    <Text style={styles.sectionTitle}>Spoken languages</Text>
                </View>
                <View style={styles.optionsContainer}>
                    {languages.map(lang => (
                        <Pressable
                            key={lang.id}
                            style={[
                                styles.option,
                                selectedLanguages.includes(lang.id) && styles.selectedOption
                            ]}
                            onPress={() => toggleSelection(lang.id, 'language')}
                        >
                            <Text style={[
                                styles.optionText,
                                selectedLanguages.includes(lang.id) && styles.selectedOptionText
                            ]}>{lang.label}</Text>
                        </Pressable>
                    ))}
                </View>
            </View>

            <View style={styles.section}>
                <View style={styles.sectionHeader}>
                    <Ionicons name="people-outline" size={20} color="#0037FF" />
                    <Text style={styles.sectionTitle}>Group preferences</Text>
                </View>
                <View style={styles.optionsContainer}>
                    {groupPreferences.map(pref => (
                        <Pressable
                            key={pref.id}
                            style={[
                                styles.option,
                                selectedGroupType === pref.id && styles.selectedOption
                            ]}
                            onPress={() => toggleSelection(pref.id, 'group')}
                        >
                            <Text style={[
                                styles.optionText,
                                selectedGroupType === pref.id && styles.selectedOptionText
                            ]}>{pref.label}</Text>
                        </Pressable>
                    ))}
                </View>
            </View>

            <View style={styles.section}>
                <View style={styles.sectionHeader}>
                    <Ionicons name="airplane-outline" size={20} color="#0037FF" />
                    <Text style={styles.sectionTitle}>Travel type</Text>
                </View>
                <View style={styles.optionsContainer}>
                    {travelTypes.map(type => (
                        <Pressable
                            key={type.id}
                            style={[
                                styles.option,
                                selectedTravelTypes.includes(type.id) && styles.selectedOption
                            ]}
                            onPress={() => toggleSelection(type.id, 'travel')}
                        >
                            <Text style={[
                                styles.optionText,
                                selectedTravelTypes.includes(type.id) && styles.selectedOptionText
                            ]}>{type.label}</Text>
                        </Pressable>
                    ))}
                </View>
            </View>

            <View style={styles.footer}>
                <Pressable style={styles.saveButton}>
                    <Text style={styles.saveButtonText}>SAVE</Text>
                    <Ionicons name="save-outline" size={20} color="white" />
                </Pressable>
                <Pressable style={styles.clearButton} onPress={clearAll}>
                    <Text style={styles.clearButtonText}>CLEAR SELECTION</Text>
                    <Ionicons name="close-outline" size={20} color="#0037FF" />
                </Pressable>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F7FF',
        padding: 20,
    },
    header: {
        marginBottom: 30,
    },
    title: {
        fontSize: 32,
        fontWeight: '700',
        color: '#000',
    },
    highlight: {
        fontSize: 32,
        fontWeight: '700',
        color: '#0037FF',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 14,
        color: '#666',
        lineHeight: 20,
    },
    section: {
        marginBottom: 24,
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 12,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000',
    },
    optionsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
    },
    option: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 20,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#E5E5E5',
    },
    selectedOption: {
        backgroundColor: '#0037FF',
        borderColor: '#0037FF',
    },
    optionText: {
        fontSize: 14,
        color: '#666',
    },
    selectedOptionText: {
        color: 'white',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16,
        gap: 12,
    },
    saveButton: {
        flex: 1,
        backgroundColor: '#0037FF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        borderRadius: 12,
        gap: 8,
    },
    saveButtonText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 14,
    },
    clearButton: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#0037FF',
        gap: 8,
    },
    clearButtonText: {
        color: '#0037FF',
        fontWeight: '600',
        fontSize: 14,
    },
});