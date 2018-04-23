<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>fecha</title>
</head>
<body>
	<form action="cita.php" method="post">
          <label for="text">Paciente</label>
          <input name="nombre" type="text" placeholder="Paciente" >
          <label for="fecha">Fecha</label>
          <input name="fecha" type="date" id="fecha" >
          <label for="hora">Hora</label>
          <input name="hora" type="time" id="hora" >
          <button type="submit">Agendar</button>
      </form>
</body>
</html>