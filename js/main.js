/* Estructura de un fichero de JS
    1. Variables
    2. eventos
    3. 
    4. funciones
    5. llamadas a las funciones
*/

/*
    Delegacion de eventos
    dejar el documento a la escucha por si alguien clica en un elemento especificado.

    document.addEventListener(`click`, (event) => {
        console.log(event.target);
        if (event.target.classList.contains(`boton`)){
            console.log('Es un boton');
            const tag = event.target.getAttribute(`id`);
            createBottons(tag);
            showImageBig(tag);
            showElementCountMessage();

        }
        if (event.target.matches(`.boton`)){
            console.log('Es un boton'); 
        }
        if (event.target.classList.contains(`hijos`)){
            console.log(`Es un hijo`);
        }
        if (event.target.matches(`#ministuras > *`)){
            console.log(`Es un hijo`);  
        }
    })
*/

/* Funcionalidades
    1. Crear botones
        const createBottons = () => {
            console.log('pintando botones');
            }
    2. Crear miniaturas
        const createMiniatures = (tag) => {
            console.log('pintando miniaturas');
            }
    3. Mostrar Grande
        const showImageBig = (tag) => {
            console.log(`pintando imagen grande que corresponda con el ${tag}`);
            }
    4. Mostrar mensaje de imagenes que incluyan el boton seleccionado
        const showElementCountMessage = () => {
            console.log(`pintando mensaje`);
            }

usar filter para crear un nuevo array almacenando los tag 

*/
// https://prod.liveshare.vsengsaas.visualstudio.com/join?7CBACAD50DB79E28D11D2E38839FCCF043AB


const arrEtiquetas = [`Mar`, `Edificio`, `Señales`, `Arena`, `Cosa`];

const arrViajes = [
    {
        titulo: "Titulo de viaje 1",
        srcImg: "/assets/img/viajes/viajes-1.jpg",
        alt: "viaje 1",
        descripcion: "viaje 1",
        tags: [`Mar`, `Arena`]
    },
    {
        titulo: "Titulo de viaje 2",
        srcImg: "/assets/img/viajes/viajes-2.jpg",
        alt: "viaje 2",
        descripcion: "viaje 2",
        tags: [`Mar`, `Edificio`]
    },
    {
        titulo: "Titulo de viaje 3",
        srcImg: "/assets/img/viajes/viajes-3.jpg",
        alt: "viaje 3",
        descripcion: "viaje 3",
        tags: [`Señales`]
    },
    {
        titulo: "Titulo de viaje 4",
        srcImg: "/assets/img/viajes/viajes-4.jpg",
        alt: "viaje 4",
        descripcion: "viaje 4",
        tags: [`Edificio`]
    },
    {
        titulo: "Titulo de viaje 5",
        srcImg: "/assets/img/viajes/viajes-5.jpg",
        alt: "viaje 5",
        descripcion: "viaje 5",
        tags: [`Edificio`]
    },
    {
        titulo: "Titulo de viaje 6",
        srcImg: "/assets/img/viajes/viajes-6.jpg",
        alt: "viaje 6",
        descripcion: "viaje 6",
        tags: [`Mar`, `Arena`]
    },
    {
        titulo: "Titulo de viaje 7",
        srcImg: "/assets/img/viajes/viajes-7.jpg",
        alt: "viaje 7",
        descripcion: "viaje 7",
        tags: [`Edificio`]
    },
]

const pintarBotones = () =>  {
    const botonesContenedorFlex = document.querySelector(".flexBotones");

    arrEtiquetas.forEach((valor, index, array) => {
        const botonesFlex = document.createElement("BUTTON");
        botonesFlex.id = arrEtiquetas[index];
        botonesFlex.classList.add("boton");
        botonesFlex.innerHTML = arrEtiquetas[index];
        console.log(botonesFlex);

        botonesContenedorFlex.append(botonesFlex);
    })
}

const pintarImagenGrande = () => {

}





pintarBotones();
pintarImagenGrande();