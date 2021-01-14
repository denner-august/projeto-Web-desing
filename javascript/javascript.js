document.getElementById('menu-open').onclick = function(){
    console.log('teste')
    document.getElementById('menu-mobile').style = 'transform: translateX(0%)'
}

document.getElementById('close_button').onclick = function(){
    document.getElementById('menu-mobile').style = 'transform: translateX(initial)'
}