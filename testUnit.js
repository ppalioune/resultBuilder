const ResultBuilder = require('./resultBuilder')
const assert = require('assert').strict;

describe("Building result", function () {

    let resultBuilder = new ResultBuilder();

    it('should start empty', function () {
        assert.equal(resultBuilder.getResultsTests().length, 0)
        //assert.ok(resultBuilder.toJson())
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
            .addTable( [
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
        resultBuilder.newTest("name-1");
        assert.throws(() => { resultBuilder.newTest("name-1"); }, "This name is already exist");


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
        test.setWeight(9)
        assert.throws(() => { test.setScore("a string"); }, Error)
    })

    it("Should throw an error when score have invalid value, ", function () {
        let test = resultBuilder.newTest("name-6")
        test.setScore("a string")
        assert.throws(() => { test.setScore("a string"); }, Error)
    })

    it("Should throw an error when recommandation have invalid value", function () {
        let test = resultBuilder.newTest("name-6").addRecommandation(1)
        assert.throws(() => {test.addRecommandation(1)}, Error)
    })

    it("Should throw an error when recommandation have invalid value", function () {
        let test = resultBuilder.newTest("name-6").addRecommandation(1)
        assert.throws(() => {test.addRecommandation(1)}, Error)
    })

    it("Should throw an error when snippet have invalid value", function () {
        let test = resultBuilder.newTest("name-6").addSnippet(1)
        assert.throws(() => {test.addSnippet(1)}, Error)
    })

    it("Should throw an error when table have invalid value", function () {
        let test = resultBuilder.newTest("name-6").addTable("a string")
        assert.throws(() => {test.addTable("a string")}, Error)
    })
});