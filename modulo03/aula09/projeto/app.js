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
          if(this[i] === undefined || this[i] === ""){
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
  const lancamento = document.getElementById('lancamento').value
  const descricao = document.getElementById('descricao')

  const registroLivro = new InformacoesLivro(nome.value, autor.value, genero.value, lancamento.value, descricao.value)

  if(registroLivro.validarDado()){
      baseDados.criarRegistroLivro(registroLivro)
  }
}

const botaoAdicionar = document.getElementById('botao-adicionar')

botaoAdicionar.addEventListener('click', registrarLivro())



