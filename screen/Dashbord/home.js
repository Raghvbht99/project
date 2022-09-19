/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import auth from '@react-native-firebase/auth';
import { useData } from './../hooks';
// eslint-disable-next-line react/prop-types,@typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line react/prop-types
const UpcomingCard = ({ data }) => {
    const { attendEvent } = useData();
    return (
        <View style={styles.card}>
            <View style={styles.EventDetails}>
                <View style={{ justifyContent: 'center', alignItems: 'center', margin: 5 }}>
                    <Text style={{ color: '#000000', fontSize: 22, fontWeight: 'bold' }}>{data.name}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Icon name="update" size={24} color="black" />
                    <Text style={{ fontSize: 18, color: 'black', marginLeft: 10 }}>
                        Date:{data.date}
                    </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Icon name="camera-timer" size={24} color="black" />
                    <Text style={{ fontSize: 18, color: 'black', marginLeft: 10 }}>
                        Time:{data.time}
                    </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    {/* <Icon name="location-enter" size={24} color="black" /> */}
                    <Ionicons name="location" size={24} color="black" />
                    <Text style={{ fontSize: 18, color: 'black', marginLeft: 10 }}>
                        Address: {data.address}
                    </Text>
                </View>
                <View >
                    <View style={{ flexDirection: 'row', paddingBottom: 10 }}>
                        {/* <Icon name="location-enter" size={24} color="black" /> */}
                        <MaterialIcons name="description" size={24} color="black" />
                        <Text style={{ fontSize: 18, color: 'black', marginLeft: 10 }}>
                            Description:
                        </Text>
                    </View>
                    <Text style={{color:'black'}}>{data.description}</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 10, flex: 1 }}>
                    <LinearGradient
                        colors={GRADIENTS.info}
                        end={{ x: 0, y: 1 }}
                        start={{ x: 1, y: 0 }}
                        style={{ borderRadius: 30 }}
                    >
                        <TouchableOpacity
                            style={{
                                alignItems: 'center',
                                padding: 10,
                                flexDirection: 'row'
                            }}
                            onPress={() => { attendEvent(data); alert('Event Attended Successfully'); }}
                        >
                            <MaterialIcons name="account-tree" size={24} color="white" />
                            <Text style={{ color: 'white' }}>Attend</Text>
                        </TouchableOpacity>
                    </LinearGradient>

                </View>
            </View>

        </View>
    )
}
const Screen = ({ navigation }) => {
    // let currentUser = auth().currentUser;
    const { getEvent } = useData();
    const [event, setEvent] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const events = await getEvent();
                if (events.status == 'success') {
                    setEvent(events.message);
                } else {
                    alert(events.message);
                }
            } catch (error) {
                alert(error);
            }
        }
        fetchData();
    }, [getEvent, setEvent]);

    return (
        <ImageBackground
            source={images.background} resizeMode="cover"
            style={{
                flex: 1,
                paddingVertical: SIZES.padding,
            }}>
            <SafeAreaView>
                <KeyboardAwareScrollView>
                    <View
                        style={{
                            flex: 1,
                        }}>
                        <View style={{ margin: 5, justifyContent: 'center', alignItems: 'center', fontWeight: 'bold' }}>
                            <Text style={{ fontSize: 30 ,color:'white'}}>CarsClubNZ</Text>
                        </View>
                    </View>
                    <View style={styles.OrganizedEvent}>
                        <Text style={{ fontSize: 30, color: 'white' }}>UpComing Event</Text>
                        <View style={{ marginTop: 10 }}>
                            {event.map((item, index) => {
                                return (<UpcomingCard key={index} data={item} navigation={navigation} />);
                            })}
                        </View>
                    </View>
                </KeyboardAwareScrollView>
            </SafeAreaView>
        </ImageBackground >
    );
};

export default Screen;

const styles = StyleSheet.create({
    OrganizedEvent: {
        margin: 10
    },
    EventDetails: {

    },
    card: {
        backgroundColor: '#E9E8F3',
        borderRadius: 15,
        padding: 10,
        marginTop: 10,
    },
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
    },
    textAbove: { fontSize: 14, marginLeft: 12 },
});
