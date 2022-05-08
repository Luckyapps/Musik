function load_radio_script(){
    document.title = "TEST START";
    console.log("load_radio");
    for(i=0; i< document.getElementsByClassName("radio_card").length; i++){
        document.getElementsByClassName("radio_card")[i].addEventListener("click", title_radio);
        console.log("radio:_load");
    }
    for(i=0; i< document.getElementsByClassName("rde-btn").length; i++){
        document.getElementsByClassName("rde-btn")[i].addEventListener("click", radio_btn);
        console.log("radio:_load");
    }
}

function testings(){
    for(i=0; i< document.getElementsByClassName("rde-btn").length; i++){
        document.getElementsByClassName("rde-btn")[i].addEventListener("click", radio_btn);
        console.log("radio:_load");
    }
}

function title_radio(evt){
    console.log(evt);
    for(i=0; i<document.getElementsByClassName("radio_card").length; i++){
        if(document.getElementsByClassName("radio_card")[i].contains(evt.target)){
            document.title = "Luckyapp_Radio: "+ document.getElementsByClassName("radio_card")[i].title;
            if(document.getElementsByClassName("radio_card")[i].title != "" || null || undefined){
                document.getElementsByClassName("title")[0].getElementsByTagName("h1")[0].innerHTML = document.getElementsByClassName("radio_card")[i].title;
            }else{
                document.getElementsByClassName("title")[0].getElementsByTagName("h1")[0].innerHTML = "Radio";
            }
            return;
        }
    }
}

function radio_btn(evt){
    for(i=0; i<document.getElementsByClassName("rde-btn").length; i++){
        if(document.getElementsByClassName("rde-btn")[i].contains(evt.target)){
            for(j=0; j<document.getElementsByClassName("radio_card".length); j++){
                if(document.getElementsByClassName("radio_card")[j].contains(evt.target)){
                    document.getElementsByTagName("a")[0].innerHTML = document.getElementsByClassName("radio_card")[j].title;
                }
            }
            //document.title = "Luckyapp_Radio: "+ document.getElementsByClassName("radio_card")[i].title;
            /*if(document.getElementsByClassName("radio_card")[i].title != "" || null || undefined){
                document.getElementsByClassName("title")[0].getElementsByTagName("h1")[0].innerHTML = document.getElementsByClassName("radio_card")[i].title;
            }else{
                document.getElementsByClassName("title")[0].getElementsByTagName("h1")[0].innerHTML = "Radio";
            }*/
            return;
        }
    }
}