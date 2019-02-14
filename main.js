var finalPrice = 0;
var flowersList = [];
var elements = document.getElementsByTagName('bill');
function checkSource() {
    for (var i = 0; i < flowersList.length; i++) {
        flowersList[i].quantitySource();
    };
};

class Flower {
    constructor(quantity, basePrice, totalPrice, stock) {
        this.quantity = quantity;
        this.basePrice = basePrice;
        this.totalPrice = totalPrice;
        this.stock = stock;
        flowersList.push(this);
    };
    flowerPrice() {
        if ((+(this.quantity).value > 0 && Number.isInteger(+(this.quantity).value)) || (this.quantity).value == '') {
            (this.totalPrice).value = (this.basePrice).value * (this.quantity).value;
        }
        else {
            alert("That is not a valid amount number.");
            (this.quantity).value = 1;
        }
    };
    flowerBill() {
        if ((this.quantity).value == '') {
            alert("Sorry your input is invalid. Please enter valid quantity number.");
            (this.quantity).value = 1;
        }
        else if (((this.stock).value) == 0) {
            alert("Sorry, we have run out of Spring Magic. Please come back later.");
        }
        else if (+(this.quantity).value > +(this.stock).value) {
            alert("Sorry, we do not have desired amount of Spring Magic. Total amount available is: " + (this.stock).value);
            (this.quantity).value = 1;
        }
        else {
            (this.stock).value -= (this.quantity).value;
            finalPrice += +(this.totalPrice).value;
            sessionStorage.setItem((this.totalPrice).name, (this.totalPrice).value);
            sessionStorage.setItem((this.quantity).name, (this.quantity).value);
            sessionStorage.setItem((this.stock).name, (this.stock).value);
            alert("(" + (this.quantity).value + ") items of " + (this.totalPrice).name + " has been added to your cart. To checkout, please click on cart icon on upper right corner.");
        };
    };
    quantitySource() {
        if (sessionStorage.getItem((this.stock).name) == null) {
            (this.stock).value = (this.stock).value;
        }
        else {
            (this.stock).value = sessionStorage.getItem((this.stock).name);
        };
    };
};

function makeFlower() {
    springMagic = new Flower(springMagicQuantity, springMagicBasePrice, springMagicPrice, springMagicStock);
    summerFresh = new Flower(summerFreshQuantity, summerFreshBasePrice, summerFreshPrice, summerFreshStock);
    easterFlowers = new Flower(easterFlowersQuantity, easterFlowersBasePrice, easterFlowersPrice, easterFlowersStock);
    toMum = new Flower(toMumQuantity, toMumBasePrice, toMumPrice, toMumStock);
    pinkPerfection = new Flower(pinkPerfectionQuantity, pinkPerfectionBasePrice, pinkPerfectionPrice, pinkPerfectionStock);
};

function totalPrice() {
    if (finalPrice != 0) {
        sessionStorage.setItem("finalprice", finalPrice);
        location.replace("bill.html")
        finalPrice = 0;
        for (var i = 0; i < flowersList.length; i++) {
            flowersList[i].quantity = 1;
        };
        for (var i = 0; i < flowersList.length; i++) {
            flowersList[i].totalPrice = flowersList[i].basePrice;
        };
    }
    else {
        alert("Your shopping cart is empty. Please add some flowers.");
        finalPrice = 0;
        sessionStorage.setItem("finalprice", finalPrice);
    };
};