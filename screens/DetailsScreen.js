import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import Colors from '../constants/Colors';

/** * Tela de Detalhes do Produto.
 * Ela é alimentada pelo ID enviado através da navegação. */
export default function DetailsScreen({ route }) {
  // Recupera o ID do produto que foi clicado na lista anterior
  const { id } = route.params;
  const [product, setProduct] = useState(null);

  /** * Busca as informações completas de um único produto assim que a tela monta.
   * O array de dependência [id] garante que, se por algum motivo o ID mudar, a tela se atualize. */
  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`).then(res => setProduct(res.data));
  }, [id]);

  // Enquanto a API não responde, exibe um indicador de carregamento centralizado
  if (!product) return <ActivityIndicator style={{ flex: 1 }} />;

  return (
    /** * ScrollView permite que o usuário role a tela caso a descrição seja longa.
     * 'bounces={false}' remove o efeito de mola no topo, mantendo a imagem fixa. */
    <ScrollView style={styles.container} bounces={false}>
      {/* Imagem de destaque com altura fixa para impacto visual */}
      <Image source={{ uri: product.thumbnail }} style={styles.image} />
      
      {/* Container de conteúdo com margem negativa para sobrepor levemente a imagem */}
      <View style={styles.content}>
        <View style={styles.headerRow}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>${product.price}</Text>
        </View>

        {/* Badge de desconto para incentivo visual de compra */}
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{product.discountPercentage}% OFF</Text>
        </View>

        <Text style={styles.descriptionTitle}>Descrição</Text>
        <Text style={styles.description}>{product.description}</Text>

        <TouchableOpacity style={styles.buyButton}>
          <Ionicons name="bag-handle-outline" size={24} color={Colors.white} />
          <Text style={styles.buyButtonText}>ADICIONAR AO CARRINHO</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.white },
  image: { width: '100%', height: 400, backgroundColor: Colors.background },
  content: { 
    padding: 25, 
    borderTopLeftRadius: 30, 
    borderTopRightRadius: 30, 
    marginTop: -30, 
    backgroundColor: Colors.white 
  },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: '800', color: Colors.primary, flex: 1 },
  price: { fontSize: 24, fontWeight: '800', color: Colors.accent },
  badge: { 
    backgroundColor: Colors.error, 
    paddingHorizontal: 10, 
    paddingVertical: 4, 
    borderRadius: 5, 
    alignSelf: 'flex-start', 
    marginVertical: 15 
  },
  badgeText: { color: Colors.white, fontWeight: 'bold', fontSize: 12 },
  descriptionTitle: { fontSize: 18, fontWeight: 'bold', marginTop: 10 },
  description: { fontSize: 15, color: '#666', lineHeight: 22, marginTop: 8 },
  buyButton: { 
    backgroundColor: Colors.primary,
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 18, 
    borderRadius: 15, 
    marginTop: 40,
    gap: 10
  },
  buyButtonText: { color: Colors.white, fontWeight: 'bold', fontSize: 16 }
});