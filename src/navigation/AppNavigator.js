import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import LoginScreen from '../screens/LoginScreen';
import ResultsScreen from '../screens/ResultsScreen';
import SurveyScreen from '../screens/SurveyScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator 
            screenOptions={ { 
                headerShown: true,
                headerStyle: { backgroundColor: '#FF5F6B' },
                headerTintColor: '#fff',
                headerTitleStyle: { fontWeight: 'bold' },
                headerTitle: "Survey App",
                footerStyle: { backgroundColor: '#FF5F6B' },
                footerShown: true,
            }}
            initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Survey" component={SurveyScreen} />
                <Stack.Screen name="Results" component={ResultsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
