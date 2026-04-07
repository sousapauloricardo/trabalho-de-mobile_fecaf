import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/** * Componente de utilitário visual usado para exibir pares de Informação/Valor.
 * É ideal para telas de Perfil, Detalhes de Pedido ou Checkouts, 
 * onde os dados precisam estar alinhados e fáceis de ler. */
export default function InfoRow({ label, value, valueColor = '#333' }) {
  return (
    <View style={styles.row}>
      {/* O rótulo da informação (ex: "E-mail" ou "Preço") */}
      <Text style={styles.label}>{label}:</Text>
      
      {/* O dado real (ex: "teste@email.com" ou "$99.00").
          Permite customizar a cor do valor via prop para destacar preços ou status. */}
      <Text style={[styles.value, { color: valueColor }]}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    paddingVertical: 12, 
    borderBottomWidth: 1, 
    borderBottomColor: '#f0f0f0' 
  },
  label: { 
    fontSize: 16, 
    fontWeight: '600', 
    color: '#7f8c8d' 
  },
  value: { 
    fontSize: 16, 
    fontWeight: '500',
    textAlign: 'right', 
    flex: 1,
    marginLeft: 10
  },
});