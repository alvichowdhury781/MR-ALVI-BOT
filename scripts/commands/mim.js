const axios = require("axios");

module.exports.config = {
    name: "mim",
    version: "1.0.0",
    permission: 0,
    credits: "Rahad",
    description: "Talk to Ana",
    prefix: true, 
    category: "sim simi fun", 
    usages: "mini",
    cooldowns: 5,
    dependencies: {}
};

module.exports.handleEvent = async function ({ api, event }) {
    if (!event.body || !(event.body.indexOf("মীম") === 0 ||
event.body.indexOf("মিম") === 0 ||
event.body.indexOf("MIM") === 0 || 
event.body.indexOf("Mim") === 0 ||event.body.indexOf("mim") === 0)) return;
    const args = event.body.split(/\s+/);
    args.shift();

    let { messageID, threadID, senderID, body } = event;
    let tid = threadID,
        mid = messageID;
    const content = encodeURIComponent(args.join(" "));
    if (!args[0]) return api.sendMessage("𝐔𝐅𝐅 𝐗𝐀𝐍'𝐒 𝐁𝐎𝐋𝐎__😽💋🩷", tid, mid);
    try {
        console.log("Request:", `http://ip.minehost.fun:25444/sim?type=ask&ask=${query}`); // Log request URL
        const res = await axios.get(`http://ip.minehost.fun:25444/sim?type=ask&ask=${query}`);
        console.log("Response:", res.data); // Log response data
        const respond = res.data.success;
        if (res.data.error) {
            api.sendMessage(`Error: ${res.data.error}`, tid, (error, info) => {
                if (error) {
                    console.error(error);
                }
            }, mid);
        } else {
            api.sendMessage(respond, tid, (error, info) => {
                if (error) {
                    console.error(error);
                }
            }, mid);
        }
    } catch (error) {
        console.error(error);
        api.sendMessage("🤖 𝙰𝚗 𝚎𝚛𝚛𝚘𝚛 𝚘𝚌𝚌𝚞𝚛𝚎𝚍 𝚠𝚑𝚒𝚕𝚎 𝚐𝚎𝚝𝚝𝚒𝚗𝚐 𝙳𝚊𝚝𝚊𝚋𝚊𝚜𝚎, 𝚜𝚘𝚛𝚛𝚢 𝚋𝚊𝚋𝚎 🥺", tid, mid);
    }
};

module.exports.run = async function ({ api, event }) {};
