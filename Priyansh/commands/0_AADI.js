const request = require('request');
const fs = require('fs');
const path = require('path');

module.exports = {
    config: {
        name: "boss",
        version: "1.0.1",
        hasPermssion: 0,
        credits: "SHANKAR SUMAN",
        description: "no prefix",
        usePrefix: false,
        commandCategory: "No command marks needed",
        usages: "Yo Yo",
        cooldowns: 5,
    },

    // Array of Imgur URLs
    handleEvent: async function({ api, event, client, Users, __GLOBAL }) {
        const gifs = [
            "https://i.imgur.com/lP22Qga.jpeg",
            "https://i.imgur.com/lP22Qga.jpeg",
            "https://i.imgur.com/lP22Qga.jpeg",
            "https://i.imgur.com/lP22Qga.jpeg",
            "https://i.imgur.com/lP22Qga.jpeg",
            "https://i.imgur.com/lP22Qga.jpeg"
        ];

        const message = "𝐎𝐰𝐧𝐞𝐫  ➻   𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮\n\n𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦 𝐋𝐢𝐧𝐤  «»\n    https://www.instagram.com/aadi_singh__143\n\n𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐊 𝐢𝐝    «»\n\n    https://m.me/aadishrivtastav143\n\n🙂 💔";
        const { threadID, messageID } = event;
        const lowerCaseMessage = event.body.toLowerCase();

        if (lowerCaseMessage.startsWith("aadi")) {  
            // Select a random image URL from the array
            const randomGif = gifs[Math.floor(Math.random() * gifs.length)];
            const downloadPath = path.join(__dirname, 'Boss-Jpg-Images.jpg');

            // Download image from the random URL
            request(randomGif).pipe(fs.createWriteStream(downloadPath)).on('close', () => {
                const msg = {
                    body: message,
                    attachment: fs.createReadStream(downloadPath)
                };
                api.sendMessage(msg, threadID, messageID);
                api.setMessageReaction("😘", event.messageID, (err) => {}, true);
            });
        }
    },

    run: function({ api, event, client, __GLOBAL }) {
        // Empty run function for module requirements
    },
}