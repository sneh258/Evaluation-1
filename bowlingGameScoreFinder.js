const inputOne = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]
let score = 0;

function findBowlingGameScore(inputOne) {
    if (inputOne.length < 20) {
        throw new Error('Minimum 20 inputs required');

    }

    for (let index = 0; index < inputOne.length; index++) {
        if (inputOne[index] < 9 && inputOne[index + 1] < 9) {
            score = inputOne[index] + inputOne[index + 1];
        }

        else {
            if ((inputOne[index] + inputOne[index + 1]) == 10) {
                score = 10 + inputOne[index + 2];
            }
        }

    }

}