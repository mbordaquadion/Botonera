function altaUsuario() {

    let post_user = {
        "schemas": [
            "urn:ietf:params:scim:schemas:core:2.0:User",
            "urn:ietf:params:scim:schemas:extension:ibm:2.0:User",
            "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User"
        ],
        "userName": $('#alta-usr-username').val(),
        "password": $('#alta-usr-password').val(),
        "title": "End User",
        "name": {
            "familyName": $('#alta-usr-surname').val(),
            "givenName": $('#alta-usr-name').val()
        },
        "displayName": $('#alta-usr-surname').val() + " " + $('#alta-usr-name').val(),
        "preferredLanguage": "en-US",
        "active": true,
        "emails": [
            {
                "value": $('#alta-usr-email').val(),
                "type": "work"
            }
        ],
        "phoneNumbers": [
            {
                "value": $('#alta-usr-phone').val(),
                "type": "mobile"
            }
        ],
        "urn:ietf:params:scim:schemas:extension:ibm:2.0:User": {
            "userCategory": "regular",
            "twoFactorAuthentication": false
        },
        "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User": {
            "department": "Test Users",
            "employeeNumber": "012345"
        }
    };

    $.post("http://localhost:8080/proxy/rest/CloudIdentityService/altaUsuario",
        { "token": ACCESS_TOKEN, "json": post_user })
        .done(function (data) {
            debugger
        })
        .fail(function (error) {
            debugger
        });
}