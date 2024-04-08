// importando as funções necessárias para rodar a aplicação
// const {com as funções} é o recurso de desestruturação para importar funções
const { escreverArquivo, LerArquivo, criarDiretorio, lerDiretorio,
    removerArquivo, removerDiretorio } = require('./funcoes');


// aqui definimos uma variável para o conteúdo do arquivo
let conteudodoOutroArquivo = `
<h1>esse é o título </h1> <br>
<p> esse é o parágrafo </p>

`

// Chama a função escreverArquivo sem passar argumentos específicos
//escreverArquivo("meuDiretorioRaiz/esteArquivo.html", conteudodoOutroArquivo);
/*com essa função tenho maior controle dessas operações, chamando ela só
quando eu for usar e deixando os valores padronizados e posso escrever arquivos
em diretórios*/

// chama a função para ler um arquivo como os parâmetros o nome do arquivo e a
//codificação
//LerArquivo("OutroArquivo.html", "utf8");

//cria um novo diretório (você pode botar o caminho)
//criarDiretorio("emptyDiretorio")

// ler diretórios mostrando os arquivos dentro dele
//lerDiretorio("meuDiretorioRaiz");
//esse foi o retorno na primeira vez rodado:
//funcoes.js,index.js,meuDiretorioRaiz,OutroArquivo.html,package.json,README.md

//remove o arquivo, tendo como único parâmetro o nome do arquivo
//removerArquivo();
//resultado : Arquivo foi removido --> OutroArquivo.html

// na primeira tentativa deu erro pois o diretorio tem que ser vazio
removerDiretorio("emptyDiretorio")
//resultado: o diretório emptyDiretorio foi removido com sucesso!

