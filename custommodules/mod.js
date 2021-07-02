//this is our custom module
function average(arr){
    let sum = 0;
    arr.forEach(element => {
       sum += element; 
    });
    return sum/arr.length;
}

//exporting this module for others to use
module.exports = average;