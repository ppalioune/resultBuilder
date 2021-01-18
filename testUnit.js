const ResultBuilder = require('./resultBuilder')
const Test = require('./test')
const assert = require('assert').strict;

describe("integration test", function() {
    it("should be able to complete the attributes", function() {
        let  resultBuilder = new ResultBuilder();

        //complete the elements of the 1st test
        let  test1 = resultBuilder.newTest("unique nqme 1")
        test1.setDescription("description 1")
        test1.setTitle("title 1")
        test1.setWeight(7)
        test1.setScore(9)
        test1.addRecommandation("recommandation 1")
        test1.addSnippets(" snippets 1")
        //complete the elements of the 2nd test
        let test2 = resultBuilder.newTest("unique name 2")
        test2.setDescription("desc 2")
        test2.setTitle("title 2")
        test2.setWeight(1)
        test2.setScore(1)
        test2.addSnippets("snippet 2")
        test2.addRecommandation("recommandation 2")
        
        if (resultBuilder.getResultsTests().length == 0) {
            console.log("no data found !!!!!")
        } else {
            console.log(resultBuilder.getResultsTests().length)
            console.log("---------------------Display withn toArray method ---------------------")
            console.log(resultBuilder.toArray())
            console.log("---------------------Display withn toJson method ---------------------")
            console.log( resultBuilder.toJson());
        }

       
    });
});