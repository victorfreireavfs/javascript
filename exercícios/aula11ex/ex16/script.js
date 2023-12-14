function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
  
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        //BOM DIA!
        document.body.style.background = '#e2cd9f'
        img.src = 'imagens/manhã.png'
    } else if (hora >= 12 && hora< 18){
        //BOA TARDE!
        document.body.style.background = '#b9846f'
        img.src = 'imagens/tarde.png'
    } else{
        //BOA NOITE!
        document.body.style.background = '#515154'
        img.src = 'imagens/noite.png'
    }
}
