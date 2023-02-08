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
            img.setAttribute('src', 'https://media.licdn.com/dms/image/D4D03AQE4JAYpU9os3A/profile-displayphoto-shrink_200_200/0/1675804459247?e=1681344000&v=beta&t=XsqK9LqQdElr71ZWfVqcO_miGZSgkUwC5tTSRhyOeHI')
   } else {

    //se tiver sem ligh mode, manter a imagem normal
    img.setAttribute('src', 'https://media.licdn.com/dms/image/D4D03AQE4JAYpU9os3A/profile-displayphoto-shrink_200_200/0/1675804459247?e=1681344000&v=beta&t=XsqK9LqQdElr71ZWfVqcO_miGZSgkUwC5tTSRhyOeHI')
  }

}
