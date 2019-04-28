//chama a pagina quando o document for carregado
$(window).on("load", function() {
  $("#modalCenter").modal("show");
});

//ao cliick em cancel ou no x retorna a page de login
function redirecionarPagina() {
  window.location.replace("login.html");
}

//Capturar dados e salvar em localStorage
setTimeout("redirecionarPagina()", 100000);

$("#btnEntrar").click(function() {
  window.location.replace("Jmemoria/index.html");
});

// function salvarForm() {
//   if (localStorage.cont) {
//     localStorage.cont = Number(localStorage.cont) + 1;
//   } else {
//     localStorage.cont = 1;
//   }

//   cad =
//     document.getElementById("username").value +
//     ";" +
//     document.getElementById("password").value;
//   localStorage.setItem("cad_" + localStorage.cont, cad);
// }
// //localStorage.clear();

// //chama a tela de configuração do jogo
// function chamarGame() {
//   window.location.replace("Jmemoria/index.html");
// }

// $(document).ready(function() {
//   createCookie("height", $(window).height(), "10");
// });

// function createCookie(name, value, days) {
//   var expires;
//   if (days) {
//     var date = new Date();
//     date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
//     expires = "; expires=" + date.toGMTString();
//   } else {
//     expires = "";
//   }
//   document.cookie = escape(name) + "=" + escape(value) + expires + "; path=/";
// }

// pegar com o php
// <?PHP
//    $_COOKIE["height"];
// ?>
