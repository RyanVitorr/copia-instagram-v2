
function clickSeta() {
   let click = document.getElementById("segui-fav");
  
   if (click.style.display == 'none') {
    click.style.display = 'block';
   }
   else {
    click.style.display = 'none';
   }
}



const listaPerfisStorys = [
   {
      nome: 'pedro368',
      imagem: 'pedro.jpg'

   },
   {
      nome: 'marcos',
      imagem: 'marcos.jpg'

   },
   {
      nome: 'phzera123',
      imagem: 'ph.jpg'

   },
   {
      nome: 'juliaa',
      imagem: 'julia.jpg'

   },
   {
      nome: 'aninhas2',
      imagem: 'ana.jpg'

   },
   {
      nome: 'lucas78',
      imagem: 'lucas.jpg'

   },
   {
      nome: 'marcia',
      imagem: 'marcia.jpg'

   },
   {
      nome: 'lety',
      imagem: 'leticia.jpg'

   },
   {
      nome: 'aninhas2',
      imagem: 'ana.jpg'

   },
   {
      nome: 'aninhas2',
      imagem: 'ana.jpg'

   },
];

for (const perfisStorys of listaPerfisStorys) {
   
   const perfilStory  =  
   
   `<li>
      <div class="storys-area">
         <div class="fotos">
            <img src="img/${perfisStorys.imagem}" alt="foto do perfil">
         </div>
      </div>
      <p>${perfisStorys.nome}</p>
   </li>`;

   document.getElementById("ul-storys").innerHTML += perfilStory;
}
