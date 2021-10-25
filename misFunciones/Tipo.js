function traerInformacionTipo(){
    $.ajax({
        url:"http://129.151.120.100:8080/api/Category/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log("respuesta");
            listarRespuesta(respuesta);
        }
    });
}

function listarRespuesta(respuesta){
    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado1").html(myTable);
}

function guardarInformacionTipo(){
    let var2={
        name:$("#Tname").val(),
        description:$("#Tdescription").val()
        };

        $.ajax({
        type:"POST",
        contentType: "application/JSON",
        datatype:"JSON",
        data: JSON.stringify(var2),
        url:"http://129.151.120.100:8080/api/Category/save",

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
