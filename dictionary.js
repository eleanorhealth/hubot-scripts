/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
// Description:
//   Manage a growing dictionary of terms and acronyms with Hubot.
//
// Commands:
//   hubot define word definition
//   hubot what is word
//   hubot lookup word
//
// Configuration:
//   none

module.exports = function(robot) {

  robot.respond(/define (\w*) (.*)/i, function(msg) {
    const word = msg.match[1].toLowerCase();
    const definition = msg.match[2].toLowerCase();
    if (!definition) {
      return msg.send('You need to provide a definition');
    } else {
      msg.send(word + ' is now defined as ' + definition);
      return robot.brain.set(word, definition);
    }
  });

  return robot.respond(/(?:what is|lookup) (\w*)/i, function(msg) {
    const word = msg.match[1].toLowerCase();
    const definition = robot.brain.get(word) || 'I do not have a definition for that, maybe you should add it?';
    return msg.send(definition);
  });
};
