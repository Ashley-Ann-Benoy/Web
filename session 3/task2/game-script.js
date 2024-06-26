let targetNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
    const userInput = document.getElementById('userInput').value;
    const message = document.getElementById('message');
    
    if (userInput === '') {
        message.textContent = 'Please enter a number!';
        return;
    }
    
    const guess = Number(userInput);
    
    if (guess < targetNumber) {
        message.textContent = 'Your guess is too low!';
    } else if (guess > targetNumber) {
        message.textContent = 'Your guess is too high!';
    } else {
        message.textContent = 'Congratulations! You guessed the number!';
    }
}
