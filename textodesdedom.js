//<H1 class="titulo"> Hola <strong> mundo </strong></H1>

const elementoH1 = document.createElement("H1");
elementoH1.setAttribute("class","titulo");
elementoH1.innerHTML = "Hola <strong> mundo </strong>";
console.log(elementoH1);

const $contenedor = document.getElementById("contenedor");
//-> Prepend lo coloca como 1er hijo
$contenedor.prepend(elementoH1);

//-> Append lo coloca como ultimo hijo
$contenedor.append(elementoH1);

//-> AppendChild tb lo coloca coo ultimo hijo del contenedor
$contenedor.appendChild(elementoH1);

// -> InsertBefor inserte en un lugar en especial
// acceder mediante

const $p1 = document.getElementById ('p1');
// insertar H1 antes del parrafo 1
$contenedor.insertBefore(elementoH1, $p1);

const $p2 = document.getElementById ('p2');
// insertar H1 antes del parrafo 2
$contenedor.insertBefore(elementoH1, $p2);

const $p3 = document.getElementById ('p3');
// inserta H1 antes del parrafo 3
$contenedor.insertBefore(elementoH1,$p3)

const $p4 = document.getElementById ('p4');
console.log ($p1, $p2, $p3, $p4);



