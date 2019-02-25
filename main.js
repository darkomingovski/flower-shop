var finalPrice = 0;
var flowersList = [];
var orderedItems = [];
var br = document.createElement("br");
function checkSource() {
    for (var i = 0; i < flowersList.length; i++) {
        flowersList[i].quantitySource();
    };
};

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
        this.quantity = +event.target.value;
        if ((this.quantity >= 0 && Number.isInteger(this.quantity)) || this.quantity == '') {
            this.price = this.basePrice * this.quantity;
            document.getElementById('total' + this.name).value = this.price;
        }
        else {
            alert("That is not a valid amount number.");
            this.quantity = 0;
            document.getElementById('quantity' + this.name).value = 0;
            document.getElementById('total' + this.name).value = 0;
        };
    };
    flowerBill() {
        if (this.quantity == '' || this.quantity == 0) {
            alert("Sorry your input is invalid. Please enter valid quantity number.");
            this.quantity = 0;
            document.getElementById('quantity' + this.name).value = 0;
        }
        else if (this.stock == 0) {
            alert("Sorry, we have run out of " + this.name + " flower. Please come back later.");
        }
        else if (this.quantity > this.stock) {
            alert("Sorry, we do not have desired amount of " + this.name + " flower. Total amount available is: " + this.stock);
            this.quantity = 0;
            document.getElementById('quantity' + this.name).value = 0;
        }
        else {
            this.stock -= this.quantity;
            finalPrice += this.price;
            sessionStorage.setItem(this.name + 'Price', this.price);
            sessionStorage.setItem(this.name + 'Quantity', this.quantity);
            sessionStorage.setItem(this.name + 'Stock', this.stock);
            document.getElementById('stock' + this.name).value = this.stock;
            alert("(" + this.quantity + ") items of " + this.name + " has been added to your cart. To checkout, please click on cart icon on upper right corner.");
        };
    };
    quantitySource() {
        if (sessionStorage.getItem(this.name + 'Stock') == null) {
            this.stock = this.stock;
        }
        else {
            this.stock = sessionStorage.getItem(this.name + 'Stock');
            document.getElementById('stock' + this.name).value = this.stock;
        };
    };
};

const springMagic = new Flower('springMagic', 0, 550, 0, 500, 'images/product-01.jpg');
const summerFresh = new Flower('summerFresh', 0, 450, 0, 500, 'images/product-02.jpg');
const easterFlowers = new Flower('easterFlowers', 0, 600, 0, 500, 'images/product-03.jpg');
const toMumWithLove = new Flower('toMumWithLove', 0, 700, 0, 500, 'images/product-04.jpg');
const pinkPerfection = new Flower('pinkPerfection', 0, 550, 0, 500, 'images/product-05.jpg');

function totalPrice() {
    if (finalPrice != 0) {
        sessionStorage.setItem("finalprice", finalPrice);
        order();
        createCart();
        var button = document.createElement("button");
        button.setAttribute('id', 'cartButton');
        button.innerHTML = "Place order";
        button.addEventListener("click", function () {
            placeOrder();
        });
        document.getElementById("item16").appendChild(br);
        document.getElementById("item16").appendChild(button);
        finalPrice = 0;
        for (var i = 0; i < flowersList.length; i++) {
            flowersList[i].quantity = 0;
        };
        for (var i = 0; i < flowersList.length; i++) {
            flowersList[i].price = flowersList[i].basePrice;
        };
    }
    else {
        alert("Your shopping cart is empty. Please add some flowers.");
        finalPrice = 0;
        sessionStorage.setItem("finalprice", finalPrice);
    };
};

function order() {
    for (var i = 0; i < flowersList.length; i++) {
        if (sessionStorage.getItem(flowersList[i].name + 'Quantity') >= 1) {
            orderedItems[i] = sessionStorage.getItem(flowersList[i].name + 'Quantity') + " pieces of " + flowersList[i].name + " flower with total price of " + sessionStorage.getItem(flowersList[i].name + 'Price') + " RSD";
        };
    };
};

