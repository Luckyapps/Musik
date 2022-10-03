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
    wdr3:{
        name:"WDR3",
        description:"Klassik und Kultur",
        source:"https://wdr-wdr3-live.icecastssl.wdr.de/wdr/wdr3/live/mp3/128/stream.mp3",
        radiotext_url: "https://www.wdr.de/radio/radiotext/streamtitle_wdr3.txt",
        image: {
            src: "https://luckyapps.github.io/Musik/media/images/wdr3.png",
            sizes: "448x448",
            type: "image/png"
        }
    },
    wdr4:{
        name:"WDR4",
        description:"Oldies",
        source:"https://wdr-wdr4-live.icecastssl.wdr.de/wdr/wdr4/live/mp3/128/stream.mp3",
        radiotext_url: "https://www.wdr.de/radio/radiotext/streamtitle_wdr4.txt",
        image: {
            src: "https://luckyapps.github.io/Musik/media/images/wdr4.png",
            sizes: "180x180",
            type: "image/png"
        }
    },
    wdr5:{
        name:"WDR5",
        description:"Wissenschaft, Gesellschaft, Talk",
        source:"https://wdr-wdr5-live.icecastssl.wdr.de/wdr/wdr5/live/mp3/128/stream.mp3",
        radiotext_url: "https://www.wdr.de/radio/radiotext/streamtitle_wdr5.txt",
        image: {
            src: "https://luckyapps.github.io/Musik/media/images/wdr5.jpg",
            sizes: "512x512",
            type: "image/jpg"
        }
    },
    antennebayern:{
        name:"Antenne Bayern",
        description :"Bayrischer Sender",
        source:"https://stream.antenne.de/antenne/stream/aacp",//"https://stream.antenne.de/antenne/stream/mp3",
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
    },
    antennebayern2000:{
        name:"Antenne Bayern 2000er Hits",
        description :"Untersender von Antenne Bayern mit 2000er Hits",
        source: "https://stream.antenne.de/2000er-hits/stream/aacp",
        image: {
            src: "https://luckyapps.github.io/Musik/media/images/antenne/2000.png",
            sizes: "678x678",
            type: "image/png"
        } 
    },
    antennebayern2010:{
        name:"Antenne Bayern 2000er Hits",
        description :"Untersender von Antenne Bayern mit 2000er Hits",
        source: "https://stream.antenne.de/2000er-hits/stream/aacp",
        image: {
            src: "https://luckyapps.github.io/Musik/media/images/antenne/2010.png",
            sizes: "678x678",
            type: "image/png"
        } 
    },
    antennebayern70:{
        name:"Antenne Bayern 70er Hits",
        description :"Untersender von Antenne Bayern mit 70er Hits",
        source: "https://stream.antenne.de/70er-hits/stream/aacp",
        image: {
            src: "https://luckyapps.github.io/Musik/media/images/antenne/70.png",
            sizes: "678x678",
            type: "image/png"
        } 
    },
    antennebayern80:{
        name:"Antenne Bayern 80er Hits",
        description :"Untersender von Antenne Bayern mit 80er Hits",
        source: "https://stream.antenne.de/80er-kulthits/stream/aacp",
        image: {
            src: "https://luckyapps.github.io/Musik/media/images/antenne/80.png",
            sizes: "678x678",
            type: "image/png"
        } 
    },
    antennebayern90:{
        name:"Antenne Bayern 90er Hits",
        description :"Untersender von Antenne Bayern mit 90er Hits",
        source: "https://stream.antenne.de/90er-hits/stream/aacp",
        image: {
            src: "https://luckyapps.github.io/Musik/media/images/antenne/90.jpg",
            sizes: "678x678",
            type: "image/jpg"
        } 
    }
};

var channels_base = {
    "wdr": {
        name: "WDR",
        description: "Öffentlich Rechtlicher Rundfunk",
        streams: ["1live", "wdr2", "wdr3", "wdr4", "wdr5"],
        image: {
            src: "https://luckyapps.github.io/Musik/media/images/wdr2.png",
            sizes: "400x400",
            type: "image/png"
        }
    },
    antennebayern: {
        name: "Antenne Bayern",
        description: "Bayrischer ANTENNE Sender mit vielen verschiedenen Streams: <a href='https://www.antenne.de/musik/unsere-streams'>Senderübersicht</a>",
        streams: ["antennebayern","antennebayern2000","antennebayern2010","antennebayern70","antennebayern80","antennebayern90"],
        image: {
            src: "https://luckyapps.github.io/Musik/media/images/antennebayern.png",
            sizes: "225x225",
            type: "image/png"
        }
    }
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
    channels: channels_base,
    channels_keylist: Object.keys(channels_base),
    channels_current: "",
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
    recently_played_load();
}

