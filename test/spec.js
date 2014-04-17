// describe("Module", function() {
//   it("should do something", function() {
//     expect(true).toEqual(false);
//   });
// });

describe("firstReverse takes a single string parameter and returns the string in reverse order", function() {
    it("should reverse a single string", function() {
        expect(firstReverse('hello')).toEqual('olleh');
        expect(firstReverse('yuppers')).toEqual('sreppuy');
        expect(firstReverse('breakfast')).toEqual('tsafkaerb');
    })
})

describe("swapCase that takes a single string parameter and swaps the case of each character. For example: if a string is 'Hello World' the output should be 'hELLO wORLD'. Let numbers and symbols stay the way they are.", function() {
    it("should lowercase first leffter then cap the rest", function() {
        expect(swapCase('What Up Doc!')).toEqual('wHAT uP dOC!');
        expect(swapCase('Super Dooper')).toEqual('sUPER dOOPER');
        expect(swapCase('Food 100 For Thought.')).toEqual('fOOD 100 fOR tHOUGHT.');
        expect(swapCase('What!')).toEqual('wHAT!');
        expect(swapCase('WHAt!')).toEqual('whaT!');
        expect(swapCase('awAl is! tOO')).toEqual('AWaL IS! Too');
    })
})

describe("letterCount takes a single string parameter and returns the first word with the greatest number of repeated letters", function() {
    it("should return first word with 2 same letters", function() {
        expect(letterCount('Today, is the greatest day ever!')).toEqual('greatest');
        expect(letterCount('Today, is too cool the greatest day ever!')).toEqual('too');
        expect(letterCount('Today, is freaking awesum!')).toEqual(-1);
    })
})