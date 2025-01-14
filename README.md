# Projeto de estudo do fs do javascript na prática!

## tabela de conteúdo 

- [Exemplo de função fs.Readfile](#Readfile)
- [Exemplo de função fs.WriteFile](#writefile)
- [Exemplo de função fs.Readfile](#mkdir)
- [Exemplo de função fs.WriteFile](#readdir)
- [Exemplo de função fs.Readfile](#unlink)
- [Exemplo de função fs.WriteFile](#rmdir)
- [Explicação sobre o fs](#fs)

# ReadFile

const fs = require('fs');

fs.readFile('arquivo.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

# WriteFile 

const fs = require('fs');

fs.writeFile('arquivo.txt', 'Conteúdo a ser escrito', (err) => {
    if (err) throw err;
    console.log('Arquivo escrito com sucesso!');
});



# mkdir

const fs = require('fs');

fs.mkdir('novoDiretorio', (err) => {
    if (err) throw err;
    console.log('Diretório criado com sucesso!');
});



# readdir

const fs = require('fs');

fs.readdir('.', (err, files) => {
    if (err) throw err;
    console.log('Arquivos na pasta atual:', files);
});


# unlink

const fs = require('fs');

fs.unlink('arquivo.txt', (err) => {
    if (err) throw err;
    console.log('Arquivo removido com sucesso!');
});


# rmdir

// Remoção de diretório
fs.rmdir('novoDiretorio', (err) => {
    if (err) throw err;
    console.log('Diretório removido com sucesso!');
});

# fs

O módulo fs é fundamental para lidar com operações de entrada e saída relacionadas a arquivos e diretórios no Node.js. Ele oferece uma ampla gama de funcionalidades para manipular o sistema de arquivos de forma assíncrona ou síncrona, dependendo das necessidades do seu aplicativo. Ao usar o fs, lembre-se sempre de lidar adequadamente com erros e exceções para garantir um comportamento robusto e confiável do seu código.