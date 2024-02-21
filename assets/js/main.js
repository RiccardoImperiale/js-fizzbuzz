const gameBoard = document.querySelector('.game_board')

// generate numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    // generate squares
    const squareMarkup = `
    <div class="number d-flex align-items-center justify-content-center bg-white">
        ${i}
    </div>`
    gameBoard.insertAdjacentHTML('beforeend', squareMarkup)
    // console.log(i);
    if (i % 3 === 0 && i % 5 === 0) {
        // numbers multiple of 3 and 5
        console.log(i, 'fizzbuzz');
    } else if (i % 3 === 0) {
        // numbers multiple of 3
        console.log(i, 'fizz');
    } else if (i % 5 === 0) {
        // numbers multiple of 5
        console.log(i, 'buzz');
    }
}