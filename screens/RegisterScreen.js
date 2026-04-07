import React, { useState } from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { mockDb } from '../services/mockDB';

/** * Tela de Cadastro: Responsável por coletar os dados de novos usuários
 * e registrá-los no banco de dados simulado (mockDb). */
export default function RegisterScreen({ navigation }) {
  // Estados para capturar as informações do novo perfil
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Função que valida e processa a criação da conta.
  const handleRegister = () => {
    // Validação básica: Garante que o usuário não envie campos vazios para o banco
    if (!name || !email || !password) {
      return Alert.alert('Erro', 'Preencha todos os campos.');
    }

    // Chama o método de registro do serviço mockDb
    const result = mockDb.register(name, email, password);
    
    if (result.success) {
      // Em caso de sucesso, informa o usuário e o redireciona para a tela de Login
      Alert.alert('Sucesso', result.message);
      navigation.navigate('Login'); 
    } else {
      // Caso o e-mail já exista ou ocorra outro erro, exibe a mensagem retornada pelo serviço
      Alert.alert('Erro', result.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Conta</Text>
      
      {/* Inputs customizados que reutilizam a lógica de labels e estilos padronizados */}
      <CustomInput 
        label="Nome Completo" 
        value={name} 
        onChangeText={setName} 
        placeholder="Seu nome" 
      />
      
      <CustomInput 
        label="E-mail" 
        value={email} 
        onChangeText={setEmail} 
        placeholder="exemplo@email.com" 
        keyboardType="email-address" 
        autoCapitalize="none"
      />
      
      <CustomInput 
        label="Senha" 
        value={password} 
        onChangeText={setPassword} 
        placeholder="Mínimo 6 caracteres" 
        secureTextEntry 
      />

      {/* Botão de ação em verde (#2ecc71) para diferenciar visualmente da ação de Login */}
      <CustomButton title="Cadastrar" onPress={handleRegister} color="#2ecc71" />
      
      {/* Link de retorno: Utiliza navigation.goBack() para voltar para a tela anterior (Login) de forma natural. */}
      <Text style={styles.link} onPress={() => navigation.goBack()}>
        Já tem uma conta? Faça Login
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    padding: 20, 
    backgroundColor: '#f5f5f5' 
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 30, 
    textAlign: 'center' 
  },
  link: { 
    color: '#007bff', 
    textAlign: 'center', 
    marginTop: 15, 
    fontWeight: '500' 
  }
});