const res = document.getElementById("res");
const btn0 = document.getElementById("btn0");
const btn1 = document.getElementById("btn1");
const btnClr = document.getElementById("btnClr");
const btnEql = document.getElementById("btnEql");
const btnSum = document.getElementById("btnSum");
const btnSub = document.getElementById("btnSub");
const btnMul = document.getElementById("btnMul");
const btnDiv = document.getElementById("btnDiv");
const cal = document.getElementById("cal");
const chDecimal = document.getElementById("chDecimal");

let a = "";
let b = "";
let index;
let cond;

cal.addEventListener("click", () => {
  document.querySelector("#binaryTitle").style.display = "none";
  document.querySelector("#cal").style.display = "none";
  document.querySelector(".container").style.display = "none";
  document.querySelector("#calculatorTitle").style.display = "block";
  document.querySelector("#binaryCal").style.display = "block";
  document.querySelector(".container2").style.display = "block";
});

btn0.addEventListener("click", () => {
  res.innerText += 0;
});

btn1.addEventListener("click", () => {
  res.innerText += 1;
});

btnClr.addEventListener("click", () => {
  res.innerText = "";
  cond = true;
});

btnSum.addEventListener("click", () => {
  if (condition) {
    a = res.innerText;
    index = res.innerHTML.length;
    res.innerText += "+";
    cond = false;
  } else {
    alert("Only one operation at time \nClick 'result'");
  }
});

btnSub.addEventListener("click", () => {
  if (condition) {
    a = res.innerText;
    index = res.innerHTML.length;
    res.innerText += "-";
    cond = false;
  } else {
    alert("Only one operation at time \nClick 'result'");
  }
});

btnMul.addEventListener("click", () => {
  if (condition) {
    a = res.innerText;
    index = res.innerHTML.length;
    res.innerText += "*";
    cond = false;
  } else {
    alert("Only one operation at time \nClick 'result'");
  }
});

btnDiv.addEventListener("click", () => {
  if (condition) {
    a = res.innerText;
    index = res.innerHTML.length;
    res.innerText += "/";
    cond = false;
  } else {
    alert("Only one operation at time \nClick 'result'");
  }
});

btnEql.addEventListener("click", () => {
  b = res.innerText.slice(index + 1);
  if (a == "" || b == "") {
    return alert("Enter a number");
  }

  let sign = res.innerText[index];
  let result;
  let first = parseInt(a, 2);
  let second = parseInt(b, 2);

  if (sign === "+") {
    result = (first + second).toString(2);
  } else if (sign === "-") {
    result = (first - second).toString(2);
  } else if (sign === "*") {
    result = (first * second).toString(2);
  } else if (sign === "/") {
    result = Math.floor(first / second).toString(2);
  }

  res.innerHTML = result;
  cond = true;
});

chDecimal.addEventListener("click", () => {
  b = res.innerText.slice(index + 1);
  if (a == "" || b == "") {
    return alert("Enter a number");
  }

  let sign = res.innerText[index];
  let result;
  let first = parseInt(a, 2);
  let second = parseInt(b, 2);

  if (sign === "+") {
    result = first + second;
  } else if (sign === "-") {
    result = first - second;
  } else if (sign === "*") {
    result = first * second;
  } else if (sign === "/") {
    result = Math.floor(first / second);
  }

  res.innerHTML = result;
  cond = true;
});
