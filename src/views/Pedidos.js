import React from 'react'
import { Image, View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import Pedido from '../components/Pedido'

const listPedidos = require('../infoPedidos.json')

const quadroPedido = (listPedidos.map( 
    p => <Pedido 
        numPedido = {p.numPedido} 
        nomeCliente = {p.nomeCliente}
        statusPedido = {p.statusPedido}
        horaEntrega = {p.horaEntrega}
    />
    
))

export default () => {

    return(
        <View style={{flex: 1, width: '100%', backgroundColor: '#E9EAEB'}}>
            <View style={{
                height: 50,
                backgroundColor: '#fe671f',
                flexDirection: 'row',
                shadowColor: '#FE671F4D',
                elevation: 3
            }}>
                <TouchableOpacity style={styles.menu}>
                    <Image source = {require('../img/menu.png')} />
                </TouchableOpacity>
                <View style = {styles.imagem}>
                    <Image source = {require('../img/Pigz.png')}/>
                </View>
            </View>

            <View style={{ alignItems: 'center' }}>
                <TextInput style = {styles.inputs} placeholder = "Buscar pedido"></TextInput>
            </View>

            {/* <View>
                {quadroDetalhes}
            </View> */}
            {/* Tela de Pedidos */}
           
            <View  style={{ 
                alignItems: 'center',
                shadowColor: '#FE671F4D',
                elevation: 3 
            }}>
                <View style={{
                    width: '95%',
                    height: 43,
                    marginTop: 10,
                    backgroundColor: '#394F63',
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    shadowColor: '#FE671F4D',
                    elevation: 3
                }}>
                    <Text style={{
                        color: '#ffffff',
                        fontSize: 16
                        }}>Gestão de Pedidos</Text>

                    <TouchableOpacity style={{
                        flexDirection: 'row',
                        backgroundColor:'#758492',
                        width: 73.28,
                        height: 25,
                        padding: 7,
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        borderRadius: 10,
                        shadowColor: '#FE671F4D',
                        elevation: 3
                    }}>
                        <Image source = {require('../img/filter.png')}/>
                        <Text style={{color: '#ffffff'}}>Filtro</Text>
                        
                    </TouchableOpacity>
                </View>
                <ScrollView style={{
                    width: '95%',
                    height: '75%', 
                    //alignItems: 'center',
                    backgroundColor: '#ffffff',
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    shadowColor: '#FE671F4D',
                    elevation: 3

                }}>
                    {quadroPedido}                 
                </ScrollView>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    menu: {
        alignSelf: 'center',
        marginLeft: 10
    },
    links: {
        fontSize: 15,
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    },
    imagem: {
        position: 'absolute',
        width: '100%',
        height: 50,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    inputs: {
        width: '95%',
        height: 46,
        marginTop: 10,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        shadowColor: '#FE671F4D',
        elevation: 3
    }
})