import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

function BoasVindas(props) {

  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [mensagem, setMensagem] = useState('Seja bem-vindo(a)!');
  const [mostraMensagem, setMostraMensagem] = useState(false);

  const _apresentarMensagem = () => {
      if ( !nome == '' && !sobrenome == ''){
          setMostraMensagem(true);
      } else{
          Alert.alert(
              'Preenchimento obrigatório',
              'Informe o nome e sobrenome...',
              [
                  { text : 'OK'},
              ],
          );
      }
  }

  const _limpar = () =>{
      setNome('');
      setSobrenome('');
      setMostraMensagem(false);
  }

  return (
    <View style={styles.container}>

        <Text style = {styles.titulo}>Identifique-se</Text>

        <TextInput
            style = {styles.campo}
            placeholder = 'Digite seu nome'
            onChangeText = {nome => setNome(nome)}
            value = {nome}
        />

        <TextInput
            style = {styles.campo}
            placeholder = 'Digite seu sobrenome'
            onChangeText = {sobrenome => setSobrenome(sobrenome)}
            value = {sobrenome}
        />

        <View style = {styles.botaoContainer}>
            <Button
                onPress = {_apresentarMensagem}
                title = 'OK'
            />
        </View>

        {mostraMensagem && (
            <View>
                <Text style = {styles.textos}>Olá, {nome} {sobrenome}! {props.saudacao}</Text>
                <Text style = {styles.textos}>{mensagem}</Text>
            </View>
        )}

        <View style = {styles.botaoContainer}>
            <Button
                onPress = {_limpar}
                title = 'Limpar'
            />
        </View>


    </View>
  )
}
const styles = StyleSheet.create({
  container: {
     backgroundColor: '#081a31',
     width: 300,
     borderRadius: 5,
     padding: 10,
     margin: 10
  },

  textos: {
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: "center",
  },

  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: "center",
  },

  campo: {
    backgroundColor: '#BED5F0',
    fontSize: 14,
    marginBottom: 5,
    marginTop: 5,
    borderRadius: 5,
    height: 35,
  },

  botaoContainer: {
      marginBottom: 5,
      marginTop: 5,
      borderRadius: 5,
  }
});
export default BoasVindas;
