class ResultBuilder {
    constructor() {
        this.tests = [];
    }
    
    newTest(uniqueName) {
        const testInstance = new Test(uniqueName);
        testInstance.setTitle('my-title')
                    .setDescription('my-description')
                    .setWeight(0.5)
        testInstance.addRecommandation('my-recommandation')
        testInstance.addSnippets('my-snippets')
        this.tests.push(testInstance);
        return testInstance;
    }

    //this method returns test results
    getResultsTests(){
        return this.tests
    }
    
    toJson() {
        return JSON.stringify(this.toArray());
    }
}

