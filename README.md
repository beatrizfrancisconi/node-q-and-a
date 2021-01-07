# node-q-and-a
Aplicação de perguntas e respostas.<br>
Aplicação de perguntas e respostas desenvolvida com Node.js e MySQL<br>
Projeto fictício de nível iniciante desenvolvido para estudar os conceitos de Node.js.<br>

Recursos utilizados no projeto:
- Node.Js;
- Express;
- Ejs;
- Body-parser;
- Mysql;
- Sequelize; 
<hr>
<h1>Como instalar as dependências:</h1>
<p>Para instalar as dependências foi utilizado o gerenciador de pacotes NPM.</p>

<p>Express: npm install express</p>

<p>Ejs: npm install ejs</p>

<p>Body-parser: npm install body-parser</p>

<p>Mysql: npm install --save mysql2</p>

<p>Sequelize: npm i sequelize</p>

<hr>
<h1> Banco de dados </h1>
<p>Para configurar o banco de dados da aplicação, basta abrir o arquivo database.js (localizado dentro da pasta database) e alterar os valores das seguintes variaveis:</p>
var user = ""; <br>
var pass = ""; <br>
var host = ""; <br>
<p>Altere os valores de acordo com o seu banco de dados Mysql.</p>

<h1>Rotas</h1>
<p>Esta tabela abaixo descreve como as rotas se comportam nesta aplicação.</p>
<table>
<thead>
  <tr>
    <th>Rota</th>
    <th>Descrição</th>
    <th>HTTP</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>"/"</td>
    <td>Exibe página principal</td>
    <td>GET</td>
  </tr>
  <tr>
    <td>"/question/:id"</td>
    <td>Exibe a pergunta selecionada</td>
    <td>GET</td>
  </tr>
  <tr>
    <td>"/savequestion"</td>
    <td>Cadastra a pergunta</td>
    <td>POST</td>
  </tr>
  <tr>
    <td>"/saveanswer"</td>
    <td>Cadastra a resposta</td>
    <td>POST</td>
  </tr>
</tbody>
</table>

