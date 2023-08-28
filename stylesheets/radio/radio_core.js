var streamlist_base = {
    "1live": {
        name: "1Live",
        type: "radio",
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
        // old_source: --> "https://radiosauerland.cast.addradio.de/radiosauerland/simulcast/high/stream.mp3",
        source: "https://edge09.streamonkey.net/wf-radiosauerland?aggregator=eigeneweb&gfksui=1687771715364D6355C0C18B643DE984E3A0B2BB4EF9137A85A77C1F&listenerid=399367aff4cc098615ed89d0af3776fc&aw_0_req.userConsentV2=CPt-FIAPt-FIAAFADBDEDKCsAP_AAH_AAAYgG4BR9DpebWNAcXh8QMsUKYQGVlATQGQAABSBAyABQBEAMJwAgWAAAASAgAAAgQYAolAAAABEDEAEQAAAQAAAAACkAgAEhAEIICBAEAEBAAAAAAgAAAAAAAAAgAAJAAQAkAAAAcLgRAAAAAAAAAAABAyQAEgVLiABoCgwJgAgihRACCsICKAQAAAAQJEAAAAIABBGAAiwAAAAQAAAAECDAFEAAAAAAAAgAgAAACAAAAAAAAAAAAAAhAAQIAgAAIAAAAAEAAAAAAAAAAAAAAACAEAAIAAAACAA.YAAAAAAAAAAA",
        radiotext_url: "https://api-prod.nrwlokalradios.com/playlist/current?station=21", //https://api-prod.nrwlokalradios.com/playlist/current?station=21
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
            src: "media/images/kronehit.jpeg",
            sizes: "1400x1400",
            type: "image/jpeg"
        } 
    },
    kronehitfresh:{
        name:"Kronehit Fresh",
        description :"Untersender von Kronehit",
        source: "https://secureonair.krone.at/kronehit22.mp3?listenerId=[IFA]&aw_0_req.userConsentV2=[PLAYER_TC_STRING]",
        image: {
            src: "media/images/kronehit/fresh-90x65-min.original.png",
            alt: "media/images/kronehit/fresh-Variante-2-AdobeStock-Syda-Productions-80.original.jpg",
            sizes: "90x65",
            type: "image/png"
        } 
    },
    kronehitdance:{
        name:"Kronehit Dance",
        description :"Untersender von Kronehit",
        source: "https://secureonair.krone.at/kronehit23.mp3?listenerId=[IFA]&aw_0_req.userConsentV2=[PLAYER_TC_STRING]",
        image: {
            src: "media/images/kronehit/dance-90x65-min.original.png",
            alt: "media/images/kronehit/dance-shutterstock-Ariwasabi-940x233.original.jpg",
            sizes: "90x65",
            type: "image/png"
        } 
    },
    kronehitgreatesthits:{
        name:"Kronehit Greatest Hits",
        description :"Untersender von Kronehit",
        source: "https://secureonair.krone.at/kronehit13.mp3?listenerId=[IFA]&aw_0_req.userConsentV2=[PLAYER_TC_STRING]",
        image: {
            src: "media/images/kronehit/greatest-hits-90x65-min.original.png",
            sizes: "90x65",
            type: "image/png"
        } 
    },
    kronehitchristmas:{
        name:"Kronehit Christmas",
        description :"Untersender von Kronehit",
        source: "https://secureonair.krone.at/kronehit12.mp3?context=fHA6LTE=&listenerId=[IFA]&aw_0_req.userConsentV2=[PLAYER_TC_STRING]",
        image: {
            src: "media/images/kronehit/Christmas-NEU-90x65.original.jpg",
            alt: "media/images/kronehit/CHRISTMAS-NEU-800x259.original.jpg",
            sizes: "90x65",
            type: "image/png"
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
        name:"Antenne Bayern 2010er Hits",
        description :"Untersender von Antenne Bayern mit 2010er Hits",
        source: "https://stream.antenne.de/2010er-hits/stream/aacp",
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
    },
    radio21buxtehude:{
        name:"Radio 21 Buxtehude",
        description: "Lokaler Radiosender aus Buxtehude",
        source: "https://streams.radio21.de/buxtehude/mp3-192/web",
        radiotext_url: "https://wp.radio21.de/cover/currentsong.json",
        image: {
            src: "https://luckyapps.github.io/Musik/media/images/radio21/buxtehude.webp",
            sizes: "175x175",
            type: "image/webp"
        } 
    },
    njoy:{
        name:"N-JOY",
        description: "Das 1Live des Nordens",
        radiotext_url: "https://www.n-joy.de/public/radioplaylists/njoy.json", //inkl. weiere Infos
        source: "https://d111.rndfnk.com/ard/ndr/njoy/live/mp3/128/stream.mp3?cid=01FBRKKTM6TVGA3B3W6Y8NMXK8&sid=2UOa7pXqV0I7kIPb4YARMTDcRaX&token=vSr7JRoKq6p6zfrxKzC6hq4dB6MAVwpANhciJggOE4g&tvf=VjNB1AUofhdkMTExLnJuZGZuay5jb20",
        image:{
            src: "https://www.n-joy.de/favicon-196x196.png",
            size: "196x196",
            type: "image/png"
        }
    }
};

