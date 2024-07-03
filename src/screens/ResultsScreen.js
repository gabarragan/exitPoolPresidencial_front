import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import API from '../utils/api';
import { SafeAreaView } from 'react-native';

import BarChartExample from '../components/BarCharExample';

const ResultsScreen = () => {
    const [data, setData] = useState( {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [-50, -20, -2, 86, 71, 100],
            color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`
          },
          {
            data: [20, 10, 4, 56, 87, 90],
            color: (opacity = 1) => `rgba(0, 255, 255, ${opacity})`
          },
          {
            data: [30, 90, 67, 54, 10, 2]
          }
        ],
        legend: ["Rainy Days", "Sunny Days", "Snowy Days"] 
      });
    const api = new API({});

    useEffect(() => {
        api.get({ url: '/TotalVotes' })
            .then(response => {
                const labels = response.data.map((item) => item.name);
                const data = response.data.map((item) => item.percentage);
                console.log(response.data, { labels, datasets: [{ data }] });
                setData({ labels, datasets: [{ data }] });
            }).catch(error => {
                setData({ labels: [], datasets: [{ data: [] }] });
                console.error(error);
            });
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Results</Text>
            <BarChartExample data={data} />
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
});

export default ResultsScreen;
