function traerInformacionMensajes(){
    $.ajax({
        url:"http://129.151.120.100:8080/api/Message/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log("respuesta");
            listarRespuestaMensaje(respuesta);
        }
    });
}

function listarRespuestaMensaje(respuesta){
    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].messageText+"</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado4").html(myTable);
}

function guardarInformacionMensajes(){
    let var2={
        messageText:$("#MmessageText").val(),
        };

        $.ajax({
        type:"POST",
        contentType: "application/JSON",
        datatype:"JSON",
        data: JSON.stringify(var2),
        url:"http://129.151.120.100:8080/api/Message/save",

        success:function(response){
                console.log(response);
            console.log("guardado con exito");
            alert("guardado con exito");
            window.location.reload()
        },
        error: function(jqXHR, textStatus, errorThrown){
            window.location.reload()
            alert("No se guardo correctamente")
        }
    });
}