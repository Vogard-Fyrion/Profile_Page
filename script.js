function accept(id){
    var request = document.querySelector(id);
    request.remove();
    var conReq = document.querySelector('#requests');
    conReq.innerText--;
    var conCount = document.querySelector('#connections');
    conCount.innerText++;
}

function decline(id){
    var request = document.querySelector(id);
    request.remove();
    var conReq = document.querySelector('#requests');
    conReq.innerText--;
}

function editProfile(id){
    var element = document.querySelector(id);
    if(element.innerText == "Levi Boggs"){
        element.innerText = "Vogard Fyrion";
    } else {
        element.innerText = "Levi Boggs";
    }
}