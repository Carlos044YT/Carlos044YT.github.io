//variables con su explicación

let slot_screen = document.getElementById("Tragamonedas-pantalla");
let reel = document.getElementsByClassName("Carril");
let reels = document.getElementsByClassName("Carriles");
let stop_btn = document.getElementsByClassName("Parar");
let start_btn = document.getElementById("Empezar");

let sec = 100; //Velocidad de la rotación del carril(Medida en segundos)
let stopreelflag = []; //Bandera para detener el carril
let reelcounts = []; //Recuento de carriles
let slotframeheight; //altura del marco de la maquina tragamonedas
let slotreelsheight; //altura de los carriles
let slotreelitemheight; //altura del elemento del carrete
let slotreelstartheight; //altura de inicio del carrete

//inicio de las acciones
let slot ={
    init:function(){
        stopreelflag[0] = stopreelflag[1] = stopreelflag[2] = false;
        reelcounts[0] = reelcounts[1] = reelcounts[2] = 0;
    },

    //event al dar click
    start:function(){
        slot.init();
        for(let index = 0 ; index < 3 ; index++){//el for inicia la anmimación en cada ranura para que gire
            slot.animation(index);
        }
    },

    //evento detener tragamonedas al dar click
    stop:function(i){
        stopreelflag[i] = true
        if(stopreelflag[0] && stopreelflag[1] && stopreelflag[2]){
            start_btn.removeAttribute("disabled");//Hace que el boton de strart no se pueda presionar hasta que todos los carriles paren
        }
    },

    //Establecer la primer posición
    resetLocationInfo:function(){
        slotframeheight = slot_screen.offsetHeight; // Obtiene la altura del contenedor de la pantalla 
        slotreelsheight = reels[0].offsetHeight; // Obtiene la altura del primer carril
        slotreelitemheight = reel[0].offsetHeight; // Obtiene la altura del primer elemento del carril
        slotreelstartheight = -slotreelsheight; // Establece la posición inicial de los carriles (por encima del área visible)
    
        // Calcula la posición inicial de los carriles
        slotreelstartheight += slotframeheight - (slotframeheight / 2) + slotreelitemheight * 3 / 2;
    
        // Establece la posición inicial de cada carril en base al cálculo anterior
        for (let i = 0; i < reels.length; i++) {
            reels[i].style.top = String(slotreelstartheight) + "px"; // Establece la propiedad 'top' del carril en píxeles
        }
    },

    //Mover la tragamonedas
    animation:function(index){
        if(reelcounts[index] >= 8){// si se pasa de 8 se reinicia la animación
            reelcounts[index] = 0;
        }
        $(".Carriles").eq(index).animate({// Selecciona el carril en base al índice y anima su movimiento
            "top":slotreelstartheight + (reelcounts[index]*slotreelitemheight)// La propiedad "top" se anima para mover el carril hacia arriba o abajo según el contador del carril
        },
        {
            duration:sec,
            easing:"linear",// Tipo de easing para la animación (en este caso, lineal)  easing se refiere a cómo se anima un cambio de valor entre un estado inicial y un estado final.
            complete:function(){
                if(stopreelflag[index]){// Comprueba si la bandera de detener para este carril está activada
                    return; // Si está activada, sale de la función y detiene la animación
                }
                reelcounts[index]++;
                slot.animation(index);// Llama recursivamente a la función animation para continuar la animación del carril
            }
        });
    },
};

window.onload = function(){//esta funcion se ejecuta al cargar la pagina
    slot.init();//inicia la funcion de inicio
    slot.resetLocationInfo();// resetea la información local 
    start_btn.addEventListener("click",function(e){//Agrega un "escuchador de eventos" al botón con el id start_btn, para el evento de clic. Cuando el botón es clicado, se ejecuta la función anónima.
        e.target.setAttribute("disabled",true)// Deshabilita el botón de inicio cuando se hace clic en él
        slot.start();
        for(let i = 0;i<stop_btn.length;i++){
            stop_btn[i].removeAttribute("disabled");// Esto accede al elemento en la posición i dentro de la colección stop_btn y elimina el atributo "disabled". Esto efectivamente habilita esos botones de detención para que puedan ser clicados o interactuados.
        }
    });
    for(let i=0;i<stop_btn.length;i++){
        stop_btn[i].addEventListener("click",function(e){
            slot.stop(e.target.getAttribute("data-val"));//obtiene el valor del boton al darle click para desactivarlo
        })
    }
}
