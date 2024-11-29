function main(){

}

// When the user presses the select size button, a grid of div's are created.
function setGrid(){
    let size = document.getElementById("quantity").value;
    let container = document.getElementById("grid-container");

    resetGrid();

    for(i = 0; i < size; i++){
        let div = document.createElement("div");
        div.classList.add("row");
        div.setAttribute("id", "row-" + i.toString())
        container.appendChild(div);
        for(j = 0; j < size; j++){
            let box = document.createElement("div");
            box.classList.add("grid-box");
            box.setAttribute("onmouseover", "setBackgroundColor(this)")
            let row = document.getElementById("row-" + i.toString());
            row.appendChild(box);
        }
    }
}

// removes the old grid if it exists
function resetGrid(){
    let container = document.getElementById("grid-container");
    let rows = document.getElementsByClassName("row");
    if(rows.length > 0){
        while(container.firstChild){
            container.removeChild(container.lastChild);
        }
    }
}

let squareColor = "white";

function setColor(color){
    switch(color){
        case "red":
            squareColor = color;
            break;
        case "green":
            squareColor = color;
            break;
        case "blue":
            squareColor = color;
            break;
        default:
            break;
    }
}

function setBackgroundColor(square){
    square.style.backgroundColor = squareColor;
    console.log(square)
}

main()