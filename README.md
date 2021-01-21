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
```javascript
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

# List of methods and functions

| Methods               | Descriptions     | 
| :--------------------- | :--------------- |
| newTest(string)      | allow to set up a new test   |
| getResultsTests()     | allow to get all the list of all the recorded tests  |
| toJson()              | convert the result to a JSON format  |
| isJson()              | allow you to test if an object is in json format   |
| toArray()             | convert all the results into an array |
| addRecommandation(string) |this allows you to add recommendations. only strings are accepted |
| addSnippet(string)  | this allows you to add snippets. only  strings are accepted|
| addTable(string[])             | |
| setTitle(string)             | |
| setDescription(string)             | |
| setWeight(number)             | |
| setScore(number)             | |
| getTitle()             | |
| getDescription()             | |
| getWeight()             | |
| getScore()             | |
| getSnippets()             | |


# Examples
