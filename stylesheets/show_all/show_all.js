window.addEventListener("load", show_all_start);

function show_all_start(){

}

function show_all_show(){

}

async function show_all_open(type){
    var content = "<div class='show_all_container'>";
    if(radio.streamlist.custom.active){
        var streamlist = radio.streamlist.custom;
    }else{
        var streamlist = radio.streamlist.base;
    }
    for(i=0; i < streamlist.keylist.length; i++){
        if(streamlist.content[streamlist.keylist[i]]){
            if(streamlist.content[streamlist.keylist[i]].radiotext != undefined){
                var radiotext = " id='"+ streamlist.keylist[i] +"_rtcd'>"+ streamlist.content[streamlist.keylist[i]].radiotext;
            }else{
                var radiotext = " id='"+ streamlist.keylist[i] +"_rtcd'>"+ streamlist.content[streamlist.keylist[i]].description
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

            content += "<div class='"+ home_card_class +"'><div class='home_card_img'><img src='"+ image_src +"'><div class='home_card_play playbutton' data-audio='"+ streamlist.keylist[i] +"'>></div></div><h3>"+ streamlist.content[streamlist.keylist[i]].name +"</h3><p"+ radiotext +"</p></div>"
        }else{
            console.log("nomain");
        }    
    }
    content += "</div>";

    await flyin_toggle("normal", content, type, "#2c2c2c");
    reloadPlaybuttons();
}