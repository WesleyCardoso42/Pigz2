import React from 'react'
import { Image, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import Botao from '../components/Botao'


export default props => {
    return(
        <View style = {styles.container}>
            <View style={{flex:1}}>

                <Image style={styles.imagem} source = {require('../img/LogoPigz.png')} />

                <View style={{width: 335}}>
                    <Text style={{fontWeight: 'bold', fontSize: 18, bottom: 19, marginLeft: 5}}>Entrar</Text>
                    <Text style={{fontSize: 14, bottom: 2, marginLeft: 5}}>Email ou Telefone</Text>
                </View>
                <TextInput style={styles.inputs} placeholder = "example@pigz.com.br"></TextInput>

                <View style={{width: 335}}>
                    <Text style={{fontSize: 14,bottom: 2, marginLeft: 5}}>Senha</Text>
                </View>

                <TextInput 
                    style={styles.inputs} 
                    placeholder="Password"
                    placeholderTextColor="#9a73ef"
                    returnKeyType='go'
                    secureTextEntry
                    autoCorrect={false}
                >
                        
                </TextInput>

                <View style={{width: 335}}>    
                    <TouchableOpacity style={{top: -10,marginBottom: 20}}>
                        <Text style={styles.links}>Esqueci minha senha</Text>
                    </TouchableOpacity>
                </View>


                <View style={{ alignItems:'center'}}>
                        
                    <Botao
                        nome = "Entrar"
                        acao = {"Pedidos"}
                        fundo = "#fe671f"
                        cor = "#ffffff"
                        fonte = {18}
                    />
                

                    <Text style={{marginTop: 50, marginBottom: 10, textAlign:'center', fontSize: 16, fontWeight: 'bold'}} >Não tem uma conta?</Text>

                    <Botao 
                        nome = "Quero vender no Pigz!"
                        acao = {""}
                        fundo = "#ffffff"
                        cor = "#fe671f"
                        fonte = {18}
                    />
                </View>
                    <TouchableOpacity style={{alignItems:'center', marginTop: 50}}>
                        <Text style={styles.links}>Termos de Serviço</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{alignItems:'center', marginBottom: 50}}>
                        <Text style={styles.links}>Politica de Privacidade</Text>
                    </TouchableOpacity>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-around',
        alignItems:'center',
        //alignContent: 'center',
        backgroundColor: '#fff3ee',
        opacity: 1
    },
    inputs: {
        width: 335,
        height: 40,
        marginBottom: 20,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        margin: 5,
        paddingLeft: 10,
        shadowColor: '#FE671F4D',
        elevation: 3
    },
    links: {
        fontSize: 15,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        marginTop:5,
        marginLeft: 5
    },
    imagem: {
        alignSelf:'center',
        marginTop: '20%',
        bottom: 50,
        width: 140
    },
    txt:{
        marginLeft:10,
        textAlign: 'left'
    }
})