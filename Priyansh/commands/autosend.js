const fs = require("fs");
const axios = require("axios");

const CREDIT_HEX = "6458706861584a79595770776458513d";
const BANNER_HEX = "34706149347061493470575834706152347061523470615234706149347061493470575834706149347061493470614934706152347061523470615234706149347061493470575834706152347061523470615234706149347061493470575834706152347061523470615234706149347061493470614934706152347061523470615234706149347061493470614934706152347061523470615234706149347061493470614934706152347061523470615234706149347061493470614934706152";
const WARNING_HEX = "384a2b536f79425451314a4a55465167516b785051307446524344776e354b6a437643666c4b556751334a6c5958526c5a434b6f634b6a4d6a4d7a4d6a4d444e6a4d304e6d4d546d4d7a4d444e6a4d304e6d4d546d4d7a4d444e6a4d304e6d4d546d4d7a4d444e6a4d304e6d4d546d4d7a4d444e6a4d30";

function hexToBase64String(hex) {
  try {
    return Buffer.from(hex, "hex").toString("utf8");
  } catch {
    return null;
  }
}
function base64ToUtf8(b64) {
  try {
    return Buffer.from(b64, "base64").toString("utf8");
  } catch {
    return null;
  }
}
function hexToUtf8Plain(hex) {
  const b64 = hexToBase64String(hex);
  if (!b64) return null;
  return base64ToUtf8(b64);
}

