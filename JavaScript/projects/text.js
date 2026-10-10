let message = document.querySelector(".js-message");

let count = 0;

message.addEventListener("input", function(){

count = message.value.length;
  if(count >= 200){

    alert("You have exceeded the 200-character limit!");
    console.log("count");
  }
   console.log(count);
})

function submitButton(){

 let result;

let button = document.querySelector(".js-button");
let display = document.querySelector(".js-display");

result = (200 - count);  

display.innerHTML = `Count :
                    You have typed ${count} letters ,
                     Remaining characters are ${result}`;

  console.log(`you have type ${count} letters`);
  console.log(`remining letters are ${result}`);


}
