var cartOne = document.getElementById("cart_one");
var cartTwo = document.getElementById("cart_two");
var cartThree = document.getElementById("cart_three");
var tax = document.getElementById("tax_box");
var subtotal = 0;
var blueInCart = false;
var pinkInCart = false;
var orangeInCart = false;


function updateCart(price) {
    // tax = Math.abs(price) * .065;
    subtotal = subtotal + price;
    total = (subtotal * .065) + subtotal;

    document.getElementById("subtotal_box").innerHTML = subtotal.toFixed(0);  /*round decimal places to 0*/
    // document.getElementById("tax_box").innerHTML = tax.toFixed(2);
    document.getElementById("totalprice_box").innerHTML = total.toFixed(2);    /*round decimal places to */
    return total;

}

// function bounceCart(bounce) {
// 	if (blueInCart === true || pinkInCart === true || orangeInCart === true) {
// 		var a = document.getElementByID('cart')
//           for (i = 0; i < a.length; i++) {
//             [i].classList.remove('clicked');
//         }
//         document.getElementById('cart').classList.add("clicked");
// 	}
// 	else if (blueInCart === false || pinkInCart === false || orangeInCart === false) {

// 	}
// }

cartOne.addEventListener("click", function() {
    if (blueInCart === false) {
        updateCart(29);
        blueInCart = true;
    } else {
        updateCart(-29);
        blueInCart = false;
    }

});

cartTwo.addEventListener("click", function() {
    if (pinkInCart === false) {
        updateCart(19);
        pinkInCart = true;
    } else {
        updateCart(-19);
        pinkInCart = false;
    }

});

cartThree.addEventListener("click", function() {
    if (orangeInCart === false) {
        updateCart(39);
        orangeInCart = true;
    } else {
        updateCart(-39);
        orangeInCart = false;
    }

});
