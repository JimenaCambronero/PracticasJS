function capturar(){
//console.log ("capturado");
function Persona(nombre, edad, mascota){
  this.nombre = nombre;
  this.edad = edad;
  this.mascota = mascota;
}

let nombreCapturar = document.getElementById("nombre").value;
//console.log (nombreCapturar);
let edadCapturar = document.getElementById("edad").value;
//console.log (edadCapturar);
let mascotaCapturar = document.getElementById("mascota").value;
//console.log (mascotaCapturar);

nuevoSujeto = new Persona(nombreCapturar,edadCapturar,mascotaCapturar);
console.log(nuevoSujeto);
agregar();
}

let baseDato= [];
  function agregar(){
    baseDato.push(nuevoSujeto);
    console.log(baseDato);
    document.getElementById ("tabla").innerHTML += '<body><td>'+nuevoSujeto.nombre+'</td><td>'+nuevoSujeto.edad+'</td><td>'+nuevoSujeto.mascota+ '</td></body>';
  }

