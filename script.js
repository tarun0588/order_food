let burger = document.querySelector('#burger');
let fries = document.querySelector('#fries');
let drink = document.querySelector('#drink');
let button = document.querySelector('#orderButton');
let id = document.querySelector('#order');
let image = document.querySelector('#image');
let order_id 

button.addEventListener('click', food);
 async function food() {
  if(!burger.checked && !fries.checked && !drink.checked){
      alert("Please select atleast one item");
  }button.disabled = true;   
   const response = await promise();
   button.disabled = false;
   
   if(burger.checked){
    image.src= "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    id.innerText = "Order ID : 52";
    image.style.display = "block"
   }else if(fries.checked) {
    image.src = "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    id.innerText ="Order ID: 63";
    image.style.display = "block"
   }else if(drink.checked){
    image.src = "https://images.unsplash.com/photo-1597403491447-3ab08f8e44dc?q=80&w=1575&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    id.innerHTML ="Order ID: 71";
    image.style.display = "block"
   } 
}
function promise(){
    let promise = new Promise( (res,rej)=>{
        setTimeout(res,5000)
    })
    return promise;
}