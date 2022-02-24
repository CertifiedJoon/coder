document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zipcode').addEventListener('blur', validateZipcode);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName() {
    const input = document.getElementById('name').value;
    const re = /^[a-zA-z]{2,10}$/;
    if (re.test(input)) {
        document.getElementById('name').classList.remove('is-invalid');
        document.getElementById('name').classList.add('is-valid');
    } else {
        document.getElementById('name').classList.remove('is-valid');
        document.getElementById('name').classList.add('is-invalid');
    }
}

function validateZipcode() {
    const input = document.getElementById('zipcode').value;
    const re = /^[0-9]{5}(-[0-9]{4})?$/;
    console.log(re.source);
    console.log(re.exec(input));
    if (re.test(input)) {
        document.getElementById('zipcode').classList.remove('is-invalid');
        document.getElementById('zipcode').classList.add('is-valid');
    } else {
        document.getElementById('zipcode').classList.remove('is-valid');
        document.getElementById('zipcode').classList.add('is-invalid');
    }
}

function validateEmail() {
    const input = document.getElementById('email').value;
    const re = /^([a-zA-Z0-9_\.\-]+)@([a-z]{1,8})(\.[a-z]{1,3}){1,2}$/;
    if (re.test(input)) {
        document.getElementById('email').classList.remove('is-invalid');
        document.getElementById('email').classList.add('is-valid');
    } else {
        document.getElementById('email').classList.remove('is-valid');
        document.getElementById('email').classList.add('is-invalid');
    }
}

function validatePhone() {
    const input = document.getElementById('phone').value;
    const re = /^\+(\d+)$/;
    if (re.test(input)) {
        document.getElementById('phone').classList.remove('is-invalid');
        document.getElementById('phone').classList.add('is-valid');
    } else {
        document.getElementById('phone').classList.remove('is-valid');
        document.getElementById('phone').classList.add('is-invalid');
    }
}