function checkCrendetials(id,password) {
    var settings = {
        "url": "https://tamaz.azurewebsites.net/api/accesuser?code=Vf1VyfS9KsDZrjwwrQW57uB6JKnAES4gFq6WaF8r7j4eCmFZNbF3dA==&userName="+id+"&password="+"password",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Cookie": "ARRAffinity=9d0e1242a0dd8a20ab84c7e58df8f965a5d4bf8ec42752ae1b828b02f289ee06"
        },
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
        if (response != "-1") {
            response = response.split(",")
            var name = response[0];
            var accesCode = response[0];
        }
        else {
            alert("שם משתמש או סיסמא שגוים");
        }

    }).fail(function (data, textStatus, xhr) {
        //This shows status code eg. 403
        console.log("error", data.status);
    });
}

function setSubjectToPage() {

}