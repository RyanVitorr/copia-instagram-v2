
const mais = document.getElementById("mais");
document.getElementById("seta-baixo-header").addEventListener("click", () => {
   if(mais.style.display == "") {
      mais.style.display = "flex";
   } else {
      mais.style.display = "";
   }
});

const listaPerfisStorys = [
   {
      id: "perfil-1",
      nome: 'clarinhaa',
      imagem: 'clara.jpg'
   },
   {
      id: "perfil-2",
      nome: 'pedro368',
      imagem: 'pedro.jpg'
   },
   {
      id: "perfil-3",
      nome: 'marcos32',
      imagem: 'marcos.jpg'
   },
   {
      id: "perfil-4",
      nome: 'phzera123',
      imagem: 'ph.jpg'
   },
   {
      id: "perfil-5",
      nome: 'julia_maria',
      imagem: 'julia.jpg'
   },
   {
      id: "perfil-6",
      nome: 'aninhas2',
      imagem: 'ana.jpg'
   },
   {
      id: "perfil-7",
      nome: 'lucas78',
      imagem: 'lucas.jpg'
   },
   {
      id: "perfil-8",
      nome: 'marcia',
      imagem: 'marcia.jpg'
   },
   {
      id: "perfil-9",
      nome: 'lety',
      imagem: 'leticia.jpg'
   },
   {
      id: "perfil-10",
      nome: 'jonax',
      imagem: 'jonas.jpg'
   },
   {
      id: "perfil-11",
      nome: 'juliolima',
      imagem: 'julio.jpg'
   },
   {
      id: "perfil-12",
      nome: 'Jamilly<3',
      imagem: 'jamilly.jpg'
   }
];

for (const perfisStorys of listaPerfisStorys) {
   
   const perfilStory  =  
   
   `<li id="${perfisStorys.id}" class="items">
      <div class="storys-area">
         <div class="fotos">
            <img src="img/${perfisStorys.imagem}" alt="foto do perfil">
         </div>
      </div>
      <p>${perfisStorys.nome}</p>
   </li>`;

   document.getElementById("ul-storys").innerHTML += perfilStory;
}

const controls = document.querySelectorAll(".seta");
const setaLeft = document.querySelector(".seta-left");
const setaRight = document.querySelector(".seta-right");
let currentItem = 0;
const items = document.querySelectorAll(".items");
const maxItems = items.length;
const idPerfil = document.getElementById("perfil-6");

controls.forEach((control) => {
   control.addEventListener("click", () => {
      const isRight = control.classList.contains("seta-right");

      if(isRight) {
         currentItem += 1;
         setaLeft.style.display = "block";
         setaRight.style.display = "none";
      } else {
         currentItem -= 1;
         setaLeft.style.display = "none";
         setaRight.style.display = "";
      }

      if(isRight == true) {
         document.getElementById("perfil-12").scrollIntoView({ block: "end", behavior: "smooth" });
      } else {
         document.getElementById("perfil-1").scrollIntoView({ block: "end", behavior: "smooth" });
      }
   })
});


const perfilPubli = [

   {
      id:"id-card1",
      idPrevia: "previa-1",
      nome: "brunin",
      nomeReal: "Bruno Lima",
      imagemPerfil: "brunin.jpg",
      imagemPubli: "rua.jpeg",
      publicacoes: 35,
      seguidores: 652,
      seguindo: "1.103 mil",
      publi1: "publi1.jpg",
      publi2: "publi2.jpg",
      publi3: "publi3.jpg"
   },
   {
      id:"id-card2",
      idPrevia: "previa-2",
      nome: "josex",
      nomeReal:"José Elias",
      imagemPerfil: "caio.jpg",
      imagemPubli: "veneza.jpeg",
      publicacoes: 132,
      seguidores:"1.359 mil",
      seguindo: 986,
      publi1: "publi4.jpg",
      publi2: "publi5.jpg",
      publi3: "publi6.jpg"
   }
];

