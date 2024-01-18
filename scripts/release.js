const shell = require('shelljs');
const fs = require('fs');
const path = require('path');

const VERSION = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json',)).toString())['version'];
const isPreRelease = !VERSION.includes('canary')
const npmTag = isPreRelease ? 'canary' : 'latest'
const packages = [
  'elements',
  'elements-angular',
  'elements-react',
  'elements-vue',
]

shell.exec(`nx release version ${VERSION}`)

const currentBranch = shell.exec('git branch --show-current').trim();
if (currentBranch !== 'master')
{
  shell.echo('Sorry, release is only on branch "master" allowed!');
  shell.exit(1)
}

if (!isPreRelease) {
  shell.exec(`git commit -m "chore: publish ${VERSION}" && git push`)
}

shell.exec(`git push origin ${VERSION}`)

packages.forEach((npmPackage) => {
  shell.exec(`npm publish -w packages/${npmPackage} --tag ${npmTag}`)
})