function createCart() {
    createElement = document.getElementById('item16');
    document.getElementById('item16').style.display='block';
    document.getElementById("item6").appendChild(createElement);
    for (var i = 0; i < orderedItems.length; i++) {
        if (orderedItems[i] != undefined) {
            createElement.innerHTML += '<div class="purchasedFlower">' + orderedItems[i] + '</div>';
        };
    };
    document.getElementById("item16").appendChild(br);
    createElement.innerHTML += "Total payment is " + sessionStorage.getItem('finalprice') + " RSD";
};

function placeOrder() {
    alert("Your order is confirmed. Thank you for shopping with us!");
    sessionStorage.setItem('springMagicPrice', 0, 'springMagicQuantity', 0);
    sessionStorage.setItem('summerFreshPrice', 0, 'summerFreshQuantity', 0);
    sessionStorage.setItem('easterFlowersPrice', 0, 'easterFlowersQuantity', 0);
    sessionStorage.setItem('toMumWithLovePrice', 0, 'toMumQuantity', 0);
    sessionStorage.setItem('pinkPerfectionPrice', 0, 'pinkPerfectionQuantity', 0);
    location.replace("index.html");
};

function createCatalog() {
    flowersList.forEach(function (flower) {
        let flowerContainer = document.createElement('div');
        flowerContainer.setAttribute('class', 'product');
        document.getElementById("container").appendChild(flowerContainer);

        let flowerImg = document.createElement('img');
        flowerImg.setAttribute('src', flower.img);
        flowerImg.setAttribute('alt', `${flower.name}-img`);
        flowerContainer.appendChild(flowerImg);

        let flowerName = document.createElement('h4');
        flowerName.textContent = `${flower.name}`;
        flowerContainer.appendChild(flowerName);

        let flowerPrice = document.createElement('div');
        flowerPrice.textContent = 'price (RSD): ';
        let inputPrice = document.createElement('input');
        inputPrice.setAttribute('type', 'number');
        inputPrice.setAttribute('value', `${flower.basePrice}`);
        inputPrice.setAttribute('readonly', 'readonly');
        inputPrice.setAttribute('id', 'basePrice');
        inputPrice.setAttribute('class', 'basePrice');
        flowerPrice.appendChild(inputPrice);
        flowerContainer.appendChild(flowerPrice);

        let flowerQuantity = document.createElement('div');
        flowerQuantity.textContent = 'flowers qty: ';
        let inputQuantity = document.createElement('input');
        inputQuantity.setAttribute('type', 'number');
        inputQuantity.setAttribute('value', `${flower.quantity}`);
        inputQuantity.setAttribute('id', 'quantity' + `${flower.name}`);
        inputQuantity.setAttribute('class', 'productQuantity');
        inputQuantity.setAttribute('oninput', `${flower.name}` + '.flowerPrice()');
        inputQuantity.setAttribute('onclick', 'this.select()');
        flowerQuantity.appendChild(inputQuantity);
        flowerContainer.appendChild(flowerQuantity);

        let flowerTotal = document.createElement('div');
        flowerTotal.textContent = 'total (RSD) : ';
        let inputTotal = document.createElement('input');
        inputTotal.setAttribute('type', 'number');
        inputTotal.setAttribute('value', `${flower.price}`);
        inputTotal.setAttribute('readonly', 'readonly');
        inputTotal.setAttribute('id', 'total' + `${flower.name}`);
        inputTotal.setAttribute('class', 'price');
        flowerTotal.appendChild(inputTotal);
        flowerContainer.appendChild(flowerTotal);

        let flowerStock = document.createElement('div');
        flowerStock.textContent = 'flowers left: ';
        let inputStock = document.createElement('input');
        inputStock.setAttribute('type', 'number');
        inputStock.setAttribute('value', `${flower.stock}`);
        inputStock.setAttribute('readonly', 'readonly');
        inputStock.setAttribute('id', 'stock' + `${flower.name}`);
        flowerStock.appendChild(inputStock);
        flowerContainer.appendChild(flowerStock);

        let btn = document.createElement('button');
        btn.setAttribute('type', 'submit');
        btn.setAttribute('id', 'button');
        btn.setAttribute ('onclick', `${flower.name}` + '.flowerBill()');
        btn.textContent = 'Add to cart';
        flowerContainer.appendChild(btn);
    });
};