var streamlist_base = {
    "1live": {
        name: "1Live",
        description: "Ein Popsender",
        source: "https://wdr-1live-live.icecastssl.wdr.de/wdr/1live/live/mp3/128/stream.mp3",
        image: {
            src: "https://luckyapps.github.io/Musik/media/images/1live.png",
            sizes: "400x400",
            type: "image/png"
        }
    },
    wdr2:{
        name:"WDR2",
        description:"WDR2 Popsender",
        source:"https://wdr-wdr2-suedwestfalen.icecastssl.wdr.de/wdr/wdr2/suedwestfalen/mp3/128/stream.mp3",
        image: {
            src: "https://luckyapps.github.io/Musik/media/images/wdr2.png",
            sizes: "400x400",
            type: "image/png"
        }
    },
};

class stream {
    constructor(name, description, souce, src, sizes, type, data){
        this.name = name;
        this.description = description;
        this.souce = souce;
        this.image = {
            src: src,
            sizes: sizes,
            type: type
        };
        this.data = data;
    }
}

var radio = {
    streamlist: {
        base: {
            content: streamlist_base,
            keylist: Object.keys(streamlist_base)
        },
        custom: {
            active: false,
            content: {},
            keylist: []
        },
    },
    current_stream: {
        data: {},//von radio.streamlist.base.content['XXX']
        key: "",
        current_button: "" //html object des buttons
    },
    audio_playing: false
}

window.addEventListener("load", radio_start);

function radio_start(){
    if(localStorage.getItem("radio")){
        radio = JSON.parse(localStorage.getItem("radio"));
    }else{
        save_radio();
    }
    streamlist_load();
}

function save_radio(){
    var radio_tmp = JSON.stringify(radio);
    radio_tmp = JSON.parse(radio_tmp);
    radio_tmp.audio_playing = false;
    localStorage.setItem("radio", JSON.stringify(radio_tmp));
    console.log("radio Gespeichert");
}

function streamlist_load(){
    var home_container = document.getElementsByClassName("radio_home")[0].getElementsByClassName("home_card_container")[0];
    home_container.innerHTML = "";
    if(radio.streamlist.custom.active){
        var streamlist = radio.streamlist.custom;
    }else{
        var streamlist = radio.streamlist.base;
    }
    for(i=0; i < streamlist.keylist.length; i++){
            home_container.innerHTML += "<div class='home_card'><div class='home_card_img'><img src='"+ streamlist.content[streamlist.keylist[i]].image.src +"'><div class='home_card_play' onclick='audio_toggle(this, `"+ streamlist.keylist[i] +"`)'>></div></div><h3>"+ streamlist.content[streamlist.keylist[i]].name +"</h3><p>"+ streamlist.content[streamlist.keylist[i]].description +"</p></div>"
    }
}

function audio_toggle(but, value){
    if(radio.audio_playing){
        if(radio.current_stream.data.name == radio.streamlist.base.content[value].name){
            audio_stop(but, value);
            radio.audio_playing = false;
        }else{
            audio_stop(radio.current_stream.current_button);
            audio_play(but, value);
        }
    }else if(radio.audio_playing == false){
        audio_play(but, value);
    }
    playbar_design_toggle();
    songscreen_playbutton_toggle()
    save_radio();
}

function audio_play(but, value){
    radio.current_stream.data = radio.streamlist.base.content[value];
    radio.current_stream.key = value;
    radio.current_stream.current_button = but;
    audio = new Audio(radio.current_stream.data.source);
    audio.play();
    radio.audio_playing = true;
    but.innerHTML = "||";
    document.title = "Luckyapps_Radio | "+ radio.current_stream.data.name;
    navigator.mediaSession.metadata = new MediaMetadata({
        title: radio.current_stream.data.name,
        artist: 'Luckyapps_Radio',
        //album: 'Whenever You Need Somebody',
        artwork: [
            //{ src: 'https://dummyimage.com/96x96',   sizes: '96x96',   type: 'image/png' },
            //{ src: 'https://dummyimage.com/128x128', sizes: '128x128', type: 'image/png' },
            //{ src: 'https://dummyimage.com/192x192', sizes: '192x192', type: 'image/png' },
           // { src: 'https://dummyimage.com/256x256', sizes: '256x256', type: 'image/png' },
            //{ src: 'https://dummyimage.com/384x384', sizes: '384x384', type: 'image/png' },
            //{ src: 'https://dummyimage.com/512x512', sizes: '512x512', type: 'image/png' },
            { src: radio.current_stream.data.image.src, sizes: radio.current_stream.data.image.sizes, type: radio.current_stream.data.image.type },
        ]
    });
}

function audio_stop(but, value){
    but.innerHTML = ">";
    audio.pause();
    radio.audio_playing = false;
}