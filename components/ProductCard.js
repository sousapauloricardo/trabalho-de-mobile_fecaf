import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

/** * Componente de Card para exibição individual de produtos na vitrine.
 * Ele foi projetado para ser usado dentro de uma FlatList, permitindo 
 * que o usuário visualize informações rápidas antes de entrar nos detalhes. */
export default function ProductCard({ product, onPress }) {
  return (
    /** * TouchableOpacity envolve todo o card para que qualquer clique
     * leve o usuário para a tela de detalhes do produto. */
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.9}>
      
      {/* Container da Imagem: Gerencia o posicionamento da foto e do ícone de favorito */}
      <View style={styles.imageContainer}>
        {/* Imagem do produto vinda da API (thumbnail) */}
        <Image source={{ uri: product.thumbnail }} style={styles.image} />
        
        {/* Badge de Favorito: Um botão posicionado de forma absoluta sobre a imagem */}
        <TouchableOpacity style={styles.favoriteBadge}>
          <Ionicons name="heart-outline" size={18} color={Colors.primary} />
        </TouchableOpacity>
      </View>
      
      {/* Área de Informações: Agrupa textos de título, preço e avaliação */}
      <View style={styles.info}>
        {/* O título é limitado a 1 linha para não quebrar o layout do grid */}
        <Text style={styles.title} numberOfLines={1}>{product.title}</Text>
        
        {/* Preço formatado com duas casas decimais para padrão monetário */}
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
        
        {/* Linha de Avaliação: Exibe a nota do produto com um ícone de estrela */}
        <View style={styles.ratingRow}>
          <Ionicons name="star" size={12} color="#F1C40F" />
          <Text style={styles.ratingText}>{product.rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    borderRadius: 15,
    margin: 8,
    flex: 1,
    overflow: 'hidden', 
    
    // Sombras para dar profundidade (Android e iOS)
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  imageContainer: { 
    position: 'relative' // Necessário para que o favoriteBadge seja posicionado em relação a este View
  },
  image: { 
    width: '100%', 
    height: 160, 
    backgroundColor: '#F0F0F0' 
  },
  favoriteBadge: {
    position: 'absolute', 
    top: 10, 
    right: 10,
    backgroundColor: 'rgba(255,255,255,0.8)',
    padding: 6, 
    borderRadius: 20
  },
  info: { padding: 12 },
  title: { 
    fontSize: 14, 
    fontWeight: '600', 
    color: Colors.text 
  },
  price: { 
    fontSize: 16, 
    fontWeight: '800', 
    color: Colors.accent, 
    marginTop: 4 
  },
  ratingRow: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginTop: 4 
  },
  ratingText: { 
    fontSize: 12, 
    color: Colors.muted, 
    marginLeft: 4 
  }
});