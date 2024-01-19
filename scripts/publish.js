const shell = require('shelljs');
const semver = require('semver');

const isDryRun = process.argv.some((a) => a.includes('dryRun=true'));
const dryRunArg = isDryRun ? '--dry-run' : ''

const packagesToPublish = [
  'packages/elements',
  'packages/elements-angular',
  'packages/elements-react',
  'packages/elements-vue',
];

const currentBranch = shell.exec('git branch --show-current').trim();
if (currentBranch !== 'master' && !isDryRun) {
  shell.echo('Sorry, release is only on branch "master" allowed!');
  shell.exit(1);
}

// get version from root package.json
// need to remove double quotes ("") from version string
const VERSION = shell.exec('npm pkg get version').trim().replace(/"/g, '');
const isPreRelease = Boolean(semver.prerelease(VERSION));

shell.exec(`nx release version ${dryRunArg} ${VERSION}`); // keep internal packages up to date

if (!isPreRelease) {
  shell.exec(`git commit ${dryRunArg} -a -m "chore: publish ${VERSION}"`);
  shell.exec(`git push ${dryRunArg} --atomic --follow-tags`);
} else {
  shell.exec(`git tag v${VERSION}`);
  shell.exec(`git push ${dryRunArg} origin ${VERSION}`);
}

// deploy packages to npm
const npmTag = isPreRelease ? 'canary' : 'latest';
packagesToPublish.forEach((npmPackage) => {
  shell.exec(`npm publish -w ${npmPackage} --tag ${npmTag} ${dryRunArg}`);
});

