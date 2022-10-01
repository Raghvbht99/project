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
    Modal
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { COLORS, images, SIZES, GRADIENTS } from '../../constants';
import { useData } from './../hooks';
import ModalLayout from './ModalLayout';
import DatePicker from 'react-native-date-picker';


const Screen = ({ navigation }) => {
    // let currentUser = auth().currentUser;
    const { addEvent } = useData();
    const [name, setName] = React.useState('');
    const [date, setDate] = React.useState(new Date());
    const [time, setTime] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [inputVisible, setInputVisible] = React.useState(false);
    const [inputTimeVisible, setTimeInputVisible] = React.useState(false);
    console.log(String(time).substring(15, 21))
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
                            <Text style={{ fontSize: 30, color: 'white' }}>CarsClubNZ</Text>
                        </View>
                        <View >
                            <Text style={{ fontSize: 22, marginLeft: 10, color: 'white' }}>Event Name</Text>
                            <View style={styles.textBoxSign}>
                                <TextInput
                                    placeholder="Enter your Event Name"
                                    onChangeText={value => setName(value)}
                                    placeholderTextColor="black" 
                                    autoCapitalize={'none'}
                                    style={{
                                        flex: 1,
                                        height: 40.5,
                                        fontSize: 15,
                                        marginLeft: 2,
                                        color: 'black'
                                    }}
                                />
                            </View>
                        </View>
                        <View >
                            <Text style={{ fontSize: 22, marginLeft: 10, color: 'white' }}>Enter Date</Text>
                            <View style={styles.textBoxSign}>
                                {/* <TouchableOpacity onPress={()=>alert("ok")}> */}
                                <TouchableOpacity onPress={() => {
                                    setInputVisible(true);
                                }}>
                                    <View style={{
                                        flex: 1,
                                        height: 40.5,
                                        fontSize: 15,
                                        marginLeft: 2,
                                        color: 'black',
                                        justifyContent: 'center',
                                    }}>
                                        <Text style={{ color: 'black' }} >{String(date).substring(0, 15)}</Text>
                                    </View>
                                </TouchableOpacity>
                                {/* </TouchableOpacity> */}
                            </View>
                        </View>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={inputVisible}
                            onRequestClose={() => {
                                setInputVisible(!inputVisible);
                            }}
                        >
                            <ModalLayout
                                onClose={() => {
                                    setInputVisible(!inputVisible);
                                }}
                            >
                                <View style={{ alignItems: 'center' }}>
                                    <DatePicker textColor={'black'} mode={'date'} date={date} onDateChange={setDate} />
                                </View>
                            </ModalLayout>
                        </Modal>
                        <View >
                            <Text style={{ fontSize: 22, marginLeft: 10, color: 'white' }}>Enter Time</Text>
                            <View style={styles.textBoxSign}>
                            <TouchableOpacity onPress={() => {
                                    setTimeInputVisible(true);
                                }}>
                                    <View style={{
                                        flex: 1,
                                        height: 40.5,
                                        fontSize: 15,
                                        marginLeft: 2,
                                        color: 'black',
                                         justifyContent: 'center',
                                    }}>
                                        <Text style={{ color: 'black',fontSize:20 }} >{time!==''?String(time).substring(15, 21):'00:00 '}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={inputTimeVisible}
                            onRequestClose={() => {
                                setTimeInputVisible(!inputTimeVisible);
                            }}
                        >
                            <ModalLayout
                                onClose={() => {
                                    setTimeInputVisible(!inputTimeVisible);
                                }}
                            >
                                <View style={{ alignItems: 'center' }}>
                                    {/* <DatePicker mode={'time'} date={time} onDateChange={setTime} /> */}
                                    <DatePicker textColor={'black'} mode={'time'} date={date} onDateChange={setTime} />

                                </View>
                            </ModalLayout>
                        </Modal>
                        <View >
                            <Text style={{ fontSize: 22, marginLeft: 10, color: 'white' }}>Enter Address</Text>
                            <View style={styles.textBoxSign}>
                                <TextInput
                                    placeholder="Enter Address of event ..."
                                    placeholderTextColor="black" 
                                    onChangeText={value => setAddress(value)}
                                    autoCapitalize={'none'}
                                    style={{
                                        flex: 1,
                                        height: 40.5,
                                        fontSize: 15,
                                        marginLeft: 2,
                                        color: 'black'
                                    }}
                                />
                            </View>
                        </View>
                        <View >
                            <Text style={{ fontSize: 22, marginLeft: 10, color: 'white' }}>Enter Description</Text>
                            <View style={styles.textBoxSign}>
                                <TextInput
                                    placeholder="Enter a description"
                                    placeholderTextColor="black" 
                                    onChangeText={value => setDescription(value)}
                                    autoCapitalize={'none'}
                                    style={{
                                        flex: 1,
                                        height: 40.5,
                                        fontSize: 15,
                                        marginLeft: 2,
                                        color: 'black'
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
                                            addEvent(name, String(date).substring(0, 15), String(time).substring(15, 21), address, description).then((item) => {
                                                if (item.status === 'success') {
                                                    alert("Event organize successfully!");
                                                    navigation.push('Dashbord');
                                                } else {
                                                    alert(item.message);
                                                }
                                            }).catch((err) => {
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