(function verifyCredit() {
  try {
    const src = fs.readFileSync(__filename, "utf8");
    const m = src.match(/credits\s*:\s*(['"])([0-9a-fA-F]+)\1/);
    const literal = m ? m[2] : null;

    if (!literal || literal !== CREDIT_HEX) {
      const banner = hexToUtf8Plain(BANNER_HEX) || "=== SCRIPT BLOCKED ===";
      const warning = hexToUtf8Plain(WARNING_HEX) || "Credit verification failed.";
      console.log("\x1b[31m%s\x1b[0m", banner);
      console.log("\x1b[31m%s\x1b[0m", warning);
      console.log("\x1b[31m%s\x1b[0m", "🚫 Script blocked: credit verification failed.");
      process.exit(1);
    }
  } catch (err) {
    console.error("❌ Credit verification failed:", err?.message || err);
    process.exit(1);
  }
})();

module.exports.config = {
  name: "hourlytime",
  version: "4.1.0",
  hasPermssion: 0,
  credits: "6458706861584a79595770776458513d",
  description: "Sends hourly announcements with time, date, day, shayari, and a random image to groups only.",
  commandCategory: "Utilities",
  usages: "",
  cooldowns: 0,
};

function getDecodedCredit() {
  try {
    const base64 = Buffer.from(module.exports.config.credits, "hex").toString("utf8");
    return Buffer.from(base64, "base64").toString("utf8");
  } catch {
    return null;
  }
}

const shayariList = [
  "हकीकत कहो तो उन्हें ख्वाब लगता है 💕 शिकवा करो तो उन्हें मज़ाक लगता है 💕 कितनी शिद्दत से हम उन्हें याद करतें हैं 💕 एक वो हैं जिन्हें ये सबकुछ मजाक लगता है…!! 💝💝💝\n\n❁══❀ ༒𓆩𝙺𝚁𝙸𝚂𝙷𝙽𝙰✯𝙱𝙰𝙱𝚄𓆪༒ ❀══❁",
  "ऐ चांद- तारों 💕 जरा इनको एक लात मारो 💕 बिस्तर से इनको नीचे उतारो 💕 करो इनके साथ फाइट 💕 क्योंकि ये सो गए है बिना बोले गुड नाईट 💝💝💝\n\n‎❁══❀ ༒𓆩𝙺𝚁𝙸𝚂𝙷𝙽𝙰✯𝙱𝙰𝙱𝚄𓆪༒ ❀══❁",
  "पागल सा बच्चा हूँ 💕 मगर दिल का सच्चा हूँ 💕 थोड़ा सा आवारा हूँ💕 मगर तेरा ही तो दीवाना हूँ...!!💝💝💝\n\n‎❁══❀ ༒𓆩𝙺𝚁𝙸𝚂𝙷𝙽𝙰✯𝙱𝙰𝙱𝚄𓆪༒ ❀══❁",
  "ज़िंदगी में कामयाबी की मंज़िल के लिए 💕 ख्वाब ज़रूरी है 💕 और ख्वाब देखने के लिए नींद 💕 तो अपनी मंज़िल की पहली सीढ़ी चढ़ो और सो जाओ...!! गुड नाइट 💝💝💝\n\n‎❁══❀ ༒𓆩𝙺𝚁𝙸𝚂𝙷𝙽𝙰✯𝙱𝙰𝙱𝚄𓆪༒ ❀══❁",
  "रात की तन्हाई में अकेले थे हम 💕 दर्द की महफ़िलो में रो रहे थे हम 💕 आप हमारे भले ही कुछ नहीं लगते 💕 फिर भी आप को याद किये बिना सोते नहीं हम...!!💝💝💝\n\n‎❁══❀ ༒𓆩𝙺𝚁𝙸𝚂𝙷𝙽𝙰✯𝙱𝙰𝙱𝚄𓆪༒ ❀══❁",
  "रात ने चादर समेट ली है 💕 सूरज ने किरणे बिखेर दी है  💕 चलो उठो और धन्यवाद करो अपने भगवान को 💕 जिसने हमे ये प्यारी सी सुबह दी है...!!💝💝💝\n\n‎❁══❀ ༒𓆩𝙺𝚁𝙸𝚂𝙷𝙽𝙰✯𝙱𝙰𝙱𝚄𓆪༒ ❀══❁",
  "सुबह-सुबह आपकी यादों का साथ हो 💕 मीठी-मीठी परिंदों की आवाज हो 💕 आपके चेहरे पर हमेशा मुस्कुराहट हो 💕 और हमारी जिन्दगी में सिर्फ आपका साथ हो...!!💝💝💝\n\n‎❁══❀ ༒𓆩𝙺𝚁𝙸𝚂𝙷𝙽𝙰✯𝙱𝙰𝙱𝚄𓆪༒ ❀══❁",
  "प्यारी सी मीठी सी निंदिया के बाद 💕 रात के हसीन सपनों के बाद 💕 सुबह के कुछ नए सपनों के साथ 💕 आप हँसते रहें अपनों के साथ।💝💝💝\n\n‎❁══❀ ༒𓆩𝙺𝚁𝙸𝚂𝙷𝙽𝙰✯𝙱𝙰𝙱𝚄𓆪༒ ❀══❁",
  "न मंदिर 💕 न भगवान 💕 न पूजा 💕 न स्नान 💕 सुबह उठते ही पहला काम एक SMS आपके नाम...!!💝💝💝\n\n‎❁══❀ ༒𓆩𝙺𝚁𝙸𝚂𝙷𝙽𝙰✯𝙱𝙰𝙱𝚄𓆪༒ ❀══❁",
  "जितनी खूबसूरत ये गुलाबी सुबह है 💕 उतना ही खूबसूरत आपका हर पल हो 💕 जितनी भी खुशियाँ आज आपके पास हैं 💕 उससे भी जादा आने वाले कल में हो....!!💝💝💝\n\n‎❁══❀ ༒𓆩𝙺𝚁𝙸𝚂𝙷𝙽𝙰✯𝙱𝙰𝙱𝚄𓆪༒ ❀══❁",
  "अर्ज किया है.... 💕 चाय के कप से उठते धुए में तेरी सकल नजर आती है 💕 ऐसे खो जाते है तेरे खयालों में कि 💕अकसर मेरी चाय ठंडी हो जाती है…...!!!💝💝💝\n\n‎❁══❀ ༒𓆩𝙺𝚁𝙸𝚂𝙷𝙽𝙰✯𝙱𝙰𝙱𝚄𓆪༒ ❀══❁",
  "बसा ले नज़र में सूरत तुम्हारी 💕 दिन रात इसी पर हम मरते रहें 💕 खुदा करे जब तक चले ये साँसे हमारी 💕 हम बस तुमसे ही प्यार करते रहें ॥💝💝💝\n\n‎❁══❀ ༒𓆩𝙺𝚁𝙸𝚂𝙷𝙽𝙰✯𝙱𝙰𝙱𝚄𓆪༒ ❀══❁",
  "कोई चाँद सितारा हैं 💕 कोई फूल से भी प्यारा हैं 💕 जो हर पल याद आए 💕वो पल पल सिर्फ तुम्हारा हैं....!!💝💝💝\n\n‎❁══❀ ༒𓆩𝙺𝚁𝙸𝚂𝙷𝙽𝙰✯𝙱𝙰𝙱𝚄𓆪༒ ❀══❁",
  "आज एक दोपहर की ग़ज़ल तेरे नाम हो जाये 💕 मेरा सेवरा बस तेरे नाम हो जाये 💕 लेता रहूं तेरा ही नाम और सुबह से शाम हो जाये।💝💝💝\n\n‎❁══❀ ༒𓆩𝙺𝚁𝙸𝚂𝙷𝙽𝙰✯𝙱𝙰𝙱𝚄𓆪༒ ❀══❁",
];

const imgLinks = [
  "https://i.ibb.co/rKMnYwTG/Messenger-creation-9-F827-ED0-8-DD4-4-C34-9-FE4-AC4-E22-D42-EB4.jpg",
  "https://i.ibb.co/vx0twGKb/Messenger-creation-A1-BF47-B3-6-ECB-4-BC3-81-B0-9-A4-B3-D7-F0-C34.jpg",
  "https://i.ibb.co/20tnVBqz/Messenger-creation-AD12-A384-5-AE4-4821-ACEC-897826-C49-A8-E.jpg",
  "https://i.ibb.co/nqWRG6tc/Messenger-creation-D3-E54-A3-E-D48-E-477-B-848-B-D39-DC1-A02780.jpg",
  "https://i.ibb.co/PzGpsrm5/Messenger-creation-49-A838-B8-7777-4978-A447-B3-DBB28825-EF.jpg",
  "https://i.ibb.co/C3hHpdgL/Messenger-creation-17-BF3320-DFB8-4678-A7-A6-F61-EC482-E321.jpg",
  "https://i.ibb.co/TBCzNLvr/Messenger-creation-18-AA35-C2-5-E6-A-43-E0-9-AD7-4183884-D72-CE.jpg",
  "https://i.ibb.co/mVwhrg9s/Messenger-creation-9-EBFE441-9-B26-4-AC2-A76-C-0-AB9432-A85-D5.jpg",
  "https://i.ibb.co/ymjT8M5x/Messenger-creation-22766034-4076-453-B-A505-E511-B06-AC7-DA.jpg",
];

let lastSentHour = null;

async function sendHourlyMessages(api) {
  try {
    const now = new Date();
    const karachiTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));

    const currentHour = karachiTime.getHours();
    const currentMinute = karachiTime.getMinutes();

    if (currentMinute !== 0 || lastSentHour === currentHour) return;

    lastSentHour = currentHour;

    const hour12 = currentHour % 12 || 12;
    const ampm = currentHour >= 12 ? "PM" : "AM";
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const date = karachiTime.getDate();
    const month = months[karachiTime.getMonth()];
    const year = karachiTime.getFullYear();
    const day = days[karachiTime.getDay()];

    const randomShayari = shayariList[Math.floor(Math.random() * shayariList.length)];
    const randomImage = imgLinks[Math.floor(Math.random() * imgLinks.length)];

    const message =
      `❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n` +
      `✰ 𝗧𝗜𝗠𝗘 ➪ ${hour12}:00 ${ampm} ⏰\n` +
      `✰ 𝗗𝗔𝗧𝗘 ➪ ${date}✰${month}✰${year} 📆\n` +
      `✰ 𝗗𝗔𝗬 ➪ ${day} ⏳\n\n` +
      `${randomShayari}\n\n` +
      `❁ ━━━━━ ❃ 𝐊𝐑𝐈𝐒𝐇𝐍𝐀 ❃ ━━━━━ ❁`;

    const threadList = await api.getThreadList(100, null, ["INBOX"]);
    const groupThreads = threadList.filter(thread => thread.isSubscribed && thread.isGroup);

    for (const thread of groupThreads) {
      try {
        const imageStream = await axios.get(randomImage, { responseType: "stream" }).then(res => res.data);
        await api.sendMessage({ body: message, attachment: imageStream }, thread.threadID);
      } catch (err) {
        console.error(`Failed to send message to thread ${thread.threadID}:`, err.message);
      }
    }

    console.log(`Hourly message sent to ${groupThreads.length} groups.`);
  } catch (error) {
    console.error("Error in hourly announcement:", error.message);
  }
}

module.exports.handleEvent = async function({ api }) {
  if (!global.hourlyInterval) {
    global.hourlyInterval = setInterval(() => {
      sendHourlyMessages(api);
    }, 60000);
  }
};

module.exports.run = async function({ api, event }) {
  api.sendMessage("Hourly announcements activated! Bot will send time updates every hour in groups only.", event.threadID);
};