const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/TqtqWTB/Ephoto360-com-166de104a10faf.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "212724793575";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/82336d4b04ac81b77e18e.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_53_10_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTY4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTE2LFxuICAgICAgICA4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDYxLFxuICAgICAgICA2NSxcbiAgICAgICAgNTksXG4gICAgICAgIDgzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTg1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTU5LFxuICAgICAgICA0OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjExLFxuICAgICAgICAzMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDkzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDk2LFxuICAgICAgICA0MixcbiAgICAgICAgMjIsXG4gICAgICAgIDE4LFxuICAgICAgICAxLFxuICAgICAgICAxNzksXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTMxLFxuICAgICAgICA3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDQwLFxuICAgICAgICAxNixcbiAgICAgICAgMTY2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMixcbiAgICAgICAgMTI5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTU2LFxuICAgICAgICA4NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTc4LFxuICAgICAgICAwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDkxLFxuICAgICAgICAyMTksXG4gICAgICAgIDYwLFxuICAgICAgICAyMjksXG4gICAgICAgIDksXG4gICAgICAgIDE5MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDgyLFxuICAgICAgICA2OSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDU2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTc5LFxuICAgICAgICA5NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDgyLFxuICAgICAgICAxMixcbiAgICAgICAgMTI5LFxuICAgICAgICAxODksXG4gICAgICAgIDgwLFxuICAgICAgICA1OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTYzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU4LFxuICAgICAgICA2MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDY2LFxuICAgICAgICA1NixcbiAgICAgICAgMTksXG4gICAgICAgIDc2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDk0LFxuICAgICAgICA1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDgwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDg2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTA1LFxuICAgICAgICAwLFxuICAgICAgICA5NixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0LFxuICAgICAgICA5MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDksXG4gICAgICAgIDIxMixcbiAgICAgICAgOTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjksXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3LFxuICAgICAgICAyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjksXG4gICAgICAgIDEwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTA1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDUxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDM4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDUsXG4gICAgICAgIDY1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDExNixcbiAgICAgICAgMzcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTk4LFxuICAgICAgICA0MixcbiAgICAgICAgNDUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEyN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNixcbiAgICAgICAgMjgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDQsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDcyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1LFxuICAgICAgICA1NixcbiAgICAgICAgOTksXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMCxcbiAgICAgICAgNDksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTksXG4gICAgICAgIDIzMCxcbiAgICAgICAgODEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDExNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxODksXG4gICAgICAgIDE5NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTkxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI2LFxuICAgICAgICAxODYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQwLFxuICAgICAgICA4LFxuICAgICAgICAyOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgODYsXG4gICAgICAgIDExMixcbiAgICAgICAgNzMsXG4gICAgICAgIDYzLFxuICAgICAgICA5OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjMxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIk8vQk1TVVdNMm1uYXJjVjRYMTVyMk9Jd1BvbitVMEdaQWd1c1cxWlFSRnM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjEyNzI0NzkzNTc1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBQTAwN0YxMTlGQzZEMzNDMkNDMzJGOENDQThGRDdDMlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3Mjc4MTIzOTZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMTI3MjQ3OTM1NzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjkwQUY5NDZGRDZFQUZDQjM1OUEyN0FGMEZFNTNCMTc1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyNzgxMjM5NlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIxMjcyNDc5MzU3NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMTExMDA0N0RGOTZCOUZDNEVBRUFEMzU3MEFGOEM2NzhcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI3ODEyMzk5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjEyNzI0NzkzNTc1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyQkZEQ0NDODM2Q0RGODlBOTBCNDgyM0Y1NjMzMkM5RVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3Mjc4MTIzOTlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiamFhZjd3VWVSeWVyZWIyRGNwQVZxd1wiLFxuICBcInBob25lSWRcIjogXCIxYzVkMWIxNC1kMDNiLTRhZTItODg2Mi0yZGJhNWEyOTdiMTBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTYsXG4gICAgICA4LFxuICAgICAgMjA0LFxuICAgICAgMTczLFxuICAgICAgMTkyLFxuICAgICAgNjIsXG4gICAgICAyMDMsXG4gICAgICA4LFxuICAgICAgMCxcbiAgICAgIDE5MSxcbiAgICAgIDI1MSxcbiAgICAgIDE1LFxuICAgICAgNzEsXG4gICAgICAxODgsXG4gICAgICAxODIsXG4gICAgICAyNyxcbiAgICAgIDYwLFxuICAgICAgMTUwLFxuICAgICAgOTYsXG4gICAgICA5MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjUsXG4gICAgICAxNjIsXG4gICAgICAxOTAsXG4gICAgICAxMzMsXG4gICAgICAxMDgsXG4gICAgICAxMDksXG4gICAgICAyMTYsXG4gICAgICAyNTIsXG4gICAgICAyMTEsXG4gICAgICA2NyxcbiAgICAgIDE5MyxcbiAgICAgIDEyNyxcbiAgICAgIDE1NSxcbiAgICAgIDE4MyxcbiAgICAgIDkwLFxuICAgICAgMTgwLFxuICAgICAgMTE2LFxuICAgICAgMjAzLFxuICAgICAgMjIzLFxuICAgICAgNDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSk5BQUxZUDNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIxMjcyNDc5MzU3NToyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNzc5NDkzMTE5MjIxOTc6MkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJTVFJBTkdFUlwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09YQWg3VUJFS2VtOGJjR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiLzZ1T1B3MENySlQ2aFNjS1dpWUQzczZsc2UyM0JMT2h1eFJWKzlwaThUMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJzSHIwK05SRDNCa1N4dmhqeXdZVEpkOGhSeml6Q0lPcHJmTVh4d2x0MU9KbVRvNzRFZTNHWFlJYzFxY2g4eXNRRjJNVHVWMHdxY25BNU5uWDNvdk1BUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJSd0xQbmphWGRHM2oyb05ZM0R2c2ZqZFhRUUsxMjduUmp2RGoxWEFwU0E1WmJ6MzBnOEttb2VuZENYOFRJVlNGWnNOZ1gvZXpsdi9vVWFZbk5yRk5nUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMTI3MjQ3OTM1NzU6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA2MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI3ODEyMzk1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBR0F6XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHQXouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJoVFVQY1kvd0hJZmNUak1kRlB1bm1RN3BHc3ZFNHhwOFc0dDhZanBvbHlBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM3OTcwNzQ5MyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzI3ODA4ODA0MTA3XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
