
let contador = 0;
let costoTotal = 0;

let element = document.getElementById("totalPrecio");
element.innerHTML="Total en Precio";

let textNombre = document.getElementById("Name");
//textNombre.value = "Leche Semidescremadaa";
//console.log(textNombre.value);
let txtNumber = document.getElementById("Number");

let total = document.getElementById("precioTotal");

/*
let campos = document.getElementsByClassName("campo");
campos[0].value = "Leche descremada deslactosada light";
console.log(campos[0].value);
console.log(campos);

for(let i = 0; i < campos.length; i++){
    campos[i].style.border="red thin solid";
}

let spans = document.getElementsByTagName("span");
for(let i=0; i<spans.length; i++){
    console.log(spans[i].textContent);
}
*/

let tabla = document.getElementById("tablaListaCompras");
let cuerpoTabla = tabla.getElementsByTagName("tbody");

/*
cuerpoTabla[0].innerHTML = `<tr>
<th scope="row">1</th>
<td>Leche</td>
<td>3</td>
<td>$23.00</td>
</tr>`;
*/

function validarNombre(){
    if(textNombre.value.length < 3){
        return false;
    }
    return true;
}

function validarCantidad(){
    if(txtNumber.value.length==0) {
        return false;
    }// if
     if (isNaN(txtNumber.value)){
        return false;
     }//if

     if (parseFloat(txtNumber.value)<=0) {
        return false;
     }//if
     return true;
}// validarCantidad



let cantidadF = 0;
let agregar = document.getElementById("btnAgregar");

agregar.addEventListener("click", (event)=>{
    event.preventDefault();
    if( (!validarNombre()) || (! validarCantidad())){
        document.getElementById("alertValidacionesTexto").innerHTML="Los campos deben estar llenos";
        document.getElementById("alertValidaciones").style.display="block";

        if(!validarNombre()){
            textNombre.style.border="red thin solid";
        }
        if(!validarCantidad()){
            txtNumber.style.border="red thin solid";
        }

        setTimeout(function(){
            document.getElementById("alertValidaciones").style.display="none";
        },
           3000
        );

        return false;
    }
    document.getElementById("alertValidaciones").style.display="none";

    contador++;
    document.getElementById("contadorProductos").innerHTML=contador;
    let precio = (Math.floor( (Math.random() * 50)*100))/100;
    let cantidad = parseFloat(txtNumber.value);
    costoTotal += (precio * cantidad);
    total.innerHTML = `$ ${costoTotal}`;

    let tmp = `<tr>
    <th scope="row">${contador}</th>
    <td> ${textNombre.value}</td>
    <td> ${txtNumber.value}</td>
    <td>$ ${precio}</td>
    </tr>`;

    cantidadF = cantidadF + cantidad;

    document.getElementById("totalProductos").innerHTML=cantidadF;

    console.log(tmp);
    cuerpoTabla[0].innerHTML += tmp;
    txtNumber.value="";
    textNombre.value="";
    textNombre.focus();
}
);


textNombre.addEventListener("blur", (event)=>{
    event.target.value = event.target.value.trim();
}
);

txtNumber.addEventListener("blur", (event)=>{
    event.target.value = event.target.value.trim();
}
);