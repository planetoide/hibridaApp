<?php 
	
	include 'conexion.php';

	$paciente = $_POST['nombre'];
	$fecha = $_POST['fecha'];
	$hora = $_POST['hora'];
	$sql = "INSERT INTO citas (nombre,fecha, hora) VALUES ('$paciente', '$fecha', '$hora')";
	$result = $conn->query($sql);
	$date=date_create($fecha);
	$forma =  date_format($date,"d/m/Y");
	echo $paciente . " Tu cita es el próximo: " . $forma . " a las " . $hora ;
	

	$conn->close();
 ?>