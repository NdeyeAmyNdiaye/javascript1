function modulo(){
    var firstNumber=document.getElementById('firstNumber').value;
    parseInt(firstNumber);
    //console.log(firstNumber);
    var secondNumber=document.getElementById('secondNumber').value;
    //console.log(secondNumber);
    var result;
    result=parseInt(firstNumber) % parseInt(secondNumber);
    alert(result);
}