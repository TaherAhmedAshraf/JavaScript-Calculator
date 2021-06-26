
function calJS() {
    try {
        var inputVal = document.getElementById("input").value;
        console.log(inputVal)
        var outputVal = eval(inputVal);
        document.getElementById("input").value = (outputVal);
        console.log(outputVal)
    } catch(error){
        document.getElementById("input").value = ("SYNTEX ERROR");

    }
}

    // var i = 0;
    // var x = inputVal.lenght;
    // var array = [];
    // while(x <= i){
    //     array.push(inputVal[i])
    //     i++;
    //     console.log(array)
    //     console.log("passed")

    // }
    // console.log(inputVal[2])