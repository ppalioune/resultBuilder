class ResultBuilder {
    constructor() {
        this.tests = [];
    }
    
    newTest(uniqueName) {
        const testInstance = new Test(uniqueName);
        this.tests.push(testInstance);
        return testInstance;
    }
    
    toJson() {
        // ...
    }
    
    toArray() {
        // ...
    }
}