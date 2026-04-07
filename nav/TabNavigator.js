import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import ProductList from '../components/ProductList';
import ProfileScreen from '../screens/ProfileScreen';
import Colors from '../constants/Colors';

// Inicializa o Navegador por Abas (Bottom Tabs)
const Tab = createBottomTabNavigator();

/** * Este componente define a estrutura de navegação principal após o login.
 * Ele recebe 'user' e 'onLogout' do App.js para repassar às telas que precisam desses dados. */
export default function TabNavigator({ user, onLogout }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        /** * Lógica de ícones dinâmicos: define qual ícone exibir e se ele deve estar 
         * preenchido (focused) ou apenas o contorno (outline) baseado na aba ativa. */
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Masculino') {
            iconName = focused ? 'man' : 'man-outline';
          } else if (route.name === 'Feminino') {
            iconName = focused ? 'woman' : 'woman-outline';
          } else if (route.name === 'Perfil') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        // Cores de ativação definidas no arquivo de constantes global
        tabBarActiveTintColor: Colors.accent,
        tabBarInactiveTintColor: Colors.muted,
        // Ajuste estético na barra inferior para melhor espaçamento dos ícones
        tabBarStyle: { height: 60, paddingBottom: 10 },
        headerTitleStyle: { fontWeight: '800', color: Colors.primary }
      })}
    >
      {/* Aba Masculino: Renderiza o ProductList passando as categorias de produtos masculinos.
        Usei a sintaxe de função (props) => ... para injetar as propriedades de navegação nativas. */}
      <Tab.Screen name="Masculino">
        {(props) => (
          <ProductList 
            {...props} 
            categories={['mens-shirts', 'mens-shoes', 'mens-watches']} 
          />
        )}
      </Tab.Screen>

      {/* Aba Feminino: Reutiliza o mesmo componente ProductList, mas filtrando categorias femininas. */}
      <Tab.Screen name="Feminino">
        {(props) => (
          <ProductList 
            {...props} 
            categories={['womens-dresses', 'womens-shoes', 'womens-bags']} 
          />
        )}
      </Tab.Screen>

      {/* Aba Perfil: Aqui é o ponto crucial onde entrego o objeto 'user' (logado) 
        e a função 'onLogout' (para encerrar sessão) para a ProfileScreen. */}
      <Tab.Screen name="Perfil">
        {(props) => <ProfileScreen {...props} user={user} onLogout={onLogout} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}