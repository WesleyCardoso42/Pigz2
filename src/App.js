import React from 'react'
import { SafeAreaView, View, StyleSheet } from 'react-native'
import Loguin from './views/Loguin'
import Pedidos from './views/Pedidos'
import Detalhes from './views/Detalhes'
import Botao from './components/Botao'

export default () => (
    <SafeAreaView style={styles.container}>
        <Loguin />
        <Pedidos />
        <Detalhes />
    </SafeAreaView>
)

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'space-around',
        alignItems:'center',
        alignContent: 'center',
        backgroundColor: '#fff3ee',
        opacity: 1
    },
})