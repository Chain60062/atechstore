


RF01 – O sistema deve permitir o cadastro de usuários, com CPF como identificador único.

RF02 – O sistema deve permitir que o usuário consulte e gerencie seus endereços de entrega.

RF03 – O sistema deve disponibilizar um endpoint para listagem de produtos cadastrados.

RF04 – O sistema deve permitir a visualização dos detalhes de um produto específico.

RF05 – O sistema deve permitir a criação, edição e exclusão de categorias de produtos.

RF06 – O sistema deve permitir ao usuário adicionar produtos ao seu carrinho.

RF07 – O sistema deve permitir ao usuário consultar os itens presentes em seu carrinho.

RF08 – O sistema deve permitir a atualização da quantidade de um item no carrinho.

RF09 – O sistema deve permitir a remoção de itens do carrinho.

RF10 – O sistema deve permitir a criação de um pedido com base nos itens do carrinho.

RF11 – O sistema deve calcular o valor total do pedido, considerando o preço dos produtos e o custo de envio.

RF12 – O sistema deve permitir ao usuário selecionar um método de pagamento e de envio no momento da criação do pedido.

RF13 – O sistema deve armazenar os itens do pedido como uma fotografia (snapshot) do carrinho no momento da compra.

RF14 – O sistema deve disponibilizar um endpoint para listagem de todos os pedidos de um determinado usuário.

RF15 – O sistema deve permitir a visualização dos itens de um pedido específico.

RF16 – O sistema deve permitir o cancelamento de pedidos que ainda não tenham sido entregues.

RF17 – O sistema deve permitir o registro de avaliações (reviews) de produtos por usuários que tenham realizado a compra.

RF18 – O sistema deve permitir a consulta de todas as avaliações associadas a um produto.

RF19 – O sistema deve permitir a atualização do status de um pedido (ex: PENDENTE, PAGO, CANCELADO, ENTREGUE).

RF020: Gerar Relatório Financeiro de Pedidos Cancelados
## Requisitos não funcionais
RN  F01 – O sistema deve ser implementado como uma API RESTful.

RNF02 – O sistema deve garantir a persistência dos dados em um banco de dados relacional ou NoSQL.

RNF03 – O tempo de resposta das requisições da API deve ser inferior a 2 segundos para operações típicas.

RNF04 – O sistema deve garantir a consistência dos dados através do uso de transações onde necessário.

RNF05 – O sistema deve estar estruturado de forma modular, com separação clara entre camadas.

RNF06 – A API deve, no mínimo, ter validação básica para dados de entrada e retornar os códigos de status HTTP adequados (ex: 400, 404, 201).


# BPMN
![BPMN](<diagram (1).svg>)
