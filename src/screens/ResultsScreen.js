import React, { useEffect, useState } from 'react';
import { Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import API from '../utils/api';

import BarChartExample from '../components/BarCharExample';

const ResultsScreen = () => {
    const [totalVotes, setTotalVotes] = useState({
        data: [], maxValue: 0, stepValue: 0, yAxisLabelTexts: [], title: '', spacing: 0, initialSpacing: 0, barWidth: 0
    });
    const [totalVotesByState, setTotalVotesByState] = useState({
        data: [], maxValue: 0, stepValue: 0, yAxisLabelTexts: [], title: '', spacing: 0, initialSpacing: 0, barWidth: 0
    });
    const [totalVotesByVotingCenter, setTotalVotesByVotingCenter] = useState({
        data: [], maxValue: 0, stepValue: 0, yAxisLabelTexts: [], title: '', spacing: 0, initialSpacing: 0, barWidth: 0
    });
    const api = new API({});

    useEffect(() => {
        api.get({ url: '/TotalVotes' })
            .then(response => {
                response.data.sort((a, b) => a.id - b.id)
                const data = response.data.map(item => {
                    return {
                        ...item,
                        value: item.percentage,
                        frontColor: (`rgba(${item.rgb},0.5)`),
                        gradientColor: (`rgba(${item.rgb},1)`),
                        label: item.name,
                    }
                });
                const maxValue = (data.map(item => item.value).reduce((a, b) => Math.max(a, b), 0)) * 1.34;
                const stepValue = maxValue / 10;
                const yAxisLabelTexts = Array.from({ length: 11 }, (_, i) => (i * stepValue).toFixed(2));
                const base = Dimensions.get('window').width / 2 - 120 - 35;
                const spacing = base / ((data.length + 1) * 2);
                const initialSpacing = base / ((data.length + 1) * 2);
                const barWidth = base / ((data.length + 1) * 2);
                const labelWidth = base / ((data.length + 1) * 2);
                setTotalVotes({
                    data, maxValue, stepValue, yAxisLabelTexts, title: 'Resultados generales', width: 'calc(50vw - 2.8125rem)', spacing,
                    initialSpacing,
                    barWidth, labelWidth
                });
            }).catch(error => {
                setTotalVotes({
                    data: [], maxValue: 0, stepValue: 0, yAxisLabelTexts: [], title: '', spacing: 0, initialSpacing: 0, barWidth: 0
                });
                console.error(error);
            });
        api.get({ url: '/TotalVotesByState' })
            .then(response => {
                response.data.sort((a, b) => {
                    if (a.id_state === b.id_state) {
                        return a.id - b.id;
                    } else {
                        return a.id_state - b.id_state;
                    }
                });
                const States = [];
                const data = response.data.map(item => {
                    const res = {
                        ...item,
                        value: item.percentage,
                        frontColor: (`rgba(${item.rgb},0.5)`),
                        gradientColor: (`rgba(${item.rgb},1)`),
                        name: item.name,
                    }
                    if (!States.find(state => state === item.id_state)) {
                        res.label = item.state_name;
                        States.push(item.id_state);
                    }
                    return res;
                });
                const maxValue = (data.map(item => item.value).reduce((a, b) => Math.max(a, b), 0)) * 1.34;
                const stepValue = maxValue / 10;
                const yAxisLabelTexts = Array.from({ length: 11 }, (_, i) => (i * stepValue).toFixed(2));
                const base = Dimensions.get('window').width / 2 - 120 - 35;
                const spacing = base / ((data.length + 1) * 2);
                const initialSpacing = base / ((data.length + 1) * 2);
                const barWidth = base / ((data.length + 1) * 2);
                const labelWidth = base / ((States.length + 1) * 2);
                setTotalVotesByState({
                    data, maxValue, stepValue, yAxisLabelTexts, title: 'Resultados por estado', width: 'calc(50vw - 2.8125rem)', spacing,
                    initialSpacing,
                    barWidth, labelWidth
                });
            }).catch(error => {
                setTotalVotes({
                    data: [], maxValue: 0, stepValue: 0, yAxisLabelTexts: [], title: '', spacing: 0, initialSpacing: 0, barWidth: 0
                });
                console.error(error);
            });
        api.get({ url: '/TotalVotesByVotingCenter' })
            .then(response => {
                response.data.sort((a, b) => {
                    if (a.id_state === b.id_state) {
                        if (a.id_voting_center === b.id_voting_center) {
                            return a.id - b.id;
                        } else {
                            return a.id_voting_center - b.id_voting_center;
                        }
                    } else {
                        return a.id_state - b.id_state;
                    }
                });
                const VotingCenters = [];
                const data = response.data.map(item => {
                    const res = {
                        ...item,
                        value: item.percentage,
                        frontColor: (`rgba(${item.rgb},0.5)`),
                        gradientColor: (`rgba(${item.rgb},1)`),
                        name: item.name,
                    }
                    if (!VotingCenters.find(id_voting_center => id_voting_center === item.id_voting_center)) {
                        res.label = item.voting_center_name;
                        VotingCenters.push(item.id_voting_center);
                    }
                    return res;
                });
                const maxValueOfData = (data.map(item => item.value).reduce((a, b) => Math.max(a, b), 0));
                const maxValue = (maxValueOfData * 1.34) > 100 ? 100 : (maxValueOfData * 1.34);
                const stepValue = (maxValueOfData * 1.34) > 100 ? 10 : maxValue / 10;
                const yAxisLabelTexts = Array.from({ length: 11 }, (_, i) => (i * stepValue).toFixed(2));
                const base = Dimensions.get('window').width - 120 - 35;
                const spacing = base / ((data.length + 1) * 2);
                const initialSpacing = base / ((data.length + 1) * 2);
                const barWidth = base / ((data.length + 1) * 2);
                const labelWidth = base / ((VotingCenters.length + 1) * 2);

                setTotalVotesByVotingCenter({
                    data, maxValue, stepValue, yAxisLabelTexts, title: 'Resultados por centro de votación', width: 'calc(100vw - 4rem)', spacing,
                    initialSpacing,
                    barWidth, labelWidth
                });
            }).catch(error => {
                setTotalVotes({
                    data: [], maxValue: 0, stepValue: 0, yAxisLabelTexts: [], title: '', spacing: 0, initialSpacing: 0, barWidth: 0
                });
                console.error(error);
            });
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{ width: '100%', height: 'calc(100vh - 60px)', overflowY: 'scroll' }}>
                <Text style={styles.title}>Resultado de Votaciones</Text>
                <View>

                </View>
                <View style={styles.chartsContainer}>
                    <BarChartExample {...totalVotes} />
                    <BarChartExample {...totalVotesByState} />
                    <BarChartExample {...totalVotesByVotingCenter} />
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
