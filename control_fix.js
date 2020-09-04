"use strict";

var _this = void 0;

var peristaltic = {
  click_index: 0,
  identificator: "peristaltic",
  sources: ["./img/Persitaltic_01.png", "./img/Persitaltic_02.png", "./img/Peristaltic_realizace.png"],
  text: ["Konstrukční verze v1", "Konstrukční verze v2", "Realizace první verze"],
  popis: ["Mezi moje projekty s fyzickou realizací patří například peristaltické čerpadlo pro dopravu tekutin bez kontaminace. Rám je opatřen chladícími žebry pro odvod tepla.", "Druhá verze čerpadla byla navržena s celistvým zakrytováním. Design této verze se vyznačuje tvarově komplikovanějšími křivky.", "Rám první verze navrženého čerpadla byl vyroben pomocí technologie přesného lití do skořepinové formy. Jednotlivé komponenty jsou pak nakupovány, či výrobkem z 3D tiskárny."]
};
var bladeless = {
  click_index: 0,
  identificator: "bladeless",
  sources: ["./img/Bladeless_01.png", "./img/Bladeless_02.png", "./img/Bladeless.png"],
  text: ["Bezlopatkový ventilátor", "Řez ventilátorem", "Realizace"],
  popis: ["Inspiraci pro výrobu vlastního bezlopatkového ventilátoru jsem našel u společnosti Dyson. Celý ventilátor je vyroben pomocí 3D tisku.", "Na obrázku lze vidět řez ventilátorem, kde je k vidění stator a rotor pohánějící elektromotor. Vzduch je aerodynamicky usměrněn do prstence, který představuje vzduchový tunel. ", "Výsledný funkční ventilátor byl zhotoven pomocí 3D tisku metodou FDM. "]
};
var others = {
  click_index: 0,
  identificator: "others",
  sources: ["./img/BC_CS.png", "./img/DP_VAK.png"],
  text: ["Bakalářská práce", "Diplomová práce"],
  popis: ["Zadáním mé bakalářské práce bylo navrhnout malou stolní kotoučovou pilu pro dřevozpracující průmysl. Pila je vybavena mechanismy pro naklápění a zvedání kotouče. Z technologického hlediska koncept kombinuje vstřikovaný plast a hliník.", "Zadáním mé diplomové práce bylo vytvořit konstrukční řešení vakuového zařízení pro lití do silikonových forem. Toto zařízení je rozdělené do dvou základních prostorů, kdy v horním se odehrává samotný odlévací proces a ve spodním je umístěná forma."]
};
var webdev = {
  click_index: 0,
  identificator: "webdev",
  sources: ["./img/web_RC_01.png", "./img/web_RC_02.png"],
  text: ["Webové stránky", "Responzivní design"],
  popis: ["Tvorba webových stránek s jednoduchým designem na přání zákazníka. Na obrázku je zobrazena úvodní stránka a podstránka. Vývojem této webové stránky jsem si prohloubil znalosti nejen HTML a CSS, ale taky znalosti JavaScriptu, ve kterém jsou napsány klíčové funkce.", "Samozřejmostí je responzivní design, který se přizpůsobí všem typům zařízení."]
};
var canvas_game = {
  click_index: 0,
  identificator: "canvas_game",
  sources: ["./img/canvas_01.png", "./img/canvas_02.png"],
  text: ["CANVAS game", "CANVAS game"],
  popis: ["Velmi jednoduchá hra vytvořená pomocí technologie CANVAS. Aplikace umožňuje spouštět závod dvou vozidel, kdy rychlost vozidel je náhodně generovaná veličina. Na této jednoduché hře jsem si osvojil základní práci s 2D plátnem.", "Kromě závodění samotného lze měnit barvu vozidla. Za vyhrané peníze je pak možno nakoupit díly, které zvýší pravděpodobnost výhry. Tzn. generovaná hodnota rychlosti je vyšší než dříve."]
};
var CVweb = {
  click_index: 0,
  identificator: "CVweb",
  sources: ["./img/CVweb_01.png", "./img/CVweb_02.png"],
  text: ["Resume Builder", "Resume Builder - náhledová část"],
  popis: ["Jedním z nejnovějších projektů, na kterém pracuji je tzv. Resume Builder. Aplikace je rozdělena na editační část a náhledovou část. Tato aplikace je vyvíjena pomocí frameworku Vue.js.", "Samotná náhledová část není určena k editaci. Slouží pouze k detailnímu prohlížení a přiblížení CV. Po kompletním vyplnění bude možné životopis stáhnout v .PDF formátu."]
};
window.addEventListener("hashchange", function () {
  window.scrollTo(window.scrollX, window.scrollY - 80);
}); //////  if screen < 1560 ..... jiná hodnota scrollY

