const fs = require("fs");
module.exports.config = {
	name: "Malik",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "AADI BABU",///don't change my Credit Coz i Edit 
	description: "THIS BOT IS MR AADI BABU",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("MALIK HU TERA") ||
     react.includes("malik hu tera") || react.includes("Malik hun Tera") || react.includes("Malik se bakchodi") ||
react.includes("MALIK SE BAKCHODI") ||
react.includes("Malik se bakchodi")) {
		var msg = {
				body: `sorry Malik maaf Karna agali bar nahin karunga 🥺 🥺`,
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥺", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }