function traerInformacionAuditorios(){
    $.ajax({
        url:"http://129.151.120.100:8080/api/Audience/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log("respuesta");
            listarRespuestaAuditorio(respuesta);
        }
    });
}

function listarRespuestaAuditorio(respuesta){
    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].owner+"</td>";
        myTable+="<td>"+respuesta[i].capacity+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado2").html(myTable);
}

function guardarInformacionAuditorios(){
    let var2={
        name:$("#Aname").val(),
        owner:$("#Aowner").val(),
        capacity:$("#Acapacity").val(),
        description:$("#Adescription").val()
        };

        $.ajax({
        type:"POST",
        contentType: "application/JSON",
        datatype:"JSON",
        data: JSON.stringify(var2),
        url:"http://129.151.120.100:8080/api/Audience/save",

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