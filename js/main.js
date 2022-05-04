var text = ["Software Engineer",
"Web Developer","Full Stack Developer"];
var counter = 0;
var inst = setInterval(change, 3030);

function change() {
    document.getElementById("changeText").innerHTML = text[counter];
    counter++;
    if (counter >= text.length) {
        counter = 0;
    }
}

function collapseNav(){
    navb = document.getElementById("navBox");
    if(navb.classList.contains('hidden')){
        navb.classList.add('block');
        navb.classList.remove('hidden');
    }else{
        navb.classList.remove('block');
        navb.classList.add('hidden');
    }
}