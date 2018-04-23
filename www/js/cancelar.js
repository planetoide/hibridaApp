
 
            function cancelar() {
                var nombreC = $("#pacienteC").val();
                var passwordC = $("#passwordC").val();
                
                if(nombreC.length > 0 && passwordC.length >0)
                {
                    $.ajax({
                      type: "POST",
                      url: "https://pruebasphonegap.000webhostapp.com/cancelar.php",
                      data: ({name: nombreC, pass: passwordC}),
                      cache: false,
                      dataType: "text",
                      success: cancelarcess
                    });
                      
                } else {
                	alert("no se ingresó ningún dato");
                }
            };
 
            $("#resultLog").ajaxError(function(event, request, settings, exception) {
              $("#resultLog").html("Error Calling: " + settings.url + "<br />HTTP Code: " + request.status);
            });
 
            function cancelarcess(data)
            {
                
                if(data != ""){

                var pagina="#cancelarR";
        				function migrar() 
        				{
        				location.href=pagina
        				document.getElementById("confirmacion2").innerHTML = data;
        				
        				} 
        				migrar();
        				setTimeout ("migrar()", 20000);

                } else {

                  $("#recome").html( data + "<span style='color:red'>o alguno de tus datos es incorrecto</span>");
                }
            }



     