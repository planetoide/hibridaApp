<?php
	include 'conexion.php';
	$nombre = $_REQUEST["name"];
	$pass = $_REQUEST["pass"];
	
	$sql = "SELECT * FROM consultas WHERE nombre = '".$nombre."' AND pass = '" . $pass . "'";

	$result = $conn->query($sql);

	if ($result->num_rows > 0) {
	    echo True;

	} else {
	    echo "<span style='color:red'>No estas registrado como usuario</span><br />";
	}
    $conn->close();

?>