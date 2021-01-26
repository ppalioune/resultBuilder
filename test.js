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

    // Setters
    setTitle(title) {
        if (typeof title !== "string") {
            throw new Error("Invalid value for title: must be a string.")
        }
        else {
            this.title = title
        }
        return this
    }
    
    setDescription(description) {
        if (typeof description !== "string") {
            throw new Error("Invalid value for description: must be a string.")
        }
        else {
            this.description = description
        }
        return this
    }
    
    setWeight(weight) {
        if (typeof weight !== "number" || weight < 0 || weight > 1) {
            throw new Error("Invalid value for weight: must be a number between 0 and 1.")
        } else {
            this.weight = weight
        }
        return this
    }

    setScore(score) {
        if (typeof score !== "number" || score < 0 || score > 1) {
            throw new Error("Invalid value for score. must be a number between 0 and 1.")
        }
        else {
            this.score = score
        }
        return this
    }

    // Getters
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

    // Methods
    addRecommandation(recommandation) {
        if (typeof recommandation !== 'string') {
            throw new Error ("Invalid value for recommandation: must be a string.")
        } else {
            this.recommandations.push(recommandation);
        }
        return this
    }
    addSnippet(snippet) {
        if (typeof snippet !== 'string' && typeof snippet !== 'ElementHandle') {
            throw new Error ("Invalid value for snippet: must be a string or an ElementHandle.")
        } else {
            this.snippets.push(snippet)
        }
        return this
    }

    addTableRow(table) {
        if (!Array.isArray(table)) {
            throw new Error ("The provided 'table' parameter must be an array.")
        } else {
            const firstRowColumnCount = typeof this.table[0] == 'undefined' ? null : this.table[0].length;
            if (firstRowColumnCount !== null && table.length != firstRowColumnCount) {
                throw new Error(
                    "Every row in the table should have the same number of columns. This row has %rowCount columns; %expectedCount are expected."
                        .replace('%rowCount', table.length)
                        .replace('%expectedCount', firstRowColumnCount)
                )
            }
            
            this.table.push(table)
        }
        return this
    }
}

module.exports = Test;