$(document).ready(function() {
  var cards = [
    "angular",
    "apache",
    "css3",
    "github",
    "javascript",
    "php",
    "mysql",
    "java"
  ];
  var pares = cards.concat(cards); //Criar pares dos cards
  var escolherCard = [];
  var cardsFlip = [];

  var jogoIniciado = false;
  var jogando = false;
  var antesDoTempo = false;
  var contagemRegressiva = false;
  var vencer = false;
  var paresContador = 0;
  var time = 90;

  embaralhar(pares); //Misturar cards

  $(".back").each(function(i, element) {
    $(this).attr("id", pares[i]); //define o id e acesso o css
  });

  $(".flip-container").click(function() {
    if (!antesDoTempo) {
      if (!jogoIniciado && !jogando) {
        //antes do jogo começar mostre todas as cartas para o usuário e volte

        jogando = true;

        $(".flip-container").each(function() {
          $(this).toggleClass("flip");
        });

        setTimeout(function() {
          $(".flip-container").each(function() {
            $(this).toggleClass("flip");
          });

          jogoIniciado = true;
          jogando = false;
        }, 2000);
      } else if (
        $(this)
          .find(".back")
          .attr("id") == escolherCard[0] &&
        escolherCard[1] == null &&
        $(this).hasClass("flip") &&
        !jogando
      ) {
        jogando = true;

        escolherCard[0] = null; //Se uma carta foi escolhida e clicada vire a
        $(this).toggleClass("flip");

        jogando = false;
      } else if ($(this).hasClass("flip")) {
        return; //retornar cartão
      } else if (
        escolherCard[0] == null &&
        escolherCard[1] == null &&
        !$(this).hasClass("flip") &&
        !jogando
      ) {
        if (!contagemRegressiva) {
          contagemRegresiva();
        }

        jogando = true;

        escolherCard[0] = $(this)
          .find(".back")
          .attr("id"); //caso se nenhum cartao for escolhido armazene o em [0]
        $(this).toggleClass("flip");

        jogando = false;
      } else if (
        escolherCard[0] != null &&
        escolherCard[1] == null &&
        !$(this).hasClass("flip") &&
        !jogando
      ) {
        jogando = true;

        escolherCard[1] = $(this)
          .find(".back")
          .attr("id"); //se nenhum segundo cartão tiver sido virado, guarde a marca do cartão escolhido em fazer a carta [1] e vire-o
        $(this).toggleClass("flip");

        if (escolherCard[0] == escolherCard[1]) {
          escolherCard[0] = null;
          escolherCard[1] = null;

          paresContador++;

          if (paresContador == cards.length) {
            vencer = true;
            alert("Você Venceu :D");
          }

          jogando = false;
        } else {
          //se nao der matach na cartas vire-as novamente

          cardsFlip[0] = escolherCard[0];
          cardsFlip[1] = escolherCard[1];

          escolherCard[0] = null;
          escolherCard[1] = null;

          setTimeout(function() {
            $("*[id*=" + cardsFlip[0] + "]").each(function() {
              $(this)
                .closest(".flip")
                .toggleClass("flip");
            });
            $("*[id*=" + cardsFlip[1] + "]").each(function() {
              $(this)
                .closest(".flip")
                .toggleClass("flip");
            });

            jogando = false;
          }, 800);
        }
      }
    } else {
      alert("Seu tempo acabou!");
    }
  }); //Flip Container fim

  //Embaralhar os cards
  function embaralhar(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  function contagemRegresiva() {
    contagemRegressiva = true;

    var timeStart = +new Date();
    var timer = setInterval(function() {
      var timeNow = +new Date();
      var diferenca = (timeNow - timeStart) / 1000;

      if (time > 0 && !vencer) {
        time = 90;
        time = Math.floor(time - diferenca);
        $(".timer").text(time);
      } else if (vencer) {
        //parar o tempo quando jogar acabars

        clearInterval(timer);
      } else {
        //parar o tempo

        antesDoTempo = true;
        alert("Seu tempo acabou :(");

        clearInterval(timer);
      }
    }, 250);
  }
}); //fim do documento.
