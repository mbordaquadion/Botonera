function modificarUsuarioUsername() {
    modificarUsuario("http://localhost:8080/proxy/rest/CloudIdentityService/modificarUsuario/username/", "?username=" + $('#mod-usr-username').val());
}

function modificarUsuarioFechaNac() {
    modificarUsuario("http://localhost:8080/proxy/rest/CloudIdentityService/modificarUsuario/fechanacimiento/", "?fechaNacimiento=" + $('#mod-usr-fecha').val());
}

function modificarUsuario(uri, param) {

    $.ajax({
        url: uri + $('#usr-del-userid').val() + param,
        method: "PUT",
        contentType: 'application/json; charset=utf-8',
        statusCode: {
            204: function (data) {
                debugger
                showAlertMessage("Modificacion Realizada");

            },
        }
    }).fail(function (jqXHR, textStatus) {
        alert(jqXHR.responseJSON.code + ': ' + jqXHR.responseJSON.entity);
    });
}