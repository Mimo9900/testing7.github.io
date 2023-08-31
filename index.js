

 
const opendetals = document.querySelector(".detals-ofpeople"); 
let usersOutput = document.querySelector(".people");
const users = {
  khan: "khan",
  omar: "omar",
  gul: "gul",
  imran: "imran"
};
 usersOutput.style.display ="none"
const btn = document.querySelector(".search1");
document.addEventListener("keyup", function(event) {
 if(event.key === "Enter") {
  myfunction2()
 }
}) 
const myfunction2 = function() {
   opendetals.classList.remove("hidden")
  let usersinput = document.querySelector(".search").value;
  //object
   usersOutput.textContent = "";
  if (!usersinput) {
    
    usersOutput.style.display ="block"
    usersOutput.insertAdjacentHTML("afterbegin", ` <p>${"No input"} </p>`);
    usersinput = document.querySelector(".search").value = "";
  } else if (users[usersinput]) {
     usersOutput.style.display ="block"
    usersOutput.insertAdjacentHTML("afterbegin", ` <p>${users[usersinput]} </p>`);
    usersinput = document.querySelector(".search").value = "";
  } else {
     usersOutput.style.display ="block"
    usersOutput.insertAdjacentHTML("afterbegin", ` <p>${"No resault"} </p>`);
    usersinput = document.querySelector(".search").value = "";
  }
}
btn.addEventListener("click", myfunction2)



/*
const total = document.querySelector(".total"); 
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal"); 
const myfunction = function() {
  modal.classList.toggle("hidden"); 
}
total.addEventListener("click", myfunction)
closeModal.addEventListener("click", function() {
  modal.classList.add("hidden")
})
document.addEventListener("keydown", function (event) {
  if(event.key === "Escape" && !modal.classList.contains("hidden")) {
      myfunction();
  }
})

const showProduct = document.querySelector(".showProduct"); 
const arr = {
  fistname: "imran", 
  catrgories: ["imran" , 'khan', 'jan'],
  mainStarter: ["nasir1", "nasir", "mom"],
  order: function (categoriesindex, mainindex) {
    return [this.catrgories[categoriesindex], this.mainStarter[mainindex]]; 
  }
}
const btns = document.querySelectorAll(`.btns`); 
console.log(arr.order(1,2))
for(let i = 0; btns.length > i; i++)
btns[i].addEventListener("click", function () {
  const [...btns] = arr.order([i]); 
  showProduct.textContent = btns.join(" ") ;
  console.log(btns.join(" "))
})

const myfunction3 = function({firsname, lastname, email, address}) {
  return `order resived ${firsname + " " +lastname} email ${email}  address ${address}`
 }
const inputvalue = document.querySelector(".inputvalue")
let inputs = document.querySelectorAll(".inputs");
for (let le = 0; le < inputs.length; le++)
inputvalue.addEventListener("click", function() {
  if(!inputs[le].value) {
    console.log("no inputs")
  }else {
    const resault1 = myfunction3({firsname: inputs[0].value, lastname: inputs[1].value, email: inputs[2].value, address: inputs[3].value})
    console.log(resault1)
  }

})


*/



