var audio_playing = false;
var audio, content, current_stream, but_universal, current_button;

var streamlist = [{ //https://www1.wdr.de/unternehmen/der-wdr/empfang-technik/webradio-100.html https://www.antenne.de/programm/empfang/antenne-bayern-hoeren-internet
    "1live":[{
        "name": "1Live",
        "description": "Ein Popsender",
        "source": "https://f111.rndfnk.com/ard/wdr/1live/live/mp3/128/stream.mp3?sid=28ssI1SUMluPZo2LkBfni3G93Sr&token=u_pKKwSdK_Y-D0DTMi2T4EcHOH-HiGmPfc2xF-v1HoY&tvf=57NgTvA37RZmMTExLnJuZGZuay5jb20",
        "image": [{
            "src": "https://luckyapps.github.io/Musik/media/images/1live.png",
            "sizes": "400x400",
            "type": "image/png"
        }] 
    }],
    "wdr2":[{
        "name":"WDR2",
        "description":"WDR2 Popsender",
        "source":"https://f131.rndfnk.com/ard/wdr/wdr2/suedwestfalen/mp3/128/stream.mp3?sid=28sv8JSRzFp7DUFDgmji9HEkWRl&token=2b7k1uPhRy-2jGAndYsZ9UK6osUab19g_UB3LIBVDCo&tvf=fiA99zY57RZmMTMxLnJuZGZuay5jb20",
        "image": [{
            "src": "https://luckyapps.github.io/Musik/media/images/wdr2.png",
            "sizes": "400x400",
            "type": "image/png"
        }] 
    }],
    "wdr3":[{
        "name":"WDR3",
        "description":"Klassik und Kultur",
        "source":"https://wdr-wdr3-live.icecastssl.wdr.de/wdr/wdr3/live/mp3/128/stream.mp3",
        "image": [{
            "src": "https://luckyapps.github.io/Musik/media/images/wdr3.png",
            "sizes": "448x448",
            "type": "image/png"
        }] 
    }],
    "wdr4":[{
        "name":"WDR4",
        "description":"Oldies",
        "source":"https://wdr-wdr4-live.icecastssl.wdr.de/wdr/wdr4/live/mp3/128/stream.mp3",
        "image": [{
            "src": "https://luckyapps.github.io/Musik/media/images/wdr4.png",
            "sizes": "180x180",
            "type": "image/png"
        }] 
    }],
    "wdr5":[{
        "name":"WDR5",
        "description":"Wissenschaft, Gesellschaft, Talk",
        "source":"https://wdr-wdr5-live.icecastssl.wdr.de/wdr/wdr5/live/mp3/128/stream.mp3",
        "image": [{
            "src": "https://luckyapps.github.io/Musik/media/images/wdr5.jpg",
            "sizes": "512x512",
            "type": "image/jpg"
        }] 
    }],
    "antennebayern":[{
        "name":"Antenne Bayern",
        "description":"Bayrischer Sender",
        "source":"https://stream.antenne.de/antenne/stream/mp3",
        "image": [{
            "src": "https://luckyapps.github.io/Musik/media/images/antennebayern.png",
            "sizes": "225x225",
            "type": "image/png"
        }] 
    }],
    "radiosauerland":[{
        "name":"Radio Sauerland",
        "description":"Sauerländer Lokalsender",
        "source":"https://radiosauerland.cast.addradio.de/radiosauerland/simulcast/high/stream.mp3",
        "image": [{
            "src": "https://luckyapps.github.io/Musik/media/images/radiosauerland.png",
            "sizes": "636x636",
            "type": "image/png"
        }] 
    }]
}]

function load_musik_script(){
    content = document.getElementsByClassName("radio_content")[0];
    but_universal = document.getElementById("title_h1");
    but_universal.addEventListener("click", but_universal_toggle);
    streaming_list_load();
}

function but_universal_toggle(){
    if(current_button){
        audio_toggle(current_button);
    } 
}

function but_universal_update(){
    if(audio_playing){
        but_universal.innerHTML = "<img src='"+ current_stream.image[0].src +"'></img>"+ current_stream.name +" | läuft";
    }else{
        but_universal.innerHTML = "<img src='"+ current_stream.image[0].src +"'></img>"+ current_stream.name +" | angehalten";
    }
}

function streaming_list_load(){
    for(i=0; i<Object.keys(streamlist[0]).length; i++){
        var streamlist_selected = streamlist[0][Object.keys(streamlist[0])[i]][0];
       content.innerHTML = content.innerHTML +"<div class='radio_card'><h2>"+ streamlist_selected.name +"</h2><p>"+ streamlist_selected.description +"</p><button class='radio_card_play' onclick='audio_toggle(this)' value='"+ Object.keys(streamlist[0])[i] +"'>Play</button></div>";
    }
}

function audio_toggle(but){
    current_button = but;
    if(audio_playing){
        if(current_stream.name == streamlist[0][but.value][0].name){
            audio_stop(but);
            audio_playing = false;
        }else{
            //current_stream.button.innerHTML = "Play";
            audio_stop(current_stream.button);
            audio_playing = false;
            audio_play(but);
            audio_playing = true;
        }
    }else if(audio_playing == false){
        audio_play(but);
        audio_playing = true;
    }
    but_universal_update();
}

function audio_play(but){
    audio = new Audio(streamlist[0][but.value][0].source);
    current_stream = streamlist[0][but.value][0];
    current_stream.button = but;
    audio.play();
    but.innerHTML = "Stop";
    but.classList.replace("radio_card_play", "radio_card_stop");
    document.title = "Luckyapps_Radio | "+ streamlist[0][but.value][0].name;
    navigator.mediaSession.metadata = new MediaMetadata({
        title: streamlist[0][but.value][0].name,
        artist: 'Luckyapps_Radio',
        //album: 'Whenever You Need Somebody',
        artwork: [
            //{ src: 'https://dummyimage.com/96x96',   sizes: '96x96',   type: 'image/png' },
            //{ src: 'https://dummyimage.com/128x128', sizes: '128x128', type: 'image/png' },
            //{ src: 'https://dummyimage.com/192x192', sizes: '192x192', type: 'image/png' },
           // { src: 'https://dummyimage.com/256x256', sizes: '256x256', type: 'image/png' },
            //{ src: 'https://dummyimage.com/384x384', sizes: '384x384', type: 'image/png' },
            //{ src: 'https://dummyimage.com/512x512', sizes: '512x512', type: 'image/png' },
            { src: streamlist[0][but.value][0].image[0].src, sizes: streamlist[0][but.value][0].image[0].sizes, type: streamlist[0][but.value][0].image[0].type },
        ]
    });
}

function audio_stop(but){
    but.innerHTML = "Play";
    but.classList.replace("radio_card_stop", "radio_card_play");
    audio.pause();
}