const res = document.getElementById("res");
const btn0 = document.getElementById("btn0");
const btn1 = document.getElementById("btn1");
const btnClr = document.getElementById("btnClr");
const btnEql = document.getElementById("btnEql");
const btnSum = document.getElementById("btnSum");
const btnSub = document.getElementById("btnSub");
const btnMul = document.getElementById("btnMul");
const btnDiv = document.getElementById("btnDiv");
let a;
let b;
let index;

btn0.addEventListener("click", () => {
  res.innerText += 0;
});

btn1.addEventListener("click", () => {
  res.innerText += 1;
});

btnClr.addEventListener("click", () => {
  res.innerText = "";
});

btnSum.addEventListener("click", () => {
  a = res.innerText;
  index = res.innerHTML.length;
  res.innerText += "+";
});

btnSub.addEventListener("click", () => {
  res.innerText += "-";
});

btnMul.addEventListener("click", () => {
  res.innerText += "*";
});

btnDiv.addEventListener("click", () => {
  res.innerText += "/";
});

btnEql.addEventListener("click", () => {
  let b = res.innerText.slice(index + 1);
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
});
