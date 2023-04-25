const data = require('../index.js')
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `![badge](https://img.shields.io/badge/license-${license}-blue)`;
  } else {
    return ' ';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return `[${license}](https://choosealicense.com/licenses/${license})`;
  } else {
    return ' ';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `
    ## [License](#table-of-contents)
    License(s):
    ${renderLicenseLink(license)}
    `;
  } else {
    return ' ';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Table-of-Contents
  *[Description](#description)
  *[Installation](#installation)
  *[Usage](#usage)
  *[Credits](#credits)
  *${renderLicenseSection(data.license)}
  *[About Me](#aboutMe)

  ##[Description](#table-of-contens)
  ${data.what}
  ${data.why}

  ##[Installation](#table-of-contents)
  ${data.installation}

  ##[Usage](#table-of-contents)
  ${data.usage}

  ##[Credits](#table-of-contents)
  ${data.credits}

  ##[License(s)](#table-of-contents)
  ${renderLicenseSection(data.license)}

  ##[About Me](#table-of-contents)
  [GitHub](https://github.com/${data.gitUsername})
  [Email] ${data.email}
`;
}

module.exports = generateMarkdown;
