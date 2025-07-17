const fs = require("fs");
module.exports.config = {
  name: "Teri-Boss",
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
  if(react.includes("malikin") ||
     react.includes("MALIKIN") || react.includes("Malikin") || react.includes("malikin se bakchodi") ||
react.includes("MALIKIK SE BAKCHODI") ||
react.includes("Malikin se bakchodi")) {
    var msg = {
        body: `𝐒𝐨𝐫𝐫𝐲 𝐌𝐚𝐥𝐢𝐊𝐢𝐧 𝐌𝐚𝐅𝐅 𝐊𝐚𝐫𝐍𝐚 𝐀𝐀𝐁 𝐍𝐚𝐇𝐢 𝐊𝐚𝐑𝐮𝐧𝐆𝐢 𝐆𝐚𝐥𝐓𝐢 𝐇𝐨 𝐆𝐚𝐲𝐢 🥺`,
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥺", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }