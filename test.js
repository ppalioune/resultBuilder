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
        if (typeof title !== "string") {
            throw new Error("invalid value for title. must be a string !!!")
        }
        else {
            this.title = title
        }
        return this
    }
    setDescription(description) {
        if (typeof description !== "string") {
            throw new Error("invalid value for description. must be a string !!!")
        }
        else {
            this.description = description
        }
        return this
    }
    setWeight(weight) {
        if (typeof weight !== "number" || weight < 0 || weight > 1) {
            throw new Error("invalid value for weight. must be a number between 0 and 1 !!!")
        } else {
            this.weight = weight
        }
        return this
    }

    setScore(score) {
        if (typeof score !== "number" || score < 0 || score > 1) {
            throw new Error("Invalid value for score. must be a number between 0 and 1.")
        }
        else{
            this.score = score
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
        if (typeof recommandation !== 'string') {
            throw new Error ("Invalid value for recommandation. Must be a string !")
        } else {
            this.recommandations.push(recommandation);
        }
        return this
    }
    addSnippet(snippet) {
        if (typeof snippet !== 'string' && typeof snippet !== 'ElementHandle') {
            throw new Error ("Invalid value for snippet. Must be a string !")
        } else {
            this.snippets.push(snippet)
        }
        return this
    }

    addTableRow(table){
        if (!Array.isArray(table)) {
            throw new Error ("Invalid value for table. Must be a type array !")
        } else {
            this.table.push(table)
        }
        return this
    }
}

module.exports = Test;