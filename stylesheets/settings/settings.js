async function settings_start(){
    var settings = {
        page : {
            content: ""
        }
    };

    settings.page.content = "<div class='settings_container' style='padding-top:0'>"
    +"<section><p style=''>Luckyapp_Musik version "+ updatelist_musik.content[0].id +"</p></section>"
    +"<section><h3>Zurücksetzen</h3>"
    +"<p>Dies setzt die gesammte App zurück auf Werkseinstellungen. Wenn eine Funktion, insbesondere zuletzt angesehen oder die Favoriten, nicht Funktionieren, empfehlen wir die App zurückzusetzen.</p>"
    +"<button class='setting_reset_button' onclick='setting_reset()'>Alles zurücksetzen</button>"
    +"</section>"
    +"<section>"
        +"<h3>Versionsinfos</h3>"
        +"<div id='set_upd_list'></div>"
    +"</section"
    /*+"<section><h3>Erweiterung</h3>"
    +"<a href='extension.zip' download='Extension.zip'>Hier Herunterladen</a>"
    +"<section><h3>Daten auslesen</h3>"
    +"<button onclick='setting_showData()'>radio auslesen</button><div id='settings_auslesen_container'></div>"*/
    +"</div>";
    await flyin_toggle("normal", settings.page.content, "Settings", "#444444");
    load_updatelist();
}

function setting_reset(){
    //localStorage.clear();
    localStorage.removeItem("radio");
    localStorage.removeItem("musik_history");
    localStorage.removeItem("cookies");
    localStorage.removeItem("radio_favorites");
    location.reload(true);
}

function setting_showData(){
    document.getElementById("settings_auslesen_container").innerHTML = JSON.stringify(radio, null, 10);
}