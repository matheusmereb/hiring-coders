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

function sayHello(name) {
    console.log("Hello, " + name);
}

sayHello();