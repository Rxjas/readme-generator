// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ![](https://img.shields.io/badge/License-${data.license}-yellow)

  * https://github.com/${data.github}

  ## Description 
    ${data.description}

  ## Table of Contents
  * [Preview](#Preview)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributing](#Contributing)
  * [Test](#Tests)
  * [Questions?](#Questions?)
     
  ## Preview
  ![](INSERT FILE PATH TO IMAGE/GIF HERE)

  ###### Deployed Project
    ${data.deployed}

  ## Installation
    ${data.installation}

  ## Usage
    ${data.useage}

  ## License
    Licensed under the ${data.license}

  ## Contributing
    ${data.contributing}

  ## Tests
    ${data.test}

  ## Questions?
    Send to: ${data.questions}


`;
}

module.exports = generateMarkdown;
