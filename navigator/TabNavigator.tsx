import React, { useLayoutEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CustomersScreen from '../screens/CustomersScreen';
import OrdersScreen from '../screens/OrdersScreen';
import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/base';
import MarketsScreen from '../screens/MarketsScreen';
import ProfileScreen from '../screens/ProfileScreen';


export type TabStackParamList = {
    Home: undefined;
    Customers: undefined;
    Orders: undefined;
    Markets: undefined;
    Profile: undefined;
};

const Tab = createBottomTabNavigator<TabStackParamList>();

const TabNavigator = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarActiveTintColor: "#59C1CC",
            tabBarInactiveTintColor: "gray",
            tabBarIcon: ({ focused, color, size }) => {
                if (route.name === 'Customers') {
                    return (
                        <Icon
                            name='users'
                            type='entypo'
                            color={focused ? "#59C1CC" : "gray"}
                        />
                    )
                } else if (route.name === 'Orders') {
                    return (
                        <Icon
                            name='box'
                            type='entypo'
                            color={focused ? "#EB6A7C" : "gray"}
                        />
                    );
                } else if (route.name === 'Markets') {
                    return (
                        <Icon
                            name='shopping-cart'
                            type='entypo'
                            color={focused ? "#EB6A7C" : "gray"}    
                        />
                    )
                } else if (route.name === 'Profile') {
                    return (
                        <Icon
                            name='user'
                            type='entypo'
                            color={focused ? "#EB6A7C" : "gray"} 
                        />
                    )
                } else if (route.name === 'Home') {
                    return (
                        <Icon 
                            name='home'
                            type='entypo'
                            color={focused ? "#EB6A7C" : "gray"}
                        />
                    )
                }
            }
        })}>
            <Tab.Screen name='Customers' component={CustomersScreen} />
            <Tab.Screen name='Orders' component={OrdersScreen} />
            <Tab.Screen name='Markets' component={MarketsScreen} />
            <Tab.Screen name='Profile' component={ProfileScreen} />
        </Tab.Navigator>
    );
};

export default TabNavigator