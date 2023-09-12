const previa1 = document.getElementById("previa-1");
const previa2 = document.getElementById("previa-2");
const perfis = document.querySelectorAll(".area-perfil-publi, .nome-perfil-publi");

perfis.forEach((perfil) => {
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


perfis.forEach((perfil) => {
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

