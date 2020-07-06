// from data.js
var tableData = data;
var tbody=d3.select("tbody");
function createtable(data){
tbody.html("");
data.forEach((datarow)=>{
var row= tbody.append("tr");
Object.values(datarow).forEach((val) => {
    let cell = row.append("td");
      cell.text(val);
    });
}); 
}
createtable(tableData);

function filter(){
    var date=d3.select("#datetime").property("value");
    var filterdata= tableData;
    filterdata = filterdata.filter(row => row.datetime === date);
    createtable(filterdata);
}
d3.selectAll("#filter-btn").on("click",filter);
