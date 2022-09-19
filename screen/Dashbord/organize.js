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


const SignIn = ({ navigation }) => {
    // let currentUser = auth().currentUser;
    const { addEvent } = useData();
    const [name, setName] = React.useState('');
    const [date, setDate] = React.useState('');
    const [time, setTime] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [description, setDescription] = React.useState('');
    return (
        <ImageBackground
            source={{ uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/crystal_background.jpg' }}
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
                            <Text style={{ fontSize: 30 }}>CarsClubNZ</Text>
                        </View>
                        <View >
                            <Text style={{ fontSize: 22, marginLeft: 10 }}>Event Name</Text>
                            <View style={styles.textBoxSign}>
                                <TextInput
                                    placeholder="Enter your Event Name"
                                    onChangeText={value => setName(value)}
                                    autoCapitalize={'none'}
                                    style={{
                                        flex: 1,
                                        height: 40.5,
                                        fontSize: 15,
                                        marginLeft: 2,
                                    }}
                                />
                            </View>
                        </View>
                        <View >
                            <Text style={{ fontSize: 22, marginLeft: 10 }}>Enter Date</Text>
                            <View style={styles.textBoxSign}>
                                <TextInput
                                    placeholder="17/7/2015"
                                    onChangeText={value => setDate(value)}
                                    autoCapitalize={'none'}
                                    style={{
                                        flex: 1,
                                        height: 40.5,
                                        fontSize: 15,
                                        marginLeft: 2,
                                    }}
                                />
                            </View>
                        </View>
                        <View >
                            <Text style={{ fontSize: 22, marginLeft: 10 }}>Enter Time</Text>
                            <View style={styles.textBoxSign}>
                                <TextInput
                                    placeholder="2:30 PM"
                                    onChangeText={value => setTime(value)}
                                    autoCapitalize={'none'}
                                    style={{
                                        flex: 1,
                                        height: 40.5,
                                        fontSize: 15,
                                        marginLeft: 2,
                                    }}
                                />
                            </View>
                        </View>
                        <View >
                            <Text style={{ fontSize: 22, marginLeft: 10 }}>Enter Address</Text>
                            <View style={styles.textBoxSign}>
                                <TextInput
                                    placeholder="Enter Address of event ..."
                                    onChangeText={value => setAddress(value)}
                                    autoCapitalize={'none'}
                                    style={{
                                        flex: 1,
                                        height: 40.5,
                                        fontSize: 15,
                                        marginLeft: 2,
                                    }}
                                />
                            </View>
                        </View>
                        <View >
                            <Text style={{ fontSize: 22, marginLeft: 10 }}>Enter Description</Text>
                            <View style={styles.textBoxSign}>
                                <TextInput
                                    placeholder="Enter a description"
                                    onChangeText={value => setDescription(value)}
                                    autoCapitalize={'none'}
                                    style={{
                                        flex: 1,
                                        height: 40.5,
                                        fontSize: 15,
                                        marginLeft: 2,
                                    }}
                                />
                            </View>
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
                                        if (name !== '' && date !== '' && time !== '' && address !== '' && description !== '') {
                                            addEvent(name, date, time, address, description).then((item)=>{
                                                if (item.status === 'success'){
                                                    alert("Event organize successfully!");
                                                    navigation.push('Dashbord');
                                                } else {
                                                    alert(item.message);
                                                }
                                            }).catch((err)=>{
                                                alert(item.message);
                                            });
                                        } else {
                                            alert('Please enter a valid details');
                                        }
                                    }}
                                >
                                    <Text style={{ color: '#ffffff', fontSize: 20 }}>Organize</Text>
                                </TouchableOpacity>
                            </LinearGradient>
                        </View>
                    </View>
                </KeyboardAwareScrollView>
            </SafeAreaView>
        </ImageBackground >
    );
};

export default SignIn;

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
