module.exports.config = {
	name: "restart",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "AADI SHRIVTASTAV",
	description: "Restart the Bot",
	commandCategory: "system",
	usages: "",
	cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
	const { threadID, messageID } = event;
	return api.sendMessage(`Wait Boss`, threadID, () => process.exit(1));
}