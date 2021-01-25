const ResultBuilder = require('./resultBuilder')
const assert = require('assert').strict;

describe("Building result", function () {

    let resultBuilder = new ResultBuilder();

    it('should start empty', function () {
        assert.equal(resultBuilder.getResultsTests().length, 0)
    });

    it("should be able to add a new entry", function () {
        //complete the elements of the 1st test
        let test1 = resultBuilder.newTest("h1-heading")
        test1.setDescription("description 1")
            .setTitle("H1 headings")
            .setWeight(1)
            .setScore(1)
            .addRecommandation("zzzz")
            .addSnippet(" snippets 1")
            .addTableRow( [
                "",
                "URL",
                "Resource Size",
                "Potential Savings"
              ])
              assert.equal(resultBuilder.getResultsTests().length, 1)
    });

    it("should keep test references internally", function() {
        resultBuilder.newTest("name-1")
        resultBuilder.newTest("name-2")
        assert.equal(resultBuilder.getResultsTests().length, 3);
    });

    it("should throw an error when a test already exists", function() {
        resultBuilder.newTest("name");
        assert.throws(() => { resultBuilder.newTest("name"); }, Error);
    })
    it("should test that the results are in json format", function () {
        resultBuilder.newTest("name-4")
        assert.ok(resultBuilder.isJson(resultBuilder.toJson()))
    })

    it("should test that the results are in array format ", function () {
        resultBuilder.newTest("name-5")
        assert.ok(Array.isArray(resultBuilder.getResultsTests()))
    })

    it("Should throw an error when weight have invalid value, ", function () {
        let test = resultBuilder.newTest("name-7")
        assert.throws(() => { test.setWeight("a string"); }, Error)
    })

    it("Should throw an error when score have invalid value, ", function () {
        let test = resultBuilder.newTest("name-8")
        assert.throws(() => { test.setScore("a string"); }, Error)
    })

    it("Should throw an error when recommandation have invalid value", function () {
        let test = resultBuilder.newTest("name-9")
        assert.throws(() => {test.addRecommandation(1)}, Error)
    })

    it("Should throw an error when snippet have invalid value", function () {
        let test = resultBuilder.newTest("name-10")
        assert.throws(() => {test.addSnippet(1)}, Error)
    })

    it("Should throw an error when table have invalid value", function () {
        let test = resultBuilder.newTest("name-11")
        assert.throws(() => {test.addTableRow("a string")}, Error)
    })

    it("Should throw an error when the addtable method does not have the same number of columns", function () {
        let test = resultBuilder.newTest("name-12")
        assert.throws(() => {test.addTableRow("a array")}, Error)
    })
});