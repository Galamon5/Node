let batman = {
  nombre: 'Bruce',
  apellido: 'Banner',
  poder: 'Rico',
  getName: function () {
    return `${this.nombre} ${this.apellido} su poder es ${this.poder}`;
  }
};
 console.log(batman.getName() );
/*let nombre = batman.nombre;
let apellido = batman.apellido;
let poder = batman.poder;*/
let{nombre: name,apellido,poder} = batman;
console.log(name, apellido, poder);
