const p = document.getElementById("parentContainer");

function buildGrid(){
    let square = document.createElement("div");
    square.classList.add("gridSquare");

    for(i = 0; i < 256; i++){
        let cloneSquare = square.cloneNode(true);
        cloneSquare.addEventListener("click", changeNodeColor);
        p.appendChild(cloneSquare);
    }
}

function changeNodeColor(){
    this.style.backgroundColor = "black";
}

buildGrid();