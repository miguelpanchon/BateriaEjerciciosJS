//ejercicio 1
console.log('%cEjercicio 1  ****************************', 'color: yellow; font-weight: bold;');

const fej1 = (p0 = "sin parámetros: a=10 y b=5", a = 10, b = 5) => {
  console.log(p0, a + b);
}

fej1();
fej1("Le paso como parámetro que a=30", 30);
fej1("Le paso 2 parámetros: a=20 y b=35", 20, 35);





// ejercicio2

//2.1
console.log('%cEjercicio 2.1  ****************************', 'color: yellow; font-weight: bold;');
const game =
{
  title: 'The Last of Us 2',
  gender: ['action', 'zombie', 'survival'],
  year: 2020
};

// Destructuración del objeto
const { title, gender, year } = game;
console.log("la desestructuración del objeto se consigue con:  const { title, gender, year } = game;");
// Imprimir los valores obtenidos
console.log("saco por consola los valores del objeto desestructurado");
console.log(title);  // Output: The Last of Us 2
console.log(gender); // Output: ['action', 'zombie', 'survival']
console.log(year);   // Output: 2020

console.log("console.log(title);\nconsole.log(gender);\nconsole.log(year);");

// 2.2
console.log('%cEjercicio 2.2  ****************************', 'color: yellow; font-weight: bold;');
const fruits = ['Banana', 'Strawberry', 'Orange'];

// Destructuración para crear las variables fruit1, fruit2, y fruit3
const [fruit1, fruit2, fruit3] = fruits;
console.log("const [fruit1, fruit2, fruit3] = fruits;");
console.log("console.log(fruit1);\nconsole.log(fruit2);\nconsole.log(fruit3); ")

// Imprime las variables por consola
console.log(fruit1); //  Banana
console.log(fruit2); //  Strawberry
console.log(fruit3); //  Orange


//2.3
console.log('%cEjercicio 2.3  ****************************', 'color: yellow; font-weight: bold;');
const animalFunction = () => {
  return { name23: 'Bengal Tiger', race23: 'Tiger' };
};

// Destructuring para crear dos variables
const { name23, race23 } = animalFunction();

// Imprimir por consola las variables
console.log('Name:', name23);
console.log('Race:', race23);


//2.4
console.log('%cEjercicio 2.4  ****************************', 'color: yellow; font-weight: bold;');
const car = { nombre: 'Mazda 6', itv: [2015, 2011, 2020] };
console.log("parto de: const car = { nombre: 'Mazda 6', itv: [2015, 2011, 2020] };")

// Destructuración para crear las variables name e itv
console.log("desestructuro: const { nombre, itv } = car;")
const { nombre, itv } = car;

// Destructuración para crear variables para cada uno de los años
const [year1, year2, year3] = itv;
console.log("desestructuro: const [year1, year2, year3] = itv;")
console.log("imprimo las variables por consola:")

// Imprime las variables por consola
console.log(nombre);   // Mazda 6
console.log("itv: ", itv);    //  [2015, 2011, 2020]
console.log("año 1:", year1);  //  2015
console.log("año 2: ", year2);  //  2011
console.log("año 3: ", year3);  //  2020

// 3
console.log('%cEjercicio 3.1  ****************************', 'color: yellow; font-weight: bold;');

console.log("parto de const pointsList = [32, 54, 21, 64, 75, 43] ");
const pointsList = [32, 54, 21, 64, 75, 43]
console.log("copio por valor: const pointsList2= [...pointsList];")
const pointsList2 = [...pointsList];
console.log("original: ", pointsList, "\ncopia:    ", pointsList2)

console.log("cambio el primer valor del array nuevo y saco los dos por consola:");
pointsList2[0] = 99;
console.log("original: ", pointsList, "\ncopia:    ", pointsList2)

console.log('%cEjercicio 3.2  ****************************', 'color: yellow; font-weight: bold;');
const toy = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' };
const toy2 = { ...toy };
console.log("original: ", toy, "\ncopia:    ", toy2);
toy2.name = "nombre cambiado";
console.log("cambio el nombre al toy2");
console.log(toy2);

console.log('%cEjercicio 3.3  ****************************', 'color: yellow; font-weight: bold;');
const pointsLista1 = [32, 54, 21, 64, 75, 43];
const pointsLista2 = [54, 87, 99, 65, 32];
const pointsTotal = [...pointsLista1, ...pointsLista2]
console.log("lista 1: ", pointsLista1, "\nlista2: ", pointsLista2, "\nlista combinada: ", pointsTotal);

