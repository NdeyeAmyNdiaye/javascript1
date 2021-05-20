function pointure(){
    var shoeSize =document.getElementById('shoeSize').value;
    parseInt(shoeSize);
    //console.log(shoeSize);
    
    var anneeNaissance=document.getElementById('yearOfBirth').value;
    parseInt(anneeNaissance);
     //console.log(anneeNaissance);
    var result= shoeSize*2;
    var result=result +5;
    var result=result*50;
    var result=result-anneeNaissance;
    var result=result+1766;
    alert(result);
   
    
}