/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
// meetodo veloce let sum = 10 + 20;
let a = 10;
let b = 20;
let sum = a + b;
console.log(sum);
/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
let random = Math.floor(Math.random() * 21);
console.log(random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
const me = {
  name: "Francesco",
  surname: "Zaccaro",
  age: 22,
};

console.log(me);
/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.age;
console.log(me);
/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
me.skills = ["Python", "JavaScript"];
console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
me.skills.push("C++", "C#");
console.log(me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
me.skills.pop();
console.log(me);
// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
function dice() {
  let randomNumber = Math.floor(Math.random() * 6 + 1);
  return randomNumber;
}
console.log("è uscito", dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
function whoIsBigger(a, b) {
  if (a > b) {
    return `il numero maggiore è ${a}`;
  } else if (a === b) {
    return `${a} è uguale a ${b}`;
  } else {
    return `il numero maggiore è ${b}`;
  }
}

console.log(whoIsBigger(6, 5));
/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
function splitMe(str) {
  let splitter = str.split(" ");
  return splitter;
}
console.log(splitMe("I love coding"));
/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
function deleteOne(str, bool) {
  //di default controlla (if bool === true)
  if (bool) {
    return str.slice(1);
  } else {
    return str.slice(0, -1);
  }
}
console.log(deleteOne("Ciao", true));
console.log(deleteOne("Ciao", false));
/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
function onlyLetters(str) {
  return str.replace(/[0-9]/g, ""); ///[0-9]/g è un espressione che corrisponde a tutte le cifre da 0 a 9. Il flag g sta per "globale" quindi cercherà su tutta la stringa
}
console.log(onlyLetters("ciao 34324 ciao"));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
function isThisAnEmail(str) {
  if (str.includes("@") && !str.includes(" ")) {
    if (str.includes(".")) {
      return "Hai inserito un indirizzo email valido";
    } else {
      return `${str} non è un indirizzo email valido`;
    }
  } else {
    return `${str} non è un indirizzo email valido`;
  }
}
console.log(isThisAnEmail("jkasdkj@dsfhj.com"));
/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
function whatDayIsIt() {
  const giorniDellaSettimana = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];
  const data = new Date();
  let giorno = data.getDay();
  return giorniDellaSettimana[giorno];
}

console.log("oggi è ", whatDayIsIt());
/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

function rollTheDices(num) {
  let sommaArray = [];
  for (let i = 0; i < num; i++) {
    sommaArray.push(dice());
  }
  let somma = sommaArray.reduce((accumulatore, valorecorrente) => {
    return accumulatore + valorecorrente;
  }, 0);
  return `sum: ${somma}\n values: ${sommaArray}`;
}

console.log(rollTheDices(3));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
function howManyDays(date) {
  let oggi = new Date();
  let tempoTrascorsoInMilliSecondi = oggi - date;
  let tempoTrascorsoInGiorni = tempoTrascorsoInMilliSecondi / (1000 * 3600 * 24);
  return `sono passati ${Math.floor(tempoTrascorsoInGiorni)} giorni da ${date.toDateString()} a oggi`;
}

console.log(howManyDays(new Date("September 26, 2002")));
/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
function isTodayMyBirthday() {
  let birthday = new Date("September 26, 2002");
  let oggi = new Date();

  if (birthday.getMonth() === oggi.getMonth() && birthday.getDate() === oggi.getDate()) {
    return true;
  } else {
    return false;
  }
}
console.log(isTodayMyBirthday());
// Arrays & Oggetti

/* Questo array viene usato per gli esercizi. Non modificarlo. */
// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 11
Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
function deleteProp(obj, str) {
  delete obj[str];
  return obj;
}

//console.log(deleteProp(movies[0], "Title"));
//Ho commentato la funzione così non intergerisce con gli altri esercizi

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
function newestMovie() {
  let newMovie = null;
  let filmYear = 0;
  movies.forEach((film) => {
    if (parseInt(film.Year) > filmYear) {
      filmYear = parseInt(film.Year);
      newMovie = film.Title;
    }
  });
  return newMovie;
}

console.log(`Il film più recente è ${newestMovie()}`);
/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
function countMovies() {
  let count = 0;
  for (let i = 0; i < movies.length; i++) {
    count += 1;
  }
  return count;
}
console.log(`ci sono ${countMovies()} film`);

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
function onlyTheYears() {
  const filmYear = [];
  for (let i = 0; i < movies.length; i++) {
    filmYear.push(movies[i].Year);
  }
  return filmYear;
}

console.log(onlyTheYears());
/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
function onlyInLastMillennium(movies) {
  const film = [];
  for (let i = 0; i < movies.length; i++) {
    if (parseInt(movies[i].Year) >= 2000) {
      film.push(movies[i].Title);
    }
  }
  return film;
}
console.log(onlyInLastMillennium(movies));
/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
function sumAllTheYears() {
  let yearSum = 0;
  for (let i = 0; i < movies.length; i++) {
    yearSum += parseInt(movies[i].Year);
  }
  return yearSum;
}

console.log(sumAllTheYears());
/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
function searchByTitle(str) {
  filmSearched = null;
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Title === str) {
      filmSearched = movies[i];
    } else {
      filmSearched = "Nessun risultato";
    }
  }
  return filmSearched;
}
console.log(searchByTitle("Avengers: Endgame"));

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
function searchAndDivide(str) {
  filmSearched = {
    match: [],
    unmatch: [],
  };
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Title.includes(str)) {
      filmSearched.match.push(movies[i]);
    } else {
      filmSearched.unmatch.push(movies[i]);
    }
  }
  return filmSearched;
}
console.log(searchAndDivide("Avengers"));
/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
function removeIndex(num) {
  movies.splice(num, 1);
  return movies;
}

