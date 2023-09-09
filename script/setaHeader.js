const mais = document.getElementById("mais");
document.getElementById("seta-baixo-header").addEventListener("click", () => {
   if(mais.style.display == "") {
      mais.style.display = "flex";
   } else {
      mais.style.display = "";
   }
});