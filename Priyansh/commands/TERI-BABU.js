const fs = require("fs");
module.exports.config = {
        name: "TERI BABU",
    version: "1.1.1",
        hasPermssion: 0,
        credits: "AADI BABU",
        description: "THIS BOT IS MR AADI SHARMA",
        commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        let react = event.body.toLowerCase();
        if(react.includes("🪻🩷🪿") ||
     react.includes("@™") || react.includes("M͓̐̂𝆭ɛ͎ S͎ͯʌ𝆭𝆭߬͜͡ɳ͡Jʌ𝆭𝆭߬͜͡ɳ͡ʌ𝆭𝆭߬͜͡") || react.includes("sanjana") ||
react.includes("Sanjana") ||
react.includes("SANJANA")) {
                var msg = {
                                body: `𝐎𝐰𝐧𝐞𝐫  ➻   𝐒𝐚𝐧𝐉𝐚𝐍𝐚\n\n𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐊 𝐢𝐝    «»\n\n    hhttps://www.facebook.com/share/1CKsN65JfW\n\n🙂 💔";`,attachment: fs.createReadStream(__dirname + `/noprefix/Messenger_creation_2795837314139430.jpeg`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥀", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

  }