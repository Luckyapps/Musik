var streamlist_base = {
    "1live": {
        name: "1Live",
        description: "Ein Popsender",
        source: "https://wdr-1live-live.icecastssl.wdr.de/wdr/1live/live/mp3/128/stream.mp3",
        main: true,
        radiotext_url: "https://www.wdr.de/radio/radiotext/streamtitle_1live.txt",
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
        main: true,
        radiotext_url: "https://www.wdr.de/radio/radiotext/streamtitle_wdr2.txt",
        image: {
            src: "https://luckyapps.github.io/Musik/media/images/wdr2.png",
            sizes: "400x400",
            type: "image/png"
        }
    },
    antennebayern:{
        name:"Antenne Bayern",
        description :"Bayrischer Sender",
        source:"https://stream.antenne.de/antenne/stream/mp3",
        main: true,
        image: {
            src: "https://luckyapps.github.io/Musik/media/images/antennebayern.png",
            sizes: "225x225",
            type: "image/png"
        } 
    },
    radiosauerland:{
        name:"Radio Sauerland",
        description:"Sauerländer Lokalsender",
        source:"https://radiosauerland.cast.addradio.de/radiosauerland/simulcast/high/stream.mp3",
        main: true,
        image: {
            src: "https://luckyapps.github.io/Musik/media/images/radiosauerland.png",
            sizes: "636x636",
            type: "image/png"
        } 
    },
    kronehit:{
        name:"Kronehit",
        description:"Östereichischer Privatsender UHD",
        source:"https://secureonair.krone.at/kronehit-ultra-hd.aac?context=fHA6LTE=&listenerId=[IFA]&aw_0_req.userConsentV2=[PLAYER_TC_STRING]",
        main: true,
        channels: "https://www.kronehit.at/player/channels/portal.xml",
        image: {
            src: "https://luckyapps.github.io/Musik/media/images/kronehit.jpeg",
            sizes: "1400x1400",
            type: "image/jpeg"
        } 
    }
};

var channels = {
    "1live": {
        
    }
}

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
    radiotext: {
        keylist: []
    },
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
        last: []
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
        /*radio = JSON.parse(localStorage.getItem("radio"));
        radio.streamlist.base.content = streamlist_base;
        radio.streamlist.base.keylist = Object.keys(streamlist_base);*/
    }else{
        save_radio();
    }
    window.addEventListener('message', function (evt) {radiotext_receive(evt.data)});
    radiotext_load();
    streamlist_load();
}

function save_radio(){
    var radio_tmp = JSON.stringify(radio);
    radio_tmp = JSON.parse(radio_tmp);
    radio_tmp.audio_playing = false;
    localStorage.setItem("radio", JSON.stringify(radio_tmp));
    console.log("radio Gespeichert");
}

async function streamlist_load(){
    //console.log(radio.radiotext);
    var home_container = document.getElementsByClassName("radio_home")[0].getElementsByClassName("home_card_container")[0];
    home_container.innerHTML = "";
    if(radio.streamlist.custom.active){
        var streamlist = radio.streamlist.custom;
    }else{
        var streamlist = radio.streamlist.base;
    }
    for(i=0; i < streamlist.keylist.length; i++){
        if(streamlist.content[streamlist.keylist[i]].radiotext != undefined){
            var radiotext = " id='"+ streamlist.keylist[i] +"_rtcd'>"+ streamlist.content[streamlist.keylist[i]].radiotext;
        }else{
            var radiotext = " id='"+ streamlist.keylist[i] +"_rtcd'>"+ streamlist.content[streamlist.keylist[i]].description
        }
        if(streamlist.content[streamlist.keylist[i]].main){
            home_container.innerHTML += "<div class='home_card'><div class='home_card_img'><img src='"+ streamlist.content[streamlist.keylist[i]].image.src +"'><div class='home_card_play' onclick='audio_toggle(this, `"+ streamlist.keylist[i] +"`)'>></div></div><h3>"+ streamlist.content[streamlist.keylist[i]].name +"</h3><p"+ radiotext +"</p></div>"
        }else{
            console.log("nomain");
        }    
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
    radio.streamlist.last.push(radio.streamlist.base.content[value]);
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

function radiotext_receive(data){
    if(data.result){
        console.log(data.data.antwort);
        radio.streamlist.base.content[data.data.stream].radiotext = data.data.antwort;
        if(document.getElementById(data.data.stream +"_rtcd")){
            document.getElementById(data.data.stream +"_rtcd").innerHTML = data.data.antwort;
        }
        if(document.getElementById(data.data.stream +"_rtssc")){
            document.getElementById(data.data.stream +"_rtssc").innerHTML = data.data.antwort;
        }
        console.log(radio.streamlist.base.content[data.data.stream]);
    }
}

function radiotext_load(){
    console.log("load_radiotext");
    if(radio.streamlist.custom.active){
        var streamlist = radio.streamlist.custom;
    }else{
        var streamlist = radio.streamlist.base;
    }
    for(i=0; i < streamlist.keylist.length; i++){
        if(streamlist.content[streamlist.keylist[i]].radiotext_url != undefined){
            radio.radiotext.keylist.push(streamlist.keylist[i]);
            window.postMessage({request: "true", url: streamlist.content[streamlist.keylist[i]].radiotext_url, stream: streamlist.keylist[i]});
        }
    }
    setTimeout(()=>{radiotext_load()}, 5000);
}

