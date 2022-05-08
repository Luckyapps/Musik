var audio_playing = false;
var audio, content, current_stream;

var streamlist = [{ //https://www1.wdr.de/unternehmen/der-wdr/empfang-technik/webradio-100.html
    "1live":[{
        "name": "1Live",
        "description": "Ein Popsender",
        "source": "https://f111.rndfnk.com/ard/wdr/1live/live/mp3/128/stream.mp3?sid=28ssI1SUMluPZo2LkBfni3G93Sr&token=u_pKKwSdK_Y-D0DTMi2T4EcHOH-HiGmPfc2xF-v1HoY&tvf=57NgTvA37RZmMTExLnJuZGZuay5jb20"     
    }],
    "wdr2":[{
        "name":"WDR2",
        "description":"WDR2 Popsender",
        "source":"https://f131.rndfnk.com/ard/wdr/wdr2/suedwestfalen/mp3/128/stream.mp3?sid=28sv8JSRzFp7DUFDgmji9HEkWRl&token=2b7k1uPhRy-2jGAndYsZ9UK6osUab19g_UB3LIBVDCo&tvf=fiA99zY57RZmMTMxLnJuZGZuay5jb20"
    }]
}]

function load_musik_script(){
    console.log("START");
    content = document.getElementsByClassName("radio_content")[0];
    streaming_list_load();
}

function streaming_list_load(){
    for(i=0; i<Object.keys(streamlist[0]).length; i++){
        var streamlist_selected = streamlist[0][Object.keys(streamlist[0])[i]][0];
        console.log(streamlist_selected);
       content.innerHTML = content.innerHTML +"<div class='radio_card'><h2>"+ streamlist_selected.name +"</h2><p>"+ streamlist_selected.description +"</p><button onclick='audio_toggle(this)' value='"+ Object.keys(streamlist[0])[i] +"'>Start</button></div>";
    }
}

function audio_toggle(but){
    if(audio_playing){
        if(current_stream.name == streamlist[0][but.value][0].name){
            audio_stop(but);
            audio_playing = false;
        }else{
            current_stream.button.innerHTML = "Play";
            audio_stop(but);
            audio_playing = false;
            audio_play(but);
            audio_playing = true;
        }
    }else if(audio_playing == false){
        audio_play(but);
        audio_playing = true;
    }
}

function audio_play(but){
    console.log("play");
    audio = new Audio(streamlist[0][but.value][0].source);
    current_stream = streamlist[0][but.value][0];
    current_stream.button = but;
    audio.play();
    but.innerHTML = "Stop";
    document.title = "Luckyapps_Radio | "+ streamlist[0][but.value][0].name;
}

function audio_stop(but){
    but.innerHTML = "Play";
    audio.pause();
}