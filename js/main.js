//------------------------------------
//TODOS LOS SCRIPTS
//------------------------------------
//CHANGE COLOR NAV
$(document).ready(function() {
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 50) {
      $(".principal").css("background","#292c2f");
      $(".principal").css("padding","");
        
    }
    else {
      $(".principal").css("background","transparent");
      $(".principal").css("padding","25px 1rem");
    }
  })
})
//CHANGE COLOR NAV

//------------------------------------
//BOTON IR ARRIBA
//------------------------------------

//script para que funcione al 100% el botón ir arriba 

//invocamos al objeto (window) y a su método (scroll), solo se ejecutara si el usuario hace scroll en la página
$(window).scroll(function(){
    if($(this).scrollTop() > 300){ //condición a cumplirse cuando el usuario aya bajado 301px a más.
      $("#js_up").slideDown(500); //se muestra el botón en 300 mili segundos
    }else{ // si no
      $("#js_up").slideUp(500); //se oculta el botón en 300 mili segundos
    }
  });
  
  //creamos una función accediendo a la etiqueta i en su evento click
  $("#js_up i").on('click', function (e) { 
    e.preventDefault(); //evita que se ejecute el tag ancla (<a href="#">valor</a>).
    $("body,html").animate({ // aplicamos la función animate a los tags body y html
      scrollTop: 0 //al colocar el valor 0 a scrollTop me volverá a la parte inicial de la página
    },700); //el valor 700 indica que lo ara en 700 mili segundos
    return false; //rompe el bucle
  });
//BOTON IR ARRIBA

//------------------------------------
//LOADER
//------------------------------------
$(window).onload(function() {
    var contenedor = document.getElementById('contenedor_loader');
    contenedor.style.visibility = 'hidden';
    contenedor.style.opacity = '0';
    
});
//LOADER

//------------------------------------
//SLIDE ANIMATION
//------------------------------------
$(document).ready(function(){
    $(window).scroll(function() {
     $(".slideanim").each(function(){
       var pos = $(this).offset().top;
   
       var winTop = $(window).scrollTop();
         if (pos < winTop + 600) {
           $(this).addClass("slide");
         }
       });
     });
   })
//SLIDE ANIMATION

//------------------------------------
/*TOGGLE ICON NAVBAR*/
function myFunction(x) {
  x.classList.toggle("change");
}
/*TOGGLE ICON NAVBAR*/

