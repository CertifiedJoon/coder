// Game value
let min = 1, 
max = 10, 
life = 3, 
win = 2;

// UI elements
const minSpan = document.querySelector('span.min-num'),
maxSpan = document.querySelector('span.max-num'),
submitBtn = document.querySelector('input#guess-btn'),
guessInput = document.querySelector('input#guess-input'),
message = document.querySelector('p.message'); 

// Set Number Boundaries
minSpan.textContent = min;
maxSpan.textContent = max;

submitBtn.addEventListener('click', function(){
    if (guessInput.disabled) {
        guessInput.disabled = false;
        setMessage('');
        guessInput.value = '';
        submitBtn.value = 'Submit';
    } else {
        const guess = parseInt(guessInput.value);
        console.log(guess);
        if (isNaN(guess) || guess < min || guess > max) {
            setMessage(`Please enter a number between ${min} and ${max}.`);
        } else {
            if (guess === win) {
                setMessage(`You Win! Number ${guess} is correct`);
                endGame();
            } else if (life > 1) {
                life = life - 1;
                setMessage(`Wrong Guess! You have ${life} guesses left.`);
            } else {
                setMessage(`Game Over! No tries left.`);
                endGame();
            }
        }
    }
})

function setMessage(msg) {
    message.textContent = msg;
}

function endGame() {
    win = Math.ceil(Math.random() * max);
    life = 3;
    guessInput.disabled = true;
    submitBtn.value = "Play again";
}