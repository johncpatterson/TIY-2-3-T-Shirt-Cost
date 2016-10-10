// variables 
var cartOne = document.getElementById("cart_one");
var cartTwo = document.getElementById("cart_two");
var cartThree = document.getElementById("cart_three");
var tax = document.getElementById("tax_box");
var cartToggle = document.getElementById("cart_logo");
var PlaceHolder = document.getElementById("product_box");

var subtotal = 0;
var blueInCart = false;
var pinkInCart = false;
var orangeInCart = false;
var cart = false;
var dateAdded = new Date();
var text = "";

// empty array to hold cart contents
var cartContents = [];

// shirt objects to store info about shirts
var blueShirt = {
    color: "blue",
    name: "Save my trees",
    price: 29,
    time: dateAdded
}
var pinkShirt = {
    color: "pink",
    name: "Nature Lover",
    price: 19,
    time: dateAdded
}
var orangeShirt = {
    color: "orange",
    name: "Forrest Walk",
    price: 39,
    time: dateAdded
}

// funtion for updating the price of each item added to the cart and adding the items to the HTML on the page
function updateCart(price) {
    // reset innerHTML and what's in text variable
    text = "";
    PlaceHolder.innerHTML = "";
    subtotal = 0;
    // loop through array and add shirt info and time added to page 
    cartContents.forEach(function(shirt, index) {
        subtotal += shirt.price;
        timeAdded = moment(shirt.time).fromNow();
        text +=
            `<div><span class="shirt_name">${shirt.name}</span> 
            <span class="shirt_color">${shirt.color}</span> 
            <span class="shirt_price">$${shirt.price}</span>
            <span class="time">${timeAdded}</span>
            </div>
            `;
    });

    PlaceHolder.innerHTML = text;
    tax = subtotal * .065;
    total = tax + subtotal;

    document.getElementById("subtotal_box").innerHTML = subtotal.toFixed(0); /*round decimal places to 0*/
    document.getElementById("tax_box").innerHTML = tax.toFixed(2);
    document.getElementById("totalprice_box").innerHTML = total.toFixed(2);


}

// event listener to show and hide cart
cartToggle.addEventListener("click", function() {
    if (cart === false) {
        cart = true;
        cart_stuff_to_hide.className = "cart";
    } else {
        cart = false;
        cart_stuff_to_hide.className = "hidden";
    }

});

// event listeners to do stuff when clicking on the shopping cart icons to add and remove items from the cart
cartOne.addEventListener("click", function() {
    if (blueInCart === false) {
        blueShirt.time = new Date();
        cartContents.push(blueShirt);
        updateCart();
        blueInCart = true;
        cart_one.className = "small_pic_5 active";
    } else {
        cartContents.pop(blueShirt);
        updateCart();
        blueInCart = false;
        cart_one.className = "small_pic_5";
    }

    console.log(cartContents);
});

cartTwo.addEventListener("click", function() {
    if (pinkInCart === false) {
        pinkShirt.time = new Date();
        cartContents.push(pinkShirt);
        updateCart();
        pinkInCart = true;
        cart_two.className = "small_pic_5 active";
    } else {
        cartContents.pop(pinkShirt);
        updateCart();
        pinkInCart = false;
        cart_two.className = "small_pic_5";
    }

    console.log(cartContents);
});

cartThree.addEventListener("click", function() {
    if (orangeInCart === false) {
        orangeShirt.time = new Date();
        cartContents.push(orangeShirt);
        updateCart();
        orangeInCart = true;
        cart_three.className = "small_pic_5 active";
    } else {
        cartContents.pop(orangeShirt);
        updateCart();
        orangeInCart = false;
        cart_three.className = "small_pic_5";
    }

    console.log(cartContents);
});
