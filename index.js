const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(16, 16);

const gridItem = document.querySelectorAll(".grid-item");
gridItem.forEach(gridItem => {
    gridItem.addEventListener("mouseenter", () =>{
        gridItem.style.backgroundColor = "black"; 
    })
})

const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", () => {
    gridItem.forEach(gridItem => {
        gridItem.style.backgroundColor = "white"; 
    })
})

const changeColor = document.getElementById("color"); 
changeColor.addEventListener("click", () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      gridItem.forEach(gridItem => {
        gridItem.addEventListener("mouseenter", () =>{
            gridItem.style.backgroundColor = color; 
        })
    })
    changeColor.style.backgroundColor = color;
})

const black = document.getElementById("black");
black.addEventListener("click", () => {
    gridItem.forEach(gridItem => {
        gridItem.addEventListener("mouseenter", () =>{
            gridItem.style.backgroundColor = "black"; 
        })
    })

})

const erase = document.getElementById("erase");
erase.addEventListener("click", () => {
    gridItem.forEach(gridItem => {
        gridItem.addEventListener("mouseenter", () =>{
            gridItem.style.backgroundColor = "white"; 
        })
    })

})

