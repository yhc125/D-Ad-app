import { useQuery } from '@apollo/client';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { useNavigation, CompositeNavigationProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Image, Input } from '@rneui/base';
import { TabItem } from '@rneui/base/dist/Tab/Tab.Item';
import React, { useLayoutEffect, useState } from 'react';
import { ActivityIndicator, FlatList, ScrollView } from 'react-native';
import { useTailwind } from 'tailwind-rn/dist';
import CustomerCard from '../components/CustomerCard';
import { GET_CUSTOMERS } from '../graphql/queries';
import { RootStackParamList } from '../navigator/RootNavigator';
import { TabStackParamList } from '../navigator/TabNavigator';


export type CustomersScreenNavigationProp = CompositeNavigationProp<
BottomTabNavigationProp<TabStackParamList, 'Customers'>,
NativeStackNavigationProp<RootStackParamList>
>

const CustomersScreen = () => {
    const tw = useTailwind();
    const navigation = useNavigation<CustomersScreenNavigationProp>();
    const [input, setInput] = useState<string>("");
    const { loading, error, data } = useQuery(GET_CUSTOMERS);

  
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [])
    return (
        <ScrollView 
            style={{ backgroundColor: "#59C1CC" }}
            stickyHeaderIndices={[1]}
            scrollEnabled={false}
        >

            <Input
                placeholder="Search by Customer"
                value={input}
                onChangeText={setInput}
                containerStyle={tw("bg-white pt-12 pb-0 px-10")}
            />

            <FlatList
                data={data?.getCustomers
                ?.filter((customer: CustomerList) => 
                customer.value.name.includes(input))}
                renderItem={({ item }) => (
                    <CustomerCard key={item.name} email={item.value.email} name={item.value.name} userId={item.name}                    />
                )}
                keyExtractor={item => item.name}
            />
 
        </ScrollView>

    );
};


export default CustomersScreen;