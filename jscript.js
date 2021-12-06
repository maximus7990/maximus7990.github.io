
function startRace() {
    var img = document.getElementById('defImg');
    img.src="images/green.png";
    var myVar = setInterval(myRace,10);
    var x = 0;
    var y = 0;
    var a = 0;
    var b = 0;
    console.log(y);
    
    function myRace(){
        if (y >= 1000 || b >= 1000) {
            if (y >= 1000) {
                document.getElementById('stlw').style.visibility = "visible";
                clearInterval(myVar);
                }
            else {
                document.getElementById('chcw').style.visibility = "visible";
                clearInterval(myVar);
                
            }
        } else
            {
                let x = Math.floor(Math.random() * 11);
                let a = Math.floor(Math.random() * 11);
                // console.log(x);
                y = x+y;
                b = a+b;
                // console.log(y);
                document.getElementById('stl').style.left = y;
                document.getElementById('chc').style.left = b;
            }
    }       
}

function resetRace() {
    var img = document.getElementById('stlw');
    img.style.visibility = "hidden";
    var img2 = document.getElementById('chcw');
    img2.style.visibility = "hidden";
    var img3 = document.getElementById('defImg')
    img3.src="images/red.png"
    var img4 = document.getElementById('stl');
    img4.style.left = '0';
    var img5 = document.getElementById('chc');
    img5.style.left = '0';


}
