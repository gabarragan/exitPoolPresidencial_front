import axios from 'axios';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const SurveyScreen = ({ navigation }) => {
    const [serviceRating, setServiceRating] = useState('');
    const [productQuality, setProductQuality] = useState('');

    const handleServiceRatingChange = (value) => {
        setServiceRating(value);
    };

    const handleProductQualityChange = (value) => {
        setProductQuality(value);
    }

    const submitSurvey = () => {
        axios.post('https://tu-api.com/survey', { response })
            .then(() => {
                navigation.navigate('Results');
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Encuesta de Satisfacción</Text>
                <Text style={styles.subtitle}>Ayúdanos a mejorar compartiendo tu opinión.</Text>
            </View>
            <View style={styles.form}>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>¿Cómo calificarías nuestro servicio?</Text>
                    <View style={styles.optionsContainer}>
                        {['excellent', 'good', 'average', 'poor'].map((value) => (
                            <TouchableOpacity
                                key={value}
                                style={[
                                    styles.option,
                                    serviceRating === value && styles.selectedOption
                                ]}
                                onPress={() => handleServiceRatingChange(value)}
                            >
                                <Image source={{ uri: 'https://via.placeholder.com/48' }} style={styles.image} />
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>¿Cómo calificarías la calidad de nuestros productos?</Text>
                    <View style={styles.optionsContainer}>
                        {['excellent', 'good', 'average', 'poor'].map((value) => (
                            <TouchableOpacity
                                key={value}
                                style={[
                                    styles.option,
                                    productQuality === value && styles.selectedOption
                                ]}
                                onPress={() => handleProductQualityChange(value)}
                            >
                                <Image source={{ uri: 'https://via.placeholder.com/48' }} style={styles.image} />
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
                <TouchableOpacity style={styles.button} onPress={submitSurvey}>
                    <Text style={styles.buttonText}>Enviar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 16,
        paddingVertical: 24,
        maxWidth: 400,
        alignSelf: 'center',
    },
    header: {
        marginBottom: 16,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#3E7DA0',
    },
    subtitle: {
        color: '#949599',
    },
    form: {
        marginTop: 32,
    },
    formGroup: {
        marginBottom: 16,
    },
    label: {
        fontSize: 14,
        fontWeight: '500',
        color: '#6597B2',
    },
    optionsContainer: {
        marginTop: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    option: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        borderWidth: 1,
        borderColor: '#A9AAAE',
        borderRadius: 8,
        marginHorizontal: 4,
    },
    selectedOption: {
        borderColor: '#3E7DA0',
    },
    image: {
        width: 48,
        height: 48,
    },
    button: {
        marginTop: 16,
        paddingVertical: 12,
        borderRadius: 4,
        backgroundColor: '#F0E454',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: '500',
    },
});

export default SurveyScreen;
