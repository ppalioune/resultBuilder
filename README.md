# resultBuilder for Koalati outils and librairies
It is a library that allows to present the results obtained by the koalati tools in a standard format, using severals methods.


# Setup / Installation 
- Before installing [NodeJs](https://nodejs.org/en/).
- You can do installation using the `npm install` command
```
npm i result-builder
```
# Usage
Then, you can include it in your project and use like this
```
const ResultBuilder = require('result-Builder')
//...
const resultsBuilder = new ResultBuilder(); 
const test = resultsBuilder.newTest(.....);
test.setDescription(.....);
    .setTitle(.....)
            .setWeight(....)
            .setScore(.....)
            .addRecommandation(.....)
            .addSnippet(....)
            .addTable(.....)
// ... 
return resultsBuilder.getResultsTests(); 
```

# Methods

# Examples
