function cambColor(){
    let color = ["rgb(21, 73, 109)", "rgb(173, 49, 204)", "rgb(59, 197, 216)", "rgb(36, 194, 57)"]
    let box = document.getElementById("socialnet");
    let log = document.querySelectorAll("#socialnet a");
    for(let i = 0; i < log.length; i++){
        log[i].addEventListener("mousemove", function(e){
            box.style.background = color[i];
        });
        log[i].addEventListener("mouseleave", function(e){
            box.style.background = "rgb(20, 15, 15)";
        });
    }
}
window.addEventListener("load", cambColor);