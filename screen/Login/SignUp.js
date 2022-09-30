/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
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
import LinearGradient from 'react-native-linear-gradient';
import { useData } from './../hooks';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// import auth from '@react-native-firebase/auth';
import { COLORS, images, SIZES, GRADIENTS } from '../../constants';

// eslint-disable-next-line react/prop-types,@typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line react/prop-types
const SignUP = ({ navigation }) => {
    // let currentUser = auth().currentUser;
    const [data, setData] = React.useState({
        password: '',
        checkTextInputChange: false,
        secureTextEntry: true,
    });
    const { onSignUp } = useData();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [rePassword, setRePassword] = React.useState('');
    const [displayName, setDisplayName] = React.useState('');
    const [familyName, setFamilyName] = React.useState('');
    const [driver, setDriver] = React.useState('');
    // replaces password text with * on active
    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry,
        });
    };

    return (
        <ImageBackground
            source={images.background }
            resizeMode="cover"
            style={{
                flex: 1,
                paddingVertical: SIZES.padding,
                justifyContent: 'center',
            }}>
            <SafeAreaView>
                <KeyboardAwareScrollView>
                    <View
                        style={{
                            flex: 1,
                        }}>

                        <View
                            style={{
                                flex: 3,
                                paddingHorizontal: 20,
                                paddingVertical: 30,
                                marginBottom: -10,
                            }}>
                            <Text style={styles.textAbove}>User Name</Text>
                            <View style={styles.textBoxSign}>
                                <Image
                                    source={images.person}
                                    resizeMode="contain"
                                    style={{
                                        width: 26,
                                        height: 40,
                                        right: 2,
                                        alignSelf: 'flex-start',
                                    }}
                                />
                                <TextInput
                                    placeholder="Please enter your name"
                                    onChangeText={value => setDisplayName(value)}
                                    autoCapitalize={'none'}
                                    style={{
                                        flex: 1,
                                        height: 40.5,
                                        fontSize: 15,
                                        marginLeft: 2,
                                        color:'black'
                                    }}
                                />
                            </View>
                            <Text style={{ fontSize: 14, marginLeft: 12, marginTop: 30,color:'white' }}>
                                Email or Phone Number
                            </Text>
                            <View style={styles.textBoxSign}>
                                <Image
                                    source={images.person}
                                    resizeMode="contain"
                                    style={{
                                        width: 26,
                                        height: 40,
                                        right: 2,
                                        alignSelf: 'flex-start',
                                    }}
                                />
                                <TextInput
                                    placeholder="Enter your email or phone number..."
                                    onChangeText={value => setEmail(value)}
                                    autoCapitalize={'none'}
                                    style={{
                                        flex: 1,
                                        height: 40.5,
                                        fontSize: 15,
                                        marginLeft: 2,
                                        colors:'black'
                                    }}
                                />
                            </View>

                            <Text style={{ fontSize: 14, marginLeft: 12, marginTop: 30,color:'white' }}>
                                Password
                            </Text>
                            <View style={styles.textBoxSign}>
                                <Image
                                    source={images.lock}
                                    resizeMode="contain"
                                    style={{
                                        width: 25,
                                        height: 20,
                                        top: 10,
                                        alignSelf: 'flex-start',
                                        color:'black',
                                    }}
                                />
                                <TextInput
                                    placeholder="Enter your password..."
                                    secureTextEntry={data.secureTextEntry ? true : false}
                                    onChangeText={value => setPassword(value)}
                                    style={{
                                        flex: 1,
                                        height: 40.5,
                                        fontSize: 15,
                                        marginLeft: 5,
                                    }}
                                />

                                <TouchableOpacity
                                    onPress={updateSecureTextEntry}
                                    style={{ alignItems: 'flex-end' }}>
                                    {data.secureTextEntry ? (
                                        <Image
                                            source={images.eyeclosed}
                                            resizeMode="contain"
                                            style={{ width: 25, height: 40 }}
                                        />
                                    ) : (
                                        <Image
                                            source={images.eye}
                                            resizeMode="contain"
                                            style={{ width: 25, height: 40 }}
                                        />
                                    )}
                                </TouchableOpacity>
                            </View>
                            <Text style={{ fontSize: 14, marginLeft: 12, marginTop: 30,color:'white' }}>
                                Re-Enter Password
                            </Text>
                            <View style={styles.textBoxSign}>
                                <Image
                                    source={images.lock}
                                    resizeMode="contain"
                                    style={{
                                        width: 25,
                                        height: 20,
                                        top: 10,
                                        alignSelf: 'flex-start',
                                    }}
                                />
                                <TextInput
                                    placeholder="Re-Enter Password ..."
                                    secureTextEntry={data.secureTextEntry ? true : false}
                                    onChangeText={value => setRePassword(value)}
                                    style={{
                                        flex: 1,
                                        height: 40.5,
                                        fontSize: 15,
                                        marginLeft: 5,
                                        color:'black'
                                    }}
                                />

                                <TouchableOpacity
                                    onPress={updateSecureTextEntry}
                                    style={{ alignItems: 'flex-end' }}>
                                    {data.secureTextEntry ? (
                                        <Image
                                            source={images.eyeclosed}
                                            resizeMode="contain"
                                            style={{ width: 25, height: 40 }}
                                        />
                                    ) : (
                                        <Image
                                            source={images.eye}
                                            resizeMode="contain"
                                            style={{ width: 25, height: 40 }}
                                        />
                                    )}
                                </TouchableOpacity>
                            </View>

                            {/* =========================================================================================================== */}
                            <Text style={{ fontSize: 14, marginLeft: 12, marginTop: 30,color:'white' }}>
                                Family Name
                            </Text>
                            <View style={styles.textBoxSign}>
                                <Image
                                    source={images.person}
                                    resizeMode="contain"
                                    style={{
                                        width: 26,
                                        height: 40,
                                        right: 2,
                                        alignSelf: 'flex-start',
                                    }}
                                />
                                <TextInput
                                    placeholder="Family Name..."
                                    onChangeText={value => setFamilyName(value)}
                                    autoCapitalize={'none'}
                                    style={{
                                        flex: 1,
                                        height: 40.5,
                                        fontSize: 15,
                                        marginLeft: 2,
                                        color:'black'
                                    }}
                                />
                            </View>



                            {/* =================================================================================================================== */}
                            {/* =========================================================================================================== */}
                            <Text style={{ fontSize: 14, marginLeft: 12, marginTop: 30,color:'white' }}>
                                Driver's License
                            </Text>
                            <View style={styles.textBoxSign}>
                                <Image
                                    source={images.person}
                                    resizeMode="contain"
                                    style={{
                                        width: 26,
                                        height: 40,
                                        right: 2,
                                        alignSelf: 'flex-start',
                                    }}
                                />
                                <TextInput
                                    placeholder="Driver's License..."
                                    onChangeText={value => setDriver(value)}
                                    autoCapitalize={'none'}
                                    style={{
                                        flex: 1,
                                        height: 40.5,
                                        fontSize: 15,
                                        marginLeft: 2,
                                        color:'black'
                                    }}
                                />
                            </View>



                            {/* =================================================================================================================== */}

                            <TouchableOpacity>
                                <Text
                                    style={{
                                        marginBottom: -15,
                                        top: 8,
                                        alignSelf: 'flex-end',
                                        right: 25,
                                        color:'white'
                                    }}>
                                    Reset Password
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => {
                                //  navigation.push('Dashbord')
                                if (email !== '' && password !== '' && rePassword !== '' && password == rePassword && displayName !== '' && driver !== '') {
                                    onSignUp(email, password, displayName, familyName, driver).then((item) => {
                                        console.log(item)
                                        if (item.status === 'success') {
                                            navigation.push('Dashbord')
                                             console.log(item);
                                             
                                        } else {
                                            alert(item.status);
                                        }
                                    }).catch((err) => {
                                        console.log(err);
                                    });
                                } else {
                                    alert('Please enter a valid details');
                                }

                            }}>
                                <LinearGradient
                                    colors={GRADIENTS.info}
                                    end={{ x: 0, y: 1 }}
                                    start={{ x: 1, y: 0 }}
                                    style={{
                                        flexDirection: 'row',
                                        alignContent: 'center',
                                        justifyContent: 'center',
                                        height: 55,
                                        marginHorizontal: 30,
                                        marginTop: 40,
                                        marginBottom: -20,
                                        paddingHorizontal: SIZES.radius,
                                        borderRadius: 50,
                                        backgroundColor: COLORS.primary,
                                        ...styles.shadow,
                                    }}
                                >
                                    <View>
                                        <Text
                                            style={{
                                                justifyContent: 'center',
                                                alignSelf: 'center',
                                                top: 10,
                                                color: COLORS.white,
                                                fontSize: 30,
                                            }}>
                                            Sign Up
                                        </Text>
                                    </View>
                                </LinearGradient>
                            </TouchableOpacity>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    marginTop: SIZES.radius * 2.5,
                                    justifyContent: 'center',
                                }}>
                                <Text style={{ color: COLORS.gray }}> have an account? </Text>

                                <TouchableOpacity
                                    style={{
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backgroundColor: COLORS.transparent,
                                    }}
                                    onPress={() => {
                                        navigation.push('Login');
                                    }}>
                                    <Text
                                        style={{
                                            color: COLORS.primary,
                                            fontSize: 19,
                                        }}>
                                        Sign In
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </KeyboardAwareScrollView>
            </SafeAreaView>
        </ImageBackground>
    );
};

export default SignUP;

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
    textAbove: { fontSize: 14, marginLeft: 12,color:'white' },
});
