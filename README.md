# 🛍️ Paulo's Store - Full E-commerce Mobile Experience

Bem-vindo ao repositório do **TrendStore**! Este é um projeto desenvolvido do zero para demonstrar minha capacidade de criar aplicações robustas, performáticas e visualmente atraentes utilizando **React Native** e **Expo**.

Trabalhei arduamente para ir além de uma interface básica: foquei na arquitetura de dados, fluxos de autenticação seguros e uma experiência de usuário (UX) inspirada nos grandes players do varejo digital.

---

## 🚀 Minha Visão e Desafios
Ao idealizar o TrendStore, o objetivo foi enfrentar desafios reais do desenvolvimento Front-end Mobile:
* **Arquitetura de Navegação:** Implementação de *Nested Navigation* (Navegação Aninhada) combinando **Stack** e **Tab Navigation** para proteger rotas sensíveis.
* **Gestão de Estado Centralizado:** Utilização de um estado global no componente raiz (`App.js`), garantindo o controle rigoroso da sessão do usuário e a distribuição eficiente de dados entre a tela de perfil e as vitrines.
* **Consumo de API Dinâmica:** Integração com a **DummyJSON API** (fornecida pela instituição para contrução do projeto), tratando múltiplas categorias e requisições assíncronas simultâneas.

---

## 🛠️ Tecnologias e Ferramentas
Escolhi uma stack moderna visando escalabilidade e manutenção:
* **React Native & Expo:** Ecossistema principal para desenvolvimento nativo multiplataforma.
* **React Navigation:** Controle de rotas, histórico e transições de tela.
* **Axios:** Gerenciamento otimizado de requisições HTTP.
* **Expo Vector Icons (Ionicons):** Curadoria de ícones para um design semântico e profissional.
* **Hooks & Context:** Uso estratégico de `useState`, `useEffect` e `useContext` para controle de ciclo de vida e estado global.

---

## 💡 Funcionalidades Implementadas

### 🔐 Fluxo de Autenticação
Desenvolvi um serviço de **MockDB** para simular a persistência de um backend real:
- **Cadastro:** Validação de campos e verificação de e-mails duplicados.
- **Login:** Autenticação por credenciais com feedback visual imediato (Toasts/Alerts).
- **Sessão:** Persistência dos dados do usuário durante a navegação ativa.

### 🛒 Vitrine e Experiência de Compra
- **Grid Dinâmico:** Uso de `FlatList` otimizada com renderização em duas colunas.
- **Filtros Inteligentes:** O app identifica o contexto da aba (Masculino/Feminino) e filtra automaticamente os itens consumidos da API.
- **Página de Detalhes:** Layout focado em conversão, exibindo cálculos de desconto, descrição detalhada e UI responsiva.

### 👤 Gestão de Perfil e Segurança
- Tela de perfil integrada aos dados reais do login.
- **Logout Seguro:** Fluxo de encerramento de sessão que limpa os estados globais e redireciona o usuário para a tela inicial de forma segura.

---

## 📂 Organização do Código (Clean Code)
A estrutura de pastas foi pensada para facilitar a manutenção e o escalonamento:
* `components/`: Componentes reutilizáveis e padronizados.
* `screens/`: Telas principais da jornada do usuário.
* `nav/`: Lógica centralizada de rotas e navegadores.
* `services/`: Camada de serviço para comunicação com API e lógica de dados.
* `constants/`: Centralização da identidade visual (paleta de cores e estilos globais).

---

## 🏁 Como Executar o Projeto

Para testar o sistema, siga os passos abaixo:

1. **Clone o repositório:** 
   ```bash
   git clone https://github.com/sousapauloricardo/trabalho-de-mobile_fecaf.git
   
2. **Entre na pasta:**
   ```bash
   cd trendstore
   
3. **Instale as dependências:**
   ```bash
   npm install
   
4. **Inicie o servidor do Expo:**
   ```bash
   npx expo start
   
5. **Escaneie o QR Code com o aplicativo Expo Go no seu Android ou iOS.**
---

## 🧠 Evolução Pessoal
Este projeto foi um marco no meu aprendizado. Ele me exigiu paciência para debugar fluxos de navegação complexos e criatividade para manter um padrão visual profissional. Sinto que hoje domino não apenas o código, mas a lógica por trás de um produto digital completo.

---

## 🤝 Conecte-se comigo
Fiquei muito feliz por partilhar este projeto! Se tiver alguma dúvida, sugestão ou se quiser conversar sobre oportunidades e tecnologias, não hesite em entrar em contato.

**Desenvolvido com dedicação por:**
**Paulo Ricardo Sousa Santos**

🚀 [Meu Portfólio no GitHub](https://github.com/sousapauloricardo)

💼 [Conecte-se no LinkedIn](https://www.linkedin.com/in/pauloricardosousasantos13/)

📧 [Envie um E-mail](mailto:sousa.pauloricardo00@gmail.com)
