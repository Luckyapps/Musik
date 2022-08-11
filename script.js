var radio = {
    modules: {
        error: {
            loaded: false
        },
        cookies: {
            loaded: false
        }
    }
};

window.addEventListener("load", load_style);

if ('serviceWorker' in navigator) { navigator.serviceWorker.register('sw.js').then(function(registration){registration.update()})}; //experimenteller Offlinemodus

function load_style(){
}