const h1      = document.querySelector('h1');
const input1  = document.querySelector('#calculo1');
const form    = document.querySelector('#form1');
const input2  = document.querySelector('#calculo2');
const btn     = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');






// btn.addEventListener('click', btnOnClick);  // hacemos el llamado del botón por el id y ejecutamos un evento al dar click, esto ejecutará la function↓ cuando no esté dentro de un form

// function btnOnClick(){  → function para cuando el botón no estaba en el form

btn.addEventListener('click', sumarInputValues);  // para mirar el event desde el botón


// form.addEventListener('submit', sumarInputValues); // para mirar el event desde el formulario

  function sumarInputValues(event){    // para que no se recargue se usará un event

    // console.log({event});            // acá se trae el event en consola entre {event}
    // event.preventDefault();          // con esto se logra solo tomar el submit pero no se recarga la pág
    // const sumaInputs  = Number(input1.value) + parseInt(input2.value);  // pasando a números
    const sumaInputs  = input1.value + input2.value;                    // pasando a tal cual y concatena

    pResult.innerText = 'Resultado ' + sumaInputs;                      // resultado de la suma o concatenación     
}