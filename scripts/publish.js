const shell = require('shelljs');
const semver = require('semver');

const packagesToPublish = [
  'elements',
  'elements-angular',
  'elements-react',
  'elements-vue',
]

const currentBranch = shell.exec('git branch --show-current').trim();
if (currentBranch !== 'master') {
  shell.echo('Sorry, release is only on branch "master" allowed!');
  shell.exit(1)
}

const VERSION = shell.exec('npm pkg get version').trim() // get version from root package.json
const isPreRelease = (semver.prerelease(VERSION) ?? []).length > 0

if (!isPreRelease) {
  shell.exec(`nx release version ${VERSION}`) // keep internal packages up to date
  shell.exec(`git commit -m "chore: publish ${VERSION}" && git push --follow-tags`)
} else {
  shell.exec(`git tag v${VERSION} && git push origin ${VERSION}`)
}

// deploy packages to npm
const npmTag = isPreRelease ? 'canary' : 'latest'
packagesToPublish.forEach((npmPackage) => {
  shell.exec(`npm publish -w packages/${npmPackage} --tag ${npmTag}`)
})
