let empleados = [{
  id:1,
  nombre: 'Carlos'
},{
  id:2,
  nombre: 'Paredes'
},{
  id:3,
  nombre: 'Juan'
}];

let salarios = [{
  id:1,
  salario: 7700
},{
  id:2,
  salario: 1000
}];

let getEmpleado = (id) =>{
  return new Promise((resolve,reject)=>{
    let empleadoDB = empleados.find(empleado=>{
      return empleado.id === id;
    });
    if (!empleadoDB){
      reject(`No existe el empleado con id ${id}`);
    } else resolve(empleadoDB);
  });
}
let getSalario = (nombre) =>{
  return new Promise((resolve,reject)=>{
    let salarioDB = salarios.find(salario=>{
      return salario.id === nombre.id;
    });
    if (!salarioDB){
      reject(`No existe el salario para el empleado ${nombre.nombre}`);
    } else resolve({ nombre: nombre.nombre, salario: salarioDB.salario });
  });
}
  getEmpleado(3).then(empleado =>{
    return getSalario(empleado);
    })
    .then(sala=>{
      console.log(`Salario de empleado ${sala.nombre} es ${sala.salario}`);
    })
    .catch(err=>{
    console.log(err);
  });
