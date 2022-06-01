

let element = document.getElementById("totalPrecio");
element.innerHTML="Total en Precio";

let textNombre = document.getElementById("Name");
//textNombre.value = "Leche Semidescremadaa";
//console.log(textNombre.value);
let txtNumber = document.getElementById("Number");


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


let agregar = document.getElementById("btnAgregar");

agregar.addEventListener("click", (event)=>{
    let precio = Math.random() * 100;
    let tmp = `<tr>
    <th scope="row">1</th>
    <td> ${textNombre.value}</td>
    <td> ${txtNumber.value}</td>
    <td> ${precio}</td>
    </tr>`
    console.log(tmp);
    cuerpoTabla[0].innerHTML += tmp;
}
);