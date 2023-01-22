var channels_list_status = "none";

function channels_start(){
    for(i=0;i<document.getElementsByClassName("home_card").length;i++){
        document.getElementsByClassName("home_card")[i].addEventListener("click", channels_start_onclick);
    }
    if(channels_list_status != "loaded"){
        channels_list_load();
    }
}

function channels_start_onclick(e){
    if(e.target.classList == "home_card_play"){
        //console.log("Play");
    }else{
        //console.log("Card");
        channels_load(e.composedPath()[e.composedPath().length - 8]);
    }
}

function channels_load(elem){
    var stream = elem.id.replace("_hc","");
    var channel = channels_get(stream);
    //console.log(channel);
    var streamlist = channels_streamlist(stream, channel);
    //console.log(streamlist);
    var content = "<p class='channel_description'>"+ channel.description +"</p><div class='channel_container'>";
    for(i=0; i < streamlist.keylist.length; i++){
        if(streamlist.content[streamlist.keylist[i]]){
            if(streamlist.content[streamlist.keylist[i]].radiotext != undefined){
                var radiotext = " id='"+ streamlist.keylist[i] +"_rtcl'>"+ streamlist.content[streamlist.keylist[i]].radiotext;
            }else{
                var radiotext = " id='"+ streamlist.keylist[i] +"_rtcl'>"+ streamlist.content[streamlist.keylist[i]].description
            }
            content += "<div class='home_card home_card_nolink'><div class='home_card_img'><img src='"+ streamlist.content[streamlist.keylist[i]].image.src +"'><div class='home_card_play' onclick='audio_toggle(this, `"+ streamlist.keylist[i] +"`)'>></div></div><h3>"+ streamlist.content[streamlist.keylist[i]].name +"</h3><p"+ radiotext +"</p></div>"
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
        if(stream == radio.channels_keylist[i]){
            return radio.channels[radio.channels_keylist[i]];
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

function channels_list_load(){
    streamlist = {};
    streamlist.content = radio.channels;
    streamlist.keylist = Object.keys(streamlist.content);
    var home_container = document.getElementsByClassName("radio_channels")[0].getElementsByClassName("home_card_container")[0];
    home_container.innerHTML = "";
    for(i=0; i < streamlist.keylist.length; i++){
        if(streamlist.content[streamlist.keylist[i]].radiotext != undefined){
            var radiotext = " id='"+ streamlist.keylist[i] +"_rtcd'>"+ streamlist.content[streamlist.keylist[i]].radiotext;
        }else{
            var radiotext = " id='"+ streamlist.keylist[i] +"_rtcd'>"+ streamlist.content[streamlist.keylist[i]].description;
        }
        if(streamlist.content[streamlist.keylist[i]]){
            home_container.innerHTML += "<div class='home_card' id='"+ streamlist.keylist[i] +"_hc'><div class='home_card_img'><img src='"+ streamlist.content[streamlist.keylist[i]].image.src +"'></div><h3>"+ streamlist.content[streamlist.keylist[i]].name +"</h3><p"+ radiotext +"</p></div>"
        }else{
            console.log("nomain");
        }    
    }
    channels_list_status = "loaded";
    channels_start();
}

function part_of_channels(stream, infomode){ //Darf nicht in Funktionen mit m oder j for loops aufgerufen werden!!!!
    for(m=0;m<radio.channels_keylist.length;m++){
        for(j=0;j<radio.channels[radio.channels_keylist[m]].streams.length;j++){
            //console.log(m +"    "+ j);
            if(radio.channels[radio.channels_keylist[m]].streams[j] == stream){
                if(infomode){
                    var result = {
                        channelname: channel,
                        data: radio.channels[radio.channels_keylist[m]]
                    };
                    return result;
                }else{
                    return true;
                }
            }
        }
    }
    return false;
}