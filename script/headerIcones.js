const iconesHeader = document.querySelectorAll(".icones-header-end");
let nome  = 0;
iconesHeader.forEach((icones) => {
   icones.addEventListener("mouseover", () => {
      const home = icones.classList.contains("home");
      if(home == true){
         nome = document.querySelector(".p-home");
         nome.style.display = "flex";
      }
      const pesquisa = icones.classList.contains("pesquisa");
      if(pesquisa == true) {
         nome = document.querySelector(".p-pesquisa");
         nome.style.display = "flex";
      }
      const explorar = icones.classList.contains("explorar");
      if(explorar == true) {
         nome = document.querySelector(".p-explorar");
         nome.style.display = "flex";
      }
      const reels = icones.classList.contains("img");
      if(reels == true) {
         nome = document.querySelector(".p-reels");
         nome.style.display = "flex";
      }
      const msg = icones.classList.contains("msg");
      if(msg == true) {
         nome = document.querySelector(".p-mensagem");
         nome.style.display = "flex";
      }
      const notficacoes = icones.classList.contains("coracao");
      if(notficacoes == true) {
         nome = document.querySelector(".p-notficacoes");
         nome.style.display = "flex";
      }
      const criar = icones.classList.contains("publicar");
      if(criar == true) {
         nome = document.querySelector(".p-criar");
         nome.style.display = "flex";
      }
      const perfil = icones.classList.contains("perfil");
      if(perfil == true) {
         nome = document.querySelector(".p-perfil");
         nome.style.display = "flex";
      }
      const mais = icones.classList.contains("menu");
      if(mais == true) {
         nome = document.querySelector(".p-menu");
         nome.style.display = "flex";
      }
      
   })
})

iconesHeader.forEach((icones) => {
   icones.addEventListener("mouseout", () => {
      const home = icones.classList.contains("home");
      if(home == true){
         nome = document.querySelector(".p-home");
         nome.style.display = ""
      }
      const pesquisa = icones.classList.contains("pesquisa");
      if(pesquisa == true) {
         nome = document.querySelector(".p-pesquisa");
         nome.style.display = ""
      }
      const explorar = icones.classList.contains("explorar");
      if(explorar == true) {
         nome = document.querySelector(".p-explorar");
         nome.style.display = ""
      }
      const reels = icones.classList.contains("img");
      if(reels == true) {
         nome = document.querySelector(".p-reels");
         nome.style.display = ""
      }
      const criar = icones.classList.contains("publicar");
      if(criar == true) {
         nome = document.querySelector(".p-criar");
         nome.style.display = ""
      }
      const msg = icones.classList.contains("msg");
      if(msg == true) {
         nome = document.querySelector(".p-mensagem");
         nome.style.display = ""
      }
      const notficacoes = icones.classList.contains("coracao");
      if(notficacoes == true) {
         nome = document.querySelector(".p-notficacoes");
         nome.style.display = ""
      }
      const perfil = icones.classList.contains("perfil");
      if(perfil == true) {
         nome = document.querySelector(".p-perfil");
         nome.style.display = ""
      }
      const mais = icones.classList.contains("menu");
      if(mais == true) {
         nome = document.querySelector(".p-menu");
         nome.style.display = ""
      }
      
   })
})