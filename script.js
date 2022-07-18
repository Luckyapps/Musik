window.addEventListener("load", load_style);

if ('serviceWorker' in navigator) { navigator.serviceWorker.register('sw.js').then(function(registration){registration.update()})}; //experimenteller Offlinemodus

function load_style(){
    //load_radio_script();
    if(window.location.href.match(/musik/)){
        load_musik_script();
    }
    //load_titlebar_stylesheet();
    //load_content_stylesheet();
    load_version_history_stylesheet();
    load_error_stylesheet();
    //load_sidecard_stylesheet();
    load_cookie_stylesheet();
    load_update_notification_stylesheet();
    load_audio_play();
    //load_darkmode_stylesheet();
}

function load_audio_play(){
    /*console.log("streamtest");
    if((sessionStorage.getItem("streamsource") != undefined) && (sessionStorage.getItem("audio_playstate") == "true")){
        console.log("start streaming");
        audio = new Audio(sessionStorage.getItem("streamsource"));
        audio.autoplay = true;
        audio.play();
    }else{console.log("TesTIT");}*/
    
}