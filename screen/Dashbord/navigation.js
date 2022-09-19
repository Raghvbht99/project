/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableWithoutFeedback,View,Image } from 'react-native';
import { COLORS, images, SIZES, GRADIENTS,icons } from '../../constants';
import Notification from './notification';
import Home from './home';
import Organize from './organize';
import Profile from './profile';
import Setting from './setting';
const Tab = createBottomTabNavigator();
export default function App() {

    return (
        <Tab.Navigator
            independent={true}
            screenOptions={{
                headerShown: false,
                tabBarStyle: { 
                    // position: "absolute",
                    justifyContent: 'center',
                    alignItems: 'center', 
                    elevation: 10,
                    backgroundColor: COLORS.black,
                    height: 60,
                },
            }}>
            <Tab.Screen
                name={"Home"}
                component={Home}
                options={{
                    tabBarIcon({ focused }) {
                        return (
                            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                                <Image
                                    source={icons.home}
                                    resizeMode="contain"
                                    style={{
                                        width:40, height:40,tintColor: focused ? COLORS.red : COLORS.white,
                                    }}
                                />
                            </View>
                        );
                    },
                }}
            />
            <Tab.Screen
                name={"Notification"}
                component={Notification}
                options={{
                    tabBarIcon({ focused }) {
                        return (
                            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                                <Image
                                    source={icons.notification}
                                    resizeMode="contain"
                                    style={{
                                        width:30, height:30,tintColor: focused ? COLORS.red : COLORS.white,
                                    }}
                                />
                            </View>
                        );
                    },
                }}
            />
            <Tab.Screen
                name={"Organize"}
                component={Organize}
                options={{
                    tabBarIcon({ focused }) {
                        return (
                            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                                <Image
                                    source={icons.calendar}
                                    style={{
                                        width:30, height:30,tintColor: focused ? COLORS.red : COLORS.white,
                                    }}
                                />
                            </View>
                        );
                    },
                }}
            />
            <Tab.Screen
                name={"Profile"}
                component={Profile}
                options={{
                    tabBarIcon({ focused }) {
                        return (
                            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                                <Image
                                    source={icons.profile2}
                                    style={{
                                        width:30, height:30,tintColor: focused ? COLORS.red : COLORS.white,
                                    }}
                                />
                            </View>
                        );
                    },
                }}
            />
            <Tab.Screen
                name={"Setting"}
                component={Setting}
                options={{
                    tabBarIcon({ focused }) {
                        return (
                            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                                <Image
                                    source={icons.stats}
                                    style={{
                                        width:30, height:30,tintColor: focused ? COLORS.red : COLORS.white,
                                    }}
                                />
                            </View>
                        );
                    },
                }}
            />
        </Tab.Navigator>
    );
}
