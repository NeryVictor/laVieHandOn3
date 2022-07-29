# HandsOn3

<p align="center">
<a href="https://insomnia.rest/run/?label=laVieApi&uri=https%3A%2F%2Fraw.githubusercontent.com%2FNeryVictor%2FtestFiles%2Fmain%2FinsomniaButton" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>

<p align="center"> 
<a href= "#-Project">Project</a> &#160; |&#160;
<a href= "#-Client">Client</a>  &#160; |&#160;
<a href= "#-Authors">Authors</a>  &#160; |&#160;
<a href= "#-Features Created">Features Created</a>  &#160; |&#160;
<a href= "#-Technology and Dependency used">Technology and Dependency used</a> &#160; |&#160;
<a href= "#-How to use">How to use</a> &#160; |&#160;
<a href= "#-Optional Features ">Optional Features </a> &#160; |&#160;
<a href= "#-How to contribute">How to contribute</a>
</p>

🖥️ Project
===============
 Projeto do bootcamp de desenvolvimento web Gama XP #43 para desenvolver habilidades backend com NodeJs e SQL.
 
✨ Client
===============
Um grupo de psicólogos criau a
clínica La Vie - Saúde Mental que oferece
diversos tipos de terapia.

Para ajudar nos atendimentos, eles precisam de uma API que permita criar registros de
psicólogos, pacientes e prontuários. Em uma conversa com os Front-end e os PO foram
decididos alguns grupos de endpoints a serem gerados.

![lavie](https://user-images.githubusercontent.com/106200173/181382023-b3424979-d826-43fc-a45e-2df175a1b66f.png) 

🏗️ Authors
=================
- [x] Victor Nery
- [x] Giordano Cassini 
- [x] João Marcelo Dantas  
- [x] Lucas Gomes Noronha Canuto

📝 Features Created
=====================
* Buscar psicologos, pacientes e atendimentos (individual e total)
* Cadastrar psicologos, pacientes e atendimentos
* Editar psicologos e pacientes
* Excluir psicologo e pacientes

🚀 Technology and Dependency used
=================
Este projeto foi desenvolvido com as seguintes tecnologias:

<table>
<tr>
<td>NodeJS</td>
<td>Express</td>
<td>Express-validator</td>
<td>Sequelize</td>
<td>MySQL</td>
<td>MySQL2</td>
</tr>

<tr>
<td>18.5.0</td>
<td>4.18.1</td>
<td>6.14.2</td>
<td>6.21.3</td>
<td>2.18.1</td>
<td>2.3.3</td>
</tr>
</table>

Para clonar e executar este aplicativo, você precisará do [Git](https://git-scm.com/), [Node.js](https://nodejs.org/en/), Express, Express-validator,[MySQL](https://www.mysql.com/) e Mysql2 + npm instalado em seu computador.
É recomendado ter um editor para trabalhar com codigo como [VSCode](https://code.visualstudio.com/).

#### Referencia de linha de comando:

📚 How to use:
=================

### Install API

```bash
# Clone this repository
$ git clone https://github.com/giordanocassini/handsOn3.git

# Install dependencies
$ npm install

# Start server
$ npm run dev

# running on port 3500
```

🎌 Optional Features
=================

Dashboard
Deverá ser criados um grupo de endpoints a partir da rota /dashboard para cada tipo de
informação presente nesta lista:
- Número de pacientes
- Número de atendimentos
- Número de psicólogos
- Média de atendimentos por psicólogos
Ficando por exemplo: /dashboard/numero-paciente. Os dados a serem retornando
podem ser apenas os números dos resultados em si!

🤔💭 How to contribute
=================

- Faça um Fork;
 - Crie uma branch com seu recurso:  `git checkout -b my-feature`;
 - Alterações do commit: `git commit -m 'feat: My new feature'`;
 - Faça um push para seu branch: `git push origin my-feature`.

Depois de mesclar sua solicitação de recebimento, você pode excluir a ramificação da sua.

Made with 💚 by Giodarno Cassini 👋 [Get in touch](https://www.linkedin.com/in/giordano-cerutti-cassini-279ab0a0/)
🧡 Joao Marcelo Dantas 👋 [Get in touch](https://www.linkedin.com/in/jo%C3%A3o-marcelo-dantas-3b519b18a/)
💙Lucas Noronha 👋 [Get in touch](https://www.linkedin.com/in/lucas-gomes-noronha-canuto-999499218/)
💛Victor Nery 👋 [Get in touch](https://www.linkedin.com/in/neryvictor/)