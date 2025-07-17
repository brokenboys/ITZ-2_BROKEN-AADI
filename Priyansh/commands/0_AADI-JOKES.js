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
	if(react.includes("MALKIN HUN TERI") ||
     react.includes("malkin Ko Teri") || react.includes("Malkin Hun Teri") || react.includes("Malkin se bakchodi") ||
react.includes("malkin se bakchodi") ||
react.includes("MALKIN SE BAKCHODI")) {
		var msg = {
				body: `sorry Malikin maaf Karna agali bar nahin karungai 🥺 🥺`,
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥺", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }