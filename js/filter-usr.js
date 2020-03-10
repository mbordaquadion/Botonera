var ID_USUARIO = undefined;

function filterUsuario(bool) {
    let uri = "";
    let values = $("#select-filter").val();

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
    let mail = "";

    if (bool == 'F') {
        mail = $('.find-usr-filter').val();
    } else {

        mail = $('.find-usr-filter2').val();
    }

    $.ajax({
        url: uri + mail,
        method: "GET",
        contentType: 'application/json; charset=utf-8',
        statusCode: {
            200: function (data) {
                
                let json = JSON.parse(data.entity);
                if (json.Resources[0]) {
                    ID_USUARIO = json.Resources[0].id;

                    $("#add-usr-group").attr("disabled", false);
                    $("#usr-mod-userid, #usr-del-userid").val(ID_USUARIO);

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
                
                showAlertMessage("Usuario Agregado a Grupo de socios");
                let ent = JSON.parse(data.entity);

                $("#usr_alta_field").text(JSON.stringify(ent, null, 2));
                $("#add-usr-group").attr("disabled", true);

                $("usr-userid").val(ent.id);
            },
        }
    }).fail(function (jqXHR, textStatus) {
        alert(jqXHR.responseJSON.code + ': ' + jqXHR.responseJSON.entity);
    });
}