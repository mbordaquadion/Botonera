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
                debugger
                $("#usr_alta_field").text(JSON.stringify(JSON.parse(data.entity), null, 2));
            },
        }
    }).fail(function (jqXHR, textStatus) {
        alert(jqXHR.responseJSON.code + ': ' + jqXHR.responseJSON.entity);
    });
}