const fs = require('fs');
const inquirer = require('inquirer');
const markDown = require('./utils/generateMarkdown')
console.log(markDown)

// array of questions for user
const questions = [{
    type: 'input',
    name: 'year',
    message: 'What is the current Year?'
},
{
    type: 'input',
    name: 'fullName',
    message: 'What is your fullname?'
},
{
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
    choices: [
        'MITLicense',
        'GNUGeneralPublicLicense',
        'Add My Own'
    ]
},
{
    type: 'rawlist',
    name: 'contributing',
    message: 'What are your standards for contributing?',
    choices: [
        'Contributor Covenant V2.0',
        'Add My Own'
    ]
},
{
    type: 'input',
    name: 'test',
    message: 'How would someone test your project?'
},
{
    type: 'input',
    name: 'questions',
    message: 'Email for users to send questions/feedback?'
}
];


// function to write README file
function writeToFile(filename, data) {
    fs.writeFile('README.md', filename(data), (err) => {
        if (err) throw err;
        console.log('README successfully created!')
    });
}

//Function to write Licensetext
function writeToText(filename, data) {
    fs.writeFile('License.txt', filename(data), (err) => {
        if (err) throw err;
        console.log('License text successfully created!')
    });
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then(function (data) {
            console.log(data);
            writeToFile(markDown.generateMarkdown, data)

            //logic for generating the license for the project
            if (data.license === 'MITLicense') {
                writeToText(markDown.generateMIT, data)
            } else if (data.license === 'GNUGeneralPublicLicense') {
                writeToText(markDown.generateGNU, data)
            }

        })
}


// function call to initialize program
init();
