const { findBowlingGameScore } = require('./bowlingGameScoreFinder');


describe('Bowling Game Scores', () => {

    describe('Frame 1', () => {
        it('should throw an error when the input is less than 20', () => {

            expect(() => findBowlingGameScore([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toThrow('Minimum 20 inputs required');

        });

        it('should return the number of pins knocked down if the first frame has score less than 10', () => {
            const result = findBowlingGameScore([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]);
            expect(result).toEqual(90);

        });


    })



})
