
//Codigo aleatorio
const gerar = () => {
    event.preventDefault()
    let min = 10 ** 9
    let max = 10 ** 10 - 1 
    let code = Math.floor(Math.random() * (max - min + 1)) + min

    document.querySelector('.input-codigo').value = code
}
let btnGerar = document.querySelector('.gerar').addEventListener('click', gerar)

//Classe para POO futuramente
class Produto {
    constructor(codigo, nome, validade, lote, tipo, preco, estoqueInicial){
        this.codigo = codigo
        this.nome = nome
        this.validade = validade
        this.lote = lote
        this.tipo = tipo
        this.preco = preco
        this.estoqueInicial = estoqueInicial
    }
}

//Salvando dados no localStorage
const salvar = () => {
    event.preventDefault()
    let produtosEstoque = JSON.parse(localStorage.getItem('produtos')) || []

    let codigo = document.querySelector('.input-codigo').value
    let nome = document.querySelector('.input-nome').value
    let validade = document.querySelector('.input-validade').value
    let lote = document.querySelector('.input-lote').value
    let preco = document.querySelector('.input-preco').value
    let observacoes = document.querySelector('.observacoes-txt').value
    let estoqueInicial = document.querySelector('.input-estoque-inicial').value

    produtosEstoque.push({codigo: codigo, nome: nome, validade: validade, lote: lote, preco: preco, observacoes: observacoes, estoqueInicial: estoqueInicial, metodo: "Cadastro"})
    localStorage.setItem('produtos', JSON.stringify(produtosEstoque))
    
    alert('Produto cadastrado!')
    const form = document.querySelector('form')
    form.reset()
}

let btnSalvar = document.querySelector('.salvar').addEventListener('click', salvar)