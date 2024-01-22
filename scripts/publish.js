const shell = require('shelljs');
const semver = require('semver');
const conventionalRecommendedBump = require('conventional-recommended-bump');

const isDryRun = process.argv.some((a) => a.includes('dryRun=true'));
const isPreRelease = process.argv.some((a) => a.includes('prerelease=true'));
const dryRunArg = isDryRun ? '--dry-run' : ''

const packagesToPublish = [
  'packages/elements',
  'packages/elements-angular',
  'packages/elements-react',
  'packages/elements-vue',
];

async function getNextVersion() {
  // get version from root package.json
  // need to remove double quotes ("") from version string
  const VERSION = shell.exec('npm pkg get version').trim().replace(/"/g, '');
  const { releaseType } = await conventionalRecommendedBump({ preset: 'angular' })
  return semver.inc(VERSION, isPreRelease ? 'prerelease' : releaseType);
}

(async () => {
  const currentBranch = shell.exec('git branch --show-current').trim();
  if (false && currentBranch !== 'master' && !isDryRun) {
    shell.echo('Sorry, release is only on branch "master" allowed!');
    shell.exit(1);
  }

  const version = await getNextVersion();

  if (isPreRelease) {
    shell.exec(`nx release version ${version} ${dryRunArg} --git-tag`);
  } else {
    shell.exec(`nx release version ${version} ${dryRunArg} --stage-changes`);
    shell.exec(`nx release changelog ${version} ${dryRunArg} --git-tag --git-commit --git-commit-message="chore: publish ${version}"`);
  }

  // check if user is logged in
  if (shell.exec('npm whoami').code !== 0) shell.exit(1);

  const npmTag = isPreRelease ? 'canary' : 'latest';
  for (const npmPackage of packagesToPublish) {
    const { code } = shell.exec(`npm publish -w ${npmPackage} --tag ${npmTag} ${dryRunArg}`);
    if (code !== 0) shell.exit(1)
  }
})();
