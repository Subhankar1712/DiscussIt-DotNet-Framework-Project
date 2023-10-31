const { Octokit } = require('@octokit/rest');

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN, // This token is automatically provided by GitHub Actions.
});

async function moveIssueToProjectBoard(owner, repo, issueNumber, columnName) {
  try {
    const response = await octokit.projects.createProjectCard({
      column_id: columnName, // Replace with your target column ID
      content_id: issueNumber,
      content_type: 'Issue',
    });

    console.log(`Issue #${issueNumber} moved to the project board column.`);
  } catch (error) {
    console.error(`Error moving issue #${issueNumber} to the project board: ${error.message}`);
  }
}

moveIssueToProjectBoard('your-username', 'your-repo', 1, 'your-column-id');
