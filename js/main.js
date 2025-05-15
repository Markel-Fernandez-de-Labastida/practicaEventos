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
