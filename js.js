function avancar(){
    const fundo = document.querySelector('.propaganda')
    BackgroundElement.style.backgroundimage = `url(${imagem[atual]})`
    
    atual++
}