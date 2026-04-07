import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import Colors from '../constants/Colors';
import { mockDb } from '../services/mockDB';

/** * Tela de Login: O ponto inicial onde valido a identidade do usuário.
 * Ela utiliza estados locais para monitorar o que é digitado antes de enviar ao banco. */
export default function LoginScreen({ onLogin, navigation }) {
  // Estados para armazenar temporariamente as credenciais durante a digitação
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  /** * Função que orquestra o processo de autenticação.
   * Ela chama o serviço de banco de dados e decide se o usuário entra ou vê um erro. */
  const handleLogin = () => {
    // Consulta o serviço de simulação de banco de dados
    const result = mockDb.login(email, password);
    
    if (result.success) {
      /** * Se os dados estiverem corretos, dispara a função onLogin enviada pelo App.js.
       * Isso muda o estado global do app e "abre as portas" para a área logada. */
      onLogin(result.user);
    } else {
      // Feedback nativo simples caso a senha ou e-mail estejam incorretos
      alert(result.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Seção de Identidade Visual (Branding) */}
      <View style={styles.header}>
        <Ionicons name="cart-outline" size={80} color={Colors.accent} />
        <Text style={styles.title}>Paulo's Store</Text>
        <Text style={styles.subtitle}>Sua moda, seu estilo.</Text>
      </View>

      {/* Formulário de entrada de dados */}
      <View style={styles.form}>
        <CustomInput 
          placeholder="E-mail" 
          value={email} 
          onChangeText={setEmail} // Atualiza o estado 'email' a cada tecla pressionada
          keyboardType="email-address" // Otimiza o teclado para preenchimento de e-mail
          autoCapitalize="none" // Evita que o celular coloque a primeira letra em maiúsculo
        />
        <CustomInput 
          placeholder="Senha" 
          value={password} 
          onChangeText={setPassword} 
          secureTextEntry // Propriedade que mascara os caracteres da senha
        />
        
        {/* Botão que dispara a lógica de login */}
        <CustomButton title="ENTRAR" onPress={handleLogin} color={Colors.primary} />
        
        {/* Navegação para a tela de Cadastro caso o usuário não tenha conta */}
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.link}>
            Não tem uma conta? <Text style={styles.linkBold}>Cadastre-se</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: Colors.white, 
    justifyContent: 'center' 
  },
  header: { 
    alignItems: 'center', 
    marginBottom: 40 
  },
  title: { 
    fontSize: 32, 
    fontWeight: '800', 
    color: Colors.primary, 
    marginTop: 10 
  },
  subtitle: { 
    fontSize: 16, 
    color: Colors.muted 
  },
  form: { 
    paddingHorizontal: 30 
  },
  link: { 
    textAlign: 'center', 
    marginTop: 20, 
    color: Colors.muted 
  },
  linkBold: { 
    color: Colors.accent, 
    fontWeight: 'bold' 
  }
});