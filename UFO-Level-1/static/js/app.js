// // Console.log the weather data from data.js
// console.log(data);

// // Step 1: Loop Through `data` and console.log each weather report object
// data.forEach(row => console.log(row));


// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

data.forEach(row => {
    let nRow = tbody.append("tr");
    // runs once for each key-value pair in a row
    Object.entries(row).forEach(entry => {
        let key = entry[0];
        let val = entry[1];
        nRow.append("td").text(val);
    }); 
});