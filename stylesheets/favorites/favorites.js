var fav_m = "show";

window.addEventListener("load", favorites_start);

function favorites_start(){
    var favorites;
    if(localStorage.getItem("radio_favorites")){
        favorites = JSON.parse(localStorage.getItem("radio_favorites"));
    }else{
        favorites = [];
    }
    radio.favorites = favorites;
}

function favorites_store(){
    localStorage.setItem("radio_favorites", JSON.stringify(radio.favorites));
}


function favorite_toggle(){
    var isfavorite = false;
    for(i=0;i<radio.favorites.length;i++){
        if(radio.favorites[i] == player.currentAudio.id){
            console.warn("MUSS entfernt werden: "+ i);
            radio.favorites.splice(i,1)
            console.log(radio.favorites);
            isfavorite = true;
            favorite_style(false);
        }
    }
    if(!isfavorite){
        radio.favorites.push(player.currentAudio.id);
        favorite_style(true);
    }
    favorites_store();
}


function favorite_style_init(){
    var isfavorite = false;
    for(i=0;i<radio.favorites.length;i++){
        if(radio.favorites[i] == player.currentAudio.id){
            isfavorite = true;
            favorite_style(true);
        }
    }
    if(!isfavorite){
        favorite_style(false);
    }
}


function favorite_style(isfavorite){
    if(isfavorite){
        playbar_favorite.innerHTML = "&#10084;&#65039;";
        if(document.getElementById("songscreen_fav_but")){
            document.getElementById("songscreen_fav_but").innerHTML = "&#10084;&#65039;";
        }
    }else{
        playbar_favorite.innerHTML ="&#129293;";
        if(document.getElementById("songscreen_fav_but")){
            document.getElementById("songscreen_fav_but").innerHTML = "&#129293;";
        }
    }
}

async function favorites_show(){
    var streamlist = favorites_streamlist();
    console.log(streamlist);
    var content = "<p class='channel_description'>Das sind deine Favoriten:</p><div class='channel_container'>";
    for(i=0; i < streamlist.keylist.length; i++){
        if(streamlist.content[streamlist.keylist[i]]){
            if(streamlist.content[streamlist.keylist[i]].radiotext != undefined){
                var radiotext = " id='"+ streamlist.keylist[i] +"_rtcl'>"+ streamlist.content[streamlist.keylist[i]].radiotext;
            }else{
                var radiotext = " id='"+ streamlist.keylist[i] +"_rtcl'>"+ streamlist.content[streamlist.keylist[i]].description
            }
            content += "<div class='home_card home_card_nolink home_card_favorite' onclick='favorite_remove(`"+ streamlist.keylist[i] +"`, this)'><div class='home_card_img'><img src='"+ streamlist.content[streamlist.keylist[i]].image.src +"'><div class='home_card_play playbutton' data-audio='"+ streamlist.keylist[i] +"'>></div></div><h3>"+ streamlist.content[streamlist.keylist[i]].name +"</h3><p"+ radiotext +"</p></div>"
        }else{
            console.log("nomain");
        }    
    }
    content += "</div>";

    var toolbar = "<div class='favorites_edit_button fav_m_r' onclick='favorites_edit_toggle()'>Bearbeiten</div>";

    await flyin_toggle("normal", content, "&#10084;&#65039;Favoriten", "#2c2c2c", toolbar);

    reloadPlaybuttons();
}

function favorites_edit_toggle(){
    HTMLCollection.prototype.forEach = Array.prototype.forEach;
    if(fav_m == "show"){
        fav_m = "edit";
        document.getElementsByClassName("favorites_edit_button")[0].classList.replace("fav_m_r", "fav_m_s");
        document.getElementsByClassName("favorites_edit_button")[0].innerHTML = "Speichern";
        document.getElementsByClassName("home_card_favorite").forEach((src)=>{src.classList.add("fav_home_r");src.classList.remove("home_card_nolink")});
    }else if(fav_m == "edit"){
        fav_m = "show";
        document.getElementsByClassName("favorites_edit_button")[0].classList.replace("fav_m_s", "fav_m_r");
        document.getElementsByClassName("favorites_edit_button")[0].innerHTML = "Bearbeiten";
        document.getElementsByClassName("home_card_favorite").forEach((src)=>{src.classList.remove("fav_home_r");src.classList.add("home_card_nolink")});
    }
}

function favorites_streamlist(){
    var streamlist = {
        keylist: radio.favorites,
        content: {}
    }
    for(i=0;i<radio.favorites.length;i++){
        streamlist.content[radio.favorites[i]] = radio.streamlist.base.content[radio.favorites[i]];
    }
    return streamlist;
}

function favorite_remove(fav, but){
    if(fav_m == "edit"){
        for(i=0;i<radio.favorites.length;i++){
            if(radio.favorites[i] == fav){
                console.warn("MUSS entfernt werden: "+ i);
                radio.favorites.splice(i,1)
                favorite_style(false);
            }
        }
        if(but){
            but.style.display = "none";
        }
        favorites_store();
    }
}