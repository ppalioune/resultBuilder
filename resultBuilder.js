const Test = require('./test')
class ResultBuilder {
    constructor() {
        this.tests = [];
    }

    newTest(uniqueName) {
        const testInstance = new Test(uniqueName)
        //test there is a no duplicated uniqueName
        for (let index = 0; index < this.tests.length; index++) {
            if (this.tests[index].uniqueName == uniqueName) {
                throw new Error("this uniquename is already exist !")
            }
        }
        this.tests.push(testInstance)
        return testInstance
    }


    //this method returns test results
    getResultsTests() {
        return this.tests
    }
    //format the result in json format
    toJson() {
        return JSON.stringify(this.toArray(), null, 4);
    }
    //test the result is a json format
    isJson(input) {
        if (typeof input !== "string") {
            return false;
        }
        try {
            JSON.parse(input);
            return true;
        }
        catch (error) {
            return false;
        }
    }

    //convert result to key value format
    toArray() {
        return this.tests.map(element => JSON.parse(JSON.stringify(element)));
    }
}

module.exports = ResultBuilder;
