var flyin, flyin_state = "close", flyin_titlebar_INIT, flyin_titlebar_title, flyin_titlebar_toolbar;

window.addEventListener("load", flyin_start);

function flyin_start(){
    flyin = document.getElementById("flyin");
    flyin_titlebar_INIT = createHTML(document.getElementById("flyin").innerHTML);
    document.addEventListener("hashchange", ()=>{
        if(flyin_state == "open"){
            flyin_close();
        }
    })
}

function flyin_toggle(type, content, title, background, toolbar){
    if(flyin_state == "open"){
        flyin_close();
        return;
    }
    flyin.innerHTML = "";
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
        flyin_open(content, background, toolbar);
    }
}

function flyin_titlebar_init(title, content){
    if(title){
        flyin_titlebar_title = flyin_titlebar_INIT.children.flyin_titlebar_title;
        flyin_titlebar_title.innerHTML = content;
    }
}

function flyin_open(content, background, toolbar){
    if(background){
        flyin.style.background = background;
    }else{
        flyin.style.background = "gray";
    }
    flyin.innerHTML = flyin_titlebar_INIT.outerHTML + content;
    if(toolbar){
        document.getElementById("flyin_tools_container").innerHTML = toolbar;
    }
    //flyin.style.paddingTop = document.getElementById("flyin_titlebar").offsetHeight +"px";
    document.body.style.overflow = "hidden";
    flyin.classList = "flyin_open";
    flyin_state = "open";
    if(flyin_titlebar_title){
        flyin_titlebar_title.innerHTML = "";
    }
}

function flyin_close(){
    flyin.classList = "flyin_close";
    document.body.style.overflow = "auto";
    flyin_state = "close";
    var timeout_duration = parseFloat(window.getComputedStyle(flyin).animationDuration) * 1000;
    setTimeout(function (){
        flyin.innerHTML = "";
        flyin.style.background = "transparent";
    }, timeout_duration);
}