use ('ecomm');

const newOrders = db.createCollection("orders", {
    validator: {
      $jsonSchema: {
        title: "Users Orders",
        bsonType: "object",
        required: ["_id", "dataPedido", "account", "enderecoEntrega", "itens"],
        properties: {
          _id: {
            description: "Order Id",
            bsonType: "objectId"
          },
          dataPedido: {
            description: "Order Date",
            bsonType: "date"
          },
          account: {
            title: "User Account",
            bsonType: "object",
            required: ["accountId", "nomeCliente"],
            additionalProperties: false,
            properties: {
              accountId: {
                description: "Account ID",
                bsonType: "objectId"
              },
              nomeCliente: {
                description: "User Fullname",
                bsonType: "string"
              }
            }
          },
          enderecoEntrega: {
            title: "Delivery Address",
            bsonType: "object",
            required: ["bairro", "rua", "numero", "cep", "cidade", "uf"],
            additionalProperties: false,
            properties: {
              bairro: {
                bsonType: "string",
                minLength: 1
              },
              rua: {
                bsonType: "string",
                minLength: 1
              },
              numero: {
                bsonType: "string",
                minLength: 1
              },
              complemento: {
                bsonType: "string"
              },
              cep: {
                bsonType: "string",
                pattern: "^[0-9]{8}$"
              },
              cidade: {
                bsonType: "string",
                minLength: 5
              },
              uf: {
                bsonType: "string",
                pattern: "^[A-Z]{2}$"
              }
            }
          },
          itens: {
            bsonType: "array",
            minItems: 1,
            items: {
              bsonType: "object",
              required: ["productId", "quantidade", "precoUnitario"],
              additionalProperties: false,
              properties: {
                productId: {
                  bsonType: "objectId"
                },
                quantidade: {
                  bsonType: "int",
                  minimum: 1
                },
                desconto: {
                  bsonType: "double",
                  minimum: 0
                },
                precoUnitario: {
                  bsonType: "double",
                  minimum: 0
                }
              }
            }
          }
        }
      }
    }
  });
  
  console.log(newOrders);