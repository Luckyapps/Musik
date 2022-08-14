var playbar, playbar_img, playbar_text_main, playbar_text_sub, playbar_playbutton;

window.addEventListener("load", playbar_start);

function playbar_start(){
    playbar = document.getElementsByClassName("playbar")[0];
    playbar_img = document.getElementsByClassName("playbar")[0].getElementsByTagName("img")[0];
    playbar_text_main = document.getElementsByClassName("playbar_text_main")[0];
    playbar_text_sub = document.getElementsByClassName("playbar_text_sub")[0];
    playbar_playbutton = document.getElementsByClassName("playbar_right")[0].getElementsByTagName("div")[0];

    playbar_playbutton.addEventListener("click", function(){audio_toggle(radio.current_stream.current_button, radio.current_stream.key)});
}

function playbar_design_toggle(){
    playbar_img.src = radio.current_stream.data.image.src;
    playbar_text_main.innerHTML = radio.current_stream.data.name;
    playbar_text_sub.innerHTML = "Luckyapps_Musik";
    if(radio.audio_playing){
        playbar_playbutton.innerHTML = "||";
    }else{
        playbar_playbutton.innerHTML = ">";
    }
}