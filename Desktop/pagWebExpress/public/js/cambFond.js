function cambColor(){
    let color = ["rgb(21, 73, 109)", "rgb(173, 49, 204)", "rgb(59, 197, 216)", "rgb(21, 156, 39)"]
    let box = document.getElementById("formColor");
    let log = document.querySelectorAll("#socialnetw a");
    for(let i = 0; i < log.length; i++){
        log[i].addEventListener("mousemove", function(e){
            box.style.background = color[i];
        });
        log[i].addEventListener("mouseleave", function(e){
            box.style.background = "none";
        });
    }
}
window.addEventListener("load", cambColor);