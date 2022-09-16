/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
import { Avatar, Title, Caption, TouchableRipple } from 'react-native-paper';

// import auth from '@react-native-firebase/auth';

// eslint-disable-next-line react/prop-types,@typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line react/prop-types
const Card = () => {

    return (
        <View style={styles.card}>
            <Text>Card is here</Text>
        </View>
    )
}


const Profile = ({ navigation }) => {
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
                        <View style={{ margin: 10 }}>

                            <View style={styles.userInfoSection}>
                                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                                    <Avatar.Image
                                        source={images.guest}
                                        size={100}
                                    />
                                    <View style={{ marginLeft: 20 }}>
                                        <View style={styles.row}>
                                            <Icon name="account" size={20} color="black" />
                                            <Text style={{ color: "#000000", marginLeft: 3 }}>Nouman Hayat</Text>
                                        </View>
                                        <View style={styles.row}>
                                            <Icon name="email" color="#000000" size={20} />
                                            <Text style={{ color: "#000000", marginLeft: 3 }}>muhammadnouman@gmail.com</Text>
                                        </View>
                                        <View style={styles.row}>
                                            <Icon name="account-box-multiple" size={20} color="black" />
                                            <Text style={{ color: "#000000", marginLeft: 3 }}>17/07/1997</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.OrganizedEvent}>
                                <Text style={{ fontSize: 30, color: '#00000' }}>Organized Event</Text>
                                <View style={{marginTop:10}}>
                                    <Card />
                                </View>
                            </View>
                        </View>
                    </View>
                </KeyboardAwareScrollView>
            </SafeAreaView>
        </ImageBackground >
    );
};

export default Profile;

const styles = StyleSheet.create({
    card:{
        backgroundColor: '#E9E8F3',
        borderRadius:15,
        padding:10
    },
    OrganizedEvent: {
        margin: 10
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
    // =============================================================
    userInfoSection: {
        marginTop: 20
    },

    row: {
        flexDirection: 'row',
        marginBottom: 10
    },
});
