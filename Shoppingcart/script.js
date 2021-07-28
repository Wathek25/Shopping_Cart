/*Plus Button*/
let btn = document.querySelectorAll(".btnplus");
/*Minus Button*/
let btnm = document.querySelectorAll(".btnminus");
/*quantity*/
let qte = document.querySelectorAll(".qte");
/*Like (heart)*/
let heart = document.querySelectorAll(".heart");
/*Delete*/
let trash = document.querySelectorAll(".trash");
/*Total Price*/
let totalPrice = document.getElementById("totalPrice");
/*Small prices*/
let price = document.querySelectorAll(".price");

/*List for prices */
let prices = []
for (let i=0; i < price.length; i++)
{
  prices.push (price[i].innerHTML)
}

/*button plus*/
for (let i = 0; i <= btn.length -1; i++) {
  btn[i].addEventListener("click", function () {
    //   console.log(+quantity.innerHTML + 1);
    //   quantity.innerHTML = +quantity.innerHTML + 1;
    
    qte[i].innerHTML++
    price[i].innerHTML = "$"+ +prices[i].replace("$","") * +qte[i].innerHTML
    // Number(qte.innerHTML + 1)
  total()
  });
}

/*button minus*/
for (let i = 0; i <= btnm.length -1; i++) {
  btnm[i].addEventListener("click", function () {
    //   console.log(+quantity.innerHTML + 1);
    //   quantity.innerHTML = +quantity.innerHTML + 1;
    
    if(qte[i].innerHTML>1){
    qte[i].innerHTML--
    price[i].innerHTML = "$"+ +prices[i].replace("$","") * +qte[i].innerHTML
    }
    // Number(qte.innerHTML + 1)
  total()
  });
}

/*like (heart)*/
for (let i = 0; i <=heart.length -1; i++) { 
heart[i].addEventListener("click", function () {

  if(heart[i].style.color === "red"){
heart[i].style.color ="black"
}else{
heart[i].style.color ="red"
}})
}

 /*delete (trash)*/
for (let i= 0; i < trash.length; i++) {
  trash[i].addEventListener("click", function () {
    trash[i].parentElement.parentElement.remove()
  })
}

/* Function total*/
function total() {
  let qte = document.querySelectorAll(".qte")
  let price = document.querySelectorAll(".price")
  let sum = 0
  for (let i=0; i < price.length; i++) {
  sum = sum + price[i].innerHTML.replace("$","") * qte[i].innerHTML;
}
  totalPrice.innerHTML = "$" + sum
  
}
total()

