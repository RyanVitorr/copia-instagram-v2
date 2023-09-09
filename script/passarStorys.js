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