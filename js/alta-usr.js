function altaUsuario() {

    let CloudIdentityAltaUsuarioDto = {
        token: ACCESS_TOKEN,
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
                alert(data.code + ': ' + data.entity);
            },
        }
    }).fail(function (jqXHR, textStatus) {
        alert(jqXHR.responseJSON.code + ': ' + jqXHR.responseJSON.entity);
    });
}