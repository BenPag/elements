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

const VERSION = shell.exec('npm pkg get version').trim(); // get version from root package.json
const isPreRelease = (semver.prerelease(VERSION) ?? []).length > 0;

if (!isPreRelease) {
  shell.exec(`nx release version ${dryRunArg} ${VERSION}`); // keep internal packages up to date
  shell.exec(`git commit ${dryRunArg} -m "chore: publish ${VERSION}"`);
  shell.exec(`git push ${dryRunArg} --follow-tags`);
} else {
  shell.exec(`git tag v${VERSION}`);
  shell.exec(`git push ${dryRunArg} origin ${VERSION}`);
}

// deploy packages to npm
const npmTag = isPreRelease ? 'canary' : 'latest';
packagesToPublish.forEach((npmPackage) => {
  shell.exec(`npm publish -w ${npmPackage} --tag ${npmTag} ${dryRunArg}`);
});
