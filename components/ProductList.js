import React, { useState, useEffect } from 'react';
import { FlatList, ActivityIndicator, View, StyleSheet, Text } from 'react-native';
import axios from 'axios';
import ProductCard from './ProductCard';

/** * Componente responsável por buscar e listar produtos de múltiplas categorias.
 * Ele centraliza a lógica de API para as abas "Masculino" e "Feminino". */
export default function ProductList({ categories, navigation }) {
  // Estado que armazena a lista de produtos retornada pela API
  const [products, setProducts] = useState([]);
  // Estado que controla o carregamento para dar feedback ao usuário
  const [loading, setLoading] = useState(true);

  /** * O useEffect monitora a prop 'categories'.
   * Toda vez que o usuário troca de aba no menu inferior, o efeito dispara uma nova busca. */
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true); 
        
        /** * Como recebo um array de categorias (ex: camisas, relógios),
         * criei um array de requests para disparar todas as buscas ao mesmo tempo. */
        const requests = categories.map(cat => 
          axios.get(`https://dummyjson.com/products/category/${cat}`)
        );
        
        /** * Executo todas as requisições em paralelo com Promise.all para maior performance.
         * O flatMap é usado para "achatar" os resultados de várias categorias em uma lista única. */
        const responses = await Promise.all(requests);
        const allProducts = responses.flatMap(res => res.data.products);
        
        setProducts(allProducts);
      } catch (error) {
        console.error("Erro ao carregar produtos", error);
      } finally {
        setLoading(false); // Desativa o carregamento independente de sucesso ou erro
      }
    };

    fetchProducts();

  }, [categories]); // Gatilho do efeito: muda se as categorias mudarem

  // Se estiver carregando, exibe o ícone de progresso centralizado
  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#007bff" />
      </View>
    );
  }

  return (
    /** * FlatList é o componente mais otimizado para listas no React Native.
     * Ele só renderiza os itens que estão visíveis na tela, economizando memória. */
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()} // Chave única obrigatória para performance
      renderItem={({ item }) => (
        <ProductCard 
          product={item} 
          // Ao clicar, navegamos para 'Details' passando o ID do produto como parâmetro
          onPress={() => navigation.navigate('Details', { id: item.id })} 
        />
      )}
      numColumns={2} // Configura a vitrine em duas colunas (estilo catálogo)
      contentContainerStyle={styles.list}
    />
  );
}

const styles = StyleSheet.create({
  center: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  list: { 
    padding: 8 
  }
});