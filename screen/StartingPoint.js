/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
    Text,
    View,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, images, SIZES,GRADIENTS} from '../constants';

export default Screen = (props) => {
    const navigation = props.navigation;
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ImageBackground
                style={{ width: '100%', height: '100%' }}
                source={require('../image/startingPoint.jpg')}
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', top: "40%" }}>
                    <LinearGradient
                        colors={GRADIENTS.info}
                        end={{ x: 0, y: 1 }}
                        start={{ x: 1, y: 0 }}
                        style={{ width: "80%", borderRadius: 30 }}
                    >
                        <TouchableOpacity
                            style={{
                                alignItems: "center",
                                padding: 10,
                            }}
                            onPress={() => { navigation.push('Login'); }}
                        >
                            <Text style={{color:'#FFFFFF'}}>Get Started</Text>
                        </TouchableOpacity> 
                    </LinearGradient>
                </View>
            </ImageBackground>
        </View >
    );
}