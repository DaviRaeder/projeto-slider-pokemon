/* 

  OBJETIVO 1 - quando clicarmos na seta de avançar temos que mostrar o próximo cartão da lista
    - passo 1 - dar um jeito de pegar o elemento HTML da seta avançar
    - passo 2 - dar um jeito de identificar o clique do usuário na seta avançar
    - passo 3 - fazer aparecer o próximo cartão da lista
    - passo 4 - buscar o cartão que está selecionado e esconder

  OBJETIVO 2 - quando clicarmos na seta de voltar temos que mostrar anterior da lista
    - passo 1 - dar um jeito de pegar o elemento HTML da seta voltar
    - passo 2 - dar um jeito de identificar o clique do usuário na seta voltar
    - passo 3 - fazer aparecer o cartão anterior da lista
    - passo 4 - buscar o cartão que está selecionado e esconder

*/

/* 
  OBJETIVO 1 - quando clicarmos na seta de avançar temos que mostrar o próximo cartão da lista
    - passo 1 - dar um jeito de pegar o elemento HTML da seta avançar
    - passo 2 - dar um jeito de identificar o clique do usuário na seta avançar
    - passo 3 - fazer aparecer o próximo cartão da lista
    - passo 4 - buscar o cartão que está selecionado e esconder
*/

// passo 1 - dar um jeito de pegar o elemento HTML da seta avançar
const btnAvancar = document.getElementById('btn-avancar')
const cartoes = document.querySelectorAll('.cartao')
let cartaoAtual = 0

// passo 2 - dar um jeito de identificar o clique do usuário na seta avançar
btnAvancar.addEventListener('click', () => {

  if(cartaoAtual === cartoes.length - 1) return

  // passo 3 - fazer aparecer o próximo cartão da lista
  
  cartaoAtual++
  cartoes[cartaoAtual].classList.add('selecionado')

  // passo 4 - buscar o cartão que está selecionado e esconder
  const cartaoSelecionado = document.querySelector('.selecionado')
  cartaoSelecionado.classList.remove('selecionado')
})

/*  OBJETIVO 2 - quando clicarmos na seta de voltar temos que mostrar anterior da lista
    - passo 1 - dar um jeito de pegar o elemento HTML da seta voltar
    - passo 2 - dar um jeito de identificar o clique do usuário na seta voltar
    - passo 3 - fazer aparecer o cartão anterior da lista
    - passo 4 - buscar o cartão que está selecionado e esconder
*/

const btnVoltar = document.getElementById('btn-voltar')

btnVoltar.addEventListener('click', () => {

  if(cartaoAtual === 0) return

  const cartaoSelecionado = document.querySelector('.selecionado')
  cartaoSelecionado.classList.remove('selecionado')

  cartaoAtual--
  console.log(cartaoAtual)
  cartoes[cartaoAtual].classList.add('selecionado')

})