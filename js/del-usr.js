function deleteUsuario() {
    
    $.ajax({
        url: "http://localhost:8080/proxy/rest/CloudIdentityService/bajaUsuario/" + ID_USUARIO,
        method: "DELETE",
        contentType: 'application/json; charset=utf-8',
        statusCode: {
            204: function (data) {
                
                showAlertMessage("Usuario eliminado");
            },
        }
    }).fail(function (jqXHR, textStatus) {
                alert(jqXHR.statusCode + ': ' + textStatus);
    });
}