console.log('%cEjercicio 3.4  ****************************', 'color: yellow; font-weight: bold;');

const toy1 = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' };
const toyUpdate = { lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk'] }
const toyTotal = { ...toy1, ...toyUpdate };
console.log(toy1, toyUpdate);
console.log(toyTotal);

console.log('%cEjercicio 3.5  ****************************', 'color: yellow; font-weight: bold;');
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
const colorsModificado = [...colors];
colorsModificado.splice(1, 1);
console.log("original: ", colors);
console.log("modificado: ", colorsModificado);


console.log('%cEjercicio 4.1  ****************************', 'color: yellow; font-weight: bold;');
const users = [
  { id: 1, name: 'Abel' },
  { id: 2, name: 'Julia' },
  { id: 3, name: 'Pedro' },
  { id: 4, name: 'Amanda' }];

//recorro cada elemento de users, y sólo coge el nombre
const soloNombresArray = users.map(user => user.name);
console.log(soloNombresArray);


console.log('%cEjercicio 4.2  ****************************', 'color: yellow; font-weight: bold;');
const users42 = [{ id: 1, name: 'Abel' }, { id: 2, name: 'Julia' }, { id: 3, name: 'Pedro' }, { id: 4, name: 'Amanda' }];
const soloNombresArray42 = users.map(user => user.name);
soloNombresArray42.forEach((name, index) => {
  if (name.startsWith("A")) {
    soloNombresArray42[index] = "Anacleto";
  }
  console.log(soloNombresArray42[index])
});

console.log('%cEjercicio 4.3  ****************************', 'color: yellow; font-weight: bold;');
const cities = [
  { isVisited: true, nombre: 'Tokyo' },
  { isVisited: false, nombre: 'Madagascar' },
  { isVisited: true, nombre: 'Amsterdam' },
  { isVisited: false, nombre: 'Seul' }];


for (const city of cities) {
  if (city.isVisited) {
    city.nombre = city.nombre + " visitado";
  }
  console.log(city.isVisited, city.nombre);
}
console.log('%cEjercicio 5.1  ****************************', 'color: yellow; font-weight: bold;');
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const agesFiltrado = ages.filter(age => age > 18);
console.log(agesFiltrado);

console.log('%cEjercicio 5.2  ****************************', 'color: yellow; font-weight: bold;');
const ages2 = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const agesFiltrado2 = ages.filter(age => age % 2 === 0);
console.log(agesFiltrado2);

console.log('%cEjercicio 5.3  ****************************', 'color: yellow; font-weight: bold;');
const streamers = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }];
const juego = 'League of Legends';

const streamersFiltrados = streamers.filter(streamer => streamer.gameMorePlayed === juego)

console.log("los streamers que mas han jugado a ", juego);
streamersFiltrados.forEach(element => {
  console.log(element);
});

console.log('%cEjercicio 5.4  ****************************', 'color: yellow; font-weight: bold;');
var streamersU = [];
streamers.forEach(element => {
  const nombre = element.name;
  if (nombre.includes("u")) {
    console.log("entra en el bucle if");
    console.log(nombre);
    streamersU.push(element);
  }
});
console.log(streamersU);
console.log('%cEjercicio 5.5  ****************************', 'color: yellow; font-weight: bold;');
var streamersL = [];
streamers.forEach(element => {
  const juego = element.gameMorePlayed;
  if (juego.includes("Legends")) {
    console.log("entra en el bucle if");
    console.log(juego);
    streamersL.push(element);
  }
  if (element.age > 35) {
    element.gameMorePlayed = element.gameMorePlayed.toUpperCase();
  }
});
console.log(streamersL);

console.log('%cEjercicio 5.6  ****************************', 'color: yellow; font-weight: bold;');
//56 = Ejercicio 5.6
const streamers56 = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];
// function triggered by the event 
function handleInputChange() {
  const filterText56 = document.getElementById('filterInput56').value.toLowerCase();
  const filteredStreamers56 = streamers56.filter(streamer =>
    streamer.name.toLowerCase().includes(filterText56)
  );

  console.log('Filtered Streamers:');
  console.table(filteredStreamers56); // This makes it MUCH more readable
}

// Store the element reference in a variable
const filterInput56 = document.getElementById('filterInput56');

