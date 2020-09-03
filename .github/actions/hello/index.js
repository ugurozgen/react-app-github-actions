const core = require("@actions/core")
const github = require("@actions/github")

try {
    //   throw new Error("some error message")

    core.debug("debug message") // if debug enabled from secret ACTIONS_STEP_DEBUG=true
    core.warning("warning message") // yellow logs
    core.error("error message") // red logs

    const name = core.getInput("who-to-greet")

    core.setSecret(name) // it will be **** in logs
    console.log(`hello ${name}`)

    const time = new Date()
    core.setOutput("time", time.toTimeString())

    core.startGroup("Logging github object") // it will start expandable logs
    console.log(JSON.stringify(github, null, "\t"))
    core.endGroup

    core.exportVariable("HELLO", "hello") // we can use this env variable in another step in action, like actions/workflows/actions.yml:14
} catch (error) {
    core.setFailed("failed")
}
