function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamete!')
    }else{
      var fsex = document.getElementsByName('radsex')
      var idade = ano - Number(fano.value)
      var gênero = ''
      var img = document.createElement('img')
      
      if (fsex[0].checked){
           gênero = 'Homem'
           if (idade >= 0 && idade <10) {
            //Bebe
            img.setAttribute('src', 'imagens/bebe-menino')
           }else if (idade < 21){
            // jovem
            img.setAttribute('src', 'imagens/jovem-h')
            // adulto
           }else{
            //idoso 
            img.setAttribute('src', 'imagens/idoso-h')
           }
           
      }else if (fsex[1].checked){
            gênero = 'Mulher'
             if (idade >= 0 && idade <10) {
            //Bebe
           }else if (idade < 21){
            // jovem
           }else if { (idade < 50)
            // adulto
           }else{
            //idoso 
           }
      }
      res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
    }
}