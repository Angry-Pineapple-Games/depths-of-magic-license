var myWebContent = { 
    
    //Sections

    //Titles
    title1ENG: "Our games",
    title1ESP: "Nuestros juegos",
    title2ENG: "Get to know the team",
    title2ESP: "Conoce al equipo",
    title3ENG: "About us",
    title3ESP: "Quiénes somos",
    title4ENG: "Contact",
    title4ESP: "Contacto",
    title5ENG: "References",
    title5ESP: "Referencias",

    //About us
    descCompanyENG: "Angry Pineapple Games starts its journey on september 16th of 2019, with five founder members: a game and narrative designer, a pure programmer, a flex programmer, a 2D artist and a 3D artist."+
    "<br/>A month after its foundation, at october 20th, our first game finishes its development: Depths of Magic. And, after that, the team starts to work in the next game, which is available at december 7th: My Jumping Knight."+
    "<br/>Focused on developing games for web, which can be played both in phones and computers, from Angry Pineapple Games we want to give  our public the most fun and enjoyment as possible, anywhere, anytime.",

    descCompanyESP: "Angry Pineapple Games nace el 16 de septiembre de 2019 con la unión de cinco miembros que abarcan distintas ramas del desarrollo de videojuegos: un game y narrative designer, un programador puro, un programador mixto, un artista 2D y una artista 3D."+ 
    "<br/>Un mes después de la fundación del estudio, el 20 de octubre, finaliza el desarrollo de nuestro primer juego para web: Depths of Magic. Y, tras ello, el equipo comienza inmediatamente a desarrollar su segundo juego, que ve la luz a 7 de diciembre: My Jumping Knight."+
    "<br/>Enfocados en el desarrollo de juegos para web, que puedan ser jugados tanto en móviles como en ordenadores y tablets, Angry Pineapple Games busca que su público disfrute y se divierta en cualquier momento y en cualquier lugar.",

    descJuanENG: "Project manager, narrative and game designer, and community manager. My main goal with videogame development is to give the user new experiences, and " +
    "also being able to tell of all these stories that are in my mind. I also do pixel-art and I'm very interested in gamification and the videogames' potential for education. " +
    "While I'm a designer, I also work as programmer in some languages. <br/>Favorite videogames: Chrono Trigger, The Secret of Monkey Island and Castlevania Rondo of Blood.",
    descJuanESP: "Gestor de proyectos, diseñador de juego y narrativo, y community manager. Mi interés principal a la hora de crear videojuegos es " +
     "ofrecer experiencias únicas al usuario, y sobre todo de contar todas esas historias que pueblan mi mente y que espero que algún día puedan llegar " +
     "a más gente. También hago pixel-art y tengo un gran interés en la gamificación y el potencial de los videojuegos en la rama educacional. Pese a ser diseñador, " +
     "también me desempeño en labores de programación en varios lenguajes. <br/>Videojuegos favoritos: Chrono Trigger, The Secret of Monkey Island y Castlevania Rondo of Blood.",
     
    descLauraENG: "Videogame development student and 3D generalist. I feel passion for videogames since I was a child and I got started in the 3D world by creating mods for The Sims 2 when I was 9 or 10 years old. I'm also interested in 3D printing and creation of props for cosplay with help from modeling.<br/>Favorite videogames: Bioshock, Zero Escape and To The Moon.",
    descLauraESP: "Estudiante de desarrollo de videojuegos y 3D generalist. Siento pasión por los videojuegos desde pequeña y me inicié en el mundillo del 3D creando mods para Los Sims 2 cuando tenía 9 o 10 años. Además de crear contenido para videojuegos estoy interesada en la impresión 3D y la creación de props para cosplay con la ayuda del modelado.<br/>Videojuegos favoritos: Bioshock, Zero Escape y To The Moon",

    descMarioENG: "2D artist and animator. Focused on character design, environments, UI and props, mainly with cartoon style, but I also enjoy working with semi-realistic styles and pixel art. My main goal as a designer is to get an unique and defined style that makes the player feel the character's personality with just a single sight. I also like modeling and 2D & 3D animation.<br/>Favorite videogames: Monster Hunter, The Last of Us and Bloodborne.",
    descMarioESP: "Artista 2D y animador. Centrado en el diseño de personajes, escenarios, IU y props, con un estilo principalmente cartoon, aunque también me gusta trabajar el semi-realismo y pixel art. Mi objetivo es que los diseños de los personajes tengan un estilo propio y definido, que transmitan al jugador su carácter y personalidad con un solo vistazo. Me gusta también el modelado y la animación 2D y 3D."
    + " <br/>Videojuegos favoritos: Monster Hunter, Bloodborne y The Last of Us.",

    descJaviESP: "En Depths of Magic, programador del engine y del flujo de juego. En My Jumping Knight, programador del servidor y las comunicaciones del cliente con el servidor, además de apoyo en tareas del cliente como el cambio de idioma, almacenamiento de datos y el flujo de pantallas. Centrado en programación de inteligencia artificial. Cómodo con lenguajes como Python, C#, Java y JavaScript. En constante evolución y mejora tanto en estos lenguajes como otros. <br/>Videojuegos favoritos: The Last of Us, Gears of War y Total War.",
    descJaviENG: "Engine and game flow programmer of Depths of Magic. Server programmer of My Jumping Knight, while also doing other tasks like language switch and data storage in the game. Focused on artificial inteligence programming. I feel comfortable working in languages like Python, C#, Java and JavaScript. I keep improving my skills with these and other languages. <br/> Favorite videogames: The Last of Us, Gears of War and Total War.",

    descCesarESP: "Desarrollador de videojuegos con rol flexible, pero enfocado principalmente a la programación. Programador del sistema de animaciones de Depths of Magic y de las mecánicas de My Jumping Knight. También me defiendo en game design y arte 2D, de manera que puedo tocar todas las ramas del desarrollo y entenderme bien con el resto del equipo. Con ganas de aprender y crear, espero llegar a los jugadores y que se diviertan con mis juegos.<br/>Juegos favoritos: Pokémon SoulSilver, Super Smash Bros Ultimate y Kirby Super Star Ultra.",
    descCesarENG: "Flexible-role game developer, but mainly focused in programming. I programmed the animation system of Depths of Magic and the engine and mechanics of My Jumping Knight. I also work as game designer and 2D artist, so I can do stuff in all development branches and have a great understanding with all team members. I want to learn and create, and I hope to get to players and that they enjoy my games.<br/>Favorite games: Pokémon SoulSilver, Super Smash Bros Ultimate and Kirby Super Star Ultra. ",
  
    initialSetup : function () {
        $('#CompanyDesc').html(myWebContent.descCompanyENG);
        $('#JuanDesc').html(myWebContent.descJuanENG);
        $('#CesarDesc').html(myWebContent.descCesarENG);
        $('#MarioDesc').html(myWebContent.descMarioENG);
        $('#LauraDesc').html(myWebContent.descLauraENG);
        $('#JavierDesc').html(myWebContent.descJaviENG);
        $('#firstMessage').html(myWebContent.title3ENG);
        $("#presentationGames").html(myWebContent.title1ENG);
        $("#presentation").html(myWebContent.title2ENG);
        $("#contactBelow").html(myWebContent.title4ENG);
        $("#references").html(myWebContent.title5ENG);
    }
}

