document.getElementById('loan-form').addEventListener('submit', function(e) {
    document.querySelector('#loader').style.display = 'block';
    document.querySelector('#result').style.display = 'none';
    setTimeout(calculate, 2000);
    e.preventDefault();
});

function calculate() {
    const loanAmountTxt = document.querySelector('input#amount');
    const interestRateTxt = document.querySelector('input#interest');
    const yearsToRepayTxt = document.querySelector('input#years');
    const monthlyPayment = document.querySelector('input#monthlyPayment');
    const totalPayment = document.querySelector('input#totalPayment');
    const totalInterest = document.querySelector('input#totalInterest'); 

    const loanAmount = parseFloat(loanAmountTxt.value);
    const calculatedInterest = parseFloat(interestRateTxt.value) / 100 / 12; 
    const calculatedPayments = parseFloat(yearsToRepayTxt.value) * 12;

    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (loanAmount * x * calculatedInterest)/(x-1);
    
    if(isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2); 
        totalInterest.value = ((monthly * calculatedPayments) - loanAmount).toFixed(2);
        document.querySelector('#result').style.display = 'block';
        document.querySelector('#loader').style.display = 'none';
    } else {
        showError('Please check your numbers');
    }
} 

function showError(msg) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'alert alert-danger';
    errorDiv.appendChild(document.createTextNode(msg));
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    card.insertBefore(errorDiv, heading);
    document.querySelector('#loader').style.display = 'none';
    setTimeout(clearError, 3000);
}

function clearError() {
    document.querySelector('.alert').remove();
}
