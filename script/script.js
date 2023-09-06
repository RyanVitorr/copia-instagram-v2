
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
      id: 1,
      nome: 'clarinhaa',
      imagem: 'clara.jpg'

   },
   {
      id: 2,
      nome: 'pedro368',
      imagem: 'pedro.jpg'

   },
   {
      id:3 ,
      nome: 'marcos32',
      imagem: 'marcos.jpg'

   },
   {
      id: 4,
      nome: 'phzera123',
      imagem: 'ph.jpg'

   },
   {
      id: 5,
      nome: 'julia_maria',
      imagem: 'julia.jpg'

   },
   {
      id: 6,
      nome: 'aninhas2',
      imagem: 'ana.jpg'

   },
   {
      id: 7,
      nome: 'lucas78',
      imagem: 'lucas.jpg'

   },
   {
      id: 8,
      nome: 'marcia',
      imagem: 'marcia.jpg'

   },
   {
      id: 9,
      nome: 'lety',
      imagem: 'leticia.jpg'

   },
   {
      id: 10,
      nome: 'lucas_costa',
      imagem: 'lucas.jpg'

   },
   {
      id: 11,
      nome: 'marcossilva',
      imagem: 'marcos.jpg'

   },
   {
      id: 12,
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
let obj = 0;

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
         document.getElementById("12").scrollIntoView();
      } else {
         document.getElementById("1").scrollIntoView({
            behavior: "smooth"
         });
      }
   })
})