window.addEventListener("scroll", function (event) {
  var sirka = window.screen.width;
  var scroll = this.scrollY;

  if (sirka <= 1560) {
    if (scroll >= 750 && scroll <= 880) {
      document.querySelector("#oddil_02_part2").classList.add("animate_project");
    }

    if (scroll >= 2450 && scroll <= 2580) {
      document.querySelector("#oddil_03_IT").classList.add("animate_project");
    }
  } else {
    if (scroll >= 450 && scroll <= 570) {
      document.querySelector("#oddil_02_part2").classList.add("animate_project");
    }

    if (scroll >= 1500 && scroll <= 1620) {
      document.querySelector("#oddil_03_IT").classList.add("animate_project");
    }
  }
});

window.onload = function () {
  setRank();
};
/* let start_number = 0; */

/* let img = document.querySelector("#peristaltic_container"); */

/* let info = document.querySelector(".projectInfo"); */


var projecttext_zoom = document.querySelector("#imgPopis");
var big_Image = document.querySelector("#bigImage");
var imgText = document.querySelector("#imgText");
var getImgNodeList = document.querySelectorAll(".preview img");
var poleImg = Array.prototype.slice.call(getImgNodeList);
var getInfoNodeList = document.querySelectorAll(".projectInfo");
var poleInfo = Array.prototype.slice.call(getInfoNodeList);
var projecttext_NodeList = document.querySelectorAll(".projecttext");
var projecttext = Array.prototype.slice.call(projecttext_NodeList);
var actualImage;
var getIndex;
var rank_node = document.querySelectorAll(".rank");
var rank_value = document.querySelectorAll(".rank_value");
var rank_array = Array.prototype.slice.call(rank_node);
var rank_value_array = Array.prototype.slice.call(rank_value);
var html_val = 85,
    css_val = 70,
    js_val = 60,
    vuejs = 40,
    git_val = 55,
    nodejs = 25;

function setRank() {
  rank_array[0].style.width = html_val + "%";
  rank_array[1].style.width = css_val + "%";
  rank_array[2].style.width = js_val + "%";
  rank_array[3].style.width = vuejs + "%";
  rank_array[4].style.width = git_val + "%";
  rank_array[5].style.width = nodejs + "%";
  rank_value_array[0].innerText = html_val + "%";
  rank_value_array[1].innerText = css_val + "%";
  rank_value_array[2].innerText = js_val + "%";
  rank_value_array[3].innerText = vuejs + "%";
  rank_value_array[4].innerText = git_val + "%";
  rank_value_array[5].innerText = nodejs + "%";
}

function nextImg(object, index) {
  /* start_number++; */
  object.click_index++;

  if (object.click_index >= object.sources.length) {
    object.click_index = 0;
  }
  /* console.log(object.click_index); */

  /* img.src = peristaltic.sources[object.click_index-1];
  info.innerText = peristaltic.text[object.click_index]; */


  poleImg[index].src = object.sources[object.click_index];
  poleInfo[index].innerText = object.text[object.click_index];
  projecttext[index + 1].innerText = object.popis[object.click_index];
  projecttext_zoom.innerText = object.popis[object.click_index];
  big_Image.src = object.sources[object.click_index];
  imgText.innerText = object.text[object.click_index];
}

