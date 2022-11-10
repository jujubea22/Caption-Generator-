// 
var friendship = [
    caption 1
    caption 2 
    caption 3
]
function newCaption() {
    var randomNumber = Math.floor(Math.random() * (friendship.length));
    document.getElementById('situationBtn').innerHTML = friendship[randomNumber];
}
