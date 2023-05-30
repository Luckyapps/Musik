var playbar, playbar_img, playbar_text_main, playbar_text_sub, playbar_playbutton, playbar_favorite;

window.addEventListener("load", playbar_start);

function playbar_start(){
    playbar = document.getElementsByClassName("playbar")[0];
    playbar_img = document.getElementsByClassName("playbar")[0].getElementsByTagName("img")[0];
    playbar_text_main = document.getElementsByClassName("playbar_text_main")[0];
    playbar_text_sub = document.getElementsByClassName("playbar_text_sub")[0];
    //playbar_playbutton = document.getElementsByClassName("playbar_right")[0].getElementsByTagName("div")[0];
    playbar_playbutton = document.getElementsByClassName("playbar_right")[0].getElementsByClassName("playbar_playbutton")[0];
    playbar_favorite = document.getElementsByClassName("playbar_right")[0].getElementsByClassName("playbar_favorite")[0];

    //playbar_playbutton.addEventListener("click", function(){audio_toggle(radio.current_stream.current_button, radio.current_stream.key)});
    playbar.addEventListener("click", playbar_onclick);

    playbar_favorite.addEventListener("click", ()=>{favorite_toggle()});
}

function playbar_design_toggle(){
    favorite_style_init();
    playbar_playbutton.setAttribute("data-audio", player.currentAudio.id);
    reloadPlaybuttons();
    playbar.style.display = "flex";
    if(player.currentAudio.image){
        playbar_img.src = player.currentAudio.image.src;
    }else{
        playbar_img.src = "https://luckyapps.github.io/Musik/media/images/logo.png";
    }
    playbar_text_main.innerHTML = player.currentAudio.name;
    playbar_text_sub.innerHTML = "Luckyapps_Musik";
    /*if(radio.audio_playing){
        playbar_playbutton.innerHTML = "||";
    }else{
        playbar_playbutton.innerHTML = ">";
    }*/
}

function playbar_onclick(e){
    if(playbar.contains(e.target)){
        if(playbar_playbutton.contains(e.target) != true && playbar_favorite.contains(e.target) != true){
            songscreen_open();
        }
    }else{

    }
}