for (const infosPubli of perfilPubli) {

   const publicacoes =  
  `<div class="publi-card">
      <div class="perfil-publi">
         <div>
            <div class="area-perfil-publi ${infosPubli.id}">
               <div class="foto-fundo">
                  <img class="foto-perfil-publi" src="img/${infosPubli.imagemPerfil}" alt="">
               </div>
            </div>
            <p class="nome-perfil-publi ${infosPubli.id}">${infosPubli.nome}</p>
         </div>
         <i class="bi bi-three-dots"></i>
      </div>

      <section id="${infosPubli.idPrevia}" class="previa-card">
         <div class="perfil perfil-previa">
            <div class="perfil-publi">
               <div>
                  <div class="area-perfil-publi area-perfil-previa">
                     <div class="foto-fundo">
                        <img class="foto-perfil-publi" src="img/${infosPubli.imagemPerfil}" alt="">
                     </div>
                  </div>
                  <div class="nome">
                     <h4>${infosPubli.nome}</h4>
                     <p>${infosPubli.nomeReal}</p>
                  </div>
               </div>               
            </div>
         </div>

         <div class="infos">
            <div class="postagens">
              <h3>${infosPubli.publicacoes}</h3>
              <p>Publicações</p>
            </div>
            <div class="seguidores">
              <h3>${infosPubli.seguidores}</h3>
              <p>Seguidores</p>
            </div>
            <div class="seguindo">
              <h3>${infosPubli.seguindo}</h3>
              <p>Seguindo</p>
            </div>
         </div>

         <div class="publicacoes">
            <img src="img/${infosPubli.publi1}" alt="">
            <img src="img/${infosPubli.publi2}" alt="">
            <img src="img/${infosPubli.publi3}" alt="">
         </div>

         <div class="interacao">
            <div class="mensagem">
               <i class="fa-brands fa-facebook-messenger"></i>
               <p>Enviar mensagem</p>
            </div>
         
            <div class="seguindo-int">
               <p>Seguindo</p>
            </div>
         </div>
      </section>

      <div class="conteudo-publi">
         <img src="img/${infosPubli.imagemPubli}" alt="publicação">
      </div>

      <div class="interacao-publi">
         <div class="icons-interacao">
            <div>
               <i class="fa-regular fa-heart"></i>
               <i class="fa-regular fa-comment"></i>
               <i class="bi bi-send"></i>
            </div>
            <i class="bi bi-bookmark"></i>
         </div>
         <div class="descricoes-interacoes">
            <p>Curtido por <a href="#">marcos32</a> e <a href="#">outras pessoas</a></p>

            <p><a href="#">${infosPubli.nome}</a> Mais uma dessa vista!!</p>

            <span class="tradu">Ver tradução</span>
            <span class="coment">Ver todos os 8 comentários</span>

            <input type="text" placeholder="Adicione um comentário...">
         </div>
      </div>
   </div>`

   document.getElementById("publicacoes").innerHTML += publicacoes;
};

const previa1 = document.getElementById("previa-1");
const previa2 = document.getElementById("previa-2");
const perfils = document.querySelectorAll(".area-perfil-publi, .nome-perfil-publi");


perfils.forEach((perfil) => {
   perfil.addEventListener("mouseover", () => {
      const id1 = perfil.classList.contains("id-card1");
      const id2 = perfil.classList.contains("id-card2");
      if(id1 == true) {
         previa1.style.display = "block";
      } 
      if(id2 == true) {
         previa2.style.display ="block"
      }
   });
});


perfils.forEach((perfil) => {
   perfil.addEventListener("mouseout", () => {
      const id1 = perfil.classList.contains("id-card1");
      const id2 = perfil.classList.contains("id-card2");
      if(id1 == true) {
         previa1.style.display = "";
      } 
      if(id2 == true) {
         previa2.style.display = "";
      }
   });
});


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
      const criar = icones.classList.contains("publicar");
      if(criar == true) {
         nome = document.querySelector(".p-criar");
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