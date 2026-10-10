
function updateTable(){

let firstName = document.querySelector(".js-first");
let secondName = document.querySelector(".js-second");
let date = document.querySelector(".js-date");
let select = document.querySelector(".js-select");
let course = document.querySelector(".js-course");
let address = document.querySelector(".js-address");
let county = document.querySelector(".js-county");
let phone = document.querySelector(".js-phone");
let eir = document.querySelector(".js-eir");
let email = document.querySelector(".js-email");
let user = document.querySelector(".js-user");
let password = document.querySelector(".js-password");

let saveDate = JSON.parse(localStorage.getItem("fieldSet")) || [];

const field = 
 [

   firstName.value,
   secondName.value,
   date.value,
   select.value,
   course.value,
   address.value,
   county.value,
   phone.value,
   eir.value,
   email.value,
   user.value,
  
]

for(let i = 0; i< field.length; i++){

  if(!field[i].trim()){

    alert("Please fill all details");
    console.log(field);
   return;
  }
}

if(isNaN(phone.value)){

  alert("invalid contact"); 
  return;
}


if(!email.value.includes("@")){

  alert("invalid email address");
  return;
}

if(!user.value.includes("@") && (isNaN(user.value))){

  alert("invalid userID");
  return;
}

if(!/^\d{6}$/.test(password.value)){

  alert("Password must contain exactly 6 digits");
  return;
}
//ROLL NUMBER //

let roll = document.querySelector(".js-roll");

roll.value = "SRF" + Math.floor(Math.random() * 1000);
field.splice(4, 0, roll.value);
//----//


let displaytable = document.querySelector(".js-updatetable");
let row = displaytable.insertRow();

let cell = row.insertCell();
let cell2 = row.insertCell();
let dcell3 = row.insertCell();
let scell4  = row.insertCell();
let rcell5 = row.insertCell();
let ccell6 = row.insertCell();
let acell7 = row.insertCell();
let ctycell8 = row.insertCell();
let pcell9 = row.insertCell();
let ecell10 = row.insertCell();
let mcell11 = row.insertCell();
let ucell12 = row.insertCell();
let actioncell = row.insertCell();

cell.textContent = firstName.value;
cell2.textContent = secondName.value;
dcell3.textContent  = date.value;
scell4.textContent = select.value;
rcell5.textContent = roll.value;
ccell6.textContent = course.value;
acell7.textContent = address.value;
ctycell8.textContent = county.value;
pcell9.textContent = phone.value;
ecell10.textContent = eir.value;
mcell11.textContent = email.value;
ucell12.textContent = user.value;


  let deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete");
  deleteButton.type = "button";

  actioncell.appendChild(deleteButton);

  deleteButton.addEventListener("click", function () {
    row.remove();
  });


saveDate.push(field);
localStorage.setItem("fieldSet", JSON.stringify(saveDate));

    
console.log(firstName.value);
console.log(secondName.value);
console.log(date.value);
console.log(select.value);
console.log(roll.value);
console.log(course.value);
console.log(county.value)
console.log(phone.value);
console.log(email.value);
console.log(user.value);
console.log(password.value);

firstName.value = "";
secondName.value = "";
course.value = "";
phone.value = "";
date.value = "";
select.value = "";
email.value = "";
user.value = "";
password.value = "";
address.value = "";
roll.value = "";
county.value = "";
eir.value = "";

}



