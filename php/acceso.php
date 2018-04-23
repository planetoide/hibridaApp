<?php 
	

	include 'conexion.php';

	//Registrar los dato desde index.html
	$paciente = "odontologo";
	$passo ="cirujia";
	$sql = "SELECT * FROM pacientes WHERE nombre = '$usuario' AND pass ='$passo' ";
	$result = $conn->query($sql);

	if ($result->num_rows > 0) {
		header('Location: fecha.html');
	} else {
		echo "Paciente o contraseña incorrectas";
	}
	

	$conn->close();
 ?>