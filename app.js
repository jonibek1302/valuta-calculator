let form = document.querySelector("#form");
let input = document.querySelector("#summa");

let selects1 = document.querySelector("#form-lang1");
let selects2 = document.querySelector("#form-lang2");

let select11 = document.querySelector(".select11");
let select12 = document.querySelector(".select12");
let select13 = document.querySelector(".select13");


let select21 = document.querySelector(".select21");
let select22 = document.querySelector(".select22");
let select23 = document.querySelector(".select23");


let select1img = document.querySelector(".select1-img");
let select2img = document.querySelector(".select2-img");
// if (selects1 === select2) {
//     console.log("ishladiyu")
// // }
let oneElement = document.querySelector(".one-element");
let twoElement = document.querySelector(".two-element");

let repit = document.querySelector(".repit")



selects1.addEventListener("click",  () => {
let selectvalue = selects1.value
    console.log(selectvalue);
    if (selectvalue === "USD") {
          select23.style.display = "block";
          select22.style.display = "none";
          select21.style.display = "block";
   select1img.src = "images/evroo.png";
          
    }
    else if (selectvalue === "SUMM") {
          select23.style.display = "block";
          select22.style.display = "block";
          select21.style.display = "none"; 
          select1img.src = "images/uzbekistan_flag.webp";
    }
     else if (selectvalue === "Rubl") {
       select23.style.display = "none";
       select22.style.display = "block";
       select21.style.display = "block";
       select1img.src = "images/russia.png";
     }
    
})

  
selects2.addEventListener("click",  () => {
let selectvalue2 = selects2.value
    console.log(selectvalue2);
    if (selectvalue2 === "USD") {
          select13.style.display = "block";
          select12.style.display = "block";
          select11.style.display = "none";
   select2img.src = "images/evroo.png";
          
    }
    else if (selectvalue2 === "SUMM") {
          select13.style.display = "block";
          select11.style.display = "block";
          select12.style.display = "none"; 
          select2img.src = "images/uzbekistan_flag.webp";
    }
     else if (selectvalue2 === "Rubl") {
       select13.style.display = "none";
       select12.style.display = "block";
       select11.style.display = "block";
       select2img.src = "images/russia.png"
     }
    
})

let dollortosum = 11200;
let dollortorub = 62.54;
let sumtorub = 0.005585;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let selectvalue = selects1.value;
  let selectvalue2 = selects2.value;
  
  let todo = input.value;
  console.log(todo);
    
  if (selectvalue === "USD" && selectvalue2 === "SUMM") {
    oneElement.innerText = `${todo} $`;
    twoElement.innerText = `${todo * dollortosum} summ`;
    console.log("sumaylandi");
  } else if (selectvalue === "USD" && selectvalue2 === "Rubl") {
    console.log("rubllandi");
    oneElement.innerText = `${todo} $`;
    twoElement.innerText = `${todo * dollortorub} rubl`;
  } else if (selectvalue === "SUMM" && selectvalue2 === "Rubl") {
    console.log("rublaylandi");
    oneElement.innerText = `${todo} summ`;
    twoElement.innerText = `${todo * sumtorub } rubl`;
  } else if (selectvalue === "SUMM" && selectvalue2 === "USD") {
    console.log("dollarlandi");
    oneElement.innerText = `${todo} summ`;
    twoElement.innerText = `${todo / dollortosum} $`;
  } else if (selectvalue === "Rubl" && selectvalue2 === "SUMM") {
    console.log("rublaylandi");
    oneElement.innerText = `${todo} rubl`;
    twoElement.innerText = `${todo / sumtorub} summ`;
  } else if (selectvalue === "Rubl" && selectvalue2 === "USD") {
    console.log("dollarlandi");
    oneElement.innerText = `${todo} rubl`;
    twoElement.innerText =  `${todo / dollortorub } $`;
  }
  else{
    alert("Iltimos hammasini kiriting ")
  }

})

repit.addEventListener("click" , () => {
  input.remove
  console.log("repit bosildii");
 
})
