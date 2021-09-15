// JavaScript

var slider = document.getElementById("rate");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value;
}


function calculate()
{

    const theYear= '2021';
    rate = document.getElementById("rate").value;
     amount= document.getElementById("principal").value;
     time = document.getElementById("years").value;
    interest = document.getElementById("result");
    result.innerHTML=(amount*time*rate/100) ;
    deposit.innerHTML= (amount)
    sum= parseFloat(time)+ parseFloat(theYear);
    future.innerHTML= (sum);

    if (amount <=0) { alert("please enter a valid number")}


}

function myFunction() {
    document.getElementById("myForm").reset();
}