function prevImg(object, index) {
  if (object.click_index == 0) {
    object.click_index = object.sources.length;
  }

  object.click_index--;
  /* if (object.click_index < 0) {object.click_index=2} */

  /* console.log(object.click_index); */

  poleImg[index].src = object.sources[object.click_index];
  poleInfo[index].innerText = object.text[object.click_index];
  projecttext[index + 1].innerText = object.popis[object.click_index];
  projecttext_zoom.innerText = object.popis[object.click_index];
  big_Image.src = object.sources[object.click_index];
  imgText.innerText = object.text[object.click_index];
}

var elementzoom = document.querySelector("#imagepreview");

function imagezoom(object) {
  /* console.log("zoom"); */
  //elementzoom.style.display = "flex";
  var sirka = window.screen.width;
  /* console.log(sirka) */

  var imageElement = document.querySelector("#bigImage");

  if (!detectIE()) {
    if (sirka >= 1040) {
      imageElement.src = object.sources[object.click_index];
      imgText.innerText = object.text[object.click_index];
      projecttext_zoom.innerText = object.popis[object.click_index];
      big_Image.src = object.sources[object.click_index];
      fadeIn();

      if (object.identificator == "peristaltic") {
        actualImage = peristaltic;
        getIndex = 0;
      } else if (object.identificator == "bladeless") {
        var bladeless_settings = document.querySelector("#bigImage");
        bladeless_settings.style.width = "initial";
        bladeless_settings.style.height = "500px";
        actualImage = bladeless;
        getIndex = 1;
      } else if (object.identificator == "others") {
        actualImage = others;
        getIndex = 2;
      } else if (object.identificator == "webdev") {
        actualImage = webdev;
        getIndex = 3;
      } else if (object.identificator == "canvas_game") {
        actualImage = canvas_game;
        getIndex = 4;
      } else if (object.identificator == "CVweb") {
        actualImage = CVweb;
        getIndex = 5;
      }
    } else {
      /* console.log("mensi nez 1040") */
      ;
      return;
    }
  } else {
    /* console.log("IE"); */
    return;
  }
}

function moveNext() {
  nextImg(actualImage, getIndex);
}

function moveBack() {
  prevImg(actualImage, getIndex);
}

document.addEventListener("keydown", imageControl);

function imageControl(e) {
  if (e.key == "Escape") {
    closeelement();
  } else if (e.key == "ArrowLeft") {
    moveBack();
  } else if (e.key == "ArrowRight") {
    moveNext();
  }
}

function closeelement() {
  elementzoom.style.display = "none";
}

var bigImage = document.querySelector("#bigImage");

function fadeIn() {
  var fade = document.getElementById("imagepreview");
  var opacity = 0;
  var intervalID = setInterval(function () {
    if (opacity < 1) {
      opacity = opacity + 0.08;
      elementzoom.style.display = "flex";
      fade.style.opacity = opacity;
    } else {
      clearInterval(intervalID);
    }
  }, 30);
}

function animateToElement(element) {
  $('html, body').animate({
    scrollTop: $(element).offset().top - $("header").height() // minus the nav height

  }, 1000);
}

$(document).one('click touchstart', function () {
  $('.zatocimesi').each(function () {
    var zatocenec = String.fromCharCode(58 + 8 - 2),
        that = $(this);
    that.text(that.text().split('').reverse().join(''));
    that.removeClass('zatocimesi');

    if (that.hasClass('po_st')) {
      that.attr('href', ['ma', 'ilt', 'o:', 'mk', 'rajc', 'a29' + zatocenec, 'gma', 'il.com'].join(''));
    }
  });
});