// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const { writeFile } = require('fs/promises');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your application',
    },
    {
        type: 'input',
        name: 'gitUsername',
        message: 'Enter your GitHub Username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address',
    },
    {
        type: 'input',
        name: 'what',
        message: 'Describe your application, and what problem it will solve',
    },
    {
        type: 'input',
        name: 'why',
        message: 'What were your motivations for creating this application',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How does this application need to be installed',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this application',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Who contributed to this application',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license will you use',
        choices: ['agpl', 'apache', 'mit', 'none']
    }
]
//.then((response) => {
    //const data = response
//}
//);

//console.log(data);
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          return console.log(err);
        }
      
        console.log("Success! Your README.md file has been generated")
    });
}
//const utils = './utils/'
//const writeFileAsync = utils.promisify(writeToFile);


async function init() {
    try {
        const data = await inquirer.prompt(questions);
        console.log("Your responses: ", data);
        //data.json();
        await writeFile('ExampleREADME.md', data);
        const readmeContent = generateMarkdown(data);
    fs.writeFile('ExampleREADME.md', readmeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md')
    );
  } catch (error) {
        console.log(error);
    };
};

init()
inquirer.prompt(questions).then((data) => {
    const readmeContent = generateMarkdown(data);
  
    fs.writeFile('ExampleREADME.md', readmeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md')
    );
  });
//module.exports = generateMarkdown;