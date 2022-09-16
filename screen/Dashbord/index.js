/* eslint-disable prettier/prettier */
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableWithoutFeedback } from 'react-native';
import { COLORS, images, SIZES, GRADIENTS } from '../../constants';

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
                    backgroundColor: colors.contrasting,
                    height: 60,
                },
            }}>
            <Tab.Screen
                name={translations.dashboardNavigation.Home}
                component={Home}
                options={{
                    tabBarIcon({ focused }) {
                        return (
                            <Block TabBarIcon>
                                <Image
                                    source={icons.register}
                                    resizeMode="contain"
                                    width={25}
                                    height={25}
                                    style={{
                                        tintColor: focused ? colors.primary : colors.matching,
                                    }}
                                />
                            </Block>
                        );
                    },
                    headerStyle: {
                        backgroundColor: '#EDF3F7',
                        borderRadius: 10,
                    },
                    headerTintColor: '#000203',
                    title: translations.dashboardScreen.Home,
                }}
            />
            <Tab.Screen
                name={translations.dashboardNavigation.Notification}
                component={Notification}
                options={{
                    tabBarIcon({ focused }) {
                        return (
                            <Block TabBarIcon>
                                <Image
                                    source={icons.documentation}
                                    resizeMode="contain"
                                    width={25}
                                    height={25}
                                    style={{
                                        tintColor: focused ? colors.primary : colors.matching,
                                    }}
                                />
                            </Block>
                        );
                    },
                    headerStyle: {
                        backgroundColor: '#EDF3F7',
                    },
                    headerTintColor: '#000203',
                    title: translations.dashboardScreen.Notification,
                }}
            />
            <Tab.Screen
                name={translations.dashboardNavigation.Profile}
                component={Profile}
                options={{
                    tabBarIcon({ focused }) {
                        return (
                            <Block TabBarIcon>
                                <Image
                                    source={icons.profile}
                                    resizeMode="contain"
                                    width={25}
                                    height={25}
                                    style={{
                                        tintColor: focused ? colors.primary : colors.matching,
                                    }}
                                />
                            </Block>
                        );
                    },
                    headerStyle: {
                        backgroundColor: '#EDF3F7',
                    },
                    headerTintColor: '#000203',
                    title: translations.dashboardScreen.Profile,
                }}
            />
            <Tab.Screen
                name={translations.dashboardNavigation.Setting}
                component={Setting}
                options={{
                    tabBarIcon({ focused }) {
                        return (
                            <Block TabBarIcon>
                                <Image
                                    source={icons.settings}
                                    resizeMode="contain"
                                    width={25}
                                    height={25}
                                    style={{
                                        tintColor: focused ? colors.primary : colors.matching,
                                    }}
                                />
                            </Block>
                        );
                    },
                    headerStyle: {
                        backgroundColor: '#EDF3F7',
                    },
                    headerTintColor: '#000203',
                    title: translations.dashboardScreen.Setting,
                }}
            />
        </Tab.Navigator>
    );
}
