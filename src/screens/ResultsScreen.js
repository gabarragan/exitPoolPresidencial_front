import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { VictoryBar, VictoryChart } from 'victory-native';

const ResultsScreen = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://tu-api.com/results')
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
            <VictoryChart>
                <VictoryBar data={data} x="option" y="votes" />
            </VictoryChart>
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
