let count = 0;
function createCheckout() {
    let $checkout = $('#checkoutMain');
    let $checkoutPrice = $(`<div id='totalPurchased'></div>`);
    $checkoutPrice.html(`Total payment is ${sessionStorage.getItem('finalprice')} RSD. Please fill out the order form below.`);
    $checkoutPrice.appendTo($checkout);
};

function confirmPayment() {
    if (count >= 1) {
        alert('Error. Can not confirm payment while there are errors in input fields. Please check for errors ant then try again.')
    }
    else {
        alert('Successfully paid!');
        window.close();
    };
};

function cancelOrder() {
    alert('Your order is cancelled!');
    window.close();
};

const Regex = {
    firstName: /^[A-ZŠĐŽĆČ][a-zšđčćž]{1,11}\s?([A-ZŠĐŽĆČ][a-zšđčćž]{1,11})?$/,
    lastName: /^[A-ZŠĐŽĆČ][a-zšđčćž]{1,11}\s?([A-ZŠĐŽĆČ][a-zšđčćž]{1,11})?$/,
    address: /^[A-ZŠĐŽĆČ][a-zšđčćž]{1,20}\s?([A-ZŠĐŽĆČa-zšđčćž][a-zšđčćž]{1,11})?\s\d{1,3}$/,
    city: /^[A-ZŠĐŽĆČ][a-zšđčćž]{1,11}$/,
    phone: /^\d{3}\/(\d{3}-?\d{3}|\d{4}-?\d{3}|\d{3}-?\d{4})$/,
    email: /^[a-zšđčćž\-.]{3,}@[a-zšđčćž]{3,}.[a-zšđčćž]{2,3}$/
};

function validateFirst() {
    let $icon = $('<i class="far fa-times-circle" id="iconFirst"></i>');
    let $first = $('#first').val();
    !Regex.firstName.test($first) ? $('#first').before($icon) : $('#iconFirst').remove();
    !Regex.firstName.test($first) ? count++ : 0;
};

function validateLast() {
    let $icon = $('<i class="far fa-times-circle" id="iconLast"></i>');
    let $last = $('#last').val();
    !Regex.lastName.test($last) ? $('#last').before($icon) : $('#iconLast').remove();
    !Regex.lastName.test($last) ? count++ : 0;
};

function validateMail() {
    let $icon = $('<i class="far fa-times-circle" id="iconMail"></i>');
    let $mail = $('#mail').val();
    !Regex.email.test($mail) ? $('#mail').before($icon) : $('#iconMail').remove();
    !Regex.email.test($mail) ? count++ : 0;
};

function validateAddress() {
    let $icon = $('<i class="far fa-times-circle" id="iconAddress"></i>');
    let $address = $('#address').val();
    !Regex.address.test($address) ? $('#address').before($icon) : $('#iconAddress').remove();
    !Regex.address.test($address) ? count++ : 0;
};

function validateCity() {
    let $icon = $('<i class="far fa-times-circle" id="iconCity"></i>');
    let $city = $('#city').val();
    !Regex.city.test($city) ? $('#city').before($icon) : $('#iconCity').remove();
    !Regex.city.test($city) ? count++ : 0;
};

function validatePhone() {
    let $icon = $('<i class="far fa-times-circle" id="iconPhone"></i>');
    let $phone = $('#phone').val();
    !Regex.phone.test($phone) ? $('#phone').before($icon) : $('#iconPhone').remove();
    !Regex.phone.test($phone) ? count++ : 0;
};