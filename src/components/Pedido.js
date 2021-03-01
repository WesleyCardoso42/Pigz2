import React from "react";
import { Text, TouchableOpacity, View, StyleSheet, Image, Modal } from "react-native";
import { useNavigation } from '@react-navigation/native'

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

export default function(props){
    
    numPedido = props.numPedido
    nomeCliente = props.nomeCliente
    horaEntrega = props.horaEntrega
    const navigation = useNavigation()

    i = parseInt(props.statusPedido)
    
    return(
        
        <View style={{
            alignItems: 'center',
            justifyContent: 'space-around',
            width: '95%',
            height: 59,
            margin: 5,
            backgroundColor: estado[i].bgColor,
            borderRadius: 10,
        }}>  
            <View style = {styles.detalhes}>
                <Image source = {
                    estado[i].retangulo
                }/>

                <View style = {styles.pedido}>

                    <View style={styles.linhas}>
                        <View style = {styles.imagens}>
                            <Image source = {estado[i].imgMoto}/>
                        </View>
                        <Text style= {styles.txt}>{numPedido}   {nomeCliente}</Text>

                    </View>

                    <View style={styles.linhas}>
                        <View style = {styles.imagens}>
                            <Image source = {estado[i].imgClock}/>
                        </View>
                        <Text style= {styles.txt}>Enntregar até {horaEntrega}</Text>

                    </View>

                </View>

                <View style={styles.status}>
                    <TouchableOpacity 
                        style = {styles.statusBotao} 
                        onPress={() => navigation.navigate(estado[i].detalhe)}
                    >    
                        <Image style = {{marginRight: 5}} source = {estado[i].circulo}/>
                        <Text style={{fontSize: 12}}>{estado[i].statusTitle}</Text>
                    </TouchableOpacity> 
                </View>   
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    detalhes: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 5
    },
    pedido: {
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        marginLeft: -20
    },
    status:{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 5
    },
    statusBotao: {
        height: 29,
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        shadowColor: '#FE671F4D',
        elevation: 3

    },
    imagens: {
        margin:5,
        width: 18,
        height: 12,
        alignItems: 'center',
    },
    linhas:{
        flexDirection: 'row'
    },
    txt: {
        fontSize: 14
    }
})