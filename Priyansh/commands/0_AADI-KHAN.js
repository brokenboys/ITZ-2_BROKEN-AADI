const fs = require("fs");
module.exports.config = {
        name: "warning",
    version: "1.1.1",
        hasPermssion: admin,
        credits: "AADI BABU", 
        description: "THIS BOT IS AADI SHARMA",
        commandCategory: "admin",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        let react = event.body.toLowerCase();
        if(react.includes("BABY") ||
     react.includes("Baby") || react.includes("baby") || react.includes("Babu") ||
react.includes("babu") ||
react.includes("BABU")) {
                var msg = {
                                body: `𝐇𝐦𝐦 𝐁𝐨𝐒𝐒 𝐀𝐚𝐝𝐢 𝐁𝐚𝐁𝐮 🙂💔𝐁𝐡𝐮𝐓 𝐘𝐚𝐚𝐃 𝐊𝐢𝐘𝐚 𝐌𝐚𝐢𝐧𝐄 𝐀𝐩𝐩𝐊𝐨 🥺 🥺","𝐀𝐩𝐩 𝐊𝐡𝐚 𝐁𝐮𝐬𝐘 𝐓𝐡𝐞 𝐁𝐨𝐒𝐒 🥺"," 𝐌𝐚𝐢𝐍𝐞 𝐀𝐩𝐩𝐊𝐨 𝐁𝐡𝐮𝐓 𝐌𝐢𝐒𝐒 𝐊𝐢𝐘𝐚 ☹️☹️","`,
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😆", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

  }