const gameBoard = document.querySelector('.game_board')

// generate numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    // generate square
    const square = document.createElement('div')
    // add classes to square
    square.className = 'number rounded d-flex align-items-center justify-content-center'

    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i, 'fizzbuzz');
        square.innerText = 'FizzBuzz'
        square.style.backgroundColor = 'var(--fb-fizzbuzz)'
        gameBoard.append(square);
    } else if (i % 3 === 0) {
        console.log(i, 'fizz');
        square.innerText = 'Fizz'
        square.style.backgroundColor = 'var(--fb-fizz)'
        gameBoard.append(square);
    } else if (i % 5 === 0) {
        console.log(i, 'buzz');
        square.innerText = 'Buzz'
        square.style.backgroundColor = 'var(--fb-buzz)'

        gameBoard.append(square);
    } else {
        console.log(i);
        square.innerText = i
        square.style.backgroundColor = 'var(--fb-primary)'
        gameBoard.append(square);
    }

}
