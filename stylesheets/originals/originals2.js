async function originals2Start(){
    console.log(player);
    var content = "<div class='originals_container'>";
    for(i=0;i<Object.keys(sources.list).length;i++){
        var data = sources.list[Object.keys(sources.list)[i]]
        content += "<div class='originals_item'>"
                        +"<h2>"+ data.name +"</h2>"
                        +"<p>"+ data.description +"</p>"
                        +"<div class='player'>"
                            +"<button class='playbutton' data-audio='"+Object.keys(sources.list)[i]+"'>Unset</button>"
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
        wdr2:{
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
        },
        loop1:{
            name: "LOOP1",
            description: "Ein Loop für zwischendurch",
            source: "media/audio/LOOP 1.wav",
            type: "audio/wav"
        }
    }
}

//insert originals to player
var source = sources.list;
var keylist = Object.keys(source);
for(g=0;g<keylist.length;g++){
    var obj = source[keylist[g]];
    player.add(keylist[g], obj.source, obj);
}