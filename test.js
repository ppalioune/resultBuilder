class Test {
    constructor(uniqueName, title = '', description = '', weight = null, score = null) {
        this.uniqueName = uniqueName;
        this.title = title;
        this.description = description;
        this.weight = weight;
        this.score = score;
        this.recommandations = [];
        this.snippets = [];
        this.table = [];
    }
    
    //setters
    setTitle(title){
        if (typeof title === 'string') {
            this.title = title
            return this
        }
    }
    setDescription(description){
        if (typeof description === "string") {
            this.description = description
            return this    
        }
    }
        
    setWeight(weight){
        try {
            if (typeof weight === "number" && (weight >= 0 && weight <= 1)) {
                this.weight = weight
                return this   
            } else {
                //this.weight = 0
                throw new Error("invalid value for weight. must be a number between 0 and 1 !!!")  
            }
        } catch (error) {
            console.log(error)
        }
        
    }
    setScore(score){        
        try {
            if (typeof score === "number" && (score >= 0 && score <= 1)) {
                this.score = score
                return this  
            } else {
                throw new Error("invalid value for score. must be a number between 0 and 1 !!!")    
            }
        } catch (error) {
            console.log(error)
        }
    }

    //getters
    getTitle() {
        return this.title
    }
    getDescription() {
        return this.description
    }
    getWeight() {
        return this.weight
    }
    getScore() {
        return this.score
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

module.exports = Test;