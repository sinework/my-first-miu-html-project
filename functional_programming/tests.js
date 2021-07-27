describe("sum", function () {
    it("takes n number of integers and return their sum",
        function () {
            assert.equal(17, sum([12, 3, 2]));
        });
});


describe("multiply", function () {
    it("takes n number of integers and return their multiple",
        function () {
            assert.equal(12, multiply([1, 3, 4]));
        });
});

describe("reverse", function () {
    it("takes a string returns it's reverse value",
        function () {
            assert.equal("olleH", reverse(["Hello"]));
        });
});

describe("longerWords", function () {
    it("takes an array or strings and length i and returns the list of strings with length greater than i",
        function () {
            assert.deepEqual(["Hello", "World"], longerWords(["Hello", "World", "Hi"], 4));
        });
});