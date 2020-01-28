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
                $("#usr_field").text(JSON.stringify(JSON.parse(data.entity), null, 2));
            },
        }
    }).fail(function (jqXHR, textStatus) {
        alert(jqXHR.responseJSON.code + ': ' + jqXHR.responseJSON.entity);
    });
}