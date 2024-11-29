function main(){

}

function setGrid($this){
    let size = document.getElementById("quantity").value;
    let container = document.getElementById("grid-container");

    for(i = 0; i < size; i++){
        let div = document.createElement("div");
        div.classList.add("row");
        console.log(i.toString())
        div.setAttribute("id", "row-" + i.toString())
        container.appendChild(div);
        for(j = 0; j < size; j++){
            let box = document.createElement("div");
            box.classList.add("grid-box");
            let row = document.getElementById("row-" + i.toString());
            row.appendChild(box);
        }
    }
}

function setColor(color){
}

main()