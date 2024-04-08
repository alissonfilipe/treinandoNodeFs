const fs = require('fs');

//função para ser chamada sempre que quiser escrever um arquivo
function escreverArquivo(nomeArquivo = 'página2.html', conteudo = '<h1>outro contéudo</h1>') {
    fs.writeFile(nomeArquivo, conteudo, (err) => {
        if (err) {
            console.error('Erro ao escrever o arquivo:', err);
        } else {
            console.log('Arquivo html escrito com sucesso!');
        }
    });
}

//função para ser chamada sempre que quiser ler um arquivo
function LerArquivo(nomeArquivo = 'pagina.html', codificacao = 'utf8') {
    fs.readFile(nomeArquivo, codificacao,
        (err, data) => {
            if (err) throw err;
            console.log(data)
        }
    )
}

//função para criar diretório
function criarDiretorio(nomeDiretorio = 'novodiretorio') {
    fs.mkdir(nomeDiretorio, (err) => {
        if (err) throw err;
        console.log('O diretorio foi criado!')
    })
}

//função para ler arquivos de um diretório
function lerDiretorio(home = ".") {
    fs.readdir(home, (err, files) => {
        if (err) throw err;
        console.log(`esses são os arquivos \n ${files}`);
    })
}
//home serve para referenciar o diretório atual


// função para remover arquivos
function removerArquivo(nomedoArquivo = "OutroArquivo.html") {
    fs.unlink(nomedoArquivo, (err) => {
        if (err) throw err;
        console.log("Arquivo foi removido -->", nomedoArquivo);
    })
}

//o diretório tem que ser vazio
function removerDiretorio(diretorioraiz = "meuDiretorioRaiz") {
    fs.rmdir(diretorioraiz, (err) => {
        if (err) throw err;
        console.log(`o diretório ${diretorioraiz} foi removido com sucesso!`)
    })
}


// colocando funções necessárias para a importação com o require
module.exports = {
    escreverArquivo, LerArquivo, criarDiretorio, lerDiretorio,
    removerArquivo, removerDiretorio
}