// Description:
//   post the url to the github project for the bot
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   hubot contribute - get the link to the bot repo
//
// Notes:
//   None
//
// Author:
//   Brad Clark <bdashrad@gmail.com>

/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */

module.exports = robot => robot.respond(/\bcontrib(ute)?\b/, res => res.send("https://github.com/eleanorhealth/hubot-scripts"));
