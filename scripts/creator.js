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
