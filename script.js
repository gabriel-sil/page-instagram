function toglleMode() {
   const html = document.documentElement

   //if(html.classList.contains('light')) {
   // html.classList.remove('light')
   //} else {
   // html.classList.add('light')
  // }

  //tudo isso em cima é igual a isso em baixo 
   html.classList.toggle('light')


// tag a baixo pe para substituir a imagem.

    //pegar a tag img
    const img =  document.querySelector("#profile img")

    // substituir a imagem
        if(html.classList.contains('light')) {

            // se tiver light mode, adicionar a imagem light
            img.setAttribute('src', './assets/avatar-light.png')
   } else {

    //se tiver sem ligh mode, manter a imagem normal
    img.setAttribute('src', './assets/Avatar.png')
  }

}