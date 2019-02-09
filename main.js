tPrice = 0;

function springMagicPrice() {
    var sM = document.getElementById("sM");
    var sMb = document.getElementById("sMb");
    var quantitysM = document.getElementById("quantitysM");

    if (quantitysM.value == '') { }
    else if (parseInt(quantitysM.value) > 0 && Number.isInteger(+quantitysM.value)) {
        sM.value = sMb.value * quantitysM.value;
    }
    else {
        alert("That is not a valid amount number.");
        quantitysM.value = 1;
    }
}

function sMBill() {
    var sMTotal = document.getElementById("sMTotal");
    var quantitysM = document.getElementById("quantitysM");

    if (quantitysM.value == '') {
        alert("Sorry your input is invalid. Please enter valid quantity number.");
        quantitysM.value = 1;
    }
    else if (parseInt(sMTotal.value) == 0) {
        alert("Sorry, we have run out of Spring Magic. Please come back later.");
    }

    else if (parseInt(quantitysM.value) > parseInt(sMTotal.value)) {
        quantitysM.value = null;
        alert("Sorry, we do not have desired amount of Spring Magic. Total amount available is: " + sMTotal.value);
    }

    else {
    sMTotal.value -= quantitysM.value;
        tPrice += parseFloat(sM.value);
        sessionStorage.setItem('springMagic', sM.value);
        sessionStorage.setItem('springMagicqt', quantitysM.value);
        sessionStorage.setItem('springMagictotal', sMTotal.value);
        alert("(" + quantitysM.value + ") items of Spring Magic has been added to your cart. To checkout, please click on cart icon on upper right corner.");
    }
}

function summerFreshPrice() {
    var sF = document.getElementById("sF");
    var sFb = document.getElementById("sFb");
    var quantitysF = document.getElementById("quantitysF");

    if (quantitysF.value == '') { }
    else if (parseInt(quantitysF.value) > 0 && Number.isInteger(+quantitysF.value)) {
        sF.value = sFb.value * quantitysF.value;
    }
    else {
        alert("That is not a valid amount number.");
        quantitysF.value = 1;
    }
}

function sFBill() {
    var sFTotal = document.getElementById("sFTotal");
    var quantitysF = document.getElementById("quantitysF");

    if (quantitysF.value == '') {
        alert("Sorry your input is invalid. Please enter valid quantity number.");
        quantitysF.value = 1;
    }
    else if (parseInt(sFTotal.value) == 0) {
        alert("Sorry, we have run out of Summer Fresh. Please come back later.");
    }

    else if (parseInt(quantitysF.value) > parseInt(sFTotal.value)) {
        quantitysF.value = null;
        alert("Sorry, we do not have desired amount of Summer Fresh. Total amount available is: " + sFTotal.value);
    }

    else {
    sFTotal.value -= quantitysF.value;
        tPrice += parseFloat(sF.value);
        sessionStorage.setItem('summerFresh', sF.value);
        sessionStorage.setItem('summerFreshqt', quantitysF.value);
        sessionStorage.setItem('summerFreshtotal', sFTotal.value);
        alert("(" + quantitysF.value + ") items of Summer Fresh has been added to your cart. To checkout, please click on cart icon on upper right corner.");
    }
}

function easterFlowersPrice() {
    var eF = document.getElementById("eF");
    var eFb = document.getElementById("eFb");
    var quantityeF = document.getElementById("quantityeF");

    if (quantityeF.value == '') { }
    else if (parseInt(quantityeF.value) > 0 && Number.isInteger(+quantityeF.value)) {
        eF.value = eFb.value * quantityeF.value;
    }
    else {
        alert("That is not a valid amount number.");
        quantityeF.value = 1;
    }
}

function eFBill() {
    var eFTotal = document.getElementById("eFTotal");
    var quantityeF = document.getElementById("quantityeF");

    if (quantityeF.value == '') {
        alert("Sorry your input is invalid. Please enter valid quantity number.");
        quantityeF.value = 1;
    }
    else if (parseInt(eFTotal.value) == 0) {
        alert("Sorry, we have run out of Easter Flowers. Please come back later.");
    }

    else if (parseInt(quantityeF.value) > parseInt(eFTotal.value)) {
        quantityeF.value = null;
        alert("Sorry, we do not have desired amount of Easter Flowers. Total amount available is: " + eFTotal.value);
    }

    else {
    eFTotal.value -= quantityeF.value;
        tPrice += parseFloat(eF.value);
        sessionStorage.setItem('easterFlowers', eF.value);
        sessionStorage.setItem('easterFlowersqt', quantityeF.value);
        sessionStorage.setItem('easterFlowerstotal', eFTotal.value);
        alert("(" + quantityeF.value + ") items of Easter Flowers has been added to your cart. To checkout, please click on cart icon on upper right corner.");
    }
}

