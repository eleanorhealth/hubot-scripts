/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
// Description:
//   Manage alerts with Hubot.
//
// Commands:
//   hubot alerts take
//   hubot alerts who
//
// Configuration:
//   none

module.exports = function(robot) {

  let usage;
  robot.respond(/alerts (.*)/i, function(msg) {
    const {
      room
    } = msg.message;
    const lobe = `alerts-${room}`;
    const alerts = robot.brain.get(lobe) || 'no one';
    let username = msg.message.user.name.toLowerCase();
    const method = msg.match[1];
    if (method === "take") {
      msg.send(alerts + ' was on alerts, now ' + username + ' is on alerts.');
      return robot.brain.set(lobe, username);
    } else if (method === "taketh") {
      msg.send("Forsooth! " + alerts + " was the alertee, but " + username + " taketh alerts henceforth!  May thy crits be not..");
      msg.send("/me bows");
      return robot.brain.set(lobe, username);
    } else if (method === "takizzle") {
      msg.send("Sup " + alerts + " dawg, looks like home slice " + username + "'s pickin' up yo 'lerts, woooord homes.");
      return robot.brain.set(lobe, username);
    } else if (method === "01110100011000010110101101100101") {
      msg.send(alerts + " 01110111011000010111001100100000011011110110111000100000011000010110110001100101011100100111010001110011001011000010000001101110011011110111011100100000 " + username + " 011010010111001100100000011011110110111000100000011000010110110001100101011100100111010001110011");
      return robot.brain.set(lobe, username);
    } else if (method === "1") {
      msg.send(alerts + " : 0 " + username + " : 1");
      return robot.brain.set(lobe, username);
    } else if (/whom?|0/.test(method)) {
      return msg.send(alerts + ' is on alerts.');
    } else if (/giveth/.test(method)) {
      username = method.replace('giveth ', '').replace(/\s+/g, '').toLowerCase();
      if (username === "giveth") { return usage(msg); }
      msg.send("Forsooth! " + alerts + " was the alertee, but " + username + " taketh alerts henceforth!  May thy crits be not..");
      msg.send("/me bows");
      return robot.brain.set(lobe, username);
    } else if (/give/.test(method)) {
      username = method.replace('give ', '').replace(/\s+/g, '').toLowerCase();
      if (username === "give") { return usage(msg); }
      msg.send(alerts + ' was on alerts, now ' + username + ' is on alerts.');
      return robot.brain.set(lobe, username);
    } else if (/givizzle/.test(method)) {
      username = method.replace('givizzle ', '').replace(/\s+/g, '').toLowerCase();
      if (username === "givizzle") { return usage(msg); }
      msg.send("Sup " + alerts + " dawg, looks like home slice " + username + "'s pickin' up yo 'lerts, woooord homes.");
      return robot.brain.set(lobe, username);
    } else {
      return usage(msg);
    }
  });

  return usage = msg => msg.reply("Usage: alerts < who | take | give [name] >");
};
