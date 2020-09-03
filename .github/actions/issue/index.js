const core = require("@actions/core")
const github = require("@actions/github")

try {
    const token = core.getInput("token")
    const title = core.getInput("title")
    const body = core.getInput("body")
    const assignees = core.getInput("assignees")

    const octokit = new github.GitHub(token) // octokit is github rest api

    const response = octokit.issues.create({
        // owner: github.context.repo.owner,
        // repo: github.context.repo.repo,
        ...github.context.repo, // equvilant to 2 above lines (line 13 and 14)
        title,
        body,
        // assignees: assignees ? assignees.split(','): undefined
        assignees: assignees ? assignees.split("\n") : undefined,
    })

    core.setOutput("issue", JSON.stringify(response.data))
} catch (error) {
    core.setFailed(error)
}
