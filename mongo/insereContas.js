use('ecomm')

const newUsers = db.accounts.insertMany([
    {
      username: "carolininha",
      email: "carolininha@example.com",
      password: "secreta123",
      dataCriacao: new Date(),
      cpf: "12345678901",
      telefone: "1234567890",
      endereco: {
        bairro: "Bairro Amarelo",
        rua: "Rua Amarela",
        numero: "123",
        complemento: "Fundos",
        cep: "12345678",
        cidade: "Amarela",
        uf: "AM"
      }
    },
    {
      username: "vinicinhos",
      email: "vinicinhos@example.com",
      password: "senha123",
      dataCriacao: new Date(),
      cpf: "98765432109",
      telefone: "9876543210",
      endereco: {
        bairro: "Bairro2 Azul",
        rua: "Rua Azul",
        numero: "456",
        complemento: "Frente",
        cep: "87654321",
        cidade: "Azul",
        uf: "AZ"
      }
    },
    {
      username: "matue",
      email: "matue@example.com",
      password: "password3",
      dataCriacao: new Date(),
      cpf: "54321678901",
      telefone: "5432167890",
      endereco: {
        bairro: "Bairro Vermelho",
        rua: "Rua Vermelha",
        numero: "789",
        complemento: "BL 2 APT 101",
        cep: "98765432",
        cidade: "Cidade3",
        uf: "UF3"
      }
    }
  ]);
  
  console.log(newUsers);