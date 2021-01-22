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
| addRecommandation(string, string[]) |this allows you to add recommendations indicating to the user improvements to be made. only strings are accepted |
| addSnippet(string[])  | allows you to add code snippets from the results obtained.|
| addTable(array[])             | |
| setTitle(string)             | Allow tou to add a user-friendly title. Only string are accepted|
| setDescription(string)             | Allow you to add a user-friendly description of the test. Only string are accepted|
| setWeight(number)             | allows you to add the value of the test weight. Only  number between 0 and 1.0 |
| setScore(float)             | allows you to add the value of the test score. Only  number between 0 and 1.0 |
| getTitle()             | Allow you to get the title name|
| getDescription()             | Allow you to get the description|
| getWeight()             | Allows you to get the weight value|
| getScore()             | Allows you to get the score value|
| getSnippets()             | Allows you to get the list of snippets|


# Licence
MIT-licensed
