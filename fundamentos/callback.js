/*setTimeout(function () {
  console.log('Hola Mundo');
}, 3000);*/

let getUserbyId = (id,callback) => {
  let user = {
    name: 'Carlos',
    id
  }
  if(id === 20){
    callback(`El usuario con id ${id} no existe`)
  }else callback(null,user);
}

getUserbyId(20, (err,user) => {
  if(err){
      return console.log(err);
  }
  console.log('usuario de base de datos ',user);
});
