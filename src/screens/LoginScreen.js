import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Validación de usuario
        navigation.replace('Survey');
    };

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>Login</Text>
                <Text style={styles.subtitle}>Ingresa tus credenciales para acceder a tu cuenta.</Text>
            </View>
            <View style={styles.form}>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Correo electrónico</Text>
                    <TextInput
                        id="email"
                        name="email"
                        keyboardType="email-address"
                        autoCompleteType="email"
                        required
                        style={styles.input}
                        placeholder="Ingresa tu correo electrónico"
                        value={username}
                        onChangeText={setUsername}
                    />
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Contraseña</Text>
                    <TextInput
                        id="password"
                        name="password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        autoCompleteType="password"
                        required
                        style={styles.input}
                        placeholder="Ingresa tu contraseña"
                    />
                </View>
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Iniciar sesión</Text>
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
    textContainer: {
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
    input: {
        marginTop: 8,
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#A9AAAE',
        color: '#949599',
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

export default LoginScreen;
