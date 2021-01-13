class Test {
    constructor(uniqueName, title = '', description = '', weight = null) {
        this.uniqueName = uniqueName;
        this.title = title;
        this.description = description;
        this.weight = weight;
        this.recommandations = [];
        this.snippets = [];
        this.table = [];
    }
    
    //setters
    setUniqueName(uniqueName){
        this.uniqueName = uniqueName
        return this
    }
    setTitle(title){
        this.title = title
        return this
    }
    setDescription(description){
        this.description = description
        return this
    }
    setWeight(weight){
        this.weight = weight
        return this
    }
    

    //getters
    getUniqueName() {
        return this.uniqueName
    }
    getTitle() {
        return this.title
    }
    getDescription() {
        return this.description
    }
    getWeight() {
        return this.weight
    }
    getRecommandations() {
        return this.recommandations
    }
    getSnippets() {
        return this.snippets
    }

    //methods
    addRecommandation(recommandation) {
        this.recommandations.push(recommandation);
    }
    addSnippets (snippet){
        this.snippets.push(snippet)
    }
}