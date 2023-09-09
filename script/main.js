

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
            <img src="img/storys/${perfisStorys.imagem}" alt="foto do perfil">
         </div>
      </div>
      <p>${perfisStorys.nome}</p>
   </li>`;

   document.getElementById("ul-storys").innerHTML += perfilStory;
}

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
                  <img class="foto-perfil-publi" src="img/storys/${infosPubli.imagemPerfil}" alt="">
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
                        <img class="foto-perfil-publi" src="img/storys/${infosPubli.imagemPerfil}" alt="">
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
            <img src="img/publicacoesPrevia/${infosPubli.publi1}" alt="">
            <img src="img/publicacoesPrevia/${infosPubli.publi2}" alt="">
            <img src="img/publicacoesPrevia/${infosPubli.publi3}" alt="">
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
         <img src="img/publicacoes/${infosPubli.imagemPubli}" alt="publicação">
      </div>

      <div class="interacao-publi">
         <div class="icons-interacao">
            <div>
               <i class="fa-regular fa-heart curti icons-int"></i>
               <i class="fa-regular fa-comment comentar icons-int"></i>
               <i class="bi bi-send enviar icons-int"></i>
            </div>
            <i class="bi bi-bookmark salvar icons-int"></i>
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

const sugestoes = [
   {
      nome:"arthur_75",
      imagem: "arthur.jpg",
      seguidor:"clarinhaa"
   },
   {
      nome:"terezinha",
      imagem: "terezinha.jpg",
      seguidor:"julia_maria"
   },
   {
      nome:"pedroluiz",
      imagem: "pedroluiz.jpg",
      seguidor:"marcia",
   },
   {
      nome:"ana_15",
      imagem: "ana_15.jpg",
      seguidor:"lucas78"
   },
   {
      nome:"teteu_2012",
      imagem: "teteu.jpg",
      seguidor:"phzera123"
   }
];

for (const perfis of sugestoes)  {
   const perfisSugestoes = `
   <div class="container-perfil">
      <div class="perfil-nome">
         <img src="img/sugestoes/${perfis.imagem}" alt="Foto de perfil">
         <div class="nome-e-seguidores">
            <p>${perfis.nome}</p>
            <span>Seguido(a) por ${perfis.seguidor}</span>
         </div>
      </div>
      <span><a href="#">Seguir</a></span>
   </div>`

   document.getElementById("perfis-sugestoes").innerHTML += perfisSugestoes;
};
