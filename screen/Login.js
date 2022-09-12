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

export default Screen = () => {
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
                            onPress={() => { alert('Press') }}
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
                            onPress={() => { alert('Press') }}
                        >
                            <Text style={{ color: '#FFFFFF',fontSize:22 }}>Sign Up</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
                <View style={{ justifyContent: 'center', width: '95%', height: '80%'}}>
                    <Text style={{ color: '#FFFFFF', fontSize: 23,paddingBottom:10 }}>User Name</Text>
                    <TextInput
                        style={{
                            height: 40,
                            borderWidth: 1,
                            borderColor: '#000000',
                            color: '#000000',
                            backgroundColor: '#FFFFFF',
                            

                        }}
                        onChangeText={() => { alert("User Name") }}

                        placeholder="User Name"
                    />
                    <Text style={{ color: '#FFFFFF', fontSize: 23,paddingBottom:10 }}>Password</Text>
                    <TextInput
                        style={{
                            height: 40,
                            borderWidth: 1,
                            borderColor: '#000000',
                            color: '#000000',
                            backgroundColor: '#FFFFFF',
                            
                        }}
                        onChangeText={() => { alert("User Name") }}
                        placeholder="Password"
                    />
                    <View style={{ alignItems: 'center', marginTop:30 }}>
                        <LinearGradient
                            colors={['#D0DFBF', '#98C664']}
                            end={{ x: 0, y: 1 }}
                            start={{ x: 1, y: 0 }}
                            style={{ width: "80%", borderRadius: 30 }}
                        >
                            <TouchableOpacity
                                style={{
                                    alignItems: "center",
                                    padding: 10,
                                }}
                                onPress={() => { alert("Press") }}
                            >
                                <Text style={{ color: '#FFFFFF',fontSize:22 }}>Get Started</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>
                </View>

            </LinearGradient>
        </SafeAreaView>
    );
} 