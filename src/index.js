const moment = require("moment")
const log = require("/opt/log")

exports.hourHandler = async function (event, ctx) {
    await log.execute(event, ctx)

    const msg = `It's ${moment().format("hh:mm")} o'clock`
    console.log(msg)
    return {
        statusCode: 200,
        body: JSON.stringify(msg)
    }
}

exports.diffHandler = async function (event, ctx) {
    await log.execute(event, ctx)

    const msg = `The difference between ${moment().format("hh:mm")} and the time you specified is too boring to do right now :( \nsorry my dear user.`
    console.log(msg)
    return {
        statusCode: 200,
        body: JSON.stringify(msg)
    }
}