var myWebContent = { 
    
    //Sections

    //Titles
    title1ENG: "Our games",
    title1ESP: "Nuestros juegos",
    title2ENG: "Get to know the team",
    title2ESP: "Conoce al equipo",
    title3ENG: "Who are we?",
    title3ESP: "¿Quiénes somos?",
    title4ENG: "Contact",
    title4ESP: "Contacto",
    title5ENG: "References",
    title5ESP: "Referencias",

    //About us
    descCompanyENG: "Gimme that eo",
    descCompanyESP: "Pasame la hooka!",

    descJuanENG: "This is Juan's description",
    descJuanESP: "Descripcion de Juan",

    descLauraENG: "This is Laura's description",
    descLauraESP: "Descripcion de Laura",

    descMarioENG: "This is Mario description",
    descMarioESP: "Descripcion de Mario",

    descJaviESP: "Descripcion de Javi",
    descJaviENG: "This is Javi description",

    descCesarESP: "Descripcion de Cesar",
    descCesarENG: "This is Cesar description",

    //Other stuff

    //About us
    role1ENG : "Game designer, project manager, community manager and sound designer.",
    role1ESP : "Diseñador de juego, gestor de proyecto y community manager.",
    role2ENG : "Artist and animator.",
    role2ESP : "Artista y animador.",
    role3ENG : "Programmer, musician and game designer.",
    role3ESP : "Programador, músico y diseñador de juego.",
    role4ENG : "Artist and animator.",
    role4ESP : "Artista y animadora.",
    role5ENG : "Programmer and sound designer.",
    role5ESP : "Programador y diseñador sonoro.",

    //GDD
    gddContent : "GDD not loaded",

    initialSetup : function () {
        $('#tutorial1').html(myWebContent.title1ENG);
        $('#tutorial2').html(myWebContent.title2ENG);
        $('#tutorial3').html(myWebContent.title3ENG);
        $('#tutorial4').html(myWebContent.title4ENG);
        $('#description1').html(myWebContent.tutorial1ENG);
        $('#description2').html(myWebContent.tutorial2ENG);
        $('#description3').html(myWebContent.tutorial3ENG);
        $('#description4').html(myWebContent.tutorial4ENG);
    }
}

$(document).ready(function () {
    myWebContent.initialSetup();
    let isMobile = detectmob();
    if (isMobile){
        $('#carImg1').attr('src', 'webAssets/background1_mobile.png');
        $('#carImg2').attr('src', 'webAssets/background2_mobile.png');
        $('#carImg3').attr('src', 'webAssets/background3_mobile.png');
    }

    $("#btnSpanish").change(function () {
        sessionStorage.setItem("langDom", "spanish");
        changeLangHtml("es");
    });

    $("#btnEnglish").change(function () {
        sessionStorage.setItem("langDom", "english");
        changeLangHtml("en");
    });

});



var ids = [
    ["#btnSpanish", "radio", "Spanish", "Español"],
    ["#btnEnglish","radio","English","Inglés"],

    ["presentationGames", "normal", myWebContent.title1ENG, myWebContent.title1ESP],
    ["presentation", "normal", myWebContent.title2ENG, myWebContent.title2ESP],
    
    ["JuanDesc","normal",myWebContent.descJuanENG,myWebContent.descJuanESP],
    ["MarioDesc","normal",myWebContent.descMarioENG,myWebContent.descMarioESP],
    ["LauraDesc","normal",myWebContent.descLauraENG,myWebContent.descLauraESP],
    ["CesarDesc","normal",myWebContent.descCesarENG,myWebContent.descCesarESP],
    ["JavierDesc","normal",myWebContent.descJaviENG,myWebContent.descJaviESP],


    ["contactBelow", "normal", "Contact", "Contacto"],
    ["gddBelow", "normal", "Game Design Document", "Documento de Diseño de Juego"],
    
    ["references", "normal", "References", "Referencias"],
    ["code", "normal", "Code", "Código"],
    ["animation", "normal", "Animation", "Animación"],
    ["art", "normal", "Images", "Imágenes"],
    ["music", "normal", "Music", "Música"],
    ["backTop", "normal", "Back to top", "Volver arriba"],
    ["gameDesc", "normal", "Face your fears and unleash the power of magic in this dark roguelike", "Enfrenta a tus miedos y desata el poder de la magia en este oscuro roguelike"],
    ["gameTitle2", "normal", "Coming soon", "Próximamente"],
    ["gameDesc2", "normal", "In the next weeks we'll show you our next project. Stay tuned!", "En las próximas semanas os mostraremos nuestro nuevo proyecto. ¡Permaneced al tanto!"],
    ["presenTitle", "normal", "Who we are?", "¿Quiénes somos?"],
    ["presenDesc", "normal", "A group of people focused on your enjoyment. We do what we love and we love videogames", "Un grupo de personas centradas en tu disfrute. Hacemos lo que nos encanta, y nos encantan los videojuegos"],
];

/*Auxiliar functions*/
function changeLangHtml(lang) {
    let newLang = 2;
    if(lang==="es") {newLang = 3;}
    for(var idx=0; idx<ids.length; idx++){
        if(ids[idx][1]==="radio") {$(ids[idx][0]).get(0).nextSibling.innerHTML = ids[idx][newLang];}
        else if(ids[idx][1]==="span") {document.getElementById(ids[idx][0]).innerHTML = ids[idx][newLang];}
        else{document.getElementById(ids[idx][0]).innerHTML = ids[idx][newLang];}
    }
}

function detectmob() { 
    if( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
    ){
       return true;
     }
    else {
       return false;
     }
     //Reference: https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser
}

//Smooth Scrolling - Reference: https://codepen.io/brianhaferkamp/details/xqyeQP
$('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 60)
        }, 1000);
        return false;
      }
    }
  });

