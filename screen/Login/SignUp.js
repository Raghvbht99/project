/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    TextInput
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default Screen = ({navigation}) => {
    return (
        <SafeAreaView style={{ flex: 1 }} >
            <LinearGradient
                colors={['#4F5C6E', '#162437']}
                end={{ x: 0, y: 1 }}
                start={{ x: 1, y: 0 }}
                style={{ flex: 1, padding: 30, height: '100%' }}
            >
                <View style={{ flexDirection: 'row', justifyContent: 'center', width: '90%' }}>
                    <LinearGradient
                        colors={['#A6D0DE', '#40BEEA']}
                        end={{ x: 0, y: 1 }}
                        start={{ x: 1, y: 0 }}
                        style={{ borderRadius: 30, margin: 10, width: '40%' }}
                    >
                        <TouchableOpacity
                            style={{
                                alignItems: "center",
                                padding: 10,
                            }}
                            onPress={() => { navigation.push("Login")}}
                        >
                            <Text style={{ color: '#FFFFFF',fontSize:22 }}>Login</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                    <LinearGradient
                        colors={['#D0DFBF', '#98C664']}
                        end={{ x: 0, y: 1 }}
                        start={{ x: 1, y: 0 }}
                        style={{ borderRadius: 30, margin: 10, width: '40%' }}
                    >
                        <TouchableOpacity
                            style={{
                                alignItems: "center",
                                padding: 10,
                            }}
                            onPress={() => { navigation.push("SignUp")}}
                        >
                            <Text style={{ color: '#FFFFFF',fontSize:22 }}>Sign Up</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
               

            </LinearGradient>
        </SafeAreaView>
    );
} 