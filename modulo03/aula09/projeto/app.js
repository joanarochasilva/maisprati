const meuStorage =  window.localStorage;
class InformacoesLivro {
  constructor(nome, autor, genero, lancamento, descricao){
      this.nome = nome
      this.autor = autor
      this.genero = genero
      this.lancamento = lancamento
      this.descricao = descricao
  }

  validarDado(){
      for (let i in this){
          if(this[i] === undefined || this[i] === null){
              return false
          }
      }
      return true
  }
}

class BaseDados {

  constructor(){
      const id = meuStorage.getItem('id')

      if(id === null){
          meuStorage.setItem('id', 0)
      }
  }

  criarRegistroLivro(registroLivro) {
      const id = getNextId()
      meuStorage.setItem(id, JSON.stringify(registroLivro))
      meuStorage.setItem('id', id)
  }

  removerRegistroLivro(id) {
    meuStorage.removeItem(id)
  }

  listarLivros() {
    const livros = Array()

    const id = meuStorage.getItem('id')

    for(let i = 1; i <= id; i++) {
      const informacoesLivro = JSON.parse(meuStorage.getItem(i))

      if(informacoesLivro === null) {
        continue
      }

      informacoesLivro.id = i
      livros.push(informacoesLivro)

    }
    return livros;
  }


}

const baseDados = new BaseDados()

function getNextId() {
  const nextId = meuStorage.getItem('id')
  return parseInt(nextId) + 1;
}

function registrarLivro() {
  const nome = document.getElementById('nome')
  const autor = document.getElementById('autor')
  const genero = document.getElementById('genero')
  const lancamento = document.getElementById('lancamento')
  const descricao = document.getElementById('descricao')

  const registroLivro = new InformacoesLivro(nome.value, autor.value, genero.value, lancamento.value, descricao.value)

  if(registroLivro.validarDado()){
      baseDados.criarRegistroLivro(registroLivro)
  }
}

function carregarListaLivros() {
  const livros = baseDados.listarLivros()

  const listarOsLivros = document.getElementById('listar-livros')

  livros.forEach((l) => {
    const row = listarOsLivros.insertRow()

    row.insertCell(0).innerHTML = `${l.id}`

    row.insertCell(1).innerHTML = `${l.nome}`
    row.insertCell(2).innerHTML = `${l.autor}`
    row.insertCell(3).innerHTML = `${l.genero}`
    row.insertCell(4).innerHTML = `${l.lancamento}`
    row.insertCell(5).innerHTML = `${l.descricao}`

    botaoExcluir = document.createElement('button')
    botaoExcluir.id = l.id
    botaoExcluir.className = 'botao-excluir'
    botaoExcluir.innerHTML = 'Excluir'


    botaoExcluir.onclick = () => {
      const id = l.id
      baseDados.removerRegistroLivro(id)
      window.location.reload()
    }

    row.insertCell(6).append(botaoExcluir)
  })
}

document.addEventListener('DOMContentLoaded', (event) => {
  if(document.body.contains(document.getElementById('listar-livros'))) {
    carregarListaLivros()
  }
})

const botaoAdicionar = document.getElementById('botao-adicionar')

botaoAdicionar.addEventListener('click', registrarLivro)











