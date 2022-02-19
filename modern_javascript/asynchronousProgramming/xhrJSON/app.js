document.getElementById('btn1').addEventListener('click', loadCustomer);
function loadCustomer(e) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'customer.json', true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            // console.log(this.responseText);
            const customer = JSON.parse(this.responseText);
            const output = makeList(customer);
            document.getElementById('customer').innerHTML = output;
        }
    }
    xhr.send();
    e.preventDefault();
}

document.getElementById('btn2').addEventListener('click', loadCustomers);
function loadCustomers(e) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'customers.json', true);
    xhr.onload = function () {
        let output = ``;
        const customers = JSON.parse(this.responseText);
        customers.forEach(function(customer) {
            output += makeList(customer);
        })
        document.getElementById('customers').innerHTML = output;
    }
    xhr.send()
}

function makeList(customer) {
    const output = `
    <ul>
        <li>ID     : ${customer.id}</li>
        <li>Name   : ${customer.name}</li>
        <li>Company: ${customer.company}</li>
        <li>Phone  : ${customer.phone}</li>
    </ul>
    `;
    return output;
}