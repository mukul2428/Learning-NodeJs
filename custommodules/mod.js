//this is our custom module
function average(arr){
    let sum = 0;
    arr.forEach(element => {
       sum += element; 
    });
    return sum/arr.length;
}

//1
//exporting this module for others to use
// module.exports = average;

//2
// module.exports.name = "Mukul";

//3
//exporting object for others to use
// module.exports = {
//     avg : average,
//     nam : "Mukul",
//     repo: "GitHub"
// }