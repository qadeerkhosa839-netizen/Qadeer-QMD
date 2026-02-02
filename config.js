const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0ROMnQzN0luTjNDdG95Ry81akpnb1RKWC9PdEc4eDg1NTdXNnpxM0ZXWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaWZrSjdHRlBwQVNaWnpJTDRkRDRvOVNad0V0a1E5U3NyQTVjMHFoV3MwQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVTXM2ZDdpVTl0QXVqWndWKzIxMzdJVmhydHMyNFZoaWJFeXJrOXlSUDFjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXSUNkMjIvYkROeHEySHFwcVhjMTQ3emlKKzh0V1gybHpUYnZDajRwa2lRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktDZ1lwT1pWTG15czlvZVYrZjM2bGtqRytESTBMenMzK3RqUTVGYmVlMUU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVFV0VyN2hNOEVCck84WU5zVTNMbVlOOEJvWUZjdVhWWlo1YllldkxlRlE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ09oUjBTNHQ0VjlIOFVoMkRoQlQ4bEcrVUtveEg5dFhtOE5aaVhBYlkyWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieW9PVk4waHhhdkp2WXI1YlhteENOaFFNZ0dJMFJXNDgwN0xNdStlUkZtRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNtNmpjTnJlMFdiODM0czNOTTA5akhSUEQ1UXQyWFVhRlhzaEdQd3pWQVpITWE1UlJYYWJDdld6UEZLWTMySlViMHptbVZJV0NFTWtUUHFpTythYWh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODUsImFkdlNlY3JldEtleSI6IktLa2JWbWE4RlpDYmtMMFAxUFR2SC9EaTcvdHVUUTNianlhWW9rd296UXM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMzY5NDIzNTMxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDNTY5MTAxMzYyOEIyOThCRTlGNDUwMEI3NjhDOUVGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3Njk5NzcwMjZ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzM2OTQyMzUzMUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQ0ExMTExMUVEMUZFMTEyRDlERUUwQTM2ODIzNUIyNSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzY5OTc3MDI3fV0sIm5leHRQcmVLZXlJZCI6ODEzLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6ODEzLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IllVUFJBREVWIiwibWUiOnsiaWQiOiI5MjMzNjk0MjM1MzE6MjRAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxNTY3MDY3NjM5ODkwODg6MjRAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQTDA2S3NFRUs3cC9zc0dHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJjTnNOdFIzKzF0TzJpdjdjamREYzMrMGx1cGxrb2c4V0lybHhlbGVrbFcwPSIsImFjY291bnRTaWduYXR1cmUiOiJaOVptYlhZNWtUU2JjUW1oZVhha3VwSGRDVnRnMjFRZGlMeTByNWhzbFI2emZyTWt5QTRyUG9zOXBJcTNsbmluSDdZOHAyTEJvcHZkbmhGNW9DWUNDQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiK0FUWDVMR0p3cm40MmhMQ3NSTnE3bkhrNmp4YzdyTVZkUEhoMzJnTGdsVHFYVTVpNEhPMkQ4WHVDVnh3RnVRSU56a3Q3ek9DYmRka2NOMWhPVzJ5amc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMzNjk0MjM1MzE6MjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWERiRGJVZC90YlR0b3IrM0kzUTNOL3RKYnFaWktJUEZpSzVjWHBYcEpWdCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSUFnZ04ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzY5OTc3MDIxLCJsYXN0UHJvcEhhc2giOiJQV2s1QiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRkZEIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY Qadeer-QMD 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/snlnz4.jpeg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "Qadeer-QMD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "Qadeer-QMD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923369423531",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*Qadeer-QMD Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Qadeer-QMD Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/snlnz4.jpeg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923369423531",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
