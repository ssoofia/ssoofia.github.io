let images = [
'https://starwalk.space/gallery/images/facts-about-mercury/1920x1080.jpg',
'https://img3.goodfon.ru/wallpaper/nbig/5/ac/kosmos-art-tumannost-zvezdy-852.jpg',
'https://www.iguides.ru/upload/medialibrary/792/792bf056ae6d28052e098e659ab6158b.png',
'https://cdn.lifehacker.ru/wp-content/uploads/2021/09/CHto-sluchitsya-esli-Zemlya-vnezapno-ostanovitsya_1632610657-1280x640.jpg',
'https://news-ru.gismeteo.st/2021/07/shutterstock_1724343382.jpg',
'https://wpapers.ru/wallpapers/Space/14330/PREV_%D0%A1%D0%B0%D1%82%D1%83%D1%80%D0%BD.jpg'
];
let num = 0;
function next() {
    var slider = document.getElementById('slider');
    num++;
    if(num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
}
function prev() {
    let slider = document.getElementById('slider');
    num--;
    if(num < 0) {
        num = images.length-1;
    }
    slider.src = images[num];
}

