const signUp = e => {
    let formData = {
        nombre: document.getElementById ('nombre').value,
        apellido: document.getElementById ("apellido").value,
        email: document.getElementById ("email").value,
        contraseña: document.getElementById ("contraseña").value,
    }
    localStorage.setItem("formData",JSON.stringify(formData));
    //console.log(localStorage.getItem("formData"));
    dispData();
    e.preventDefault();
}
function dispData(){
console.log(JSON.parse(localStorage.getItem("formData")));
   if(localStorage.getItem("formData")){
    let {nombre, apellido, email, contraseña} = JSON.parse(localStorage.getItem("formData"));
    var output = document.getElementById('output');
    output.innerHTML =`
    <table> 
    <tbody>
        <tr>
            <td>Nombre</td>
            <td>${nombre}</td>
        </tr>
        <tr>
            <td>Apellido</td>
            <td>${apellido}</td>
        </tr>
        <tr>
            <td>Email</td>
            <td>${email}</td>
        </tr>
        <tr>
            <td>Contraseña</td>
            <td>${contraseña}</td>
        </tr>
    </tbody>
</table>   
`
}
}
dispData();

let parrafo = document.createElement('p');
parrafo.setAttribute ("class", "despedida");
parrafo.innerHTML = "Muchas Gracias por completar el formulario";
console.log(parrafo);

let $contenedor = document.getElementById("contenedor");
$contenedor.append(parrafo);





