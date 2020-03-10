function altaUsuario() {

    let CloudIdentityAltaUsuarioDto = {
        username: $('#alta-usr-username').val(),
        password: $('#alta-usr-password').val(),
        surname: $('#alta-usr-surname').val(),
        name: $('#alta-usr-name').val(),
        email: $('#alta-usr-email').val(),
        phone: $('#alta-usr-phone').val()
    }
    $.ajax({
        url: "http://localhost:8080/proxy/rest/CloudIdentityService/altaUsuario",
        method: "POST",
        contentType: 'application/json; charset=utf-8',
        dataType: "json",
        data: JSON.stringify(CloudIdentityAltaUsuarioDto),
        statusCode: {
            201: function (data) {

                $("#usr_alta_field").text(JSON.stringify(JSON.parse(data.entity), null, 2));
            },
        }
    }).fail(function (jqXHR, textStatus) {
        alert(jqXHR.responseJSON.code + ': ' + jqXHR.responseJSON.entity);
    });
}

function altaUsuarioSocio() {

    let altaUsuarioGrupoRequest = {
        username: $('#alta-usr-username').val(),
        password: $('#alta-usr-password').val(),
        surname: $('#alta-usr-surname').val(),
        name: $('#alta-usr-name').val(),
        email: $('#alta-usr-email').val(),
        phone: $('#alta-usr-phone').val(),
        //groupId: $('').val(),
        fechaNacimiento: $('#alta-usr-date').val(),
        interlocutorComercial: $('#alta-usr-IC').val()
    }

    $.ajax({
        url: "http://localhost:8080/proxy/rest/CloudIdentityService/altaUsuario/grupo",
        method: "POST",
        contentType: 'application/json; charset=utf-8',
        dataType: "json",
        data: JSON.stringify(altaUsuarioGrupoRequest),
        statusCode: {
            200: function (data) {
                $("#usr_alta_field").text(JSON.stringify(data, null, 2));
            },
        }
    }).fail(function (jqXHR, textStatus) {
        alert(jqXHR.responseJSON.code + ': ' + jqXHR.responseJSON.entity);
    });
}