var channels_base = {
    "wdr": {
        name: "WDR",
        description: "Öffentlich Rechtlicher Rundfunk",
        streams: ["1live", "wdr2", "wdr3", "wdr4", "wdr5"],
        color: "#2c2c2c",
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
        color: "#2c2c2c",
        image: {
            src: "https://luckyapps.github.io/Musik/media/images/antennebayern.png",
            sizes: "225x225",
            type: "image/png"
        }
    },
    kronehit: {
        name: "Kronehit",
        description: "Hitradio mit vielen verschiedenen Streams",
        streams: ["kronehit", "kronehitfresh", "kronehitdance", "kronehitgreatesthits", "kronehitchristmas"],
        color: "#2c2c2c",
        image: {
            src: "https://luckyapps.github.io/Musik/media/images/kronehit.jpeg",
            sizes: "1400x1400",
            type: "image/jpeg"
        } 
    },
    originals: {
        name: "Originals",
        description: "Luckyapp Originals Collection",
        streams: [],
        color: "#2c2c2c",
        image: {
            src: "https://luckyapps.github.io/Musik/media/images/logo.png",
            size: "1440x1440",
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
            content: Object.assign({},streamlist_base),
            keylist: Object.keys(Object.assign({},streamlist_base))
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
    loadPlaybuttons();
    loadPlaybars();
    //window.addEventListener('message', function (evt) {radiotext_receive(evt.data)});
    radiotext_load();
    streamlist_load();
    originals_home_load();
    recently_played_load();
}

function save_radio(){
    var radio_tmp = JSON.stringify(radio);
    radio_tmp = JSON.parse(radio_tmp);
    radio_tmp.audio_playing = false;
    localStorage.setItem("radio", JSON.stringify(radio_tmp));
    //console.log("radio Gespeichert");
}

function streamlist_load(){
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
            if(part_of_channels(streamlist.keylist[i])){
                var home_card_class = "home_card";
            }else{
                //console.log(streamlist.keylist[i]);
                var home_card_class = "home_card home_card_nolink";
            }
            home_container.innerHTML += "<div class='"+ home_card_class +"' id='"+ streamlist.keylist[i] +"_hc'><div class='home_card_img'><img src='"+ streamlist.content[streamlist.keylist[i]].image.src +"'><div class='home_card_play playbutton' data-audio='"+ streamlist.keylist[i] +"'>></div></div><h3>"+ streamlist.content[streamlist.keylist[i]].name +"</h3><p"+ radiotext +"</p></div>"
        }else{
            //console.log("nomain");
        }    
    }
    loadPlaybuttons();
    channels_start();
}


class audioObject{
    constructor(source,name,description,type,image, data){
        this.source = source;
        this.name = name;
        this.description = description;
        this.type = type;
        this.image = image;
        try{
            this.data_raw = data;
        }catch(err){}
    }
}

