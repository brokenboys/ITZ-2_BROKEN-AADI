const emojiResponses = {
  "🙂💔": {
    "OWNER": [
      "𝐇𝐦𝐦 𝐁𝐨𝐒𝐒 𝐀𝐚𝐝𝐢 𝐁𝐚𝐁𝐮 🙂💔",
      "𝐁𝐡𝐮𝐓 𝐘𝐚𝐚𝐃 𝐊𝐢𝐘𝐚 𝐌𝐚𝐢𝐧𝐄 𝐀𝐩𝐩𝐊𝐨 🥺 🥺",
      "𝐀𝐩𝐩 𝐊𝐡𝐚 𝐁𝐮𝐬𝐘 𝐓𝐡𝐞 𝐁𝐨𝐒𝐒 🥺 𝐌𝐚𝐢𝐍𝐞 𝐀𝐩𝐩𝐊𝐨 𝐁𝐡𝐮𝐓 𝐌𝐢𝐒𝐒 𝐊𝐢𝐘𝐚 ☹️☹️"
    ]
  },
  "golu beta": {
     "OWNER": [
      "मम्मी आज पापा दिखायी नहीं दे कहा हे 😎",
      "मम्मी जी मैं आज स्कूल गया था 🥺 अब मुझे मारोगे तो नहीं",
     "मम्मी जी तुम मुझे छोड़ कर मत जाना 🥺"
    ]
  },
  "baccha": {
      "OWNER": [
      "मम्मी जी मैं आज स्कूल गया था 🥺 अब मुझे मारोगे तो नहीं",
      "मम्मी जी तुम मुझे छोड़ कर मत जाना 🥺",
      "मम्मी जी आप आते हो तो मुझे बहुत ख़ुशी मिलती है 🥺"
    ]
  }
};
 
module.exports.config = {
  name: "-BOT",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "AADI BABU",
  description: "MADE BY AADI BABU",
  commandCategory: "No command marks needed",
  cooldowns: 0,
};
 
module.exports.handleEvent = async function({ api, event }) {
  const { threadID, messageID, senderID, body } = event;
  const emojis = Object.keys(emojiResponses);
 
  // Convert the message body to lowercase
  const lowercaseBody = body.toLowerCase();
 
  for (const emoji of emojis) {
    if (lowercaseBody.includes(emoji)) {
      // Fetch user's gender correctly
      const ThreadInfo = await api.getThreadInfo(threadID);
      const user = ThreadInfo.userInfo.find(user => user.id === senderID);
      const gender = user ? (user.gender ===     "MALE" ? "MALE" : "FEMALE") : "MALE";
 
      // Check if the sender is the bot owner
      const botOwnerID = "100066401546757"; // Your bot owner UID
      let responseArray;
 
      if (senderID === botOwnerID) {
        responseArray = emojiResponses[emoji]["OWNER"];
      } else {
        responseArray = emojiResponses[emoji][gender] || emojiResponses[emoji]["MALE"];
      }
 
      // Randomly select a response from the appropriate array
      const randomResponse = responseArray[Math.floor(Math.random() * responseArray.length)];
 
      const msg = {
        body: randomResponse,
      };
      api.sendMessage(msg, threadID, messageID);
      break; // Exit the loop once a match is found
    }
  }
};
 
module.exports.run = function() {};