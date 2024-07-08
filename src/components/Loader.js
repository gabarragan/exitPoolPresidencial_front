import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

const Loader = () => {
    return (
        <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color="#3E7DA0" />
            <Text style={styles.loaderText}>Cargando...</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    loaderContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    loaderText: {
        marginTop: 10,
        fontSize: 16,
        color: '#3E7DA0',
    },
});

export default Loader;