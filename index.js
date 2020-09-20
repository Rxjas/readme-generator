const fs = require('fs');
const inquirer = require('inquirer');
const markDown = require('./utils/generateMarkdown')
console.log(markDown)
// array of questions for user
const questions = [{
    type: 'input',
    name: 'github',
    message: 'What is your Github username?'
},
{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?' 
},
{
    type: 'input',
    name: 'description',
    message: 'How would you describe it?'
},
{
    type: 'input',
    name: 'deployed',
    message: 'What is the link the deployed project?' 
},
{
    type: 'input',
    name: 'installation',
    message: 'How do you install the project?'
},
{
    type: 'input',
    name: 'usage',
    message: 'How does someone use it?'
},
{
    // This needs a different input
    type: 'rawlist',
    name: 'license',
    message: 'What license would you like your project to have?',
    choices:[
        'MITLicense',
        'GNUGeneralPublicLicense',
        'Add My Own'
    ]
},
{
    type: 'rawlist',
    name: 'contributing',
    message: 'What are your standards for contributing?',
    choices:[
        'Contributor Covenant',
        'Add My Own'
    ]
},
{
    type: 'input',
    name: 'test',
    message: 'how would someone test your project?'
},
{
    type: 'input',
    name: 'questions',
    message: 'How could someone reach you with questions about project?'
}
];


// function to write README file
function writeToFile(filename, data) {
    fs.writeFile('README.md', filename(data), (err) => {
        if (err) throw err;
        console.log('success!')
    });
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(function(data){
        console.log(data)
        // markDown(data);
        writeToFile(markDown, data)
    })
}


// function call to initialize program
init();
