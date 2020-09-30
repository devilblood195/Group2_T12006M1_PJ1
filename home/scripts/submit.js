function contactus() {
    var first_name_value = document.getElementById('fname').value;
    var last_name_value = document.getElementById('lname').value;
    var mail_value = document.getElementById('mail').value;
    var subject_value = document.getElementById('subject').value;
    var message_value = document.getElementById('message').value;
    alert('Message Sending Successfully!');
}

function feedback() {
    var name_value = document.getElementById('name').value;
    var mail_value = document.getElementById('mail').value;
    var age_value = document.getElementById('age').value;
    var phone_value = document.getElementById('phone').value;
    alert('Feedback Sending Successfully!');
}

function ticket() {
    var fullname_value = document.getElementById('fullname').value;
    var mail_value = document.getElementById('mail').value;
    var phone_value = document.getElementById('phone').value;
    var amount_value = document.getElementById('amount').value;
    var price_value = document.getElementById('price').value;
    var date_value = document.getElementById('date').value;
    var date_value1 = new Date(date_value);
    var today = new Date();
    if (date_value1 < today) {
        alert('The date of visit must be greater than to the current date');
        return;
    }
    alert('You Successfully Purchased Ticket. Thanks!');
}