var text = ["Web Developer","Full Stack Developer","Software Developer"];
var counter = 0;
var inst = setInterval(change, 3030);

function change() {
    document.getElementById("changeText").innerHTML = text[counter];
    counter++;
    if (counter >= text.length) {
        counter = 0;
    }
}