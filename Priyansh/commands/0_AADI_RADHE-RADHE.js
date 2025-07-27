const fs = require("fs");
module.exports.config = {
  name: "radhe-radhe",
    version: "1.1.1",
  hasPermssion: 0,
  credits: "AADI BABU",///don't change my Credit Coz i Edit 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("Radhe") ||
     react.includes("radhe") || react.includes("RADHE") || react.includes("Radhe Radhe") ||
react.includes("radhe radhe") ||
react.includes("RADHE RADHE")) {
    var msg = {
        body: `= 𝐎𝐰𝐧𝐞𝐫 ➻  ────  𝐀𝐚̃𝐃𝐢   𝐁𝐚𝐁𝐮\n\n𝐌𝐀𝐈𝐍 𝐓𝐎 𝐑𝐀𝐃𝐇𝐀 𝐑𝐀𝐍𝐈 𝐊𝐀 𝐃𝐄𝐄𝐖𝐀𝐍𝐀 𝐇𝐔 𝐏𝐘𝐀𝐑 𝐒𝐄 𝐁𝐎𝐋𝐎 𝐑𝐀𝐃𝐇𝐄 𝐑𝐀𝐃𝐇𝐄 😍 ❤️`,
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🩷", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }