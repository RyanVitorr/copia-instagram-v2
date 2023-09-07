
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
      nome: "brunin",
      imagemPerfil: "brunin.jpg",
      imagemPubli: "rua.jpeg",
      nomeReal: "Bruno Costa",
      publicacoes: 50,
      seguidores: "1.003 mil",
      seguindo: "2.364 mil",
      publi1: "publi1.jpg",
      publi2: "publi2.jpg",
      publi3: "publi3.jpg"
   },
   {
      nome: "josex",
      imagemPerfil: "caio.jpg",
      imagemPubli: "veneza.jpeg",
      nomeReal: "Bruno Costa",
      publicacoes: 130,
      seguidores: "6.592 mil",
      seguindo: 983,
      publi1: "publi4.jpg",
      publi2: "publi5.jpg",
      publi3: "publi6.jpg"
   }
];

for (const infosPubli of perfilPubli) {


   const publicacoes = ` <div class="publi-card">
   <div class="perfil-publi">
      <div>
         <div class="area-perfil-publi">
               <div class="foto-fundo">
                  <img class="foto-perfil-publi" src="img/${infosPubli.imagemPerfil}" alt="">
               </div>
            </div>
            <p>${infosPubli.nome}</p>
         </div>
         <i class="bi bi-three-dots"></i>
      </div>

      <div class="previa-perfil">
         <div class="perfil-e-nome">
                 
         <div class="area-perfil-publi">
            <div class="foto-fundo">
               <img class="foto-perfil-publi" src="img/${infosPubli.imagemPerfil}" alt="">
            </div>
         </div>
         <div class="nome">
             <p>${infosPubli.nome}</p>
             <p>${infosPubli.nomeReal}</p>
            </div>
         </div> 
       <div class="infos">
         <div class="infos-post">
            <div class="num-infos">
               <h3>${infosPubli.publicacoes}</h3>
               <p>Publicações</p>
            </div>
            <img src="img/${infosPubli.publi1}" alt="">
         </div>
         <div class="infos-post">
            <div class="num-infos">
               <h3>${infosPubli.seguidores}</h3>
               <p>Seguidores</p>
            </div>
            <img src="img/${infosPubli.publi2}" alt="">
         </div>
         <div class="infos-post">
            <div class="num-infos">
               <h3>${infosPubli.seguindo}</h3>
               <p>Seguindo</p>
            </div> 
            <img src="img/${infosPubli.publi3}" alt="">
         </div>
      </div>
    
      <div class="interacao">
         <div class="msg">
            <i class="fa-brands fa-facebook-messenger"></i>
            <p>Enviar mensagem</p>
         </div>
         <div class="seg">
            <p>Seguindo</p>
         </div>
         </div>
      </div>

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
         <p>
            Curtido por <a href="#">marcos32</a> e <a href="#">outras pessoas</a>
         </p>
        
         <p>
            <a href="#">${infosPubli.nome}</a> Mais uma dessa vista!!
         </p>

         <span class="tradu">Ver tradução</span>
         <span class="coment">Ver todos os 8 comentários</span>

         <input type="text" placeholder="Adicione um comentário...">
      </div>
   </div>
</div>`

   document.getElementById("publicacoes").innerHTML += publicacoes;
};

