import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native'

export default function(props){
    cor = props.cor
    fonte = props.fonte
    const navigation = useNavigation()
    return(
        <TouchableOpacity
            style={{
                alignItems: 'center',
                justifyContent: 'space-around',
                width: 335,
                height: 50,
                backgroundColor: props.fundo,
                borderRadius: 10,
                shadowColor: '#FE671F4D',
                elevation: 3
            }} 
            onPress={() => navigation.navigate(props.acao)}
        >
            <Text style={{color: cor, fontSize: fonte, }}>{props.nome}</Text>
        </TouchableOpacity>
    )
}