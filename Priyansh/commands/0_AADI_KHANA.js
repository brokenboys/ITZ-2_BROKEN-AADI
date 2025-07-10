const fs = require("fs");
module.exports.config = {
        name: "khana-khao",
    version: "1.1.1",
        hasPermssion: 0,
        credits: "AADI BABU",
        description: "THIS BOT IS MR AADI BABU",
        commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        let react = event.body.toLowerCase();
        if(react.includes("Dinner") ||
     react.includes("dinner") || react.includes("DINNER") || react.includes("KHANA") ||
react.includes("Khana") ||
react.includes("khana")) {
                var msg = {
                                body: `𝐎𝐰𝐧𝐞𝐫 ➻  𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮\n\n\n𝐋𝐨 𝐁𝐚𝐁𝐲`,attachment: fs.createReadStream(__dirname + `/noprefix/InShot_20250606_001624866.gif`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("👻", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

  }