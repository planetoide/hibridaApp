function comenzar(){
	var boton = document.getElementById("callAjax");
	boton.addEventListener("click", itemNuevo, false);
}

function itemNuevo(){
	var nombre = document.getElementById("theName").value;
	var cont = document.getElementById("password").value;
	sessionStorage.setItem(nombre, cont);
	leerDatos(nombre)
}

function leerDatos(nombre){
	var valor1 = sessionStorage.getItem(nombre);
	
	console.log(nombre + " " + valor1);
}
window.addEventListener("load", comenzar, false);