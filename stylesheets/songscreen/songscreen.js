window.addEventListener("load", songscreen_start);

function songscreen_start(){

}

function songscreen_open(){
    var content = "<div class='songscreen_container_back' style='background: url("+ radio.current_stream.data.image.src +");background-size: cover;background-position: center;'>"
    +"<div class='songscreen_container'>"
    +"<img src='"+ radio.current_stream.data.image.src +"'>"
    +"<div class='songscreen_name_container'><h2 class='songscreen_name'>"+ radio.current_stream.data.name +"</h2>"
    +"<div class='songscreen_description color_sub' id='"+ radio.current_stream.key +"_rtssc'>"+ radio.current_stream.data.description+"</div></div>"
    +"<div class='songscreen_playbutton'>></div>"
    +"</div></div>";

    flyin_open(content);
    document.getElementsByClassName("songscreen_playbutton")[0].addEventListener("click", function(){audio_toggle(radio.current_stream.current_button, radio.current_stream.key)})
    songscreen_playbutton_toggle();
}

function songscreen_playbutton_toggle(){
    if(document.getElementsByClassName("songscreen_playbutton")[0]){
        console.log("GO");
        if(radio.audio_playing){
            document.getElementsByClassName("songscreen_playbutton")[0].innerHTML = "||";
        }else{
            document.getElementsByClassName("songscreen_playbutton")[0].innerHTML = ">";
        }
    } 
}