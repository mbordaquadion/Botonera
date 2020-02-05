var ACCESS_TOKEN = '';

$(function () {

    // $('#select-filter').change(function (op) {

    // })

    $("#bt-redirect-ci").click(redirectCloudIdentity);
    $("#btn-get-token").click(getToken);
    $("#bt-token-nocode").click(getTokenWithoutCode);
    $("#btn-refresh-token").click(getRefreshToken);
    $("#btn-filter-usr, #btn-filter-mod-usr").click(filterUsuario);
    $("#btn-del-usr").click(deleteUsuario);
    $("#alta-usuario").click(altaUsuario);
    $("#add-usr-group").click(agregarSocio);

    $("#btn-mod-usr-usrname").click(modificarUsuarioUsername);
    $("#btn-mod-usr-fecha").click(modificarUsuarioFechaNac);

    let urlParams = new URLSearchParams(window.location.search);
    let code = urlParams.get('code');

    var uri = window.location.toString();
    if (uri.indexOf("?") > 0) {
        var clean_uri = uri.substring(0, uri.indexOf("?"));
        window.history.replaceState({}, document.title, clean_uri);
    }

    $("#token_code").val(code);
});

function showAlertMessage(message) {
    $('#alrt-msj').text(message);
    $('#alrt-msj').fadeIn(1000).fadeOut(5000);

}