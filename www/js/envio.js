// comenzamos con la llamada a jQuery
		$(document).ready(function(){
	$("#enviar").click(function(event){
		$.post(
			"acceso.php",
			$("#formulario").serialize(),

			function(data) {
				$("#resultado").html(data);
			}
		);
		
	});
});