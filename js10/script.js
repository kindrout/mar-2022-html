let document1 = document.getElementById('text')
document1.onclick = function () {
    document1.innerHTML = ''
}

let inputMenu = document.getElementById('1')
inputMenu.oninput = function (){
    if (this.value < 18) {
    }
}
let submitMenu = document.getElementById('2')
submitMenu.onsubmit = function (){
    console.log('lix')
}