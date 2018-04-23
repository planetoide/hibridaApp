
 
          	function agendar() {
                /*var theDate = $.trim($("#fecha").val());
                var theHour = $.trim($("#hora").val());*/
                var theDate = $("#fecha2").val();
                var theHour = $("#hora").val();
                var usuario = localStorage.contra; //prueba storage
                var usuarioName = localStorage.persona;
                localStorage.dia = theDate;
                localStorage.min = theHour;
                console.log("Nuevas pruebas otra vez" + usuario + " la fecha es " + theDate + "  la hora es " + theHour);
                
                // intento para cambiar
                
                
                //intento para cambiar
                
                /*var fechaS = theDate.toString();
 				var horaS = theHour.toString();*/

                if(theHour == "" || theDate == "")
                {
                	alert("no se ingresaron todo los datos");

                } else {

                  console.log("paso al bucle");
                    $.ajax({
                      type: "POST",
                      url: "https://pruebasphonegap.000webhostapp.com/agendar.php",
                      data: ({fecha: theDate, hora: theHour, usua: usuario}),
                      cache: false,
                      dataType: "text",
                      success: bien
                    });

                }
            };
 
            $("#resultLog").ajaxError(function(event, request, settings, exception) {
              $("#resultLog").html("Error Calling: " + settings.url + "<br />HTTP Code: " + request.status);
            });
 
            function bien(data)
            {
                // $("#resultLog").html("Result: meirda " + data);
                if(data == true){

                var paginas="#respuesta";
        				function mover() 
        				{
        				location.href=paginas

                /*Transforamción del formato de la fecha*/
                var d = new Date(localStorage.dia);
                var days = ["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"];
                var mes = ["Ene","Feb","Mar","Abril","Mayo","Jun","Jul","Agos","Sep","Oct","Nov","Dic"];
                /*Fin de la transformación del formato de fecha*/

        				document.getElementById("confirmacion").innerHTML = localStorage.persona + " tu cita será el próximo " + days[d.getDay()] + " " + d.getDate() + " de " + mes[d.getMonth()] + " de " + d.getFullYear() + " a las " + localStorage.min + " horas<br /> <b>¡Te esperamos!</b>" ;
                // document.getElementById("confirmacion").innerHTML = usuarioName + "tu cita será el próximo " + theDate + " a las " + theHour + "<br />¡Te esperamos!";
                // $("#confirmacion").text();
                // $("#recomendatio").html( data + "<span style='color:red'>o alguno de tus datos es incorrecto</span>");
                } 
                mover();
                setTimeout ("mover()", 20000);
                } else {

                  $("#recomendatio").html( data + "<span style='color:red'>o alguno de tus datos es incorrecto</span>");
                }
            }



      
