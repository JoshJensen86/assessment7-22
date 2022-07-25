const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('should be type string', () => {
    expect (typeof shuffleArray).toBe('string')
    
    test ('returns an array of the same length', ()=> {
        let array = [1, 2, 3, 4, 5]

        let originalLength = array.length

        let shuffleArray = shuffleArray(array)
        let suffleLength = suffleArray.length

        expect (shuffleLength).toEqual(originalLength)

    })

})
