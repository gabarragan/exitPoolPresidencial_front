import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

const RatedItem = () => {
    return (
        <View style={styles.loaderContainer}>
            <Text style={styles.loaderText}></Text>
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

export default RatedItem;