import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

    let whoarandom = Math.floor (Math.random()* who.length)
    let actionrandom = Math.floor (Math.random()* action.length)
    let whatrandom = Math.floor (Math.random()* what.length)
    let whenrandom = Math.floor (Math.random()* when.length)

  console.log("Hello Rigo from the console!");

  document.querySelector("#excuse").innerHTML = `${who[whoarandom]} ${action[actionrandom]} ${what[whatrandom]} ${when[whenrandom]}`
};