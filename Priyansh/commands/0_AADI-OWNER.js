const request = require('request');
const fs = require('fs');
const path = require('path');

module.exports = {
    config: {
        name: "owner",
        version: "1.0.1",
        hasPermssion: 0,
        credits: "AADI SHRIVTASTAV",
        description: "no prefix",
        usePrefix: false,
        commandCategory: "No command marks needed",
        usages: "Yo Yo",
        cooldowns: 5,
    },

    // Array of Imgur URLs
    handleEvent: async function({ api, event, client, Users, __GLOBAL }) {
        const gifs = [
            "https://i.imgur.com/RFIWtNE.jpeg",
            "https://i.imgur.com/RFIWtNE.jpeg",
            "https://i.imgur.com/RFIWtNE.jpeg",
            "https://i.imgur.com/J10Z1KR.jpeg",
            "https://i.imgur.com/sg3eO0k.jpeg",
            "https://i.imgur.com/BNuCzHx.jpeg"
        ];

        const message = "🔰   𝐎𝐰𝐧𝐞𝐫 𝐈𝐧𝐟𝐨     🔰\n\n• ❅ ─── ✧ ❅ ✦ ❅ ✧ ─── ❅ •\n\n𝐎𝐰𝐧𝐞𝐫 ➻  𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮\n\n𝐀𝐠𝐞 : 22\n\n𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬𝐡𝐢𝐩 𝐖𝐢𝐭𝐡 : 𝐈𝐓𝐙 𝐁𝐑𝐎𝐊𝐄𝐍 𝐍𝐎𝐓 𝐢𝐧𝐓𝐞𝐫𝐞𝐬𝐭𝐞𝐃 𝐋𝐨𝐯𝐞\n\n𝐅𝐫𝐨𝐦 : 𝐮𝐩-𝐁𝐚𝐑𝐞𝐢𝐥𝐥𝐘\n\n𝐒𝐭𝐮𝐝𝐲 : I T I  = IN THE FIELD OF 𝐂𝐨𝐦𝐩𝐮𝐭𝐞𝐫 𝐏𝐫𝐨𝐠𝐫𝐚𝐦𝐦𝐢𝐧𝐠\n\n𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐧𝐤 : [ https://m.me/aadishrivtastav143 ]\n\n𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐂𝐨𝐧𝐭𝐚𝐜𝐭 : SECRET H BOSS\n\n🥀💚🥺__𝐢𝐧𝐭𝐞𝐳𝐚𝐚𝐫 𝐡𝐚𝐦𝐞𝐬𝐡𝐚 𝐤𝐚𝐫𝐮 𝐠𝐚 𝐥𝐞𝐤𝐢𝐧 𝐚𝐚𝐰𝐚𝐳 𝐧𝐚𝐡𝐢 𝐝𝐮𝐧𝐠𝐚 🥺😔 𝐥𝐢𝐤𝐡𝐮 𝐠𝐚 𝐞𝐤 𝐬𝐡𝐚𝐲𝐫𝐢 𝐭𝐞𝐫𝐞 𝐧𝐚𝐦𝐞 𝐩𝐚𝐫 𝐥𝐞𝐤𝐢𝐧 𝐭𝐞𝐫𝐚 𝐧𝐚𝐦𝐞 𝐧𝐚𝐡𝐢 𝐥𝐮𝐧𝐠𝐚 🥀";
        const { threadID, messageID } = event;
        const lowerCaseMessage = event.body.toLowerCase();

        if (lowerCaseMessage.startsWith("owner")) {  
            // Select a random image URL from the array
            const randomGif = gifs[Math.floor(Math.random() * gifs.length)];
            const downloadPath = path.join(__dirname, 'owner-Jpg-Images.jpg');

            // Download image from the random URL
            request(randomGif).pipe(fs.createWriteStream(downloadPath)).on('close', () => {
                const msg = {
                    body: message,
                    attachment: fs.createReadStream(downloadPath)
                };
                api.sendMessage(msg, threadID, messageID);
                api.setMessageReaction("📸", event.messageID, (err) => {}, true);
            });
        }
    },

    run: function({ api, event, client, __GLOBAL }) {
        // Empty run function for module requirements
    },
}
