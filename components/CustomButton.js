import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

/** * Componente de botão genérico desenhado para ser reutilizado em todo o app (Login, Cadastro, Logout).
 * Ele utiliza "props" para permitir que cada tela defina seu próprio texto, ação e cores
 * sem a necessidade de criar um novo arquivo de botão para cada situação. */
export default function CustomButton({ title, onPress, color = '#1A1A1A', textColor = '#fff' }) {
  return (
    <TouchableOpacity 
      // O estilo é uma combinação de um layout fixo com uma cor de fundo dinâmica
      style={[styles.button, { backgroundColor: color }]} 
      // Aciona a função enviada pela tela pai (ex: fazer login ou navegar)
      onPress={onPress}
      // Reduz a opacidade levemente ao clicar para dar feedback visual ao usuário
      activeOpacity={0.8}
    >
      {/* O texto também recebe cores dinâmicas para garantir contraste em diferentes fundos */}
      <Text style={[styles.text, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%', 
    marginVertical: 10,
  },
  text: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    textTransform: 'uppercase' 
  },
});