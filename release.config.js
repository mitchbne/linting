module.exports = {
  branches: ["main"],
  extends: "semantic-release-monorepo",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/github",
    [
      "@semantic-release/changelog",
      {
        changelogFile: "../../CHANGELOG.md",
      },
    ],
    ["@semantic-release/npm"],
    [
      "@semantic-release/git",
      {
        assets: ["../../CHANGELOG.md"],
      },
    ],
  ],
}
