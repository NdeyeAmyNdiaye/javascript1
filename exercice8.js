function statut(){

var age=document.getElementById('age').value;
parseInt(age);
//console.log(age);
if(age<18){
    alert("Vous etes mineurs");
}
else{
    alert("Vous etes majeurs")
}
}