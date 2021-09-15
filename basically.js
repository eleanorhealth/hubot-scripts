/*
 * decaffeinate suggestions:
 * DS101: Remove unnecessary use of Array.from
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
// Description:
//   Counts how often the word "basically" is used.
//
// Commands:
//   hubot <any text> basically? - Respond with the "basically" leaderboard
//

module.exports = function(robot) {

  robot.hear(/^(?!.*\bmax\b).*basically/i, function(res) {
    const user = res.message.user.name.toLowerCase();

    const basicallyScores = robot.brain.get('basicallyScores') || {};
    const userScore = (basicallyScores[user] * 1) || 0;
    basicallyScores[user] = userScore + 1;
    
    return robot.brain.set('basicallyScores', basicallyScores);
  });
  
  return robot.respond(/.*basically\?$/i, function(res) {
    const basicallyScores = robot.brain.get('basicallyScores') || {};
    
    if (Object.keys(basicallyScores).length === 0) { 
      return;
    }

    const leaderboard = (Object.keys(basicallyScores).sort((a, b) => basicallyScores[b] - basicallyScores[a])).slice(0, 3);
    
    res.send("We're all basically winners in life. But the winners, basically, are: ");
    return Array.from(leaderboard).map((k) =>
      res.send(k + ': ' + basicallyScores[k]));
}); 
};
      
