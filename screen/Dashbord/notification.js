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
// import auth from '@react-native-firebase/auth';
import { useData } from './../hooks';

// eslint-disable-next-line react/prop-types,@typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line react/prop-types
const Card = ({ data }) => {
    return (
        <View
            style={{
                marginHorizontal: 20,
                padding: 10,
                backgroundColor: COLORS.lightGray,
                borderRadius: 10,
                marginTop: 10,
            }}
        >
            <Text style={{ fontSize: 20, fontWeight: 'bold',color:'black' }}>
                {data.title}
            </Text>
            <Text style={{ fontSize: 14, marginTop: 10,color:'black' }}>{data.subtitle}</Text>
        </View>
    )
}
const Screen = ({ navigation }) => {
    // let currentUser = auth().currentUser;
    const { getNotification } = useData();
    const [notification, setNotification] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const events = await getNotification();
                console.log(events);
                if (events.status == "success") {
                    setNotification(events.message);
                } else {
                    alert(events.message);
                }
            } catch (error) {
                alert(error);
            }
        }
        fetchData();
    }, [getNotification, setNotification]);
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
                            <Text style={{ fontSize: 30, color: 'white' }}>CarsClubNZ</Text>
                        </View>
                        {notification.map((item, index) => {
                            return (<Card key={index} data={item} navigation={navigation} />);
                        })}
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
    },
    textAbove: { fontSize: 14, marginLeft: 12 },
});
