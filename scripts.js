const menuLateral = document.querySelector('.menu-lateral')
const botaoCabecalho = document.querySelector('.btn-cabecalho')
const peliculaEscura = document.querySelector('.pelicula-escura')

botaoCabecalho.addEventListener('click', () => {
    menuLateral.classList.toggle('ativo')
    peliculaEscura.classList.toggle('ativo')
})

peliculaEscura.addEventListener('click', () => {
    menuLateral.classList.remove('ativo')
    peliculaEscura.classList.remove('ativo')
})