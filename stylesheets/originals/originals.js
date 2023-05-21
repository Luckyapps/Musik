var originals = {
    list: [
        {
            name: "Klavierstück 1",
            desciption: "Ein eigenes Klavierstück.",
            source: "media/audio/Eigen.mp3",
            type: "audio/mp3"
        },
        {
            name: "Holz",
            desciption: "Ich und mein Holz Backingtrack.",
            source: "media/audio/holz.wav",
            type: "audio/wav"
        },
        {
            name: "LOOP1",
            desciption: "Ein Loop für zwischendurch.",
            source: "media/audio/LOOP 1.wav",
            type: "audio/wav"
        }
    ],
    async show(){
        var content = "<div class='originals_container'>";
        for(i=0;i<this.list.length;i++){
            content += "<div class='originals_item'>"
                            +"<h2>"+ this.list[i].name +"</h2>"
                            +"<p>"+ this.list[i].desciption +"</p>"
                            +"<div class='player'>"
                                +"<button class='player_toggle' id='tb"+i+"' onclick='custom_controls(this.value, at"+i+", "+i+", this)' value='toggle'>Play</button>"
                                +"<button onclick='custom_controls(this.value, at"+i+", "+i+", this)' value='volumeDown'>-</button>"
                                +"<button onclick='custom_controls(this.value, at"+i+", "+i+", this)' value='volumeUp'>+</button>"
                                +"<div id='pb"+i+"Container' class='orig_playbar_container'><div id='pb"+i+"' class='orig_playbar'></div></div>"
                                +"<audio style='display:none' id='at"+i+"'>"
                                    +"<source src='"+ this.list[i].source +"' type='"+ this.list[i].type +"'>"
                                +"</audio>" 
                            +"</div>"
                        +"</div>"
        }
        content += "</div>";
        await flyin_toggle("normal", content, "Originals <span class='preview_tag'></span> <span class='neu_tag'></span>", "#2c2c2c");
        loadCustomControls(this.list.length);
    },
    play(evt, audioTag){
        this.isPlaying = true;
        this.currentStream = audioTag;
        var playButton = document.getElementById("tb"+ audioTag.id.charAt(2));
        playButton.innerHTML = "||";
        var playbarContainer = document.getElementById("pb"+ audioTag.id.charAt(2) +"Container");
        var playbar = document.getElementById("pb"+ audioTag.id.charAt(2));
        playbar.style.width = "0%";
        playbarContainer.style.display = "block";
        document.title = "Luckyapps_Radio | "+ radio.current_stream.data.name;
        navigator.mediaSession.metadata = new MediaMetadata({
            title: originals.list[audioTag.id.charAt(2)].name,
            artist: 'Ole Spindelndreher',
            album: 'Luckyapp Originals',
            artwork: [
                //{ src: 'https://dummyimage.com/96x96',   sizes: '96x96',   type: 'image/png' },
                //{ src: 'https://dummyimage.com/128x128', sizes: '128x128', type: 'image/png' },
                //{ src: 'https://dummyimage.com/192x192', sizes: '192x192', type: 'image/png' },
            // { src: 'https://dummyimage.com/256x256', sizes: '256x256', type: 'image/png' },
                //{ src: 'https://dummyimage.com/384x384', sizes: '384x384', type: 'image/png' },
                //{ src: 'https://dummyimage.com/512x512', sizes: '512x512', type: 'image/png' },
                //---------------{ src: radio.current_stream.data.image.src, sizes: radio.current_stream.data.image.sizes, type: radio.current_stream.data.image.type },
                {src:"https://luckyapps.github.io/Musik/media/images/logo.png", sizes:"1440x1440", type: "image/png"}
            ]
        });
    },
    pause(evt, audioTag){
        this.isPlaying = false;
        var playButton = document.getElementById("tb"+ audioTag.id.charAt(2));
        playButton.innerHTML = ">";
    },
    playbarUpdate(evt, audioTag){
        var playbarContainer = document.getElementById("pb"+ audioTag.id.charAt(2) +"Container");
        var playbar = document.getElementById("pb"+ audioTag.id.charAt(2));
        playbar.style.width = (100 / audioTag.duration) * audioTag.currentTime+"%";
    }
}

function loadCustomControls(anzahl){
    for(i=0;i<anzahl;i++){ //EventListener laden für alle audios.
        document.getElementById("at"+i).addEventListener("play", (evt)=>{originals.play(evt, evt.target)});
        document.getElementById("at"+i).addEventListener("pause", (evt)=>{originals.pause(evt, evt.target)});
        document.getElementById("at"+i).addEventListener("ended", (evt)=>{originals.pause(evt, evt.target)});
        document.getElementById("at"+i).addEventListener("timeupdate", (evt)=>{originals.playbarUpdate(evt, evt.target)});
    }
}

function custom_controls(action, audioTag, id, but){
    if(action == "volumeUp"){
        audioTag.volume += 0.1;
    }else if(action == "volumeDown"){
        audioTag.volume -= 0.1;
    }else if(action == "toggle"){
        if(originals.isPlaying){
            if(originals.currentStream.id == audioTag.id){
                audioTag.pause();
            }else{
                originals.currentStream.pause();
                audioTag.play();
            }
        }else{
            audioTag.play();
        }
    }
}

