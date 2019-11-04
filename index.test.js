const stringToScore = arr => (
    arr.reduce((acc, curr) => (
        acc + (curr.charCodeAt() - 96)
    ), 0)
);

function high(x) {
    const words = x.split(' ');

    const values = words.map(word => stringToScore(word.split('')));

    const highest = words[values.indexOf(Math.max(...values))];

    return highest;
}

describe('high() finds the highest scoring word', () => {
    it('finds `taxi`', () => {
        expect(high('man i need a taxi up to ubud'))
            .toBe('taxi');
    });

    it('finds `volcano`', () => {
        expect(high('what time are we climbing up the volcano'))
            .toBe('volcano');
    });

    it('finds `semynak`', () => {
        expect(high('take me to semynak'))
            .toBe('semynak');
    });
});