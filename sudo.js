/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
// Description:
//   Forces hubot to do what you want, even if he doesn't know how
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   hubot sudo <anything you want> - Force hubot to do what you want
//
// Author:
//   searls

module.exports = robot => robot.respond(/(?:sudo) ?(.*)/i, msg => msg.send(`Alright. I'll ${(msg.match != null ? msg.match[1] : undefined) || "do whatever it is you wanted."}`));
