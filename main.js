let finalPrice = 0;
let flowersList = [];
let orderedItems = [];
let $container = $('#container');
class Flower {
    constructor(name, quantity, basePrice, price, stock, img) {
        this.name = name;
        this.quantity = quantity;
        this.basePrice = basePrice;
        this.price = price;
        this.stock = stock;
        this.img = img;
        sessionStorage.setItem(this.name + 'Price', 0);
        sessionStorage.setItem((this.name + 'Quantity'), this.quantity);
        flowersList.push(this);
    };
    flowerPrice() {
        this.quantity = +$(`#quantity${this.name}`).val();
        if ((this.quantity >= 0 && Number.isInteger(this.quantity)) || this.quantity == '') {
            this.price = this.basePrice * this.quantity;
            $(`#total${this.name}`).val(this.price);
        }
        else {
            alert("That is not a valid amount number.");
            this.quantity = 0;
            $(`#quantity${this.name}`).val(0);
            $(`#total${this.name}`).val(0);
        };
    };
    flowerBill() {
        if (this.quantity == '' || this.quantity == 0) {
            alert("Sorry your input is invalid. Please enter valid quantity number.");
            this.quantity = 0;
        }
        else if (this.stock == 0) {
            alert("Sorry, we have run out of " + this.name + " flower. Please come back later.");
            $(`#quantity${this.name}`).val(0);
            $(`#total${this.name}`).val(0);
        }
        else if (this.quantity > this.stock) {
            alert("Sorry, we do not have desired amount of " + this.name + " flower. Total amount available is: " + this.stock);
            this.quantity = 0;
            this.price = 0;
            $(`#quantity${this.name}`).val(0);
            $(`#total${this.name}`).val(0);
        }
        else {
            this.stock -= this.quantity;
            finalPrice += this.price;
            sessionStorage.setItem(this.name + 'Price', this.price);
            sessionStorage.setItem(this.name + 'Quantity', this.quantity);
            sessionStorage.setItem(this.name + 'Stock', this.stock);
            $(`#stock${this.name}`).val(this.stock);
            alert("(" + this.quantity + ") items of " + this.name + " has been added to your cart. To checkout, please click on cart icon on upper right corner.");
        };
    };
    checkFlowerQuantitySource() {
        let getStock = sessionStorage.getItem(this.name + 'Stock');
        if (getStock == null) {
            this.stock = this.stock;
        }
        else {
            this.stock = getStock;
            $(`#stock${this.name}`).val(this.stock);
        };
    };
};

const springMagic = new Flower('springMagic', 0, 550, 0, 500, 'images/product-01.jpg');
const summerFresh = new Flower('summerFresh', 0, 450, 0, 500, 'images/product-02.jpg');
const easterFlowers = new Flower('easterFlowers', 0, 600, 0, 500, 'images/product-03.jpg');
const toMumWithLove = new Flower('toMumWithLove', 0, 700, 0, 500, 'images/product-04.jpg');
const pinkPerfection = new Flower('pinkPerfection', 0, 550, 0, 500, 'images/product-05.jpg');

function checkSource() {
    for (let i = 0; i < flowersList.length; i++) {
        flowersList[i].checkFlowerQuantitySource();
    };
};

function totalPrice() {
    if (finalPrice != 0) {
        let $createElement = $('#cart');
        sessionStorage.setItem("finalprice", finalPrice);
        order();
        createCart();
        let $button = $(`<button type = 'submit' class = 'cartButton' onclick = 'placeOrder()'>Place order</button>`);
        $createElement.append('<br>');
        $button.appendTo($createElement);
        let $buttonRemove = $(`<button type = 'submit' class = 'cartButton' onclick = 'removeFromCart()'>Remove from cart</button>`);
        $buttonRemove.appendTo($createElement);
        finalPrice = 0;
    }
    else {
        alert("Your shopping cart is empty. Please add some flowers.");
    };
};

function order() {
    for (let i = 0; i < flowersList.length; i++) {
        if (sessionStorage.getItem(flowersList[i].name + 'Quantity') >= 1) {
            orderedItems[i] = sessionStorage.getItem(flowersList[i].name + 'Quantity') + " pieces of " + flowersList[i].name + " flower with total price of " + sessionStorage.getItem(flowersList[i].name + 'Price') + " RSD";
        };
    };
};

function createCart() {
    let $createElement = $('#cart');
    $('.purchasedFlowers').empty();
    $('#totalPurchased').empty();
    $('.cartButton').remove();
    $('#cart').css('display', 'block');
    $('#shop').append($createElement);
    addToCart();
};

function addToCart() {
    let $createElement = $('#cart');
    for (let i = 0; i < orderedItems.length; i++) {
        if (orderedItems[i] != undefined) {
            let $purchased = $(`<div id="purchased${i}" class="purchasedFlowers"> ${orderedItems[i]} </div>`)
            $createElement.append($purchased);
            $(`<input type="checkbox" id='${[i]}' class="radiobtn" name="dynradio"/>`).appendTo($purchased);
        };
    };
    $createElement.append('<br>');
    let $totalPurchased = $(`<div id = "totalPurchased">Total payment is ${sessionStorage.getItem('finalprice')}RSD </div>`);
    $createElement.append($totalPurchased);
}

function removeFromCart() {
    for (let i = 0; i < flowersList.length; i++) {
        if ($(`#${[i]}`).prop('checked') == true) {
            finalPrice = sessionStorage.getItem('finalprice');
            flowersList[i].stock += flowersList[i].quantity;
            finalPrice -= flowersList[i].price;
            sessionStorage.setItem(`${flowersList[i].name}` + 'Stock', flowersList[i].stock);
            sessionStorage.setItem("finalprice", finalPrice);
            flowersList[i].price = 0;
            flowersList[i].quantity = 0;
            sessionStorage.setItem(`${flowersList[i].name}` + 'Quantity', flowersList[i].quantity);
            sessionStorage.setItem(`${flowersList[i].name}` + 'Price', flowersList[i].price);
            delete orderedItems[i];
            $(`#${[i]}`).remove();
            $(`#purchased${i}`).remove();
            $('#totalPurchased').html(`Total payment is ${sessionStorage.getItem('finalprice')} RSD`)
        };
    };
};

function placeOrder() {
    alert("Your order is confirmed. Thank you for shopping with us!");
    flowersList.forEach(function (flower) {
        sessionStorage.setItem(`${flower.name}` + 'Price', 0);
        sessionStorage.setItem(`${flower.name}` + 'Quantity', 0);
    });
    location.replace("index.html");
};

function createCatalog() {
    $container.empty();
    flowersList.forEach(function (flower) {
        let $flowerContainer = $(`<div class = 'product'>
        <img src = '${flower.img}' alt='${flower.name}-image'>
        <div><h4>${flower.name}</h4></div>
        <div>price (RSD): <input type = 'number' id = 'basePrice' class = 'basePrice' value = '${flower.basePrice}' readonly></div>
        <div>flowers qty: <input type = 'number' id = 'quantity${flower.name}' class = 'productQuantity' value = '0' oninput = '${flower.name}.flowerPrice()' onclick = 'this.select()'></div>
        <div>total (RSD) : <input type = 'number' id = 'total${flower.name}' class = 'price' value = '${flower.price}' readonly></div>
        <div>flowers left: <input type = 'number' id = 'stock${flower.name}' value = '${flower.stock}' readonly></div>
        <button type = 'submit' id = 'button' onclick = '${flower.name}.flowerBill()'>Add to cart</button>
    </div>`);
        $flowerContainer.appendTo($container);
    });
};