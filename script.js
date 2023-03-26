if(document.readyState=='loading'){
    document.addEventListener('DOMContentLoaded',ready)
}
else{
    ready()
}
function ready(){
    var removeCart=document.getElementsByClassName('remove-item')
    for(var i=0 ; i<removeCart.length ;i++){
        var button=removeCart[i];
        button.addEventListener('click' ,removeCartButton)
    }
    var quantityInput=document.getElementsByClassName('quantity')
    for(var i=0 ; i<quantityInput.length ;i++){
        var input=quantityInput[i]
        input.addEventListener('change',quantityChange)
    }
    var addToCart=document.getElementsByClassName('fas fa-shopping-cart')
    for(var i=0 ; i<addToCart.length ;i++){
        var button=addToCart[i]
        button.addEventListener('click',addToCartClicked)
    }

}
function addToCartClicked(event){
    var button=event.target
    var shopItem=button.parentElement.parentElement
    var title=shopItem.getElementsByTagName('h5')[0].innerText
    var price=shopItem.getElementsByTagName('h4')[0].innerText
    var imgSrc=shopItem.getElementsByTagName('img')[0].src
    console.log(title,price,imgSrc)
    // addToCart(title,price,imgSrc)

}

// function addToCart(title,price,imgSrc){
    
//     var cartItem=document.querySelectorAll('tbody')
//     cartItem.innerHTML+=`<tr class="cart-row">
//     <td><button class="remove-item">Remove</button></td>
//     <td><img src="${imgSrc}" alt=""></td>
//     <td>${title}</td>
//     <td class="cart-price"> &#8377 ${price}</td>
//     <td><input class="quantity" placeholder="Enter quantity" type="number" value="1"></td>
//     <td class="sub-total">&#8377 0</td>
//   </tr>`
//   updateCartTotal()
// }

function removeCartButton(event){
    console.log("click")
    var buttonClicked=event.target;
        buttonClicked.parentElement.parentElement.remove()
        updateCartTotal();
}

function quantityChange(event){
    var input =event.target
    if(isNaN(input.value) || input.value<=0){
        input.value=1
    }
    updateCartTotal()
}

function updateCartTotal(){
    var cartItemContainer=document.getElementsByClassName('cart-item')[0]
    var cartRows =cartItemContainer.getElementsByClassName('cart-row')
    var total=0;
    for(var j=0 ; j < cartRows.length ; j++){
        console.log[j];
        var cartRow=cartRows[j];
        var priceElement=cartRow.getElementsByClassName('cart-price')[0];
        var quantityElement=cartRow.getElementsByClassName('quantity')[0];
        var price=parseFloat(priceElement.innerText.replace('\u20b9',''));
        var quantity=quantityElement.value;
        total=total+(price*quantity);
        cartRow.getElementsByClassName('sub-total')[0].innerText='\u20b9 '+(price*quantity);
    }
    total=Math.round(total *100)/100
    document.getElementsByClassName('cart-total')[0].innerText ='\u20b9'+total
    document.getElementsByClassName('cart-total')[1].innerText ='\u20b9'+total


}






