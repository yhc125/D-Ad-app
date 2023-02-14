import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TabNavigator from './TabNavigator';
import ModalScreen from '../screens/ModalScreen';
import OrderScreen from '../screens/OrderScreen';


export type RootStackParamList = {
    Home: undefined;
    Main: undefined;
    MyModal: { userId: string; name: string }
    Order: { order: Order }
}
const Rootstack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Rootstack.Navigator>
        <Rootstack.Group>
            <Rootstack.Screen name='Main' component={TabNavigator} />
        </Rootstack.Group>

        <Rootstack.Group
          screenOptions={{
            presentation: "modal",
          }}>
          <Rootstack.Screen 
          name="MyModal" 
          component={ModalScreen} />
        </Rootstack.Group>

        <Rootstack.Group>
          <Rootstack.Screen name='Order' component={OrderScreen} /> 
        </Rootstack.Group>
    </Rootstack.Navigator>
  )
}

export default RootNavigator