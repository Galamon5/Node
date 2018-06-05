let empleados = [{
  id:1,
  nombre: 'Carlos'
},{
  ide:2,
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

let getEmpleado = (id,callback) =>{
    let empleadoDB = empleados.find(empleado=>{
    return empleado.id === id;
  });
  if (!empleadoDB){
    callback(`No existe el empleado con id ${id}`);
  } else callback(null,empleadoDB);
}
getEmpleado(4,(err,empleado)=>{
  if(err){
    return console.log(err);
  }
  console.log(empleado);
});

let getSalario = (empleado,callback) =>{
  let empleadoDB = empleados.find(empleadosn=>{
    return empleadosn.nombre === empleado;
  });
  let salarioDB = salarios.find(salario=>{
    return salario.id === empleadoDB.id;
  });
  if(!salarioDB){
    callback(`No existe el empleado ${empleado}`);
  } else callback(null,`{ ${empleadoDB.nombre} ${salarioDB.salario} }`);
}

getSalario('Carlos',(err,salario)=>{
  if(err){
    return console.log(err);
  }
  console.log(salario);
})
