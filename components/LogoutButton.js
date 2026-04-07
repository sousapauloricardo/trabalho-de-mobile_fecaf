import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
// Reutiliza o componente de botão padrão para manter a identidade visual do app
import CustomButton from './CustomButton'; 

/** * Componente especializado em encerrar a sessão. 
 * Ele não apenas executa uma ação, mas gerencia a confirmação de segurança 
 * para evitar que o usuário saia do aplicativo por engano. */
export default function LogoutButton({ onLogout }) {
  
  // Dispara um diálogo nativo do sistema (iOS/Android).
  const handlePress = () => {
    Alert.alert(
      "Sair", // Título da caixa de alerta
      "Tem certeza que deseja encerrar a sessão?", // Mensagem explicativa
      [
        { text: "Cancelar", style: "cancel" }, // Fecha o alerta sem fazer nada
        { 
          text: "Sair", 
          style: "destructive", // No iOS, deixa o texto vermelho para indicar alerta
          /** * Aciona a função de limpeza de estado definida no App.js.
           * Isso faz com que o sistema mude a rota para a tela de Login instantaneamente. */
          onPress: () => onLogout() 
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <CustomButton 
        title="Sair da Conta" 
        onPress={handlePress} 
        color="#e74c3c"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: '100%',
    alignItems: 'center',
  },
});