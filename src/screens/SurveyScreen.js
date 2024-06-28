import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Picker } from 'react-native';
import API from '../utils/api';
import Candidates from './candidates.json';

const SurveyScreen = ({ navigation }) => {
    const api = new API({});
    const [serviceRating, setServiceRating] = useState(0);
    const [listState, setListState] = useState([]);
    const [listVotingCenter, setListVotingCenter] = useState([]);
    const [candidates, setCandidates] = useState([]);
    const [selectedState, setSelectedState] = useState('0');
    const [selectedVotingCenter, setSelectedVotingCenter] = useState('0');
    const handleServiceRatingChange = (value) => {
        setServiceRating(value);
    };

    useEffect(() => {
        api.get({ url: '/listStateVotingCenter' }).then((response) => {
            const items = response.data;
            const filteredItems = Object.values(
                items.reduce((acc, item) => {
                    if (!acc[item.idState]) {
                        acc[item.idState] = item;
                    }
                    return acc;
                }, {})
            );
            console.log(filteredItems);
            setListState(filteredItems);
            setListVotingCenter(items);
        });
        api.get({ url: '/candidates' }).then((response) => {
            const items = response.data;
            setCandidates(items.map((item) => ({
                ...item,
                image: Candidates.filter((candidate) => candidate.value === item.name)[0].image,
            })));
        });
    }, []);

    const submitSurvey = () => {
        api.post({ url: '/registreVote', data: {
            "idCandidate": serviceRating,
            "nroVote": "1",
            "idState": selectedState,
            "idVotingCenter": selectedVotingCenter
          } }).then((response) => {
            
        })
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.selectContainer}>
                    <Picker
                        selectedValue={selectedState}
                        style={[
                            styles.picker,
                            selectedState !== 0 && styles.selectedOption
                        ]}
                        onValueChange={(itemValue) => setSelectedState(itemValue)}
                    >
                        <Picker.Item label="Estado" value="0" />
                        {listState.map(({ idState, state_name }) => (
                            <Picker.Item key={idState} label={state_name} value={idState} />
                        ))}
                    </Picker>
                    <Picker
                        selectedValue={selectedVotingCenter}
                        style={[
                            styles.picker,
                            selectedVotingCenter !== 0 && styles.selectedOption
                        ]}
                        onValueChange={(itemValue) => setSelectedVotingCenter(itemValue)}
                    >
                        <Picker.Item label="Centro de votación" value="0" />
                        {listVotingCenter.map(({ idVotingCenter, voting_center_name }) => (
                            <Picker.Item key={idVotingCenter} label={voting_center_name} value={idVotingCenter} />
                        ))}
                    </Picker>
                </View>
            </View>
            <View style={styles.header}>
                <Text style={styles.title}>Encuesta de Elecciones</Text>
                <Text style={styles.subtitle}>Ayúdanos compartiendo tu opinión.</Text>
            </View>
            <View style={styles.form}>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>¿Cuál es tu candidato favorito?</Text>
                    <View style={styles.optionsContainer}>
                        {candidates.map(({ id, name, image }) => (
                            <TouchableOpacity
                                key={id}
                                style={[
                                    styles.option,
                                    serviceRating === id && styles.selectedOption
                                ]}
                                onPress={() => handleServiceRatingChange(id)}
                            >
                                <Image source={{ uri: image }} style={styles.image} />
                                <Text style={styles.optionText}>{name}</Text>
                            </TouchableOpacity>
                        ))}
                        <TouchableOpacity
                            key={0}
                            style={[
                                styles.option,
                                serviceRating === 0 && styles.selectedOption
                            ]}
                            onPress={() => handleServiceRatingChange(0)}
                        >
                            <Image source={{ uri: '' }} style={styles.image} />
                            <Text style={styles.optionText}>{'Anonimo'}</Text>
                        </TouchableOpacity>
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
    selectContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    picker: {
        height: 50,
        width: 150,
        borderRadius: 8,
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
        maxWidth: '30%',
        minWidth: '30%',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#A9AAAE',
        borderRadius: 8,
    },
    optionText: {
        color: '#949599'
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