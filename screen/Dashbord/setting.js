/* eslint-disable no-alert */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {
    Alert,
    Image,
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { COLORS, images, SIZES, GRADIENTS } from '../../constants';
import { useData } from './../hooks';
import auth from '@react-native-firebase/auth';


const Screen = ({ navigation }) => {
    // let currentUser = auth().currentUser;
    const { addEvent } = useData();
    const [name, setName] = React.useState('');
    const [date, setDate] = React.useState('');
    const [time, setTime] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [description, setDescription] = React.useState('');
    return (
        <ImageBackground
            source={images.background}
            resizeMode="cover"
            style={{
                flex: 1,
                paddingVertical: SIZES.padding,
                // justifyContent: 'center',
            }}>
            <SafeAreaView>
                <KeyboardAwareScrollView>
                    <View
                        style={{
                            flex: 1,
                        }}>
                        <View style={{ margin: 5, justifyContent: 'center', alignItems: 'center', fontWeight: 'bold' }}>
                            <Text style={{ fontSize: 30 , color:'white'}}>CarsClubNZ</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
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
                                    onPress={() => {
                                        auth()
                                            .signOut()
                                            .then(
                                                function (e) {
                                                    navigation.push('Login');
                                                },
                                                function (error) {
                                                    Alert.alert('Sign Out Error');
                                                }
                                            );
                                    }}
                                >
                                    <Text style={{ color: '#ffffff', fontSize: 20 }}>Log Out</Text>
                                </TouchableOpacity>
                            </LinearGradient>
                        </View>
                    </View>
                </KeyboardAwareScrollView>
            </SafeAreaView>
        </ImageBackground >
    );
};

export default Screen;

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#000', // for iphone drop shadow (specifies the android equivalent, elevation: 1)
        shadowOffset: {
            width: 0,
            height: 1.5,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    },
    textBoxSign: {
        flexDirection: 'row',
        height: 45,
        marginHorizontal: 5,
        marginTop: 5,
        paddingHorizontal: SIZES.radius,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.lightGray,
        elevation: 2,
        justifyContent: 'center', alignItems: 'center',
    },
    textAbove: { fontSize: 14, marginLeft: 12 },
});
