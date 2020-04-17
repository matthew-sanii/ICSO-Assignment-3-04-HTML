// JavaScript File
function Click(){
  let result;
  let b1=document.getElementById("base1");
  let b2=document.getElementById("base2");
  let ht=document.getElementById("height");
  let base1Value;
  base1Value=Number(b1.value);
  let base2Value;
  base2Value=Number(b2.value);
  let heightValue;
  heightValue=Number(ht.value);
  if (base1Value<=0 || isNaN(base1Value)|| base2Value<=0 || isNaN(base2Value) || heightValue<=0 || isNaN(heightValue)) { // This if statement checks to see if the numbers are less than 0, or have a letter in it when the button was clicked
    let divresult=document.getElementById("divresult");
    result="Invalid numbers, please input new numbers"; // this line of code returns that the numbers were invalid, and asks for new numbers
    divresult.innerHTML=result;

  }
  else{
    result=((base1Value + base2Value) / 2) * heightValue;
    let divresult=document.getElementById("divresult");
    divresult.innerHTML=result;
}
}
