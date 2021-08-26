const resD = document.getElementById("resD");
const btnD0 = document.getElementById("btnD0");
const btnD1 = document.getElementById("btnD1");
const btnD2 = document.getElementById("btnD2");
const btnD3 = document.getElementById("btnD3");
const btnD4 = document.getElementById("btnD4");
const btnD5 = document.getElementById("btnD5");
const btnD6 = document.getElementById("btnD6");
const btnD7 = document.getElementById("btnD7");
const btnD8 = document.getElementById("btnD8");
const btnD9 = document.getElementById("btnD9");
const btnDClr = document.getElementById("btnDClr");
const btnDEql = document.getElementById("btnDEql");
const btnDSum = document.getElementById("btnDSum");
const btnDSub = document.getElementById("btnDSub");
const btnDMul = document.getElementById("btnDMul");
const btnDDiv = document.getElementById("btnDDiv");

let aD;
let bD;
let indexD;
let condition = true;

btnD0.addEventListener("click", () => {
  resD.innerText += 0;
});

btnD1.addEventListener("click", () => {
  resD.innerText += 1;
});

btnD2.addEventListener("click", () => {
  resD.innerText += 2;
});
btnD3.addEventListener("click", () => {
  resD.innerText += 3;
});
btnD4.addEventListener("click", () => {
  resD.innerText += 4;
});
btnD5.addEventListener("click", () => {
  resD.innerText += 5;
});
btnD6.addEventListener("click", () => {
  resD.innerText += 6;
});
btnD7.addEventListener("click", () => {
  resD.innerText += 7;
});
btnD8.addEventListener("click", () => {
  resD.innerText += 8;
});
btnD9.addEventListener("click", () => {
  resD.innerText += 9;
});

btnDClr.addEventListener("click", () => {
  resD.innerText = "";
  condition = true;
});

btnDSum.addEventListener("click", () => {
  if (condition) {
    aD = resD.innerText;
    indexD = resD.innerHTML.length;
    resD.innerText += "+";
    condition = false;
  } else {
    alert("Only one operation at time! \nclick 'result'");
  }
});

btnDSub.addEventListener("click", () => {
  if (condition) {
    aD = resD.innerText;
    indexD = resD.innerHTML.length;
    resD.innerText += "-";
    condition = false;
  } else {
    alert("Only one operation at time! \nclick 'result'");
  }
});

btnDMul.addEventListener("click", () => {
  if (condition) {
    aD = resD.innerText;
    indexD = resD.innerHTML.length;
    resD.innerText += "*";
    condition = false;
  } else {
    alert("Only one operation at time! \nclick 'result'");
  }
});

btnDDiv.addEventListener("click", () => {
  if (condition) {
    aD = resD.innerText;
    indexD = resD.innerHTML.length;
    resD.innerText += "/";
    condition = false;
  } else {
    alert("Only one operation at time! \nclick 'result'");
  }
});

btnDEql.addEventListener("click", () => {
  let bD = resD.innerText.slice(indexD + 1);
  let sign = resD.innerText[indexD];
  let result;

  let first = Number(aD);
  let second = Number(bD);

  if (sign === "+") {
    result = first + second;
  } else if (sign === "-") {
    result = first - second;
  } else if (sign === "*") {
    result = first * second;
  } else if (sign === "/") {
    result = first / second;
  }
  resD.innerHTML = result;
  condition = true;
});
