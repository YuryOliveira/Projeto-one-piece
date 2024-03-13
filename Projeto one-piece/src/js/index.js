const botoes=document.querySelectorAll(".botao"),personagens=document.querySelectorAll(".personagem");botoes.forEach((a,b)=>{a.addEventListener("click",()=>{desselecionarBotao(),desselecionarPersonagem(),a.classList.add("selecionado"),personagens[b].classList.add("selecionado")})});function desselecionarPersonagem(){const a=document.querySelector(".personagem.selecionado");a.classList.remove("selecionado")}function desselecionarBotao(){const a=document.querySelector(".botao.selecionado");a.classList.remove("selecionado")}



