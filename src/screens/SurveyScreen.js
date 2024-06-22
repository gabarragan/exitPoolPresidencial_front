import axios from 'axios';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

/* const maduro = require('./Candidatos/nicolas-maduro.png');
const gonzalez = require('./Candidatos/Edmundo_Gonzalez_Urrutia.png');
const ecarri = require('./Candidatos/AntonioEcarri.png');
const rauseo = require('./Candidatos/BenjaminRauseo.png');
const marquez = require('./Candidatos/Enrique_Marquez.png');
const bertucci = require('./Candidatos/JavierBertucci.png'); */

/* import maduro from'./Candidatos/nicolas-maduro.png';
import gonzalez from'./Candidatos/Edmundo_Gonzalez_Urrutia.png';
import ecarri from'./Candidatos/AntonioEcarri.png';
import rauseo from'./Candidatos/BenjaminRauseo.png';
import marquez from'./Candidatos/Enrique_Marquez.png';
import bertucci from'./Candidatos/JavierBertucci.png'; */

import candidates from './candidates.json' ;

const SurveyScreen = ({ navigation }) => {
    const [serviceRating, setServiceRating] = useState('');

    const handleServiceRatingChange = (value) => {
        setServiceRating(value);
    };
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
                    <Text style={styles.label}>¿Cuál es tu candidato favorito?</Text>
                    <View style={styles.optionsContainer}>
                        {candidates.map(({ value, image }) => (
                            <TouchableOpacity
                                key={value}
                                style={[
                                    styles.option,
                                    serviceRating === value && styles.selectedOption
                                ]}
                                onPress={() => handleServiceRatingChange(value)}
                            >
                                <Image source={{ uri: image }} style={styles.image} />
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
        flexFlow: 'row wrap',
        justifyContent: 'space-between',
        gap: 16
    },
    option: {
        flex: '1 1 30%',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#A9AAAE',
        borderRadius: 8,
    },
    selectedOption: {
        borderColor: '#3E7DA0',
    },
    image: {
        width: 84,
        height: 84,
        borderRadius: 8,
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
