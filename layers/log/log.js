const moment = require("moment")

exports.execute = async function (event = {
    body: "unknown",
    rawPath: "unknown"
}, ctx = {
    functionName: "unknown",
}) {
    console.log({
        "event_origin": ctx.functionName,
        "body": event.body,
        "path": event.rawPath,
        "timestamp": moment().format(),
        "day": moment().format("DD/MM"),
    })
}
this.execute()