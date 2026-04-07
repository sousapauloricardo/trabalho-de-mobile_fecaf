import React from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';

/** * Campo de entrada de texto padronizado. 
 * Ele foi construído para ser genérico, ou seja, serve para E-mail, Senha, Nome 
 * ou qualquer outro dado, centralizando o estilo visual em um único lugar. */
export default function CustomInput({ label, value, onChangeText, placeholder, secureTextEntry, ...props }) {
  return (
    <View style={styles.container}>
      {/* Renderização condicional: O rótulo (label) só aparece se for enviado via prop.
          Isso permite usar o componente apenas com o placeholder se o design exigir. */}
      {label && <Text style={styles.label}>{label}</Text>}
      
      <TextInput
        style={styles.input}
        value={value} // Valor controlado pelo estado (state) da tela pai
        onChangeText={onChangeText} // Função que atualiza o estado conforme o usuário digita
        placeholder={placeholder}
        secureTextEntry={secureTextEntry} // Esconde os caracteres (útil para senhas)
        placeholderTextColor="#999"
        
        /** * O operador "...props" é o segredo para generalizar o componente:
         * Ele permite passar qualquer propriedade nativa do TextInput 
         * diretamente na tela, sem precisar declarar uma por uma aqui dentro. */
        {...props} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    marginBottom: 15, 
    width: '100%' 
  },
  label: { 
    marginBottom: 5, 
    fontSize: 14, 
    fontWeight: 'bold', 
    color: '#1A1A1A' 
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    borderRadius: 8, 
    backgroundColor: '#fff',
    fontSize: 16,
    color: '#333',
  },
});