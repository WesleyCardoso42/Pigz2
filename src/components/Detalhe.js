import React from 'react'
import { Image, View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const listPedidos = require('../infoPedidos.json')

const estado = [
    {
        statusPedido: 1,
        statusTitle : "Pendente",
        retangulo : require('../img/RetanguloVermelho.png'),
        circulo : require('../img/pendente.png'),
        imgMoto : require('../img/003-motorcycle.png'),
        imgClock : require('../img/stopwatch.png'),
        detalhe: "Detalhe",
        bgColor : "#FDECEB"
    },
    {
        statusPedido: 2,
        statusTitle : "Confirmado",
        retangulo : require('../img/RetanguloAmarelo.png'),
        circulo : require('../img/confirmado.png'),
        imgMoto : require('../img/Iconawesome-walking.png'),
        imgClock : require('../img/stopwatch.png'),
        detalhe: "Detalhe",
        bgColor : "#FFF6DA"
    },
    {
        statusPedido: 3,
        statusTitle : "Preparando",
        retangulo : require('../img/RetanguloLaranja.png'),
        circulo : require('../img/preparando.png'),
        imgMoto : require('../img/003-motorcycle.png'),
        imgClock : require('../img/stopwatch.png'),
        detalhe: "Detalhe",
        bgColor : "#FFE6DE"
    },
    {
        statusPedido: 4,
        statusTitle : "Saiu p/ entrega",
        retangulo : require('../img/RetanguloAzul.png'),
        circulo : require('../img/saiu-para-entrega.png'),
        imgMoto : require('../img/003-motorcycle.png'),
        imgClock : require('../img/stopwatch.png'),
        detalhe: "Detalhe",
        bgColor : "#E2F0FD"
    },
    {
        statusPedido: 5,
        statusTitle : "Entregue",
        retangulo : require('../img/RetanguloVerde.png'),
        circulo : require('../img/entregue.png'),
        imgMoto : require('../img/003-motorcycle.png'),
        imgClock : require('../img/stopwatch.png'),
        detalhe: "Detalhe",
        bgColor : "#E8F6E9"
    }
]

export default props => {
    const navigation = useNavigation()

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
            
            <View style={{ 
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
                        }}>Pedido {listPedidos[0].numPedido}</Text>

                    <TouchableOpacity style={{ 
                        height: 29,
                        backgroundColor: '#f5f5f5',
                        borderRadius: 10,
                        alignItems: 'center',
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        padding: 10,
                        shadowColor: '#FE671F4D',
                        elevation: 3
                    }}>
                        <Image source = {estado[0].circulo}/>
                        <Text style={{color: '#000000'}}> {estado[0].statusTitle}</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView style={{
                    width: '95%',
                    height: '75%', 
                    backgroundColor: '#ffffff',
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    shadowColor: '#FE671F4D',
                    elevation: 3

                }}>
                    <View style={styles.infoBox}>
                        <View style = {{
                            flexDirection: 'row', 
                            //backgroundColor: '#5a5a5a',
                            padding: 15,
                            justifyContent: 'space-between'
                        }}>
                            <View>
                                <Text style={{fontWeight:'bold'}}>{listPedidos[0].nomeCliente} {listPedidos[0].SobrenomeCliente}</Text>       
                                <Text>Telefone: {listPedidos[0].Telefone}</Text>       
                                <Text>{listPedidos[0].Logradouro}, {listPedidos[0].NumCasa}</Text>    
                            </View>  

                            <View>
                                <Text style = {{textAlign: 'right',fontWeight:'bold'}}>Valor Total</Text>       
                                <Text style = {styles.infoTxt}>R$ {listPedidos[0].ValorTotal}</Text>       
                                <Text style = {styles.infoTxt}>{listPedidos[0].FormaPagamento}</Text>    
                            </View>
                        </View>
                        <View style={{backgroundColor: '#7a7a7a',height: 1, marginLeft: 15, marginRight:15}}></View>
                        <View style={{
                            //backgroundColor: '#5a5a5a',
                            padding: 15,
                            justifyContent: 'space-between'
                        }}>
                            
                            <Text style={{fontWeight:'bold'}}>Produto</Text>       
                            <Text>{listPedidos[0].Produto}</Text>      
                            <Text></Text> 
                            <Text style={{fontWeight:'bold'}}>Descrição</Text>       
                            <Text style={{fontWeight:'bold'}}>{listPedidos[0].Descricao}</Text>
                            <Text>Acompanhamentos:</Text>
                            <Text>`{'>'}`{listPedidos[0].Acompanhamentos.Ac1}</Text>
                            <Text>>{listPedidos[0].Acompanhamentos.Ac2}</Text>
                            <Text>>{listPedidos[0].Acompanhamentos.Ac3}</Text>
                            <Text>>{listPedidos[0].Acompanhamentos.Ac4}</Text>
                            <Text>>{listPedidos[0].Acompanhamentos.Ac5}</Text>
                            <Text style={{fontWeight:'bold'}}>Quantidade: {listPedidos[0].Quantidade}</Text>
                            <Text style={{fontWeight:'bold'}}>Valor: {listPedidos[0].Valor}</Text>
                            <Text>{props.statusPedido}</Text>
                        </View>
                        <View style={{backgroundColor: '#7a7a7a',height: 1, marginLeft: 15, marginRight:15}}></View>
                        <View style={{padding: 15}}>
                            <Text style={{fontWeight:'bold'}}>Taxa de Entrega:</Text>
                            <Text>{listPedidos[0].ValorEntrega}</Text>
                            <Text style={{fontWeight:'bold'}}>Previsão de Entrega:</Text>
                            <Text>{listPedidos[0].dataEntrega} - {listPedidos[0].horaEntrega}</Text>
                        </View>
                        
                        <View style={{
                            marginTop: 40,
                            flexDirection: 'row-reverse',
                            justifyContent:'space-around'
                        }}>
                            <TouchableOpacity style={{
                                width: 153,
                                height: 50,
                                backgroundColor: '#0bb767',
                                borderRadius:10,
                                shadowColor: '#FE671F4D',
                                elevation: 3
                            }}
                                onPress={() => navigation.navigate("Pedidos")}
                            >
                               <Image source={require('../img/Grupo1202.png')}/>
                            </TouchableOpacity>
                                
                            <TouchableOpacity style={{
                                width: 153,
                                height: 50,
                                backgroundColor: '#e8453e',
                                borderRadius:10,
                                shadowColor: '#FE671F4D',
                                elevation: 3
                            }}
                                onPress={() => navigation.navigate("Pedidos")}
                            >
                                <Image source={require('../img/Grupo1198.png')}/>
                            </TouchableOpacity>
                        </View>

                    </View>
                    
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
        paddingLeft: 5,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        shadowColor: '#FE671F4D',
        elevation: 3
    },
    infoBox: {
        width: '100%',
    },
    infoTxt: {
        textAlign: 'right'
    }

})