function toMumPrice() {
    var tM = document.getElementById("tM");
    var tMb = document.getElementById("tMb");
    var quantitytM = document.getElementById("quantitytM");

    if (quantitytM.value == '') { }
    else if (parseInt(quantitytM.value) > 0 && Number.isInteger(+quantitytM.value)) {
        tM.value = tMb.value * quantitytM.value;
    }
    else {
        alert("That is not a valid amount number.");
        quantitytM.value = 1;
    }
}

function tMBill() {
    var tMTotal = document.getElementById("tMTotal");
    var quantitytM = document.getElementById("quantitytM");

    if (quantitytM.value == '') {
        alert("Sorry your input is invalid. Please enter valid quantity number.");
        quantitytM.value = 1;
    }
    else if (parseInt(tMTotal.value) == 0) {
        alert("Sorry, we have run out of To Mum With Love. Please come back later.");
    }

    else if (parseInt(quantitytM.value) > parseInt(tMTotal.value)) {
        quantitytM.value = null;
        alert("Sorry, we do not have desired amount of To Mum With Love. Total amount available is: " + tMTotal.value);
    }

    else {
    tMTotal.value -= quantitytM.value;
        tPrice += parseFloat(tM.value);
        sessionStorage.setItem('toMum', tM.value);
        sessionStorage.setItem('toMumqt', quantitytM.value);
        sessionStorage.setItem('toMumtotal', tMTotal.value);
        alert("(" + quantitytM.value + ") items of To Mum With Love has been added to your cart. To checkout, please click on cart icon on upper right corner.");
    }
}

function pinkPerfectionPrice() {
    var pP = document.getElementById("pP");
    var pPb = document.getElementById("pPb")
    var quantitypP = document.getElementById("quantitypP");

    if (quantitypP.value == '') { }
    else if (parseInt(quantitypP.value) > 0 && Number.isInteger(+quantitypP.value)) {
        pP.value = pPb.value * quantitypP.value;
    }
    else {
        alert("That is not a valid amount number.");
        quantitypP.value = 1;
    }
}

function pPBill() {
    var pPTotal = document.getElementById("pPTotal");
    var quantitypP = document.getElementById("quantitypP");

    if (quantitypP.value == '') {
        alert("Sorry your input is invalid. Please enter valid quantity number.");
        quantitypP.value = 1;
    }
    else if (parseInt(pPTotal.value) == 0) {
        alert("Sorry, we have run out of Pink Perfection. Please come back later.");
    }

    else if (parseInt(quantitypP.value) > parseInt(pPTotal.value)) {
        quantitypP.value = null;
        alert("Sorry, we do not have desired amount of Pink Perfection. Total amount available is: " + pPTotal.value);
    }

    else {
    pPTotal.value -= quantitypP.value;
        tPrice += parseFloat(pP.value);
        sessionStorage.setItem('pinkPerfection', pP.value);
        sessionStorage.setItem('pinkPerfectionqt', quantitypP.value);
        sessionStorage.setItem('pinkPerfectiontotal', pPTotal.value);
        alert("(" + quantitypP.value + ") items of Pink Perfection has been added to your cart. To checkout, please click on cart icon on upper right corner.");
    }
}

function totalPrice() {

    if (tPrice != 0) {
        sessionStorage.setItem("finalprice", tPrice);
        location.replace("bill.html")
        tPrice = 0;
        quantitysM.value = 1;
        quantitysF.value = 1;
        quantityeF.value = 1;
        quantitytM.value = 1;
        quantitypP.value = 1;
        sM.value = sMb.value;
        sF.value = sFb.value;
        eF.value = eFb.value;
        tM.value = tMb.value;
        pP.value = pPb.value;
    }
    else {
        alert("Your shopping cart is empty. Please add some flowers.");
        tPrice = 0;
        sessionStorage.setItem("finalprice", tPrice);
    }
}

function whichQt() {
    if (sessionStorage.getItem('springMagictotal') == null) {
        sMTotal = document.getElementById("sMTotal").value;
    }
    else {
        sMTotal.value = sessionStorage.getItem('springMagictotal');
    }
}

function whichQt1() {
    if (sessionStorage.getItem('summerFreshtotal') == null) {
        sFTotal = document.getElementById("sFTotal").value;
    }
    else {
        sFTotal.value = sessionStorage.getItem('summerFreshtotal');
    }
}

function whichQt2() {
    if (sessionStorage.getItem('easterFlowerstotal') == null) {
        eFTotal = document.getElementById("eFTotal").value;
    }
    else {
        eFTotal.value = sessionStorage.getItem('easterFlowerstotal');
    }
}

function whichQt3() {
    if (sessionStorage.getItem('toMumtotal') == null) {
        tMTotal = document.getElementById("tMTotal").value;
    }
    else {
        tMTotal.value = sessionStorage.getItem('toMumtotal');
    }
}

function whichQt4() {
    if (sessionStorage.getItem('pinkPerfectiontotal') == null) {
        pPTotal = document.getElementById("pPTotal").value;
    }
    else {
        pPTotal.value = sessionStorage.getItem('pinkPerfectiontotal');
    }
}