// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  https://img.shields.io/static/v1?label=License= ${data.license} &color=yellow
  ## Description 
    ${data.description}
  ## Table of Contents
    * [Installation](#Installation)
    * [Usage](#Usage)
    * [Contributing](#contributing)
    * [Test](#Tests)
    * [Questions?](#Questions?)
  ## Installation
    ${data.installation}
  ## Usage
    ${data.useage}
  ## Contributing
    ${data.contributing}
  ## Tests
    ${data.test}
  ## Questions?
    ${data.questions}


`;
}

module.exports = generateMarkdown;
