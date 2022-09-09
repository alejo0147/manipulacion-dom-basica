const h1      = document.querySelector('h1');
const p       = document.querySelector('p');
const parrafo = document.getElementsByClassName('parrafo');
const pid     = document.getElementById('pid');
const input   = document.querySelector('input');

console.log(input.value);

console.log(
    {
        h1,
        p,
        parrafo,
        pid,
        input,
    }
);

h1.innerHTML = 'Hello. <br> friends';      // modífica el html
h1.innerText = 'Hello. <br> friends';      // modífica el texto
// console.log(h1.getAttribute('class'));     // leer atributos
// h1.setAttribute('class', 'azul');          // modificar 

h1.classList.add('rojo');                  // agregar clase
h1.classList.remove('verde');              // remover clase
// h1.classList.toggle('verde');              // dependiendo si tiene la clase, la quite o no.
// h1.classList.contains('verde');            // condicional, true o false dependiendo si nuestro elemento tiene la clase

input.value = '456';                       // modificar el value del input

const img = document.createElement('img'); // crear un elemento
img.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBT9FQ8MZWZtq98kcWGraPnht0Ln4yMGjkng&usqp=CAU');                                // modificar los atributos e insertar una imagen en el src

console.log(img);                          // imprimir la etiqueta img

pid.innerHTML = '';                        // modifica lo que esté en el párrafo por un espacio vacio

pid.append(img);                           // se dirá que irá dentro del párrafo que tiene el id pid y está vacio