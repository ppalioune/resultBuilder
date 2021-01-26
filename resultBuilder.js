const Test = require('./test')

class ResultBuilder {
    constructor() {
        this.tests = [];
    }

    newTest(uniqueName) {
        const testInstance = new Test(uniqueName)
        
        // Test there is a no duplicated uniqueName
        for (let index = 0; index < this.tests.length; index++) {
            if (this.tests[index].uniqueName == uniqueName) {
                throw new Error("This test unique name already exists!")
            }
        }
        
        this.tests.push(testInstance)
        
        return testInstance
    }


    // Returns internal test results
    getResultsTests() {
        return this.tests
    }
    
    // Formats the result in json format
    toJson() {
        return JSON.stringify(this.tests, null, 4);
    }

    // Converts result to key value format
    toArray() {
        return JSON.parse(JSON.stringify(this.tests));
    }
}

module.exports = ResultBuilder;
