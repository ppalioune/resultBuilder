const Test = require('./test')
class ResultBuilder {
    constructor() {
        this.tests = [];
    }
    
    newTest(uniqueName) {
        const testInstance = new Test(uniqueName)
        this.tests.push(testInstance)
        return testInstance
    }

    //this method returns test results
    getResultsTests(){
        return this.tests
    }
    
    toJson() {
        return JSON.stringify(this.toArray());
    }

    /*convert result to key value format
    toArray(){
        return Object.entries(this.tests)
    }*/
    toArray() {
        return this.tests.map(element => JSON.parse(JSON.stringify(element)));
    }
}

module.exports = ResultBuilder;