// Attach event listener in two lines
filterInput56.addEventListener('input', handleInputChange);

console.log('%cEjercicio 6  ****************************', 'color: yellow; font-weight: bold;');
console.log('%cEjercicio 6.1  ****************************', 'color: yellow; font-weight: bold;');

const numbers61 = [32, 21, 63, 95, 100, 67, 43];
//first number that equals 100
const result61 = numbers61.find((number) => number === 100);
console.log(result61); // Resultado: 100
console.log('%cEjercicio 6.2  ****************************', 'color: yellow; font-weight: bold;');

const movies62 = [
  { title: 'Madagascar', stars: 4.5, date: 2015 },
  { title: 'Origen', stars: 5, date: 2010 },
  { title: 'Your Name', stars: 5, date: 2016 }
];

console.log("evalua películas hasta que encuentre la primera que sea del año especificado")
// Condition function: Checks if the 'date' property of an object is 2010
const specificDate = (obj) => obj.date == 2010;

// Use the find() method to find the first object that satisfies the condition
const result62 = movies62.find((obj, index) => {
  // Check if the condition is met
  if (specificDate(obj)) {
    // Return an object with the found object and its index
    return { object: obj, index: index };
  }
});

// Display the result in the console
console.log(`${result62.title} del ${result62.date}`);


console.log('%cEjercicio 6.3  ****************************', 'color: yellow; font-weight: bold;');

const aliens = [
  { name: 'Zalamero', planet: 'Eden', age: 4029 },
  { name: 'Paktu', planet: 'Andromeda', age: 32 },
  { name: 'Cucushumushu', planet: 'Marte', age: 503021 }
];

const mutations = [
  { name: 'Porompompero', description: 'Hace que el alien pueda adquirir la habilidad de tocar el tambor' },
  { name: 'Fly me to the moon', description: 'Permite volar, solo y exclusivamente a la luna' },
  { name: 'Andando que es gerundio', description: 'Invoca a un señor mayor como Personal Trainer' }
];

// Encontrar el alien con nombre 'Cucushumushu'
const foundAlien = aliens.find(alien => alien.name === 'Cucushumushu');

// Encontrar la mutación con nombre 'Porompompero'
const foundMutation = mutations.find(mutation => mutation.name === 'Porompompero');

// Fusionar los objetos usando spread operator
const fusedObject = {
  ...foundAlien,
  mutation: { ...foundMutation }
};

console.table(fusedObject);


console.log('%cEjercicio 7 ****************************', 'color: yellow; font-weight: bold;');
console.log('%cEjercicio 7.1 ****************************', 'color: yellow; font-weight: bold;');
const exams71 = [
  { name: 'Yuyu Cabeza Crack', score: 5 },
  { name: 'Maria Aranda Jimenez', score: 1 },
  { name: 'Cristóbal Martínez Lorenzo', score: 6 },
  { name: 'Mercedez Regrera Brito', score: 7 },
  { name: 'Pamela Anderson', score: 3 },
  { name: 'Enrique Perez Lijó', score: 6 },
  { name: 'Pedro Benitez Pacheco', score: 8 },
  { name: 'Ayumi Hamasaki', score: 4 },
  { name: 'Robert Kiyosaki', score: 2 },
  { name: 'Keanu Reeves', score: 10 }
];

// Summing up all the elements in the array
const sum71 = exams71.reduce((accumulator, currentValue) => {
  return accumulator + currentValue.score;
}, 0); // 0 is the initial value of the accumulator

console.log(sum71); // Output: 52

console.log('%cEjercicio 7.2 y 7.3 ****************************', 'color: yellow; font-weight: bold;');
const exams72 = [
  { name: 'Yuyu Cabeza Crack', score: 5 },
  { name: 'Maria Aranda Jimenez', score: 1 },
  { name: 'Cristóbal Martínez Lorenzo', score: 6 },
  { name: 'Mercedez Regrera Brito', score: 7 },
  { name: 'Pamela Anderson', score: 3 },
  { name: 'Enrique Perez Lijó', score: 6 },
  { name: 'Pedro Benitez Pacheco', score: 8 },
  { name: 'Ayumi Hamasaki', score: 4 },
  { name: 'Robert Kiyosaki', score: 2 },
  { name: 'Keanu Reeves', score: 10 }
];

// Summing up all the elements in the array

