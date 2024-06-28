import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import API from '../utils/api';
import BarChartExample from '../components/BarCharExample';

const ResultsScreen = () => {
    const [data, setData] = useState([]);
    const api = new API({});

    useEffect(() => {
        api.get('/TotalVotes')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Results</Text>
            <BarChartExample
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
        textAlign: 'center',
    },
});

export default ResultsScreen;
