/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
// Description:
//   Do the someone else's problem dance
//
// Commands:
// hubot sep
//
// Configuration:
//   none

module.exports = function(robot) {

  robot.hear(/(someone else's problem)/i, res => dance(res));

  return robot.respond(/(sep|someone else'?s problem)/i, res => dance(res));
};

var dance = function(res) {
  res.send("♫♫ Someone Else's Problem! ♫♫");
  res.send("(>'o')>");
  res.send("<('o'<)");
  res.send("^( '.' )^");
  return res.send("v( '.' )v");
};
