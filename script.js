//accessing document 
  
let inputbox =  document.querySelector(".input-box");
let allclearbtn = document.querySelector("#all-clear");
let bracketbtn = document.querySelector("#brackets");
let percentbtn = document.querySelector("#percent");
let multiplybtn = document.querySelector("#multiply");
let divisionbtn = document.querySelector("#division");
let subtractbtn = document.querySelector("#subtract");
let additionbtn = document.querySelector("#addition");
let dotbtn = document.querySelector(".dot");     
let erasebtn = document.querySelector(".erase");
let equalbtn = document.querySelector("#equal");
let no0btn = document.querySelector(".zero");
let no1btn = document.querySelector(".one");
let no2btn = document.querySelector(".two");
let no3btn = document.querySelector(".three");  
let no4btn = document.querySelector(".four");
let no5btn = document.querySelector(".five");
let no6btn = document.querySelector(".six");
let no7btn = document.querySelector(".seven");
let no8btn = document.querySelector(".eight");
let no9btn = document.querySelector(".nine");
 
 //append value function 
 
 function appendValue(val) {
  inputbox.value += val;
  inputbox.scrollLeft = inputbox.scrollWidth;
}

 
 //bracket button 
let bracketcount = 0;
const baracket = () =>{
  if ( bracketcount === 1){
    appendValue("(");
  }else if(bracketcount ===2 ){
    appendValue(")");
    bracketcount=0;
  }
};


bracketbtn.addEventListener("click", () => {
  bracketcount++;
  
  baracket();
});

//percentage button

percentbtn.addEventListener("click", () => {
  if (inputbox.value != ""){
  appendValue("%");
  }else{
    inputbox.value = inputbox.value;
  }
  
});

//multiply button 

multiplybtn.addEventListener("click", () => {if (inputbox.value != ""){
  appendValue("x");
  }else{
    inputbox.value = inputbox.value;
  }
  
});

//division button

divisionbtn.addEventListener("click", () => {
  if (inputbox.value != ""){
  appendValue("÷");
  }else{
    inputbox.value = inputbox.value;
  }
  
});

//subtract button

subtractbtn.addEventListener("click", () => {
  if (inputbox.value != ""){
  appendValue("-");
  }else{
    inputbox.value = inputbox.value;
  }
});

//additon button

additionbtn.addEventListener("click", () => {
  if (inputbox.value != ""){
  appendValue("+");
  }else{
    inputbox.value = inputbox.value;
  }
});

//dot button

dotbtn.addEventListener("click", () => {
  if (inputbox.value != ""){
  appendValue(".");
  }else{
    inputbox.value = inputbox.value;
  }
  
});

//numbers button 

no0btn.addEventListener("click", () => {
  appendValue("0");
});

no1btn.addEventListener("click", () => {
  appendValue("1");
});

no2btn.addEventListener("click", () => {
  appendValue("2");
});

no3btn.addEventListener("click", () => {
  appendValue("3");
});

no4btn.addEventListener("click", () => {
  appendValue("4");
});

no5btn.addEventListener("click", () => {
  appendValue("5");  
});

no6btn.addEventListener("click", () => {
  appendValue("6");
});

no7btn.addEventListener("click", () => {
  appendValue("7");
});


no8btn.addEventListener("click", () => {
  appendValue("8");
});

no9btn.addEventListener("click", () => {
  appendValue("9");
});

//all clear button 

const allclear = () =>{
  if (inputbox.value != ""){
    inputbox.value = "";
  }
};
allclearbtn.addEventListener("click",allclear);

//erace button

const erase = () =>{
  if (inputbox.value != ""){
    inputbox.value = inputbox.value.slice(0, -1);
    }
};
erasebtn.addEventListener("click",erase);

//equal button or solving Equation 

const replace = () =>{
  let element= inputbox.value;
  
  element = element.replace(/÷/g, "/");
  element = element.replace(/x/g,"*");
  inputbox.value = element;
};



equalbtn.addEventListener("click",()=>{
  replace();
  
  let equation = inputbox.value;
  if (equation != ""){
    equation = eval(equation);
  inputbox.value= equation;
  }else{
    inputbox.value = inputbox.value;
  }
  
});