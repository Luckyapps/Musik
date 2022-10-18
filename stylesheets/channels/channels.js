function channels_start(){
    for(i=0;i<document.getElementsByClassName("home_card").length;i++){
        document.getElementsByClassName("home_card")[i].addEventListener("click", channels_start_onclick);
    }
}

function channels_start_onclick(e){
    if(e.target.classList == "home_card_play"){
        console.log("Play");
    }else{
        console.log("Card");
        channels_load(e.path[e.path.length - 8]);
    }
}

function channels_load(elem){
    var stream = elem.id.replace("_hc","");
    var channel = channels_get(stream);
    console.log(channel);
    var streamlist = channels_streamlist(stream, channel);
    console.log(streamlist);
    var content = "<p class='channel_description'>"+ channel.description +"</p><div class='channel_container'>";
    for(i=0; i < streamlist.keylist.length; i++){
        if(streamlist.content[streamlist.keylist[i]]){
            if(streamlist.content[streamlist.keylist[i]].radiotext != undefined){
                var radiotext = " id='"+ streamlist.keylist[i] +"_rtcl'>"+ streamlist.content[streamlist.keylist[i]].radiotext;
            }else{
                var radiotext = " id='"+ streamlist.keylist[i] +"_rtcl'>"+ streamlist.content[streamlist.keylist[i]].description
            }
            content += "<div class='home_card'><div class='home_card_img'><img src='"+ streamlist.content[streamlist.keylist[i]].image.src +"'><div class='home_card_play' onclick='audio_toggle(this, `"+ streamlist.keylist[i] +"`)'>></div></div><h3>"+ streamlist.content[streamlist.keylist[i]].name +"</h3><p"+ radiotext +"</p></div>"
        }else{
            console.log("nomain");
        }    
    }
    content += "</div>";

    flyin_toggle("normal", content, channel.name, channel.color);
}

function channels_get(stream){
    for(i=0;i<radio.channels_keylist.length;i++){
        for(j=0;j<radio.channels[radio.channels_keylist[i]].streams.length;j++){
            if(radio.channels[radio.channels_keylist[i]].streams[j] == stream){
                return radio.channels[radio.channels_keylist[i]];
            }
        }
    }
}

function channels_streamlist(stream, channel){
    var streamlist = {
        keylist: channel.streams,
        content: {}
    }
    for(i=0;i<channel.streams.length;i++){
        streamlist.content[channel.streams[i]] = radio.streamlist.base.content[channel.streams[i]];
    }
    return streamlist;
}