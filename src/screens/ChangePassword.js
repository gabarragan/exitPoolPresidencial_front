import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import API from '../utils/api';
import Alert from '../components/Alert';

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [visible, setVisible] = useState(false);

    const api = new API({});
    
    const handleLogin = async () => {
        try {
             // Validación de usuario
            console.log(username + ' ' + oldPassword + ' ' + newPassword)
            const response = await api.put({
                url: '/updatePassword', data: {
                    "email": username,
                    "oldPassword": oldPassword,
                    "newPassword": newPassword
                }
            });
            console.log(response.data)

            navigation.replace('Login');

        } catch (error) {
            console.log('-----> error')
            setVisible(true);
            <Alert
                title={'Error'}
                visible={visible}
                message = 'Debe de seleccionar Centro de Votacion o Estado ' 
            />
        }
       
    };

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>Cambiar Contraseña</Text>
                <Text style={styles.subtitle}>Ingresa tus credenciales para cambiar la contraseña.</Text>
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
                    <Text style={styles.label}>Contraseña Anterior</Text>
                    <TextInput
                        id="oldPassword"
                        name="oldPassword"
                        value={oldPassword}
                        onChangeText={setOldPassword}
                        secureTextEntry
                        autoCompleteType="password"
                        required
                        style={styles.input}
                        placeholder="Ingresa tu contraseña anterior"
                    />
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Contraseña Nueva</Text>
                    <TextInput
                        id="newPassword"
                        name="newPassword"
                        value={newPassword}
                        onChangeText={setNewPassword}
                        secureTextEntry
                        autoCompleteType="password"
                        required
                        style={styles.input}
                        placeholder="Ingresa tu contraseña nueva"
                    />
                </View>
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Cambiar Contraseña</Text>
                </TouchableOpacity>
                {this.visible ?
                    <View>
                        <Text style={styles.labelError}>Correo electrónico o contraseña Invalida</Text>
                    </View>: null
                }
                
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
