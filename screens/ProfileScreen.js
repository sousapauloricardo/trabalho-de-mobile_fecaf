import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

/** * Tela de Perfil: Exibe as informações do usuário que foram validadas no login
 * e centraliza a ação de saída (logout) da conta. */
export default function ProfileScreen({ user, onLogout }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* Cabeçalho do Perfil: Reúne o avatar visual e os dados de texto */}
      <View style={styles.header}>
        <View style={styles.avatar}>
          {/* Ícone padrão para representar a foto do usuário */}
          <Ionicons name="person" size={50} color={Colors.white} />
        </View>
        
        {/* Uso do operador de encadeamento opcional (?.) para evitar erros:
            Se o objeto 'user' estiver vazio por algum motivo, ele exibe um valor padrão. */}
        <Text style={styles.userName}>{user?.name || 'Usuário'}</Text>
        <Text style={styles.userEmail}>{user?.email || 'email@exemplo.com'}</Text>
      </View>

      {/* Área de ações do usuário */}
      <View style={styles.content}>
        {/* Botão de Logout: Ao ser pressionado, dispara a função 'onLogout' 
            que foi passada lá do App.js através do TabNavigator. */}
        <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
          <Ionicons name="log-out-outline" size={22} color={Colors.white} />
          <Text style={styles.logoutText}>SAIR DA CONTA</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: Colors.background 
  },
  header: { 
    alignItems: 'center', 
    padding: 40, 
    backgroundColor: Colors.white, 
    // Sombra leve para destacar o cabeçalho do restante do fundo
    elevation: 2 
  },
  avatar: { 
    width: 80, 
    height: 80, 
    borderRadius: 40, 
    backgroundColor: Colors.accent, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: 15 
  },
  userName: { 
    fontSize: 22, 
    fontWeight: '800', 
    color: Colors.primary 
  },
  userEmail: { 
    fontSize: 14, 
    color: Colors.muted 
  },
  content: { 
    padding: 20, 
    alignItems: 'center' 
  },
  logoutButton: { 
    backgroundColor: Colors.error, 
    flexDirection: 'row', 
    padding: 15, 
    borderRadius: 12, 
    width: '100%', 
    justifyContent: 'center', 
    alignItems: 'center', 
    gap: 10, 
    marginTop: 20 
  },
  logoutText: { 
    color: Colors.white, 
    fontWeight: 'bold', 
    fontSize: 16 
  }
});