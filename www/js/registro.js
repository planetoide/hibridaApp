$(function() {
 
            $("#callAjax").click(function() {
                var theName = $.trim($("#theName").val());
                var password = $.trim($("#password").val());
                localStorage.contra = password;  //prueba de storage
                localStorage.persona = theName;
                if(theName.length > 0)
                {
                    $.ajax({
                      type: "POST",
                      //url: "http://thebeautyland.esy.es/dentista/registro.php",
                      url: "https://pruebasphonegap.000webhostapp.com/registro.php",
                      data: ({name: theName, pass: password}),
                      cache: false,
                      dataType: "text",
                      success: onSuccess
                    });
                } else {
                	alert("no se ingresó ningún dato");
                }
            });
 
            $("#resultLog").ajaxError(function(event, request, settings, exception) {
              $("#resultLog").html("Error Calling: " + settings.url + "<br />HTTP Code: " + request.status);
            });
 
            function onSuccess(data)
            {
                // $("#resultLog").html("Result: meirda " + data);
                if(data == true){

                var pagina="#fecha";
        				function redireccionar() 
        				{
        				location.href=pagina
        				document.getElementById("jajax").innerHTML = data;
        				
        				} 
        				redireccionar();
        				setTimeout ("redireccionar()", 20000);

                } else {

                  $("#recomendation").html( data + "<span style='color:red'>o alguno de tus datos es incorrecto</span>");
                }
            }



        });
    
 