function feedback() {
    var name_value = document.getElementsByName('name').value;
    var mail_value = document.getElementsByName('mail').value;
    var age_value = document.getElementsByName('age').value;
    var phone_value = document.getElementsByName('phone').value;
    alert('Feedback Sending Successfully!');
}

function contactus() {
    var first_name_value = document.getElementsByName('fname').value;
    var last_name_value = document.getElementsByName('lname').value;
    var mail_value = document.getElementsByName('mail').value;
    var subject_value = document.getElementsByName('subject').value;
    var message_value = document.getElementsByName('message').value;
    alert('Message Sending Successfully!');
}

function ticket() {
    var fullname_value = document.getElementsByName('fullname').value;
    var mail_value = document.getElementsByName('mail').value;
    var phone_value = document.getElementsByName('phone').value;
    var date_value = document.getElementsByName('date').value;
    var amount_value = document.getElementsByName('amount').value;
    var price_value = document.getElementsByName('price').value;
    alert('You Successfully Purchased Ticket. Thanks!');
}