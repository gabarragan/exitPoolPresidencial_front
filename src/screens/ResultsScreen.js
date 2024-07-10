import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import API from '../utils/api';

import BarChartExample from '../components/BarCharExample';

const ResultsScreen = () => {
    const [data, setData] = useState({
        labels: [],
        datasets: [
            {
                data: [],
                colors: [],
            }
        ],
        legend: []
    });
    const api = new API({});

    useEffect(() => {
        api.get({ url: '/TotalVotes' })
            .then(response => {
                const labels = response.data.map((item) => item.name);
                const data = response.data.map((item) => item.percentage);
                const colors = response.data.map((item) => ((opacity = 1) => (`rgba(${item.rgb},${opacity})`)));
                setData({ labels, datasets: [{ data, colors, }] });
            }).catch(error => {
                setData({ labels: [], datasets: [{ data: [] }] });
                console.error(error);
            });
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{width: '100%', height: 'calc(100vh - 60px)', overflowY: 'scroll'}}>
                <Text style={styles.title}>Resultado de Votaciones</Text>
                <View>

                </View>
                <View style={styles.chartsContainer}>
                    <BarChartExample data={data} />
                    <BarChartExample data={data} />
                    <BarChartExample data={data} />
                </View>
            </ScrollView>
        </SafeAreaView>
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
    chartsContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
        padding: 16,
    }
});

export default ResultsScreen;
