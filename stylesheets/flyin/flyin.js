var flyin, flyin_state = "close", flyin_titlebar_INIT;

window.addEventListener("load", flyin_start);

function flyin_start(){
    flyin = document.getElementById("flyin");
    flyin_titlebar_INIT = document.getElementById("flyin").innerHTML;
}

function flyin_toggle(type, content, title){
    if(flyin_state == "open"){
        flyin_close();
        return;
    }
    flyin.innerHTML = ""
    if(type == "normal"){
        flyin.innerHTML = flyin_titlebar_INIT;
        if(title){
            flyin_titlebar_init(true, title);
        }else{
            flyin_titlebar_init(false);
        }
    }
    if(content){
        console.log("flyin_content");
        //flyin_content 
    }
    if(flyin_state == "close"){
        flyin_open(content);
    }
}

function flyin_titlebar_init(title, content){
    flyin_titlebar = document.getElementById("flyin_titlebar");
    if(title){
        flyin_titlebar_title = document.getElementById("flyin_titlebar_title");
        flyin_titlebar_title.innerHTML = content;
    }
}

function flyin_open(content){
    flyin.innerHTML = flyin_titlebar_INIT + content;
    document.body.style.overflow = "hidden";
    flyin.classList = "flyin_open";
    flyin_state = "open";
}

function flyin_close(){
    flyin.classList = "flyin_close";
    document.body.style.overflow = "auto";
    flyin_state = "close";
    var timeout_duration = parseFloat(window.getComputedStyle(flyin).animationDuration) * 1000;
    setTimeout(function (){
        flyin.innerHTML = "";
    }, timeout_duration);
}