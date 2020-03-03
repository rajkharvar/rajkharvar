'use strict'

const boxen = require('boxen')
const chalk = require('chalk')
const fs = require('fs')
const path = require('path')

const config = {
  padding: 2,
  margin: 2,
  borderStyle: 'round'
}

const data = {
  name: chalk.white('               Raj Kharvar'),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('raj_kharvar'),
  npm: chalk.gray('https://npmjs.com/') + chalk.red('~rajkharvar'),
  github: chalk.gray('https://github.com/') + chalk.green('rajkharvar'),
  linkedin:
    chalk.gray('https://linkedin.com/in/') +
    chalk.blue('raj-kharvar-35716a160'),
  email: chalk.gray('rajkharvar1808@gmail.com'),
  npx: chalk.red('npx') + ' ' + chalk.white('rajkharvar'),
  labelTwitter: chalk.white.bold('    Twitter:'),
  labelnpm: chalk.white.bold('        npm:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  labelCard: chalk.white.bold('       Card:'),
  labelEmail: chalk.white.bold('      Email:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const npming = `${data.labelnpm}  ${data.npm}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const emailing = `${data.labelEmail}  ${data.email}`

const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output =
  heading + // data.name + data.handle
  newline +
  newline + // Add one whole blank line
  twittering +
  newline + // data.labelTwitter + data.twitter
  npming +
  newline + // data.labelnpm + data.npm
  githubing +
  newline + // data.labelGitHub + data.github
  linkedining +
  newline + // data.labelLinkedIn + data.linkedin
  emailing +
  newline + // data.labelEmail + data.email
  carding // data.labelCard + data.npx

fs.writeFileSync(
  path.join(__dirname, 'bin/output'),
  chalk.green(boxen(output, config))
)
const toScreen = fs.readFileSync(path.join(__dirname, 'bin/output'), 'utf8')
console.log(toScreen)

// const link = terminalLink("Github", "https://github.com")
// console.log(link)
