import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import API from '../utils/api';

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [visible, setVisible] = useState(false);

    const api = new API({});
    
    const handleChangePassword = async () => {
        navigation.replace('changePassword');
    }
    const handleLogin = async () => {
        try {
             // Validación de usuario
            console.log(username + ' ' + password)
            const response = await api.post({
                url: '/login', data: {
                    "userName": username,
                    "userPassword": password
                }
            });
            console.log(response.data)
            console.log('-----> GOOD')
            navigation.replace('Survey');

        } catch (error) {
            console.log('-----> error')
            setVisible(true);
            navigation.replace('Login');
        }
       
    };

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Image source={require('../../assets/login.jpg')} style={styles.images} />
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
                
                <View>
                    <Text style={styles.labelChangePassword} onPress={handleChangePassword}>Cambiar contraseña</Text>
                    { visible ? (
                        <Text style={styles.labelError}>Correo electrónico o contraseña Invalida</Text>
                    ):null }

                    
                </View>
                
                
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 16,
        paddingVertical: 0,
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
        paddingTop:'15px'
    },
    subtitle: {
        color: '#949599'
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
    labelError: {
        fontSize: 14,
        fontWeight: '500',
        color: '#FF0000',
        textAlign: 'center',
        marginTop: '16px'
    },
    labelChangePassword: {
        fontSize: 14,
        fontWeight: '500',
        color: '#6597B2',
        textAlign: 'center',
        marginTop: '16px'
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
        backgroundColor: '#3E7DA0',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: '500',
        fontSize: '16px'
    }
});

export default LoginScreen;
