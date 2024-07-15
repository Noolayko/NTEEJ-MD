//Nteej code
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0F0T2p3bm9CT09MMGtPb0FxVzkybFZNL3RwbEVsSWk1YUpmdnZWTGZWYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaTBCc1BqSzVMNnduR0ZTNW04YnN3V29ISG04RHJDRjlIVkpDam95QTdoYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3UEEyWktIV0c1d083cFQ4OFMrMlozZFVnUFl5TjNGRVo5TWM2eC81SW1rPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFN3g2QXNJZUZ5S2ZJeE9DMCtwSnZldjhwVGlJd1Fid3hVZU9oRUE3QWxnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9QcnlsYi9BV283YmFzcFNJV0lwUjg4Vlo2MHFYVHFzcGxnWVdaOG45VVE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImozU1FlM04ydWlWUEZoQ1E0dUFlbWlSdzNnRDd5QUpSTUZ5Wm5nM3dzeXc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUp3SlBPeHMwOGhSMkVzNTA4akl6ZnZGNVVQVFRLWHBla1Rud0k3OVYyQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZE45TWtOWlNLMWpIamZNOEE2dEZyeFJlR1lzTmM3U3dTeUZySFl3QmdWVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZnZHJEMjJmNDdlMVVKaytvL1RPbUEwNy93N1BvVCsxZTVSamNPeEZYQnVRUHFkNjJPazFqSkx5WWN4WUMxS1ZEVGk4a1krM2xRVm9CUlRacHR6NWdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjgsImFkdlNlY3JldEtleSI6IjBjbldrOGRSaGtwU2JsOW8rMUUrRlBXbWRGakp5dHM2SDhVVnN2R0J1K009IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMiwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMyLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImtMMGc1V3FUVHoyenhEQ2NvWDZvYnciLCJwaG9uZUlkIjoiZjVkMWM5OGEtNjRkYi00ZTk2LTk5NWQtNjE2OGMxN2VmMDIzIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imp4OU0vNUthRndhVmZXRE01VTZlem82Zjd2cz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLbktianlnTEVxUFJSUHlrbjdYUlU4Q1JyS0U9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiN0Q5U0hONVAiLCJtZSI6eyJpZCI6IjI1Njc0MjM2Njk2OToxOUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJA4oKz4oK14oK1w5jJhOKCpuKCriAyIOKCscOY4rGkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQUG95T2tIRU1YcTFiUUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIvT2M0Z3ZIZzA0Y0lzVW1MVHE0azc3WlFEVFlKOUFneFA3ZlVJbVdCbEFNPSIsImFjY291bnRTaWduYXR1cmUiOiJTb2NaVmZaa1l2aHpwcmx6MGpXVmp3WHVlTkp6RDg2OFJFcjE1QWRwRmdMcFdmNnRuYldES1p1OVZJR3RNYXhYdnFQV05ycCtWNXZRczByN0V6UzRBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiQ2hEVVhIcnFjdnJBc3lGdmpuem1pdmdtUm84Mk5JdEhUcm9GU3ZxOGpyWTJreE5lMW1CcWsvTTlpOXducFZjaU9aZ3RMdG15amozS2ZSeDg3QVBRaUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTY3NDIzNjY5Njk6MTlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZnpuT0lMeDROT0hDTEZKaTA2dUpPKzJVQTAyQ2ZRSU1UKzMxQ0psZ1pRRCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMTA3MDkzMSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFFT1YifQ==";
global.MONGODB = process.env.MONGODB_URI || "";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "null";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "256742366969";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://i./storage/emulated/0/Download/_e7276dec-fc53-4536-aa2e-1f5cbd4833ca.jpeg";
global.userImages =
  process.env.USER_IMAGES ||
  "https://i.postimg.cc/FssKzLK7/20240622-140407.jpg,https://i.postimg.cc/FssKzLK7/20240622-140407.jpg,https://i.postimg.cc/FssKzLK7/20240622-140407.jpg";
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`🇺🇬-MD`",
  author: process.env.PACK_AUTHER || "🇺🇬-MD",
  packname: process.env.PACK_NAME || "Uganda-MD",
  botname: process.env.BOT_NAME || "Uganda-MD🇺🇬",
  ownername: process.env.OWNER_NAME || "Account ",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WhatsApp").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Ntee-j01/NTEEJ-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vae3GZF9Bb658QgSCl1I";
global.website = process.env.GURL || "https://chat.whatsapp.com/Er6RNNNVWV5LORN9Nr6hL7";
global.devs = "263714497545";
global.msg_style = process.env.STYLE || "4";
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "null";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null";
global.read_status_from = process.env.READ_STATUS_FROM || "null";
global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://mainv2-f66485a0f702.herokuapp.com/";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