console.log(removeIndex(0));
// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
function selectID() {
  let element = document.querySelector("#container");
  return element;
}
console.log(selectID());
/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
function selectTd() {
  let elements = document.querySelectorAll("td");
  return elements;
}

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
function printTd() {
  let elements = document.querySelectorAll("td");
  for (let i = 0; i < elements.length; i++) {
    console.log(elements[i].textContent);
  }
}
printTd();
/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
function addBackground() {
  let links = document.querySelectorAll("a");
  links.forEach((link) => {
    link.style.backgroundColor = "red";
  });
}
document.querySelectorAll("button")[2].addEventListener("click", addBackground);
/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
function addElement() {
  let list = document.getElementById("mylist");
  let newElement = document.createElement("li");
  newElement.textContent = "Nuovo elemento";
  list.appendChild(newElement);
}
document.querySelector("button").addEventListener("click", addElement);
/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
function emptyList() {
  let list = document.getElementById("mylist");
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
  return list;
}
document.querySelectorAll("button")[1].addEventListener("click", emptyList);
/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
function addClass() {
  let tr = document.querySelectorAll("tr");
  tr.forEach((element) => {
    element.classList.add("test");
  });
}
addClass();

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

function halfTree(num) {
  for (let i = 1; i <= num; i++) {
    console.log("*".repeat(i));
  }
}
halfTree(3);
/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
function tree(num) {
  for (let i = 1; i <= num; i++) {
    let spazi = " ".repeat(num - i);
    let asterischi = "*".repeat(2 * i - 1);
    console.log(spazi + asterischi);
  }
}
tree(3);
/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

function isItPrime(num) {
  if (num < 2 || (num > 3 && num % 2 == 0)) {
    return false;
  }
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isItPrime(1));
console.log(isItPrime(2));
console.log(isItPrime(3));
console.log(isItPrime(4));
console.log(isItPrime(5));
console.log(isItPrime(9));
console.log(isItPrime(11));
console.log(isItPrime(97));
console.log(isItPrime(100));
