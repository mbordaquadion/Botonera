var ACCESS_TOKEN = '';

$(function () {

    $("#bt-redirect-ci").click(redirectCloudIdentity);
    $("#btn-get-token").click(getToken);
    $("#bt-token-nocode").click(getTokenWithoutCode);
    $("#btn-refresh-token").click(getRefreshToken);
    $("#btn-filter-usr").click(filterUsuario);
    $("#btn-del-usr").click(deleteUsuario);
    $("#alta-usuario").click(altaUsuario);

    let urlParams = new URLSearchParams(window.location.search);
    let code = urlParams.get('code');

    var uri = window.location.toString();
    if (uri.indexOf("?") > 0) {
        var clean_uri = uri.substring(0, uri.indexOf("?"));
        window.history.replaceState({}, document.title, clean_uri);
    }

    $("#token_code").val(code);
});