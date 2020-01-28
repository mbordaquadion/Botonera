function redirectCloudIdentity() {

    $.ajax({
        url: "http://localhost:8080/proxy/rest/CloudIdentityService/getRedirectAuthority",
        method: "GET",
        contentType: 'application/json; charset=utf-8',
        dataType: "text",
        statusCode: {
            200: function (redirectUri) {
                debugger
                window.location.href = redirectUri;
            },
        }
    }).fail(function (jqXHR, textStatus) {
        alert(jqXHR.responseJSON.code + ': ' + jqXHR.responseJSON.entity);
    });

    //window.location.href = "https://osde-test.ice.ibmcloud.com/oidc/endpoint/default/authorize?client_id=2ff9f813-d792-4c3b-aa84-9866900875c2&redirect_uri=http://localhost:8080/proxy/rest/CloudIdentityService/token&scope=openid&response_type=code&response_mode=form_post&nonce=2hfuulyr92j";
}

function getToken() {

    let json = {
        redirect_uri: "http://localhost:8080/proxy/rest/CloudIdentityService/token",
        client_id: "2ff9f813-d792-4c3b-aa84-9866900875c2",
        client_secret: "P4OKYgoDN0",
        code: $("#token_code").val(),
        grant_type: "authorization_code"
    }

    $.post("https://osde-test.ice.ibmcloud.com/oidc/endpoint/default/token", json)
        .done(function (data) {
            console.log(data);

            $("#token_field").text("\naccess_token: " + data.access_token
                + "\nrefresh_token: " + data.refresh_token
                + "\nscope: " + data.scope
                + "\ngrant_id: " + data.grant_id
                + "\nid_token: " + data.id_token
                + "\ntoken_type: " + data.token_type
                + "\nexpires_in: " + data.expires_in
            );
            $("#inp-refresh-token").val(data.refresh_token);
        })
        .fail(function (error) {
            $("#token_field").text(error.responseText);
        });
}

function getRefreshToken() {

    let json = {
        redirect_uri: "http://localhost:8080/proxy/rest/CloudIdentityService/token",
        client_id: "2ff9f813-d792-4c3b-aa84-9866900875c2",
        client_secret: "P4OKYgoDN0",
        code: $("#token_code").val(),
        refresh_token: $("#inp-refresh-token").val(),
        grant_type: "refresh_token"
    }

    $.post("https://osde-test.ice.ibmcloud.com/oidc/endpoint/default/token", json)
        .done(function (data) {
            console.log(data);

            $("#token_field").text("\naccess_token: " + data.access_token
                + "\nrefresh_token: " + data.refresh_token
                + "\nscope: " + data.scope
                + "\ngrant_id: " + data.grant_id
                + "\nid_token: " + data.id_token
                + "\ntoken_type: " + data.token_type
                + "\nexpires_in: " + data.expires_in
            );

            $("#inp-refresh-token").val(data.refresh_token);
        })
        .fail(function (error) {
            $("#token_field").text(error.responseText);
        });
}

function getTokenWithoutCode() {

    let json = {
        client_id: "2ff9f813-d792-4c3b-aa84-9866900875c2",
        client_secret: "P4OKYgoDN0",
        grant_type: "client_credentials"
    }

    $.post("https://testosde.osde.ar/oidc/endpoint/default/token", json)
        .done(function (data) {
            console.log(data);

            ACCESS_TOKEN = data.access_token;

            $("#token_field").text("\naccess_token: " + data.access_token
                + "\ngrant_id: " + data.grant_id
                + "\ntoken_type: " + data.token_type
                + "\nexpires_in: " + data.expires_in
            );
        })
        .fail(function (error) {
            $("#token_field").text(error.responseText);
        });
}