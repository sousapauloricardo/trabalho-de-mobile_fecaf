/**
 * SIMULAÇÃO DE BANCO DE DADOS
 * * Este arquivo funciona como a um banco de dados para (no momento) "armazenar" os usuários do aplicativo.

 * Os dados aqui são voláteis: se o app for reiniciado (F5 no navegador),
 * a lista de usuários volta ao estado original com apenas o Administrador.
 */

let users = [
  // Usuário padrão para testes rápidos sem necessidade de cadastro
  { email: 'admin@teste.com', password: '123456', name: 'Administrador' }
];

export const mockDb = {
  
  /** * Lógica de Cadastro (Simula um comando INSERT INTO Users)
   * Responsável por verificar duplicidade e salvar novos perfis. */
  register: (name, email, password) => {
    // Verifica se o e-mail já existe na "tabela" de usuários
    const userExists = users.find(u => u.email === email);
    
    // Regra de Negócio: Impede cadastros duplicados com o mesmo e-mail
    if (userExists) return { success: false, message: 'E-mail já cadastrado!' };
    
    // Adiciona o novo objeto de usuário ao array em memória
    users.push({ name, email, password });
    return { success: true, message: 'Usuário cadastrado com sucesso!' };
  },

  /** * Lógica de Autenticação (Simula um SELECT * FROM Users WHERE email = ? AND password = ?)
   * Valida se as credenciais digitadas batem com o que tem "salvo". */
  login: (email, password) => {
    // Procura no array um usuário onde o e-mail E a senha coincidam exatamente
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
      // Retorna o objeto do usuário (sem a senha, por segurança) para ser usado no Perfil
      return { success: true, user: { name: user.name, email: user.email } };
    }
    
    return { success: false, message: 'E-mail ou senha incorretos.' };
  }
};