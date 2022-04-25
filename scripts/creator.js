function generateTable() {
  try {
    var parentRef = document.getElementById("generatedContentParent");

    //create the table
    var tableRef = document.createElement("table");
    var tbodyRef = document.createElement("tbody");

    //create rows
    for (var i = 0; i < 2; i++) {
      var trowRef = document.createElement("tr");

      //insert cells
      for (var j = 0; j < 2; j++) {
        var tcellRef = document.createElement("td");
        assignBorder(tcellRef);
        var cellText = document.createTextNode(`Cell (${+i},${+j})`);
        tcellRef.appendChild(cellText);
        trowRef.appendChild(tcellRef);
      }
      //after the row is populated
      tbodyRef.appendChild(trowRef);
    }

    //finally display the table
    tableRef.appendChild(tbodyRef);
    parentRef.appendChild(tableRef);
  } catch (err) {
    console.log(err);
  }
}

function assignBorder(documentType) {
  documentType.classList.add("table-cell");
}

function initialiseCanvas() {
  //once window is initialized, attach all the eventlistners
  // resize();
  canvaRef = document.getElementById("drawingBoard");
  //stretch canva size to its container, do not do this with CSS
  canvaWrapper = document.querySelector(".canvas-wrapper");
  canvaRef.height = canvaWrapper.clientHeight;
  canvaRef.width = canvaWrapper.clientWidth;
  ctx = canvaRef.getContext("2d");

  paint = false;
  cursorPos = {
    x: 0,
    y: 0,
  };

  canvaRef.addEventListener("mousedown", startPainting);
  canvaRef.addEventListener("mouseup", stopPainting);
  canvaRef.addEventListener("mousemove", sketch);
  // window.addEventListener("resize", resize);
}

function getCursorPos(event) {
  cursorPos.x = event.clientX - canvaRef.offsetLeft;
  cursorPos.y = event.clientY - canvaRef.offsetTop;
}

function startPainting(event) {
  paint = true;
  getCursorPos(event);
}

function stopPainting() {
  paint = false;
}

function sketch(event) {
  if (!paint) return;
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.moveTo(cursorPos.x, cursorPos.y);
  getCursorPos(event);
  ctx.lineTo(cursorPos.x, cursorPos.y);
  ctx.stroke();
}

function downloadCanva(event) {
  var imageURI = canvaRef.toDataURL("image/jpg");
  window.location.href = imageURI;
}