const sum72 = exams72.reduce((accumulator, currentValue) => {

  if (currentValue.score >= 5) {
    return accumulator + currentValue.score;
  }
  return accumulator;
}, 0); // 0 is the initial value of the accumulator




var contAprobados72 = 0;
console.log("las notas de los aprobados son:");
for (let index = 0; index < exams72.length; index++) {

  if (exams72[index].score >= 5) {
    console.log(exams72[index].score);
    contAprobados72++;
  }
}

console.log("la suma es: ", sum72) // Output: la suma
console.log("la media es: ", sum72 / contAprobados72); // Output:la media

console.log('%cEjercicio 8.1 ****************************', 'color: yellow; font-weight: bold;');
const videogames81 = [
  { name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5 },
  { name: 'Assasins Creed Valhala', genders: ['Aventura', 'RPG'], score: 4.5 },
  { name: 'The last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8 },
  { name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5 },
  { name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5 },
  { name: 'Legend of Zelda: Breath of the wild', genders: ['RPG'], score: 10 },
]


//parto del ejercicio 5.3 -> filtro por RPG
const selectedVideogames81 = videogames81.filter(game => game.genders.includes('RPG'));
console.log("los juegos que hay filtrados por RPG con sus scores: ")
console.table(selectedVideogames81);

// copio, adapto y simplifico del ejercicio 7.3

const sum81 = selectedVideogames81.reduce((accumulator, currentValue) => {
  return accumulator + currentValue.score;
}, 0);
console.log("la suma del score de los filtrados por RPG es:")
console.table(sum81);
// 0 is the initial value of the accumulator
var contJuegos81 = 0; //contador de RPGs
console.log("en total, los juegos que hay son:");
for (let index = 0; index < selectedVideogames81.length; index++) {
  contJuegos81++;
}
console.log("total: ", contJuegos81);

console.log("la media es:", sum81 / contJuegos81);


console.log('%cEjercicio 9 ****************************', 'color: yellow; font-weight: bold;');
const movies90 = [
  {
    title: "Bracula: Condemor II",
    duration: 192,
    categories: ["comedia", "aventura"],
  },
  {
    title: "Spider-Man: No Way Home",
    duration: 122,
    categories: ["aventura", "acción"],
  },
  {
    title: "The Voices",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "Shrek",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];
console.log("Partimos de esto: ")
console.table(movies90);
var selectedCategories90 = [];

//el primer for recorre movies90, el segundo las categorias
// con un "set" tb se podría haber hecho y me ahorro la comprobacion del if
for (const movie90 of movies90) {
  for (const category of movie90.categories) {
    if (!selectedCategories90.includes(category)) {
      selectedCategories90.push(category);
    }
  }
}
console.log("hay que sacar un listado de categorías sin repetir: ")
console.table(selectedCategories90);

console.log('%cEjercicio 9 ****************************', 'color: yellow; font-weight: bold;');

const users10 = [
  {
    name: "Alberto",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Antonio",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Pedro",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Cristina",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

console.log("datos de partida:");
console.table(users10);


const volumenes10 = [];

for (const user of users10) {
  for (const soundName in user.favoritesSounds) {
    const sound = user.favoritesSounds[soundName];
    volumenes10.push(sound.volume);
  }
}
console.log("Array de volúmenes:");
console.table(volumenes10);

const mediaVolumenes10 = window._.mean(volumenes10);

console.log("el volumen medio es:", mediaVolumenes10);



console.log('%cEjercicio 11 ****************************', 'color: yellow; font-weight: bold;');
const users11 = [
  {
    name: "Alberto",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Antonio",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Pedro",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Cristina",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

// para analisis de datos JS me parece una kk
// he programado en python y SAS Base y se hace en una línea (en SAS Base, por ejemplo, con un proc freq)

// Objeto para contar la frecuencia de cada sonido
const soundFrequency = {};

// Recorre la lista de usuarios con for...of
for (const user of users11) {
  // Recorre las propiedades de favoritesSounds con for...in
  for (const sound in user.favoritesSounds) {
    // Verifica si el sonido ya está en el objeto soundFrequency
    if (soundFrequency[sound]) {
      // Si existe, incrementa el conteo
      soundFrequency[sound]++;
    } else {
      // Si es la primera vez que aparece, inicializa el conteo en 1
      soundFrequency[sound] = 1;
    }
  }
}

// Muestra el resultado del conteo
console.log("Frecuencia de sonidos favoritos:");
console.log(soundFrequency);

console.log('%cEjercicio 12 ****************************', 'color: yellow; font-weight: bold;');


const mainCharacters12 = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

console.table(mainCharacters12);

//function definition
function findArrayIndex(array, text) {

  //la pirmera en mayuscula, lo demás en minúscula para evitar errores en la comparación
  userInput12 = userInput12.charAt(0).toUpperCase() + userInput12.slice(1).toLowerCase();

  console.log("You entered:", userInput12);
  const found = mainCharacters12.includes(userInput12);
  console.log("si la cadena de texto se encuentra en el array mainCharacters12, devolverá true");
  console.log(found);
}



//do-while to be testing it for as long as you want
do {
  // Ask the user to input a string

  var userInput12 = prompt("Ejercicio 12: Introduce un texto (cancel para parar)");
  // Check if the user clicked "Cancel" or entered an empty string
  if (userInput12 === null || userInput12.trim() === "") {
    console.log("fin del while, fin del ejercicio 12");
    break;
  }
  findArrayIndex(mainCharacters12, userInput12)
} while (true);

console.log('%cEjercicio 13 ****************************', 'color: yellow; font-weight: bold;');

const mainCharacters13 = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

console.table(mainCharacters13);

function removeElementFromArray(arr, userInput) {
  const index = arr.indexOf(userInput);

  if (index !== -1) {
    arr.splice(index, 1);
    console.log(`Quitado '${userInput}' del array.`);
  } else {
    console.log(`no se encuentra '${userInput}' en el array .`);
  }
}

do {
  var userInput13 = prompt("Ejercicio 13: introduce un texto, si coincide con alguno del array, será borrado");

  if (userInput13 === null || userInput13.trim() === "") {
    console.log("fin del loop, fin del ejercicio 13");
    break;
  }

  // Convert user input to capitalize the first letter and make the rest lowercase
  userInput13 = userInput13.charAt(0).toUpperCase() + userInput13.slice(1).toLowerCase();

  console.log("has tecleado:", userInput13);
  const found = mainCharacters13.includes(userInput13);

  if (found) {
    removeElementFromArray(mainCharacters13, userInput13);
  } else {
    console.log("La cadena de texto no se encontró en el array por lo que el array permanece igual que antes");
  }
  console.table(mainCharacters13);
  console.log("vuelve a intentarlo o acepta con el texto en blanco o dale al cancel")
} while (true);


console.log('%cEjercicio 14 ****************************', 'color: yellow; font-weight: bold;');

function rollDice(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

// Function to validate user input as a number
function isValidNumber(input) {
  const number = parseInt(input);
  return !isNaN(number);
}

let userNumber;

// Ask the user to enter the number of sides for the die, repeat until canceled or empty input
while (true) {
  const userInput = prompt("Ejercicio 14: Por favor, introduce un número del 1 al 1000 para simular las caras que va a tener un dado(cancelar para salir): ");
  // Function to simulate rolling a dice with the specified number of sides


  // Check if the user clicked "Cancel" or entered an empty string
  if (userInput === null || userInput.trim() === "") {
    console.log("Saliendo del programa.");
    break;
  }

  // Check if the entered value is a valid number
  if (isValidNumber(userInput)) {
    userNumber = parseInt(userInput);

    // Simulate rolling a dice and display the result
    const result = rollDice(userNumber);
    console.log(`Has lanzado un dado de ${userNumber} caras y has obtenido: ${result}`);
  } else {
    console.log("Por favor, introduce un número válido.");
  }
}


console.log('%cEjercicio 15 ****************************', 'color: yellow; font-weight: bold;');
const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

function swap(arr, index1, index2) {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

// Mostrar el array original al usuario
console.log("Array original:");
console.table(fantasticFour);

let indexA, indexB;

// Pedir al usuario dos índices válidos utilizando do-while loops
do {
  indexA = parseInt(prompt("Introduce el primer índice:"));
} while (isNaN(indexA) || indexA < 0 || indexA >= fantasticFour.length);

do {
  indexB = parseInt(prompt("Introduce el segundo índice:"));
} while (isNaN(indexB) || indexB < 0 || indexB >= fantasticFour.length || indexB === indexA);

// Realizar el intercambio basado en los índices proporcionados por el usuario
swap(fantasticFour, indexA, indexB);

// Mostrar el array después del intercambio
console.log("Array después del intercambio:");
console.table(fantasticFour);
