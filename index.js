const core = require('@actions/core');
const exec = require('@actions/exec');

async function run() {
  try {
    const commitMessage = core.getInput('commit_message');
    const format = core.getInput('format');
    const preset = core.getInput('preset');
    const groupSimilarCommits = core.getInput('group_similar_commits') == "true";
    const addAuthor = core.getInput('add_author') == "true";

    const authorEmail = core.getInput('author_email');
    const authorName = core.getInput('author_name');

    await exec.exec('npm i -g gitmoji-changelog@2.3.0 --silent');

    await exec.exec(`gitmoji-changelog --format "${format}" --preset "${preset}" ${groupSimilarCommits ? "--group-similar-commits true" : ""} ${addAuthor ? "--author true" : ""}`);
    await exec.exec(`git add .`);

    await exec.exec(`git config --global user.email "${authorEmail}"`);
    await exec.exec(`git config --global user.name "${authorName}"`);

    await exec.exec(`git commit -m "${commitMessage}"`);
    await exec.exec(`git push`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();