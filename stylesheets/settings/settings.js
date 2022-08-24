function settings_start(){
    var settings = {
        page : {
            content: ""
        }
    };

    settings.page.content = "<div class='settings_container'>"
    +"<section><h3>Zurücksetzen</h3>"
    +"<p>Dies setzt die gesammte App zurück auf Werkseinstellungen.</p>"
    +"<button onclick='setting_reset()'>Alles zurücksetzen</button>"
    +"</section>"
    +"<section><h3>Erweiterung</h3>"
    +"<a href='extension.zip' download='Extension.zip'>Hier Herunterladen</a>"
    +"<section><h3>Daten auslesen</h3>"
    +"<button onclick='setting_showData()'>radio auslesen</button><div id='settings_auslesen_container'></div>"
    +"</div>";
    flyin_toggle("normal", settings.page.content, "Settings", "#444444");
}

function setting_reset(){
    localStorage.clear();
    location.reload(true);
}

function setting_showData(){
    document.getElementById("settings_auslesen_container").innerHTML = JSON.stringify(radio, null, 10);
}