var player = {
    currentAudio: {},
    audioPlaying: false,
    playbuttons: [],
    playbars: [],
    audioList: {
        audios: Object.assign({}, radio.streamlist.base.content),
        keylist: JSON.parse(JSON.stringify(radio.streamlist.base.keylist))
    },
    add: function(id, source, data){
        if(player.check(id)!=true){
            this.audioList.keylist.push(id);
            console.warn(data);
            this.audioList.audios[id] = new audioObject(source,data.name,data.description,data.type,data.image,data);
            reloadPlaybuttons();
        }else{
            console.warn(id +" kann nicht hinzugefügt werden, da die Id bereits belegt ist.");
            return false;
        }
    },
    check: function(id){
        for(i=0;i<this.audioList.keylist.length;i++){
            if(this.audioList.keylist[i] == id){
                return true;
            }
        }
        return false;
    },
    play: function(audio_id){
        if(!player.audioList.audios[audio_id].audio){
            player.audioList.audios[audio_id].audio = new Audio(player.audioList.audios[audio_id].source);
            //player.audioList.audios[audio_id].audio.play();
            player.audioList.audios[audio_id].audio.addEventListener("play", (evt)=>{player.audioPlaying = true;if(player.audioList.audios[audio_id].buttons){playbuttons.update(player.audioList.audios[audio_id].buttons);}});
            player.audioList.audios[audio_id].audio.addEventListener("pause", (evt)=>{player.audioPlaying = false;if(player.audioList.audios[audio_id].buttons){playbuttons.update(player.audioList.audios[audio_id].buttons);}});
            player.audioList.audios[audio_id].audio.addEventListener("ended", (evt)=>{player.audioPlaying = false;if(player.audioList.audios[audio_id].buttons){playbuttons.update(player.audioList.audios[audio_id].buttons);}});
            player.audioList.audios[audio_id].audio.addEventListener("timeupdate", (evt)=>{if(player.audioList.audios[audio_id].playbars){playbars.update(player.audioList.audios[audio_id].playbars);}});
        }
        var audio = player.audioList.audios[audio_id].audio;
        if(player.audioList.audios[audio_id].type == "radio"){
            console.log("INFO");
            audio.src = audio.src;
        }
        audio.play();
        this.audioPlaying = true;
        this.currentAudio = player.audioList.audios[audio_id];
        this.currentAudio.id = audio_id;
        if(player.audioList.audios[audio_id].buttons){
            playbuttons.update(player.audioList.audios[audio_id].buttons);
        }
        stream_history.add(audio_id);
        loadMediaInterface(audio_id);
    },
    pause: function(audio_id){
        console.log(audio_id);
        var audio = player.audioList.audios[audio_id].audio;
        audio.pause();
        this.audioPlaying = false;
        if(player.audioList.audios[audio_id].buttons){
            playbuttons.update(player.audioList.audios[audio_id].buttons);
        }
    },
    stop: function(audio_id){
        if(audio_id != undefined){
            var audio = player.audioList.audios[audio_id].audio;
        }else{
            var audio = player.currentAudio.audio;
        }
        audio.pause();
        audio.currentTime = 0;
    },
    toggle: function(audio_id){
        if(this.audioPlaying){
            if(audio_id == this.currentAudio.id){
                this.pause(audio_id);
            }else{
                this.pause(this.currentAudio.id);
                this.play(audio_id);
            }
        }else{
            this.play(audio_id);
        }
        try{
            refreshPlaybar(player.currentAudio);
        }
        catch{
            console.log("RefreshPlaybar nicht gesetzt oder keine Playbar vorhanden.");
        }
        console.log(player);
        //Additions
        radio.current_stream.data = player.currentAudio;
        recently_played_load();
        playbar_design_toggle();
        songscreen_playbutton_toggle()
        save_radio();
    }
}

var playbuttons = {
    update: function(buttons){
        for(i=0;i<buttons.length;i++){
            if(player.audioPlaying){
                buttons[i].innerHTML = "||";
            }else{
                buttons[i].innerHTML = ">";
            }
        }
    },
    updateAll: function(){ //Experimentell
        var buttons = player.playbuttons;
        for(i=0;i<buttons.length;i++){
            if(player.audioPlaying){
                for(j=0;j<player.currentAudio.buttons.length;j++){
                    if(buttons[i] == player.currentAudio.buttons[j]){
                        buttons[i].innerHTML = "||";
                        break;
                    }else{
                        buttons[i].innerHTML = ">";
                    }
                }
            }else{
                buttons[i].innerHTML = ">";
            }
        }
    }
}

var playbars = {
    update: function(playbars){
        var audioTag = player.currentAudio.audio;
        for(i=0;i<playbars.length;i++){
            playbars[i].style.width = (100 / audioTag.duration) * audioTag.currentTime+"%";
        }
    }
}

