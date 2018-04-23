<?php 
	$host = "mysql.hostinger.mx";
	$usuario = "u878835179_joma";
	$pass = "nombre.000";
	$myDb = "u878835179_jama";
	

	$conn = new mysqli($host, $usuario, $pass, $myDb);
	if ($conn->connect_error) {
		die("Conneccion fallida: " . $conn->connect_error);
	} 



 ?>