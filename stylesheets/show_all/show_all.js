window.addEventListener("load", show_all_start);

function show_all_start(){

}

function show_all_show(){

}

function show_all_open(type){
    var content = "<div class='show_all_container'>";
    if(radio.streamlist.custom.active){
        var streamlist = radio.streamlist.custom;
    }else{
        var streamlist = radio.streamlist.base;
    }
    for(i=0; i < streamlist.keylist.length; i++){
        if(streamlist.content[streamlist.keylist[i]].main){
            if(streamlist.content[streamlist.keylist[i]].radiotext != undefined){
                var radiotext = " id='"+ streamlist.keylist[i] +"_rtcd'>"+ streamlist.content[streamlist.keylist[i]].radiotext;
            }else{
                var radiotext = " id='"+ streamlist.keylist[i] +"_rtcd'>"+ streamlist.content[streamlist.keylist[i]].description
            }
            content += "<div class='home_card'><div class='home_card_img'><img src='"+ streamlist.content[streamlist.keylist[i]].image.src +"'><div class='home_card_play' onclick='audio_toggle(this, `"+ streamlist.keylist[i] +"`)'>></div></div><h3>"+ streamlist.content[streamlist.keylist[i]].name +"</h3><p"+ radiotext +"</p></div>"
        }else{
            console.log("nomain");
        }    
    }
    content += "</div>";

    flyin_toggle("normal", content, type, "gray");
}