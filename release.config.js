module.exports = {
  branches: "master",
  repositoryUrl: "https://github.com/ugurozgen/react-app-github-actions",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/github",
  ],
}