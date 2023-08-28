async function originals2Start(){
    console.log(player);
    var content = "<div class='originals_container'>";
    for(i=0;i<Object.keys(sources.list).length;i++){
        var data = sources.list[Object.keys(sources.list)[i]]
        content += "<div class='originals_item'>"
                        +"<h2>"+ data.name +"</h2>"
                        +"<p>"+ data.description +"</p>"
                        +"<div class='player'>"
                            +"<button class='playbutton player_toggle' data-audio='"+Object.keys(sources.list)[i]+"'>Unset</button>"
                            //+"<button onclick='custom_controls(this.value, at"+i+", "+i+", this)' value='volumeDown'>-</button>"
                            //+"<button onclick='custom_controls(this.value, at"+i+", "+i+", this)' value='volumeUp'>+</button>"
                            //+"<div id='pb"+i+"Container' class='orig_playbar_container'><div id='pb"+i+"' class='orig_playbar'></div></div>"
                            // +"<audio id='at"+i+"'>"
                                //  +"<source src='"+ this.list[i].source +"' type='"+ this.list[i].type +"'>"
                            //+"</audio>" 
                        +"</div>"
                    +"</div>"
    }
    content += "</div>";
    await flyin_toggle("normal", content, "Originals <span class='preview_tag'></span> <span class='beta_tag'></span>", "#2c2c2c");
    reloadPlaybuttons();
}

var sources = {
    list: {
        /*wdr2:{
            name:"WDR2",
            description:"WDR2 Popsender",
            source:"https://wdr-wdr2-suedwestfalen.icecastssl.wdr.de/wdr/wdr2/suedwestfalen/mp3/128/stream.mp3",
            main: true,
            radiotext_url: "https://www.wdr.de/radio/radiotext/streamtitle_wdr2.txt",
            type: "radio",
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
            type: "radio",
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
            type: "radio",
            image: {
                src: "https://luckyapps.github.io/Musik/media/images/wdr4.png",
                sizes: "180x180",
                type: "image/png"
            }
        },*/
        loop1:{
            name: "LOOP1",
            description: "Ein Loop für zwischendurch",
            source: "media/audio/LOOP 1.wav",
            type: "audio/wav",
            playbar: true
        },
        loop4:{
            name: "LOOP4",
            description: "Ein Loop für zwischendurch",
            source: "media/audio/LOOP 4.wav",
            type: "audio/wav",
            playbar: true
        },
        skyfall_fresh:{
            name: "Skyfall Fresh",
            description: "Luckyapp Remix von Skyfall",
            source: "media/audio/Adele - Skyfall_F_minor__bpm_104.mp3",
            type: "audio/mp3",
            playbar: true
        },
        klavierstück1:{
            name: "Klavierstück1",
            description: "Selbstkomponiertes Klavierstück",
            source: "media/audio/Eigen.mp3",
            type: "audio/mp3",
            playbar: true
        },
        holz:{
            name: "Holz Loop",
            description: "Ich und mein Holz loop",
            source: "media/audio/holz.wav",
            type: "audio/wav",
            playbar: true
        },
        song1:{
            name: "Song1",
            description: "",
            source: "media/audio/Song-1-1.wav",
            type: "audio/wav",
            playbar: true
        },
        web1:{
            name: "web1",
            description: "",
            source: "media/audio/Web1.wav",
            type: "audio/wav",
            playbar: true
        },
        web1neu:{
            name: "web1neu",
            description: "",
            source: "media/audio/Web1neu.wav",
            type: "audio/wav",
            playbar: true
        },
        web22:{
            name: "web2",
            description: "",
            source: "media/audio/Web2.wav",
            type: "audio/wav",
            playbar: true
        }
    }
}

//insert originals to player and channels
var source = sources.list;
var keylist = Object.keys(source);
for(g=0;g<keylist.length;g++){
    var obj = source[keylist[g]];
    radio.channels.originals.streams.push(keylist[g]);
    player.add(keylist[g], obj.source, obj);
}

function originals_home_load(){
    //console.log(radio.radiotext);
    var home_container = document.getElementsByClassName("radio_originals")[0].getElementsByClassName("home_card_container")[0];
    home_container.innerHTML = "";
    var streamlist = {content:{},keylist:[]};
    streamlist.content = sources.list;
    streamlist.keylist = Object.keys(sources.list);
    console.log(streamlist);
    for(i=0; i < streamlist.keylist.length; i++){
        if(streamlist.content[streamlist.keylist[i]].radiotext != undefined){
            var radiotext = " id='"+ streamlist.keylist[i] +"_rtcd'>"+ streamlist.content[streamlist.keylist[i]].radiotext;
        }else{
            var radiotext = " id='"+ streamlist.keylist[i] +"_rtcd'>"+ streamlist.content[streamlist.keylist[i]].description;
           // console.warn(streamlist.content[streamlist.keylist[i]])
        }

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
        if(streamlist.content[streamlist.keylist[i]]){
            home_container.innerHTML += "<div class='"+ home_card_class +"' id='"+ streamlist.keylist[i] +"_hc'><div class='home_card_img'><img src='"+ image_src +"'><div class='home_card_play playbutton' data-audio='"+ streamlist.keylist[i] +"'>Toggle</div></div><h3>"+ streamlist.content[streamlist.keylist[i]].name +"</h3><p"+ radiotext +"</p></div>"
        }else{
            console.log("nomain");
        }    
    }
    reloadPlaybuttons();
    channels_start();
}