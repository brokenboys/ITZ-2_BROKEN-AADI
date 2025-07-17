const fs = require("fs");
module.exports.config = {
  name: "Tera-Boss",
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
  if(react.includes("malik") ||
     react.includes("MALIK") || react.includes("Malik") || react.includes("malik se bakchodi") ||
react.includes("MALIK SE BAKCHODI") ||
react.includes("Malik se bakchodi")) {
    var msg = {
        body: `𝐒𝐨𝐫𝐫𝐲 𝐌𝐚𝐥𝐢𝐊 𝐌𝐚𝐅𝐅 𝐊𝐚𝐫𝐍𝐚 𝐀𝐀𝐁 𝐍𝐚𝐇𝐢 𝐊𝐚𝐑𝐮𝐧𝐆𝐚 𝐆𝐚𝐥𝐓i 𝐇𝐨 𝐆𝐚𝐲𝐢 🥺`,
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥺", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }