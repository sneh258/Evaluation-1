const inputOne = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]
let score = 0;


// function createFrames(inputOne) {

//     index = 0;
//     const frames = {

//         'Frame 1': [inputOne[index], inputOne[index + 1]],
//         

//     }
//     return frames


// }

function findBowlingGameScore(inputOne) {
    if (inputOne.length < 20) {
        throw new Error('Minimum 20 inputs required');

    }

    for (let index = 0; index <= inputOne.length; index++) {

        if (inputOne[index] < 9 && inputOne[index + 1] < 9) {
            score = score + inputOne[index] + inputOne[index + 1];
            index++;
        }


        if ((inputOne[index] + inputOne[index + 1]) == 10) {
            score = 10 + inputOne[index + 2];
            index++;
        }

        if (inputOne[index] == 10) {
            score = inputOne[index + 1] + inputOne[index + 2];
            index++;
        }

    }

    return score;

}

console.log(findBowlingGameScore(inputOne));
console.log(createFrames(inputOne));
module.exports = { findBowlingGameScore };