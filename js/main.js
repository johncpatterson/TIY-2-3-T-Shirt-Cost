var cartOne = document.getElementById("cart_one");
var cartTwo = document.getElementById("cart_two");
var cartThree = document.getElementById("cart_three");

var subtotal = 0;

var blueInCart = false;
var pinkInCart = false;
var orangeInCart = false;


function updateCart(price) {
    subtotal = subtotal + price;
    total = subtotal * .065 + subtotal;
    document.getElementById("subtotal_box").innerHTML = subtotal;
    document.getElementById("totalprice_box").innerHTML = total;

}
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