function save_radio(){
    var radio_tmp = JSON.stringify(radio);
    radio_tmp = JSON.parse(radio_tmp);
    radio_tmp.audio_playing = false;
    localStorage.setItem("radio", JSON.stringify(radio_tmp));
    //console.log("radio Gespeichert");
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
            var radiotext = " id='"+ streamlist.keylist[i] +"_rtcd'>"+ streamlist.content[streamlist.keylist[i]].description;
        }
        if(streamlist.content[streamlist.keylist[i]].main){
            home_container.innerHTML += "<div class='home_card' id='"+ streamlist.keylist[i] +"_hc'><div class='home_card_img'><img src='"+ streamlist.content[streamlist.keylist[i]].image.src +"'><div class='home_card_play' onclick='audio_toggle(this, `"+ streamlist.keylist[i] +"`)'>></div></div><h3>"+ streamlist.content[streamlist.keylist[i]].name +"</h3><p"+ radiotext +"</p></div>"
        }else{
            console.log("nomain");
        }    
    }
    channels_start();
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
    console.log(but);
    radio.current_stream.data = radio.streamlist.base.content[value];
    radio.current_stream.key = value;
    stream_history.add(radio.current_stream.key);
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
        radio.streamlist.base.content[data.data.stream].radiotext = data.data.antwort;
        if(document.getElementById(data.data.stream +"_rtcd")){
            document.getElementById(data.data.stream +"_rtcd").innerHTML = data.data.antwort;
        }
        if(document.getElementById(data.data.stream +"_rtcl")){
            document.getElementById(data.data.stream +"_rtcl").innerHTML = data.data.antwort;
        }
        if(document.getElementById(data.data.stream +"_rtssc")){
            document.getElementById(data.data.stream +"_rtssc").innerHTML = data.data.antwort;
        }
        if(data.data.stream == radio.current_stream.key){
            document.getElementsByClassName("playbar_text_sub")[0].innerHTML = data.data.antwort;
            navigator.mediaSession.metadata = new MediaMetadata({
                title: radio.current_stream.data.name,
                artist: data.data.antwort,
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
    }
}

var stream_history = {
    get: ()=>{
        if(localStorage.getItem("musik_history")){
            return JSON.parse(localStorage.getItem("musik_history"));
        }else{
            return false;
        }
    },
    add: (content)=>{
        if(localStorage.getItem("musik_history")){
            var history = JSON.parse(localStorage.getItem("musik_history"));
            history.forEach((element, index) => {
                if(element == content){
                    history.splice(index,1);
                }
            });
            history.unshift(content);
            localStorage.setItem("musik_history", JSON.stringify(history));
            streamlist = stream_history.get_list();
            console.log(streamlist);
            recently_played_load(streamlist);
            return true;
        }else{
            localStorage.setItem("musik_history", JSON.stringify([content]));
            return true;
        }
    },
    get_list: ()=>{
        var history = JSON.parse(localStorage.getItem("musik_history"));
        var streamlist = {
            content: {}
        };
        history.forEach((element, index) => {
            streamlist.content[element] = radio.streamlist.base.content[element];
        });
        streamlist.keylist = Object.keys(streamlist.content);
        return streamlist;
    },
    reset: ()=>{
        localStorage.removeItem("musik_history");
        return true;
    }
}

function recently_played_load(streamlist){
    if(!streamlist){
        streamlist = stream_history.get_list();
    }
    //console.log(radio.radiotext);
    var home_container = document.getElementsByClassName("radio_recent")[0].getElementsByClassName("home_card_container")[0];
    home_container.innerHTML = "";
    for(i=0; i < streamlist.keylist.length; i++){
        if(streamlist.content[streamlist.keylist[i]].radiotext != undefined){
            var radiotext = " id='"+ streamlist.keylist[i] +"_rtcd'>"+ streamlist.content[streamlist.keylist[i]].radiotext;
        }else{
            var radiotext = " id='"+ streamlist.keylist[i] +"_rtcd'>"+ streamlist.content[streamlist.keylist[i]].description;
        }
        if(streamlist.content[streamlist.keylist[i]]){
            home_container.innerHTML += "<div class='home_card' id='"+ streamlist.keylist[i] +"_hc'><div class='home_card_img'><img src='"+ streamlist.content[streamlist.keylist[i]].image.src +"'><div class='home_card_play' onclick='audio_toggle(this, `"+ streamlist.keylist[i] +"`)'>></div></div><h3>"+ streamlist.content[streamlist.keylist[i]].name +"</h3><p"+ radiotext +"</p></div>"
        }else{
            console.log("nomain");
        }    
    }
    channels_start();
}

function radiotext_load(){
    if(radio.streamlist.custom.active){
        var streamlist = radio.streamlist.custom;
    }else{
        var streamlist = radio.streamlist.base;
    }
    for(i=0; i < streamlist.keylist.length; i++){
        if(streamlist.content[streamlist.keylist[i]].radiotext_url != undefined){
            //radio.radiotext.keylist.push(streamlist.keylist[i]);
            //window.postMessage({request: "true", url: streamlist.content[streamlist.keylist[i]].radiotext_url, stream: streamlist.keylist[i]});
            testit(streamlist.content[streamlist.keylist[i]].radiotext_url, streamlist.keylist[i]);
        }
    }
    setTimeout(()=>{radiotext_load()}, 1000);
}

function testit(url, stream){
    //var url = "https://www.faderstart.wdr.de/radio/radiotext/streamtitle_1live.txt";
    
    fetch(url)
    
    .then((response) => response.text())

    .then((text) => {radiotext_receive({data: {antwort: text, stream: stream}, result: "true"})});
}