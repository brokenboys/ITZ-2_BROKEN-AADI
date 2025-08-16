module.exports.config = {
  name: "beta",
  version: "1.0.3",
  hasPermssion: 0,
  credits: "Raj",
  description: "No prefix reply only to Papa and Mom UID when they say 'beta'",
  commandCategory: "fun",
  usages: "beta",
  cooldowns: 3,
  usePrefix: false // 🔓 No prefix needed
};

module.exports.handleEvent = async function ({ api, event }) {
  const papaUID = "100066401546757"; // 🔁 Replace with your Papa's Facebook UID
  const momUID = "61577296359921";  // 🔁 Replace with your Mom's Facebook UID
  const sender = event.senderID;
  const message = event.body?.toLowerCase();

  if (!message || message !== "beta") return;

  if (sender === papaUID) {
    const papaReplies = [
      "Bolo Big boss Aadi BaBu ji 👨‍🦳, beta hazir hai 🫡",
      "Big Boss Aadi BaBu ji ❤️ aap a gaye Maine bahut pyar Kiya 🥺",
      "Big Boss Aadi BaBu ji 😄 kuch kaam bolo na!",
      "Big Boss Aadi BaBu ji, chai bana doon? ☕",
      "Big Boss Aadi BaBu Ji,  Aaj aap kaha gaye the 🥲"
    ];
    const reply = papaReplies[Math.floor(Math.random() * papaReplies.length)];
    return api.sendMessage(reply, event.threadID, event.messageID);
  }

  if (sender === momUID) {
    const momReplies = [
      "Maa ji 🥹 aapki yaad aa gayi!",
      "Mummy 😘 kuch khila do please!",
      "Maa ❤️ aapka beta bhukhha hai 🍽️",
      "Mummy, homework kar liya 🤓",
      "Maa, bina bataye kahan chali gayi thi 😭"
    ];
    const reply = momReplies[Math.floor(Math.random() * momReplies.length)];
    return api.sendMessage(reply, event.threadID, event.messageID);
  }

  // ❌ Ignore if message is not from papa/mom
  return;
};

module.exports.run = () => {};