const parentContainer = document.getElementById("parentContainer");
const colorSelectionContainer = document.createElement("div");
const gridContainer = document.createElement("div");
const optionsContainer = document.createElement("div");
// New elements
const titleContainer = document.createElement("h1");
titleContainer.textContent = "ETCH-A-SKETCH!!";
// Color selection Elements to be added to the Dom
const blackInput = document.createElement("input");
const blackLabel = document.createElement("label");
const redInput = document.createElement("input");
const redLabel = document.createElement("label");
const greenInput = document.createElement("input");
const greenLabel = document.createElement("label");
const blueInput = document.createElement("input");
const blueLabel = document.createElement("label");
const randomColorInput = document.createElement("input");
const randomColorLabel = document.createElement("label");
const eraseInput = document.createElement("input");
const eraseLabel = document.createElement("label");
const eraseAllBtn = document.createElement("button");

let selectedColor = "white";

function buildPageLayout(){
    document.body.insertBefore(titleContainer, parentContainer);
    parentContainer.appendChild(colorSelectionContainer);
    buildColorSelectLayout();
    parentContainer.appendChild(gridContainer);
    buildGrid();
    parentContainer.appendChild(optionsContainer);
    buildOptionsLayout();
}

function buildColorSelectLayout(){
    colorSelectionContainer.classList.add("colorSelectContainer");
    // black selection
    blackInput.type = "radio";
    blackInput.addEventListener('change', getColor);
    blackInput.id = "black";
    blackInput.name = "colors";
    blackInput.value = "black";
    colorSelectionContainer.appendChild(blackInput);
    blackLabel.for = "black";
    blackLabel.textContent = "Black";
    blackLabel.classList.add("colorBlack");
    colorSelectionContainer.appendChild(blackLabel);
    colorSelectionContainer.appendChild(document.createElement("br"));
    // red Selection
    redInput.type = "radio";
    redInput.addEventListener('change', getColor);
    redInput.id = "red";
    redInput.name = "colors";
    redInput.value = "red";
    colorSelectionContainer.appendChild(redInput);
    redLabel.for = "red";
    redLabel.textContent = "Red";
    redLabel.classList.add("colorRed");
    colorSelectionContainer.appendChild(redLabel);
    colorSelectionContainer.appendChild(document.createElement("br"));
    // green Selection
    greenInput.type = "radio";
    greenInput.addEventListener('change', getColor);
    greenInput.id = "green";
    greenInput.name = "colors";
    greenInput.value = "green";
    colorSelectionContainer.appendChild(greenInput);
    greenLabel.for = "green";
    greenLabel.textContent = "Green";
    greenLabel.classList.add("colorGreen");
    colorSelectionContainer.appendChild(greenLabel);
    colorSelectionContainer.appendChild(document.createElement("br"));
    // blue Selection
    blueInput.type = "radio";
    blueInput.addEventListener('change', getColor);
    blueInput.id = "blue";
    blueInput.name = "colors";
    blueInput.value = "blue";
    colorSelectionContainer.appendChild(blueInput);
    blueLabel.for = "blue";
    blueLabel.textContent = "Blue";
    blueLabel.classList.add("colorBlue");
    colorSelectionContainer.appendChild(blueLabel);
    colorSelectionContainer.appendChild(document.createElement("br"));
}

function buildGrid(){
    gridContainer.classList.add("gridContainer");
    let square = document.createElement("div");
    square.classList.add("gridSquare");

    for(i = 0; i < 256; i++){
        let cloneSquare = square.cloneNode(true);
        cloneSquare.addEventListener("click", setColor);
        gridContainer.appendChild(cloneSquare);
    }
}

function buildOptionsLayout(){
    eraseInput.type = "radio";
    eraseInput.addEventListener('change', getColor);
    eraseInput.id = "white";
    eraseInput.name = "colors";
    eraseInput.value = "white";
    optionsContainer.appendChild(eraseInput);
    eraseLabel.for = "white";
    eraseLabel.textContent = "Erase single";
    eraseLabel.classList.add("erase");
    optionsContainer.appendChild(eraseLabel);
    optionsContainer.appendChild(document.createElement("br"));

    eraseAllBtn.id = "eraseAllBtn";
    eraseAllBtn.classList.add("eraseAll");
    eraseAllBtn.textContent = "erase all";
    eraseAllBtn.addEventListener('click', () => {
        resetGridColor();
        console.log("All Gone!!!");
    });
    optionsContainer.appendChild(eraseAllBtn);
}

function getColor(){    // <================================ working here. next, set selected color for use.
    selectedColor = this.value;
}

function setColor(){
    this.style.backgroundColor = selectedColor;
    console.log(selectedColor);
}

function resetGridColor(){
    selectedColor = "white";
    gridSquares = document.getElementsByClassName("gridSquare");

    for(let i = 0; i < gridSquares.length; i++){
        gridSquares[i].style.backgroundColor = selectedColor;
    }
}

buildPageLayout();
