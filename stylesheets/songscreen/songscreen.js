window.addEventListener("load", songscreen_start);

function songscreen_start(){

}

async function songscreen_open(){
    var image = ""; //Experimental
    if(player.currentAudio.image){
        if(player.currentAudio.image.alt){
            console.log(player.currentAudio.image.alt);
            image = player.currentAudio.image.src;
            var imageBackground = player.currentAudio.image.alt
        }else{
            image = player.currentAudio.image.src;
            var imageBackground = image;
        }
    }else{
        var image = "https://luckyapps.github.io/Musik/media/images/logo.png";
        var imageBackground = "https://luckyapps.github.io/Musik/media/images/logo.png";
    }
    var playbar = "";
    if(player.currentAudio.data_raw){
        if(player.currentAudio.data_raw.playbar){
            console.log("playbar");
            playbar = '<div class="home_playbarContainer"><div class="home_playbar" data-audio='+ player.currentAudio.id +'></div></div>'
            console.log(playbar);
        }
    }
    var content = "<div class='songscreen_container_back' style='background: url("+ /*radio.current_stream.data.image.src*/imageBackground +");background-size: cover;background-position: center;'>"
    +"<div class='songscreen_container'>"
        +"<img src='"+ /*radio.current_stream.data.image.src*/image +"'>"
        +"<div class='songscreen_name_container'><h2 class='songscreen_name'>"+ player.currentAudio.name +"</h2>"
        +"<div class='songscreen_description color_sub' id='"+ player.currentAudio.id +"_rtssc'>"+ player.currentAudio.description+"</div></div>"
        +playbar
        +"<div class='songscreen_playbutton playbutton' data-audio='"+ player.currentAudio.id +"'>Play</div>"
    +"</div></div>";

    var toolbar = "<div id='songscreen_fav_but' onclick='favorite_toggle()'>❤️</div>";

    await flyin_open(content,undefined, toolbar);
    reloadPlaybuttons();
    //document.getElementsByClassName("songscreen_playbutton")[0].addEventListener("click", function(){audio_toggle(radio.current_stream.current_button, radio.current_stream.key)})
    //songscreen_playbutton_toggle();
    favorite_style_init();
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