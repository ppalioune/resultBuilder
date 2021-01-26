# Result Builder library for Koalati tools
A library that allows tool developers to easily build and format result sets in Koalati tools, using the validation format defined in the [contributor documentation](https://docs.koalati.com/).


# Setup / Installation 
- Make sure [NodeJs](https://nodejs.org/en/) is installed
- Install the package using the `npm install` command
```
npm i result-builder
```

# Usage
Then, you can include it in your project and use like this
```javascript
const ResultBuilder = require('result-builder')
//...
const resultsBuilder = new ResultBuilder(); 
const test = resultsBuilder.newTest('test-unique-name');
test.setTitle("my-title")
    .setDescription("my-description")
    .setWeight(0.5)
    .setScore(0.5)
    .addRecommandation("my-recommandation")
    .addSnippet(["my-snippet"])
    .addTableRow([
        [
            "Table heading 1",
            "Table heading 2"
        ],
        [
            "Table value 1",
            "Table value 2"
        ]
    ])
// ... 
return resultsBuilder.getResultsTests(); 
```

# List of methods and functions
## `ResultBuilder` class
| Methods           | Descriptions                                               |
| :---------------- | :--------------------------------------------------------- |
| newTest(string)   | Allow to set up a new test by providing a test unique name |
| getResultsTests() | Allow to get all the list of all the recorded tests        |
| toJson()          | Convert the result to a JSON format                        |
| toArray()         | Convert all the results into an array                      |

## `Test` class
| Methods                             | Descriptions |
| :---------------------------------  | :------------------------------- |
| addRecommandation(string) | Allows you to add recommendations indicating to the user improvements to be made. Only strings are accepted. |
| addSnippet(string|[ElementHandle](https://pptr.dev/#?product=Puppeteer&version=main&show=api-class-elementhandle) | Allows you to add code snippets from the results obtained.|
| addTableRow(array)                  | Allows you to add a row to a data table. The first row will act as the table's header. Every row must have the same number of columns. |
| setTitle(string)                    | Allow tou to add a user-friendly title. Only strings are accepted. |
| setDescription(string)              | Allow you to add a user-friendly description of the test. Only strings are accepted. |
| setWeight(number)                   | allows you to add the value of the test weight. Only numbers between 0.0 and 1.0. |
| setScore(float)                     | allows you to add the value of the test score. Only numbers between 0.0 and 1.0. |
| getTitle()                          | Allow you to get the title of the test. |
| getDescription()                    | Allow you to get the description of the test. |
| getWeight()                         | Allows you to get the weight of the test. |
| getScore()                          | Allows you to get the score of the test. |
| getSnippets()                       | Allows you to get the list of snippets. |


# License
MIT-licensed
