import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Component = ({ onPress, title, message, visible, setVisible, type }) => {
    return <View>
        <Text style={[styles.toast, styles.toastText]}>{message}</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 16,
    },
    toast: {
        backgroundColor: '#3E7DA0',
        padding: 16,
        borderRadius: 8,
        marginBottom: 16,
    },
    toastText: {
        color: '#ffffff',
        fontSize: 16,
        textAlign: 'center',
    },
});

export default Component;