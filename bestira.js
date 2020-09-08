function starter() { 
    document.getElementById("pole").removeChild(document.getElementById("knopka"));
    
    game_on();
    
}

function box(color) {
    this.color = color;
    this.create = create_target;
    
}

function create_target(){
    var target = document.createElement("div")
    target.setAttribute("id","box")
    document.getElementById("pole").style.alignItems="baseline";
    document.getElementById("pole").style.justifyContent="flex-start";
    target.setAttribute("onclick","moved()");
    var pole = document.getElementById("pole");
    pole.appendChild(target)
    moved()
}

function game_on(){
    var target = new box("black");
    target.create();
    
}

function moved() {
    var knights = ["https://lh3.googleusercontent.com/proxy/zWpWnjsTHW2d4mcO3MugfKXpqbsVdMHvfr_lWeKFvBJ10LtvAWQ7992qtuyY7--bvykU2J4192gFXOcztZvn-di8h0tfHXwhvOi4Ar2As141VrONANxZC3bAT6eaWejjQLRiEV3NHwU","https://img.pngio.com/black-knight-transparent-image-knight-transparent-background-482_618.png","https://lh3.googleusercontent.com/proxy/6YMDo9CaGN2W2-ITeHGFqSNnJ-_S80msefVJkeGR2CMjFaN43K7QrrXjs5Fl0whN8HyNr53Crr9GwefMBm4aYg9npe6ko3E1PB_0zrE-ZYa_6PXF0eR2pjm1Qvf2i7eANJVWPmsgiA","https://i.dlpng.com/static/png/21937_preview.png","https://i.dlpng.com/static/png/138075_preview.png","https://i.pinimg.com/originals/d2/5c/a5/d25ca5c08791d5ce4d94dfffff296583.png","https://i.pinimg.com/originals/f7/5b/98/f75b985b2e36a0726efd64634f60349f.png"]
    var zal=Math.floor(Math.random()*knights.length)
    document.getElementById("box").style.marginLeft=Math.floor(Math.random() * 470)+"px"
    document.getElementById("box").style.marginTop=Math.floor(Math.random() * 470)+"px"
    document.getElementById("box").style.backgroundImage="url("+knights[zal]+")"
}