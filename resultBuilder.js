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
    //convert result to key value format
    toArray(){

        for (let t of tests.entries()) {
           return t;
        }
    }
}

