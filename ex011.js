function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
       //BOM DIA 
       img.src = 'https://github.com/dezordi/dezordi.github.io/blob/master/_images/manha.png?raw=true'
       document.body.style.background = '#b9846f'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        img.src = 'https://github.com/dezordi/dezordi.github.io/blob/master/_images/tarde.png?raw=true'
        document.body.style.background = '#f2a153'
    } else {
        //BOA NOITE
        img.src = 'https://github.com/dezordi/dezordi.github.io/blob/master/_images/noite.png?raw=true'
        document.body.style.background = '#515154'
    }
}
