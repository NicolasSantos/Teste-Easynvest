# Teste Easynvest

## Instalação

Baixe e instale o [node.js](https://nodejs.org/en/) versão LTS.

### Testes unitários

Abra o terminal do seu sistema e execute o seguinte comando na raiz do projeto.

```sh
npm install
```

Ainda na raiz do projeto execute o seguinte comando.

```sh
npm run test
```

## Como rodar o projeto

Navegue até a pasta /app/pages/ e abra o arquivo index.html

## Solução

Ao carregar a página index.html, será feito uma vericação para verificar se há dados no localStorage. A partir do momento que pegar os dados pela primeira vez, nunca será feita a requisição novamente até que você limpe seu localStorage.

Há validação em todos campos tanto no cadastro quanto na edição. Não é criado um novo ou atualizado os dados até que todos os campos sejam validados. 

Após criação, edição e remoção é exibido um toast no canto superior direito informando que a ação foi realiza com sucesso. 

Ao clicar no botão de editar deve aparecer dois botões (um para salvar a lista e atualizar o localStorage e outro para cancelar que deverá ignorar tudo que foi digitado nos campos daquela linha e voltar ao estado anterior). Caso não tenha mais itens, a tabela será escondida e aparecerá uma mensagem informando que não há mais usuários na lista e um link para redirecionar à tela de cadastro.