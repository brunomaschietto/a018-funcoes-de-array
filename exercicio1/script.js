const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}
//Exercicio 1
function caixaAlta(valor) {
    let novoObj = {};
    for (propriedade in valor) {
        novoObj[propriedade] = valor[propriedade].toUpperCase();
    }
    return novoObj
}
console.log(caixaAlta(objeto));

//Exercicio 2

function textoCorrido(valor) {
    let texto = ''
    for (i in valor){
        texto += `${valor[i]} `
    }
    return texto
}

console.log(textoCorrido(objeto));

//Exercicio 3

const funcao1 = (valor, funcao) => {
    const resultado = funcao(valor);
    return resultado
}

console.log(funcao1(objeto, caixaAlta))
console.log(funcao1(objeto, textoCorrido))

