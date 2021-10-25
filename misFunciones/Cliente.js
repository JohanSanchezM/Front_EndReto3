function traerInformacionClientes(){
    $.ajax({
        url:"http://129.151.120.100:8080/api/Client/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log("respuesta");
            listarRespuestaCliente(respuesta);
        }
    });
}

function listarRespuestaCliente(respuesta){
    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].email+"</td>";
        myTable+="<td>"+respuesta[i].password+"</td>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].age+"</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado3").html(myTable);
}

function guardarInformacionClientes(){
    let var2={
        email:$("#Cemail").val(),
        password:$("#Cpassword").val(),
        name:$("#Cname").val(),
        age:$("#Cage").val()
        };

        $.ajax({
        type:"POST",
        contentType: "application/JSON",
        datatype:"JSON",
        data: JSON.stringify(var2),
        url:"http://129.151.120.100:8080/api/Client/save",

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