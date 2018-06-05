//function sumar(a,b) {
//  return a+b;
//}
/*
let sumar = (a,b) => {
  return a+b;
};
console.log(sumar(10,20));

let saludo = () => {
  return 'Hola Mundo!';
};

console.log(saludo());*/
let batman = {
  nombre: 'Bruce',
  apellido: 'Banner',
  poder: 'Rico',
  getName:  function(){
    return `${this.nombre} ${this.apellido} su poder es ${this.poder}`;
  }
};
console.log(batman.getName());
