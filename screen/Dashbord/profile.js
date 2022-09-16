/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
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
            <View style={styles.EventDetails}>
                <View style={{ justifyContent: 'center', alignItems: 'center', margin: 5 }}>
                    <Text style={{ color: '#000000', fontSize: 22,fontWeight: 'bold' }}>Event Name</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Icon name="update" size={24} color="black" />
                    <Text style={{ fontSize: 18, color: 'black', marginLeft: 10 }}>
                        Date:17/7/2017
                    </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Icon name="camera-timer" size={24} color="black" />
                    <Text style={{ fontSize: 18, color: 'black', marginLeft: 10 }}>
                        Time:12:30 AM
                    </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    {/* <Icon name="location-enter" size={24} color="black" /> */}
                    <Ionicons name="location" size={24} color="black" />
                    <Text style={{ fontSize: 18, color: 'black', marginLeft: 10 }}>
                        Address: Stewart Duff Drive, Rongotai, Wellington 6022, New Zealand
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
                    <Text>Wellington Airport is an international airport located in the suburb of Rongotai in Wellington, the capital city of New Zealand. It lies 3 NM or 5.5 km south-east from the city centre. It is a hub for Air New Zealand and Sounds Air.</Text>
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
                                alignItems: "center",
                                padding: 10,
                                flexDirection:'row'
                            }}
                            onPress={() => { alert("Ok") }}
                        >
                            <MaterialIcons name="account-tree" size={24} color="black" />
                            <Text style={{ color: 'black' }}>Details</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                    <LinearGradient
                        colors={GRADIENTS.secondary}
                        end={{ x: 0, y: 1 }}
                        start={{ x: 1, y: 0 }}
                        style={{ borderRadius: 30, marginLeft: '40%' }}
                    >
                        <TouchableOpacity
                            style={{
                                alignItems: "center",
                                padding: 10,
                                flexDirection: "row",
                            }}
                            onPress={() => { alert("Ok") }}
                        >
                            <MaterialIcons name="delete" size={24} color="black" />
                            <Text style={{ color: 'black' }}>Delete</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
            </View>

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
                        <View style={{ marginTop: 10 }}>
                            <View style={{margin:5,justifyContent:'center',alignItems:'center',fontWeight: 'bold'}}>
                                <Text style={{fontSize:30}}>CarsClubNZ</Text>
                            </View>
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
                                <View style={{ marginTop: 10 }}>
                                    <Card />
                                    <Card />
                                    <Card />
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
    EventDetails: {

    },
    card: {
        backgroundColor: '#E9E8F3',
        borderRadius: 15,
        padding: 10,
        marginTop: 10,
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
    },

    row: {
        flexDirection: 'row',
        marginBottom: 10
    },
});
