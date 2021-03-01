import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Loguin from '../views/Loguin'
import Pedidos from '../views/Pedidos'
import Detalhe from '../components/Detalhe'

const Stack = createStackNavigator()

export default props => (
    <Stack.Navigator initialRouteName = "Loguin" screenOptions = {{headerShown: false}}>
        <Stack.Screen name = "Loguin" component = {Loguin}/>
        <Stack.Screen name = "Pedidos" component = {Pedidos}/>
        <Stack.Screen name = "Detalhe" component = {Detalhe}/>
    </Stack.Navigator>
)