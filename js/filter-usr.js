var ID_USUARIO = undefined;

function filterUsuario() {
    let uri = "";
    let values = $("#select-filter option[selected]").val();

    switch (values) {
        case "2":
            uri = "http://localhost:8080/proxy/rest/CloudIdentityService/usuario/telefono/";
            break;
        case "3":
            uri = "http://localhost:8080/proxy/rest/CloudIdentityService/usuario/username/";
            break;
        case "4":
            uri = "http://localhost:8080/proxy/rest/CloudIdentityService/usuario/customattr/";
            break;

        default:
            uri = "http://localhost:8080/proxy/rest/CloudIdentityService/usuario/email/";
            break;
    }

    $.ajax({
        url: uri + $('#find-usr-filter').val(),
        method: "GET",
        contentType: 'application/json; charset=utf-8',
        statusCode: {
            200: function (data) {
                debugger
                let json = JSON.parse(data.entity);
                if (json.Resources[0]) {
                    ID_USUARIO = json.Resources[0].id;

                    $("#add-usr-group").attr("disabled", false);

                } else {
                    ID_USUARIO = undefined;
                    $("#add-usr-group").attr("disabled", true);
                }

                $("#usr_field").text(JSON.stringify(json, null, 2));
            },
        }
    }).fail(function (jqXHR, textStatus) {
        alert(jqXHR.responseJSON.code + ': ' + jqXHR.responseJSON.entity);
    });
}


function agregarSocio() {
    let uri = "http://localhost:8080/proxy/rest/CloudIdentityService/altaUsuario/grupo/usuario/" + ID_USUARIO + "?groupid=64000543ZH";

    $.ajax({
        url: uri,
        method: "PUT",
        contentType: 'application/json; charset=utf-8',
        statusCode: {
            204: function (data) {
                debugger
                showAlertMessage("Usuario Agregado a Grupo de socios");
                $("#usr_alta_field").text(JSON.stringify(JSON.parse(data.entity), null, 2));
                $("#add-usr-group").attr("disabled", true);
            },
        }
    }).fail(function (jqXHR, textStatus) {
        alert(jqXHR.responseJSON.code + ': ' + jqXHR.responseJSON.entity);
    });
}