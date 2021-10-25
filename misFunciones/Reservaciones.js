function traerInformacionReservaciones(){
    $.ajax({
        url:"http://129.151.120.100:8080/api/Reservation/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log("respuesta");
            listarRespuestaReservaciones(respuesta);
        }
    });
}

function listarRespuestaReservaciones(respuesta){
    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].startDate+"</td>";
        myTable+="<td>"+respuesta[i].devolutionDate+"</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado5").html(myTable);
}

function guardarInformacionReservaciones(){
    let var2={
        startDate:$("#RstartDate").val(),
        devolutionDate:$("#RdevolutionDate").val(),
        };

        $.ajax({
        type:"POST",
        contentType: "application/JSON",
        datatype:"JSON",
        data: JSON.stringify(var2),
        url:"http://129.151.120.100:8080/api/Reservation/save",

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