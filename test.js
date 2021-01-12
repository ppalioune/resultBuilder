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
    set setTitle(title){
        this.title = title
    }
    set setDescription(description){
        this.description = description
    }
    set setWeight(weight){
        this.weight = weight;
    }
    

    //getters
    get getTitle() {
        return this.title
    }
    get getDescription() {
        return this.description
    }
    get getWeight() {
        return this.weight
    }
    get getRecommandations() {
        return this.recommandations
    }
    get getSnippets() {
        return this.snippets
    }

    //methods
    addRecommandation(recommandation) {
        this.recommandations.push(recommandation);
    }
    addSnippets (snippets){
        this.snippets.push(snippets)
    }
}