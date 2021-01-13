class ResultBuilder {
    constructor() {
        this.tests = [];
    }
    
    newTest(uniqueName, title, description, weight) {
        const testInstance = new Test(uniqueName, title, description, weight);
        testInstance.setUniqueName('my-unique-name')
                    .setTitle('my-title')
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