const ResultBuilder = require('./resultBuilder')
const Test = require('./test')
const assert = require('assert').strict;

describe("integration test", function () {

    let resultBuilder = new ResultBuilder();

    it("should be able to complete the attributes", function () {
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

        //complete the elements of the 2nd test
        let test2 = resultBuilder.newTest("unique name 2")
            .setDescription("desc 2")
            .setTitle("title 2")
            .setWeight(1)
            .setScore(1)
            .addSnippet("snippet 2")
            .addRecommandation("recommandation 2")

    });

    it('Check there is a test', function () {
        assert.notEqual(resultBuilder.getResultsTests().length, 0, " Data not found !")
        //assert.ok(resultBuilder.toJson())
    });
});