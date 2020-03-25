// Assign the data from `data.js` to a descriptive variable
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

function buildTable(data) {
tbody.html("")
data.forEach((row) => {
    var nRow = tbody.append("tr");
    // runs once for each key-value pair in a row
    Object.values(row).forEach((entry) => {
      var cell = nRow.append("td");
      cell.text(entry);
    }); 
});
};

buildTable(tableData);

function filter() {
var date = d3.select("#datetime").property("value");
var filterData = tableData;
filterData = filterData.filter(nRow => nRow.datetime === date);
console.log(filterData)
buildTable(filterData);
};

d3.selectAll("#filter-btn").on("click", filter);