import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import LoginScreen from '../screens/LoginScreen';
import ResultsScreen from '../screens/ResultsScreen';
import SurveyScreen from '../screens/SurveyScreen';
import ChangePassword from '../screens/ChangePassword';
import { StyleSheet, Text, View, Image } from 'react-native';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator 
            screenOptions={ { 
                headerShown: true,
                headerStyle: { backgroundColor: '#FFFFFF' },
                headerTintColor: '#000000',
                headerTitle:  '',
                headerLeft : () => ( 
                    <View style={styles.containerHeader}>
                        <Image source={require('../../assets/adaptive-icon.png')} style={styles.imageHeader} />
                        <Text style={styles.titleHeader}>Brainy Consultores</Text>
                    </View>
                ),
                footerStyle: { backgroundColor: '#000000' },
                footerShown: true,
            }}
            initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Survey" component={SurveyScreen} />
                <Stack.Screen name="Results" component={ResultsScreen} />
                <Stack.Screen name="changePassword" component={ChangePassword} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    containerHeader: {
        display: 'flex',
        flexDirection: 'row'
    },
    imageHeader: {
        height: '60px',
        width: '60px',
        marginLeft: '10px'
    },
    titleHeader: {
        fontSize: 16,
        color: '#3E7DA0',
        marginLeft: '15px',
        marginTop: '30px',
        fontWeight: '500'
    }
});
export default AppNavigator;
