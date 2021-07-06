// --> VARIÁVEIS


// console.log("Hello World");

/* var myName = 'Matheus';

let language = 'JavaScript';

const pattern = 'ECMAScript';

{
    var age = 24
}

console.log(age); 

const myLastName = 'Mereb';

console.log(myLastName); */


//  -->  TIPOS DE DADOS

/* var myName = "Matheus"; //string
var age = 24; //number(int)
var height = 1.87; //number(float)
null
undefined
var isStudent = false; //boolean

// Object, array and function

var person = {
    "name": "Matheus",
    "age": 24
}

var students = [ "Maria", "João", "André"];

function sum(a,b) {
    return a + b
} 

// operador typeof

function sum(){
    return 5 + 2
}

console.log(typeof sum)

*/


// --> OPERADORES

// ARITMÉTICOS
// adição -> +
/* var sumTwoNumbers = 1 + 3;
console.log(sumTwoNumbers);

// subtração -> -
var subTwoNumbers = 4 - 3;
console.log(subTwoNumbers);

// multiplicação -> *
var multiTwoNumbers = 4 * 3;
console.log(multiTwoNumbers);

// divisão -> /
var divTwoNumbers = 4 / 2;
console.log(divTwoNumbers);

// módulo (resto) -> %
console.log(8 % 3);

// incrementação -> ++
var num = 1;
console.log(++num);

// decrementação -> --
var num = 2;
console.log(--num);

// ATRIBUIÇÃO

// atribuição -> =
var x = 1;
var y = 3;

// atribuição de soma -> +=
console.log(x += y);

// atribuição de subtração -> -=
console.log(x -= y);

// atribuição de multiplicação -> *=
console.log(x *= y);

// atribuição de divisão -> /=
console.log(x /= y);

// atribuição de módulo -> %=
console.log(x %= y); */

// COMPARAÇÃO

// valor -> ==
// valor e tipo -> ===
// diferente de -> !=
// < ou <= | > ou >=

// LÓGICOS

// E -> &&
// OU -> ||
// NOT -> !


// --> CONDICIONAIS

// IF
/* var num = 1;
num = 5;

if (num === 1) {
    console.log("num é igual a 1");
}
else if (num === 2) {
    console.log("num é igual a 2");
}
else {
    console.log("num é igual a 5");
}

// SWITCH CASE
var mes = "janeiro";

switch (mes) {
    case "fevereiro":
        console.log("mes 2");
        break

    case "março":
        console.log("mes 3");
        break

    case "dezembro":
        console.log("mes 12");
        break

    default:
        console.log("nenhum dos casos acima atendido");
} */


// --> ESTRUTURAS DE REPETIÇÃO

// FOR
/* var colors = ["black", "white", "yellow", "green", "blue"];

for (var i = 0; i < colors.length; i++) {
    console.log(colors[i]);
} */

/* for (var i = 0; i <= 10; i++) {
    console.log(i);
} */

// WHILE
/* var i = 0;

while (i < 10) {
    console.log(i);
    i++;
} */

/* var i = 1;

do {
    console.log(i);
    i++;
} while (i < 10); */


// --> FUNÇÕES

/* function sayHello(name, lastName) {
    console.log('Hello, ' + name + ' ' + lastName);
}

sayHello('Matheus', 'Mereb');

function sum(a, b) {
    return a + b
}

console.log(sum(40, 60)); */


// --> CLASSES

/* class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    read() {
        return `Estou lendo ${this.title}`
    }
}
 */
/* let book = new Book ('Algoritmos para viver', 'Brian', 500);
let otherBook = new Book ('Um Exu em Nova York', 'Cidinha da Silva', 100);

console.log(book.read); */

/* class ITBook extends Book {
    constructor (title, author, pages, technology) {
        super(title, author, pages);
        this.technology = technology;
    }
}

let itBook = new ITBook ('Algoritmos para viver', 'Brian', 500, 'Algoritmos');

console.log(itBook); */

/* class Person {
    constructor(name){
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }
}

let person = new Person('Matheus');
person.name = 'Mereb';
console.log(person.name);
 */


// --> EXERCÍCIOS <--

// 1 - 'FizzBuzz':
/* let resultado = fizzBuzz(15);
console.log(resultado);

function fizzBuzz(entrada) {
    if (typeof entrada !== 'number'){
        return 'Não é um número';
    }
    if ((entrada % 3 === 0) && (entrada % 5 === 0)){
        return 'FizzBuzz';
    }
    if (entrada % 3 === 0){
        return 'Fizz';
    }    
    if (entrada % 5 === 0){
        return 'Buzz';
    }    
    
    return entrada;
} */

// 2 - Reverse a string:
/* let newStr = '';

function reverseAString(str) {
    for (let i = str.length - 1; i >= 0; i--){
        newStr += str[i];
        console.log(newStr);
    }
}

let resultado = reverseAString('Hello Gama Academy'); */

// 3 - Convert Celsius to Fahrenheit:
/* function converter(value) {
    return value * 1.8 + 32
}

let resultado = converter(40);
console.log(`O valor em Fahrenheit é ${resultado}F`); */

// 4 - To Do List:
const listContainer = document.querySelector('[data-lists]');
const newListForm = document.querySelector('[data-new-list-form]');
const newListInput = document.querySelector('[data-new-list-input]');

let lists = [];

newListForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const listName = newListInput.value
    if (listName === null || listName === '') return
    const list = createList(listName)
    newListInput.value = null
    lists.push(list)
    render()
})

function createList(name) {
    return {id: Date.now().toString(), name: name}
}

function render() {
    clearElement(listContainer)
    lists.forEach(function (list) {
        const item = document.createElement('li')
        item.classList.add('item')
        item.innerText = list.name
        listContainer.appendChild(item)
    })
}

function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild)
    }
}