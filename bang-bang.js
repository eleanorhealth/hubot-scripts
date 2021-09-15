// Description:
//   None
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   hubot !! - Repeat the last command directed at hubot
//

/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */


const {TextMessage} = require('hubot');

module.exports = function(robot) {
  robot.respond(/(.+)/i, msg => store(msg));

  return robot.respond(/!!$/i, function(msg) {
    if (exports.last_command != null) {
      msg.send(exports.last_command);
      return robot.receive(new TextMessage(
        msg.message.user,
        `${robot.name}: ${exports.last_command}`)
      );
    } else {
      return msg.send("I don't remember hearing anything.");
    }
  });
};

var store = function(msg) {
  const command = msg.match[1].trim();
  if (command !== '!!') { return exports.last_command = command; }
};