function loadPlaybuttons(){
    var playbuttons = document.getElementsByClassName("playbutton");
    for(i=0;i<playbuttons.length;i++){
        if(playbuttons[i].getAttribute("data-audio")){
            for(j=0;j<player.audioList.keylist.length;j++){ 
                if(playbuttons[i].getAttribute("data-audio") == player.audioList.keylist[j]){ //Wenn es für data-audio ein Audioelement gibt.
                    player.playbuttons.push(playbuttons[i]);
                    if(player.audioList.audios[player.audioList.keylist[j]].buttons){
                        player.audioList.audios[player.audioList.keylist[j]].buttons.push(playbuttons[i]);
                    }else{
                        player.audioList.audios[player.audioList.keylist[j]].buttons = [playbuttons[i]];
                    }
                }
            }
        }
    }
    for(i=0;i<player.playbuttons.length;i++){
        player.playbuttons[i].addEventListener("click",playbuttonclickeventlistener);
    }
    //console.log(player);
    loadPlaybars();
}
function playbuttonclickeventlistener(evt){player.toggle(evt.target.getAttribute("data-audio"))};//für Playbuttons eventlistener

function resetPlaybuttons(){
    for(i=0;i<player.playbuttons.length;i++){
        player.playbuttons[i].removeEventListener("click", playbuttonclickeventlistener);
    }
    player.playbuttons = []; //Playbuttons zurücksetzen
    for(i=0;i<player.audioList.keylist.length;i++){
        if(player.audioList.audios[player.audioList.keylist[i]].buttons!=undefined){
            player.audioList.audios[player.audioList.keylist[i]].buttons = undefined;
        }
    }
}

function reloadPlaybuttons(){
    resetPlaybuttons();
    loadPlaybuttons();
    playbuttons.updateAll();
}

function loadPlaybars(){
    var playbars = document.getElementsByClassName("home_playbar");
    for(i=0;i<playbars.length;i++){
        if(playbars[i].getAttribute("data-audio")){
            for(j=0;j<player.audioList.keylist.length;j++){ 
                if(playbars[i].getAttribute("data-audio") == player.audioList.keylist[j]){ //Wenn es für data-audio ein Audioelement gibt.
                    player.playbars.push(playbars[i]);
                    if(player.audioList.audios[player.audioList.keylist[j]].playbars){
                        player.audioList.audios[player.audioList.keylist[j]].playbars.push(playbars[i]);
                    }else{
                        player.audioList.audios[player.audioList.keylist[j]].playbars = [playbars[i]];
                    }
                }
            }
        }
    }
    //console.log(player);
    for(i=0;i<player.playbars.length;i++){
        player.playbars[i].parentElement.addEventListener("click",playbarsclickeventlistener);
    }
    //console.log(player);
}
function playbarsclickeventlistener(e){
    var rect = e.target.getBoundingClientRect();
    var x = e.clientX - rect.left; //x position within the element.
    var y = e.clientY - rect.top;  //y position within the element.
    console.log("x: "+ x +" | "+ "y: "+ y);
    console.log(parseFloat(e.target.childNodes[0].style.width));
};//für Playbuttons eventlistener



function loadMediaInterface(audio_id, artist){
    var data = player.currentAudio;

    if(audio_id){
        data = player.audioList.audios[audio_id];
    }

    var image = {src:"https://luckyapps.github.io/Musik/media/images/logo.png", sizes:"1440x1440", type: "image/png"};

    if(data.image){
        image = data.image;
    }

    if(!data.name){
        data.name = audio_id;
    }

    if(!artist){
        artist = "Luckyapps";
    }

    navigator.mediaSession.metadata = new MediaMetadata({
        title: data.name,
        artist: artist,
        album: 'Luckyapps Media Player',
        artwork: [
            //{ src: 'https://dummyimage.com/96x96',   sizes: '96x96',   type: 'image/png' },
            //{ src: 'https://dummyimage.com/128x128', sizes: '128x128', type: 'image/png' },
            //{ src: 'https://dummyimage.com/192x192', sizes: '192x192', type: 'image/png' },
        // { src: 'https://dummyimage.com/256x256', sizes: '256x256', type: 'image/png' },
            //{ src: 'https://dummyimage.com/384x384', sizes: '384x384', type: 'image/png' },
            //{ src: 'https://dummyimage.com/512x512', sizes: '512x512', type: 'image/png' },
            //---------------{ src: radio.current_stream.data.image.src, sizes: radio.current_stream.data.image.sizes, type: radio.current_stream.data.image.type },
            image
        ]
    });
}

/*function audio_toggle(but, value){
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
    recently_played_load();
}

function audio_play(but, value){
    //console.log(but);
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
}*/

