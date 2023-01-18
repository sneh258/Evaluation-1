const { findBowlingGameScore } = require('./bowlingGameScoreFinder');


describe('Bowling Game Scores', () => {

    describe('Frame 1', () => {
        it('should throw an error when the input is less than 20', () => {

            expect(() => findBowlingGameScore([3, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toThrow('Minimum 20 inputs required');

        });

        it('should return the score for each knocked down pin when the first frame has score less than 10', () => {
            const result = findBowlingGameScore([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]);
            expect(result).toBe(90);

        });

        it('should return the score for strike when all 10 pins are striked in the first frame', () => {
            const result = findBowlingGameScore([6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
            expect(result).toBe(16);

        });





    })



})
