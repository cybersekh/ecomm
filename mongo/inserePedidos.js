use('ecomm');

const newOrders = db.orders.insertMany([
    {
      dataPedido: new Date(),
      account: {
        accountId: ObjectId("60bfddccf9e6d313bcb85f1a"),
        nomeCliente: "Jonas Brothers"
      },
      enderecoEntrega: {
        bairro: "Bairro1",
        rua: "Rua1",
        numero: "123",
        complemento: "Complemento1",
        cep: "12345678",
        cidade: "Rio de Janeiro",
        uf: "RJ"
      },
      itens: [
        {
          productId: ObjectId("60bfe1a2f9e6d313bcb85f1b"),
          quantidade: 2,
          desconto: 0,
          precoUnitario: 10.99
        },
        {
          productId: ObjectId("60bfe1a2f9e6d313bcb85f1c"),
          quantidade: 1,
          desconto: 2.5,
          precoUnitario: 19.99
        }
      ]
    },
    {
      dataPedido: new Date(),
      account: {
        accountId: ObjectId("60bfddccf9e6d313bcb85f1a"),
        nomeCliente: "Sandman"
      },
      enderecoEntrega: {
        bairro: "Bairro2",
        rua: "Rua2",
        numero: "456",
        complemento: "Complemento2",
        cep: "87654321",
        cidade: "Manaus",
        uf: "AM"
      },
      itens: [
        {
          productId: ObjectId("60bfe1a2f9e6d313bcb85f1b"),
          quantidade: 3,
          desconto: 1.5,
          precoUnitario: 15.99
        },
        {
          productId: ObjectId("60bfe1a2f9e6d313bcb85f1c"),
          quantidade: 2,
          desconto: 0,
          precoUnitario: 24.99
        }
      ]
    }
  ]);
  
  console.log(newOrders);