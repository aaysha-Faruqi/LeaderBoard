const playerForm = document.getElementById('playerForm');
const scoreTable = document.getElementById('scoreTable');

if (playerForm) {
  playerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const fName = document.getElementById('fName').value;
    const lName = document.getElementById('lName').value;
    const country = document.getElementById('country').value;
    const startingScore = document.getElementById('startingScore').value;
    addRow(fName, lName, country, startingScore); // Call the addRow function
    playerForm.reset();
  });
}

function addRow(fName, lName, country, score) {
  var table = document.getElementById("scoreTable");
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  cell1.innerHTML = fName;
  cell2.innerHTML = lName;
  cell3.innerHTML = country;
  cell4.innerHTML = score;
  cell5.innerHTML = `<span class="delete-icon" onclick="deletePlayer(this)">&#128465;</span>
                      <button onclick="increaseScore(this)">+5</button>
                     <button onclick="decreaseScore(this)">-5</button>`;

  // Sort the table rows based on the score column
  var rows = Array.from(table.rows).slice(1); // exclude the header row
  rows.sort(function(a, b) {
    var scoreA = parseInt(a.cells[3].textContent);
    var scoreB = parseInt(b.cells[3].textContent);
    return scoreB - scoreA; // sort in descending order
  });

  // Append the sorted rows back to the table
  rows.forEach(function(row) {
    table.appendChild(row);
  });
}

function increaseScore(button) {
    var row = button.parentNode.parentNode;
    var scoreCell = row.cells[3];
    var score = parseInt(scoreCell.innerHTML);
    score += 5;
    scoreCell.innerHTML = score;
  
    // Reorder the rows based on the updated score
    var table = document.getElementById("scoreTable");
    var rows = Array.from(table.rows).slice(1); // exclude the header row
    rows.sort(function(a, b) {
      var scoreA = parseInt(a.cells[3].textContent);
      var scoreB = parseInt(b.cells[3].textContent);
      return scoreB - scoreA; // sort in descending order
    });
  
    // Append the sorted rows back to the table
    rows.forEach(function(row) {
      table.appendChild(row);
    });
  }
  function deletePlayer(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }
  
  function decreaseScore(button) {
    var row = button.parentNode.parentNode;
    var scoreCell = row.cells[3];
    var score = parseInt(scoreCell.innerHTML);
    if (score >= 5) {
      score -= 5;
      scoreCell.innerHTML = score;
  
      // Reorder the rows based on the updated score
      var table = document.getElementById("scoreTable");
      var rows = Array.from(table.rows).slice(1); // exclude the header row
      rows.sort(function(a, b) {
        var scoreA = parseInt(a.cells[3].textContent);
        var scoreB = parseInt(b.cells[3].textContent);
        return scoreB - scoreA; // sort in descending order
      });
  
      // Append the sorted rows back to the table
      rows.forEach(function(row) {
        table.appendChild(row);
      });
    }
  };











