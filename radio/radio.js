function load_radio_script(){
    console.log("load_radio");
    for(i=0; i< document.getElementsByClassName("radio_card").length; i++){
        document.getElementsByClassName("radio_card")[i].addEventListener("click", title_radio);
        console.log("radio:_load");
    }
}

function title_radio(evt){
    console.log(evt);
    document.title = evt.title;
}