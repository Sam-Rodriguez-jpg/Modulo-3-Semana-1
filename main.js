// Bienvenida del programa
console.log("¡Bienvenido al Sistema Interactivo de Mensajes!");

// Función para validar los datos que se piden solo sea de tipo texto
function onlyString(text) {
    return /^[A-Za-zÁÉÍÓÚÑáéíóúñ\s]+$/.test(text);  
}

// Explicación de cada parte de la expresión regular utilizada en la función onlyString(text):

// ^: Hace que inicie desde el principiio
//  A-Za-z: Permite letras mayúsculas y minúsculas
// ÁÉÍÓÚÑáéíóúñ: Permite letras acentuadas y la letra ñ
// +: Permite uno o más caracteres y no permite espacios vacíos
// \s: Permite espacios en blanco
// $: Hace que termine al final de la cadena
// .test(text): Verifica si el texto cumple con la expresión regular


// Datos que se van a pedir
// Validar el nombre
let name = prompt("Ingresa tu nombre:");
while (!onlyString(name)) {
    alert("Error: Ingresa solo letras en nombre.");
    name = prompt("Ingresa tu nombre:");
}

// Validar el apellido
let lastName = prompt("Ingresa tu apellido:");
while (!onlyString(lastName)) {
    alert("Error: Ingresa solo letras en apellido.");
    lastName = prompt("Ingresa tu apellido:");
}

// La "!" antes de onlyString(name/lastName) convierte el true en false y vicerrsa, lo que hace que entre en bucle mientras el usuario no ingrese algo que no sea valido, en este caso solo datos tipo string.


// Validar la edad
let age = prompt("Ingresa tu edad:")
while (isNaN(age) || !Number.isInteger(parseFloat(age)) || parseInt(age) < 0) {
    alert("Por favor, ingresa una edad válida con números positivos o cero.");
    age = prompt("Ingresa tu edad:");
}

// Explicación de cada parte de la la validación de la edad:

// while (isNaN(age) || !Number.isInteger(parseFloat(age)) || parseInt(age) < 0): Mientras uno de estos no se cumpla (Un espacio vacio o el numero que se ingrese no sea entero o menor que cero.), el programa funcionara perfectamente.
// parseFloat(age): Convierte el valor ingresado a un número de punto flotante, lo que permite verificar despues si es un número válido.
// !Number.isInteger(parseFloat(age)): Verifica si el número ingresado es un número entero.
// parseInt(age) < 0: Verifica si el número ingresado es menor que cero.


// Conversion de datos
age = parseInt(age);

// Condicionales
if (isNaN(age)) {
    console.error("Error: Ingresa una edad válida en números naturales.")
} else if (age <= 0) {
    alert(`Extrañamente... ${name} ${lastName}, Aun no has nacido.`)
    console.error("Error: Como estas escribiendo esto? Recarga la página y pon un numero positivo.")
} else if (age > 0 && age < 18) {
    alert(`¡Hola ${name} ${lastName}, Eres menor de edad.`)
    console.log(`¡Hola ${name} ${lastName}, Eres menor de edad.`)
} else if (age >= 18) {
    alert(`¡Hola ${name} ${lastName}, Eres mayor de edad.`)
    console.log(`¡Hola ${name} ${lastName}, Eres mayor de edad.`)
}

// Como dato extra, no se pide validación si es 0, esta hecho de forma intencional para que muestre ese mensaje.