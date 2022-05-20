console.log("Hello TypeScript");

//boolean
let muted: boolean = true;

//numbers
let numerador: number = 42;
let denominador: number = 6;
let resultado = numerador / denominador;


// strings
let nombre: string = "daniel";
let saludo: string = `me llamo ${nombre}`;

// arrays
let people: string[] = [];
people = ["isabel", "nicole", "raul"];
// people.push(9000);
let peopleAndNumbers: Array<string | number> = [];
peopleAndNumbers.push("Ricardo");
peopleAndNumbers.push(12);

//Enum
// enum Color{
// 	Rojo,
// 	Verde,
// 	Azul,
// }
enum Color{
	Rojo = 'Rojo',
	Verde = 'Verde',
	Azul = 'Azul',
}
let colorFavorito: Color = Color.Rojo;
console.log(`Mi color favorito es ${colorFavorito}`)

// Any (permite que la variable sea de qualquier tipo)
let comodin: any = "Joker";
comodin = {type:"Wildcart"}

//Object
let someObject: object = {type: "Wilcard"}

 

// Funciones 
function add(a: number, b: number): number{
	return a +b ;
}
const sum = add(2,5);
console.log(sum);

function createAdder(a: number): (number) => number {
  return function(b: number) {
    return b + a;
  };
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6);

function fullName(firstName: string, lastName: string = 'Smith'): string {
  return `${firstName} ${lastName}`;
}

const daniel = fullName('Agente');
const daniels = fullName('Agente', 'Santos');
console.log(daniel);
console.log(daniels);


// Interfaces 
enum Colorcito {
  Rojo = 'Rojos',
  Verde = 'Verde',
}

interface Rectangulo {
  ancho: number;
  alto: number;
  color?: Colorcito;
}

let rect: Rectangulo = {
  ancho: 4,
  alto: 6,
  color: Colorcito.Rojo,
};

function area(r: Rectangulo): number {
  return r.alto * r.ancho;
}

const areaRect = area(rect);
console.log(areaRect);

rect.toString = function() {
  return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo`;
};

console.log(rect.toString());
