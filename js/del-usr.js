function deleteUsuario() {
    
    $.ajax({
        url: "http://localhost:8080/proxy/rest/CloudIdentityService/bajaUsuario/" + $('#del-usr-userid').val(),
        method: "DELETE",
        contentType: 'application/json; charset=utf-8',
        statusCode: {
            204: function (data) {
                debugger
                $('#alrt-del-usr').fadeIn(1000).fadeOut(5000);
            },
        }
    }).fail(function (jqXHR, textStatus) {
                alert(jqXHR.statusCode + ': ' + textStatus);
    });
}