import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import TabNavigator from './nav/TabNavigator';
import DetailsScreen from './screens/DetailsScreen';

// Cria a Stack principal de navegação
const Stack = createNativeStackNavigator();

/**
 * Aqui controlo o estado de autenticação,
 * que funciona como um "arquivo mestre" para o conteúdo do app.
 */
export default function App() {
  // Estado que define se o usuário vê a área de Login ou a área de Loja
  const [isLogged, setIsLogged] = useState(false);
  
  // Estado global que armazena os dados do usuário vindos do banco (nome e e-mail)
  const [user, setUser] = useState(null); 

  /**
   * Função disparada pela LoginScreen após a validação no MockDB.
   * Ao receber os dados do usuário, ela inicia o app (setIsLogged).
   */
  const handleLogin = (userData) => {
    setUser(userData); 
    setIsLogged(true);
  };

  /**
   * Função disparada pela ProfileScreen (através do LogoutButton).
   * Ela limpa a memória do app e, por reatividade, o React volta para a tela de Login.
   */
  const handleLogout = () => {
    setUser(null);
    setIsLogged(false);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* RENDERIZAÇÃO CONDICIONAL: 
            Se NÃO estiver logado, o Stack só permite acesso ao Login e Cadastro.
            Se ESTIVER logado, essas telas deixam de existir e o app libera a Loja. */}
        {!isLogged ? (
          <>
            {/* Usei a sintaxe de função (props) para injetar a função de login na tela */}
            <Stack.Screen name="Login">
              {(props) => <LoginScreen {...props} onLogin={handleLogin} />}
            </Stack.Screen>
            <Stack.Screen name="Register" component={RegisterScreen} />
          </>
        ) : (
          <>
            {/* O TabNavigator recebe o 'user' e o 'onLogout' para distribuir às abas internas */}
            <Stack.Screen name="MainTabs" options={{ headerShown: false }}>
              {(props) => <TabNavigator {...props} user={user} onLogout={handleLogout} />}
            </Stack.Screen>
            
            {/* A tela de detalhes fica fora das abas para ocupar a tela toda ao ser aberta */}
            <Stack.Screen name="Details" component={DetailsScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}