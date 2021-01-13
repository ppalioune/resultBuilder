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
    
    toJson() {
        return JSON.stringify(this.toArray());
    }
}

const x = new ResultBuilder()
console.log(x);