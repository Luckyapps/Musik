window.addEventListener("load", function() {
  testing();
});

window.addEventListener('message', function (evt) {testing(evt.data)});

function testing(data){
  if(data.request){
    chrome.runtime.sendMessage(data);
  }
  console.log(data);
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(request);
    console.log(sender);
    window.postMessage({data: request, result: "true"});
  }
);