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
    setTitle(title) {
        if (typeof title === 'string') {
            this.title = title
            return this
        }
    }
    setDescription(description) {
        if (typeof description === "string") {
            this.description = description
            return this
        }
    }
    setWeight(weight) {
        if (typeof weight === "number" && (weight >= 0 && weight <= 1)) {
            this.weight = weight
        } else {
            //this.weight = 0
            throw new Error("invalid value for weight. must be a number between 0 and 1 !!!")
        }
        return this
    }

    setScore(score) {
        if (typeof score === "number" && (score >= 0 && score <= 1)) {
            this.score = score
        } else {
            throw new Error("invalid value for score. must be a number between 0 and 1 !!!")
        }
        return this
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
        if (typeof recommandation === 'string') {
            this.recommandations.push(recommandation);
        } else {
            throw new Error ("Invalid value for recommandation. Must be a string !")
        }
        return this
    }
    addSnippet(snippet) {
        if (typeof snippet === 'string') {
            this.snippets.push(snippet)
        } else {
            throw new Error ("Invalid value for recommandation. Must be a string !")
        }
        return this
    }

    addTable(table){
        if (Array.isArray(table)) {
            this.table.push(table)
        } else {
            throw new Error ("Invalid value for table. Must be a type array !")
        }
        return this
    }
}

module.exports = Test;