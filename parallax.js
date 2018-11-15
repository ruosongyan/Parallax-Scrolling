window.onload=function(){
    let charInner = document.getElementById('charactorInner');
    let char = document.getElementById('charactor');
    charInner.style.left = char.style.left = "0px";
    let i = 0;
    setInterval(() => {
        let left = charInner.style.left || "0px";
        left = parseInt(left) - 250;
        if(left  < -1520){
            left = 0;
            i++;
            if(i == 7){
                i=0;
            }
        }
        charInner.style.left = left + "px";
        char.style.left = -left/10+i*152 + "px";
        
        
    },200)
}