function radiotext_receive(data){
    if(data.data.stream == "radiosauerland"){ //Sonderfall Radio Sauerland
        var sdata = JSON.parse(data.data.antwort);
        data.data.antwort = sdata.title +" by "+ sdata.artist;
        radio.streamlist.base.content.radiosauerland.image.alt = sdata.cover;
        if(player.currentAudio.id == "radiosauerland"){ //Songscreen Fix???
            if(document.getElementsByClassName("songscreen_container_back")[0]){
                document.getElementsByClassName("songscreen_container_back")[0].style.background = "url('"+ sdata.cover +"') center center / cover";
            }
        }
    }
    if(data.data.stream == "radio21buxtehude"){
        var sdata = JSON.parse(data.data.antwort);
        data.data.antwort = sdata[0];
    }
    if(data.data.stream == "njoy"){
        var sdata = JSON.parse(data.data.antwort);
        //console.log(sdata);
        data.data.antwort = sdata.song_now;
    }
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
        if(data.data.stream == player.currentAudio.id){
            document.getElementsByClassName("playbar_text_sub")[0].innerHTML = data.data.antwort;
            loadMediaInterface(player.currentAudio.id, data.data.antwort);
            /*navigator.mediaSession.metadata = new MediaMetadata({
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
            });*/
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
        if(content != ""){
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
                //console.log(streamlist);
                recently_played_load(streamlist);
                return true;
            }else{
                localStorage.setItem("musik_history", JSON.stringify([content]));
                return true;
            }
        }
    },
    get_list: ()=>{
        if(localStorage.getItem("musik_history")){
            var history = JSON.parse(localStorage.getItem("musik_history"));
            var streamlist = {
                content: {}
            };
            history.forEach((element, index) => {
                streamlist.content[element] = player.audioList.audios[element];
            });
            streamlist.keylist = Object.keys(streamlist.content);
            return streamlist;
        }else{
            return false;
        }
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
    if(streamlist == false){
        return false;
    }
    console.log(streamlist);
    //console.log(radio.radiotext);
    var home_container = document.getElementsByClassName("radio_recent")[0].getElementsByClassName("home_card_container")[0];
    home_container.innerHTML = "";
    for(i=0; i < streamlist.keylist.length; i++){
        //console.log(streamlist.content[streamlist.keylist[i]]);
        if(streamlist.content[streamlist.keylist[i]].radiotext != undefined){
            var radiotext = " id='"+ streamlist.keylist[i] +"_rtcd'>"+ streamlist.content[streamlist.keylist[i]].radiotext;
        }else{
            var radiotext = " id='"+ streamlist.keylist[i] +"_rtcd'>"+ streamlist.content[streamlist.keylist[i]].description;
           // console.warn(streamlist.content[streamlist.keylist[i]])
        }
        console.log(streamlist.content[streamlist.keylist[i]]);

        if(part_of_channels(streamlist.keylist[i])){
            var home_card_class = "home_card";
        }else{
            //console.log(streamlist.keylist[i]);
            var home_card_class = "home_card home_card_nolink";
        }

        if(streamlist.content[streamlist.keylist[i]].image != undefined){
            var image_src = streamlist.content[streamlist.keylist[i]].image.src;
        }else{
            var image_src = "https://luckyapps.github.io/Musik/media/images/logo.png"
        }
        var playbar = "";
        if(streamlist.content[streamlist.keylist[i]].data_raw){
            if(streamlist.content[streamlist.keylist[i]].data_raw.playbar){
                console.log("playbar");
                var playbar = '<div class="home_playbarContainer"><div class="home_playbar" data-audio='+ streamlist.keylist[i] +'></div></div>'
            }
        }
        if(streamlist.content[streamlist.keylist[i]]){
            home_container.innerHTML += "<div class='"+ home_card_class +"' id='"+ streamlist.keylist[i] +"_hc'><div class='home_card_img'><img src='"+ image_src +"'><div class='home_card_play playbutton' data-audio='"+ streamlist.keylist[i] +"'>Toggle</div></div><h3>"+ streamlist.content[streamlist.keylist[i]].name +"</h3><p "+ radiotext +"</p>"+ playbar +"</div>";
        }else{
            console.log("nomain");
        }    
    }
    reloadPlaybuttons();
    loadPlaybars();
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
    if(url == "https://wp.radio21.de/cover/currentsong.json"){
        return;
    }
    try{
        fetch(url)
        
        .then((response) => response.text())
    
        .then((text) => {radiotext_receive({data: {antwort: /*"&#128308;"+*/text, stream: stream}, result: "true"})})
        
        .catch(error => {console.error(`failed to fetch${url}`)});
    }catch(err){
        console.error(`failed to fetch ${url}`);
    }
}