$(document).ready(function () {
    myWebContent.initialSetup();
    let isMobile = detectmob();
    if (isMobile){
        $('#carImg1').attr('src', 'webAssets/background1_mobile.png');
        $('#carImg2').attr('src', 'webAssets/background2_mobile.png');
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
    ["firstMessage", "normal", myWebContent.title3ENG, myWebContent.title3ESP],
    ["contactBelow", "normal", myWebContent.title4ENG, myWebContent.title4ESP],
    ["references", "normal", myWebContent.title5ENG, myWebContent.title5ESP],
    
    ["JuanDesc","normal",myWebContent.descJuanENG,myWebContent.descJuanESP],
    ["MarioDesc","normal",myWebContent.descMarioENG,myWebContent.descMarioESP],
    ["LauraDesc","normal",myWebContent.descLauraENG,myWebContent.descLauraESP],
    ["CesarDesc","normal",myWebContent.descCesarENG,myWebContent.descCesarESP],
    ["JavierDesc","normal",myWebContent.descJaviENG,myWebContent.descJaviESP],
    ["CompanyDesc", "normal", myWebContent.descCompanyENG, myWebContent.descCompanyESP],

    ["code", "normal", "Code", "Código"],
    ["animation", "normal", "Animation", "Animación"],
    ["art", "normal", "Images", "Imágenes"],
    ["music", "normal", "Music", "Música"],
    ["backTop", "normal", "Back to the top", "Volver arriba"],

    ["sec1", "normal", myWebContent.title3ENG, myWebContent.title3ESP],
    ["sec2", "normal", myWebContent.title1ENG, myWebContent.title1ESP],
    ["sec3", "normal", myWebContent.title2ENG, myWebContent.title2ESP],
    ["sec4", "normal", myWebContent.title4ENG, myWebContent.title4ESP],
    ["sec5", "normal", myWebContent.title5ENG, myWebContent.title5ESP],


    ["gameDesc", "normal", "Face your fears and unleash the power of magic in this dark roguelike", "Enfrenta a tus miedos y desata el poder de la magia en este oscuro roguelike"],
    ["gameTitle2", "normal", "My Jumping Knight", "My Jumping Knight"],
    ["gameDesc2", "normal", "Compete with other players anywhere, anytime!", "Compite con otros jugadores en cualquier momento y en cualquier lugar"],
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

